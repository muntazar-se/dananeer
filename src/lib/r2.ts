import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';

const accountId = process.env.CLOUDFLARE_R2_ACCOUNT_ID || '';
const accessKeyId = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID || '';
const secretAccessKey = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY || '';
const bucketName = process.env.CLOUDFLARE_R2_BUCKET_NAME || 'dananir-assets';
const publicUrl = process.env.CLOUDFLARE_R2_PUBLIC_URL || '';

export const isR2Configured = Boolean(
  accountId && accessKeyId && secretAccessKey
);

export const r2Client: S3Client | null = isR2Configured
  ? new S3Client({
      region: 'auto',
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    })
  : null;

/**
 * Upload a file to Cloudflare R2 bucket (Free Tier: 10GB storage, 0 egress fees)
 */
export async function uploadToR2(
  key: string,
  body: Buffer | Uint8Array,
  contentType: string
): Promise<{ url: string; key: string } | null> {
  if (!r2Client) {
    console.warn('[Cloudflare R2] Credentials not configured. Operating in preview mode.');
    return {
      url: `/images/${key}`,
      key,
    };
  }

  try {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: body,
      ContentType: contentType,
    });

    await r2Client.send(command);

    const assetUrl = publicUrl
      ? `${publicUrl.replace(/\/$/, '')}/${key}`
      : `https://${bucketName}.${accountId}.r2.cloudflarestorage.com/${key}`;

    return {
      url: assetUrl,
      key,
    };
  } catch (error) {
    console.error('[Cloudflare R2] Upload error:', error);
    throw error;
  }
}
