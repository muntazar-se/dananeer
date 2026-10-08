import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured, MerchantLeadInput } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body: MerchantLeadInput = await request.json();

    const {
      store_name,
      instagram_handle,
      merchant_name,
      phone_number,
      governorate,
      category,
      notes,
    } = body;

    // Validation
    if (!store_name || !instagram_handle || !merchant_name || !phone_number || !governorate || !category) {
      return NextResponse.json(
        { error: 'يرجى ملء جميع الحقول المطلوبة' },
        { status: 400 }
      );
    }

    let recordId = `DN-${Date.now().toString().slice(-6)}`;
    let savedToDatabase = false;

    if (isSupabaseConfigured && supabase) {
      const { data, error } = await supabase
        .from('merchant_leads')
        .insert([
          {
            store_name: store_name.trim(),
            instagram_handle: instagram_handle.trim().replace(/^@/, ''),
            merchant_name: merchant_name.trim(),
            phone_number: phone_number.trim(),
            governorate: governorate.trim(),
            category: category.trim(),
            notes: notes ? notes.trim() : null,
            status: 'pending',
          },
        ])
        .select('id')
        .single();

      if (error) {
        console.error('Supabase insert error:', error);
      } else if (data) {
        recordId = data.id;
        savedToDatabase = true;
      }
    } else {
      console.log('Lead received (Demo / Env pending):', {
        store_name,
        instagram_handle,
        merchant_name,
        phone_number,
        governorate,
        category,
        received_at: new Date().toISOString(),
      });
      savedToDatabase = true;
    }

    return NextResponse.json({
      success: true,
      message: 'تم استلام طلبك بنجاح! سيتواصل معك فريق دنانير لتجهيز متجرك.',
      referenceNumber: recordId,
      savedToDatabase,
    });
  } catch (error) {
    console.error('API Error in /api/onboarding:', error);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء معالجة الطلب، يرجى المحاولة مرة أخرى.' },
      { status: 500 }
    );
  }
}
