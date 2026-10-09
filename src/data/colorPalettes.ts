export interface ColorPalette {
  id: string;
  nameAr: string;
  nameEn: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  category: 'aubergine-core' | 'velvet-plum' | 'smoked-lavender' | 'dusk-amethyst' | 'heritage-modern';
}

export const CATEGORIES_MAP = {
  all: 'جميع المجموعات (50)',
  'aubergine-core': 'الباذنجاني الملكي (Aubergine Core)',
  'velvet-plum': 'البرغندي والبرقوق المخملي (Velvet Plum)',
  'smoked-lavender': 'الخزامى الدخاني والبلاتين (Smoked Lavender)',
  'dusk-amethyst': 'شفق الأميثيست والكوارتز (Dusk Amethyst)',
  'heritage-modern': 'الهوية البابلية والرافدينية (Heritage Modern)',
} as const;

export const DANANIR_PALETTES: ColorPalette[] = [
  {
    id: 'aubergine-silver-original',
    nameAr: '01. الباذنجاني والفضي الدافئ (الأصلي)',
    nameEn: 'Imperial Aubergine & Warm Silver',
    primary: '#3E1F47',
    secondary: '#C9C5CE',
    accent: '#9C7BB5',
    background: '#F6F3F7',
    category: 'aubergine-core',
  },
  {
    id: 'royal-mulberry',
    nameAr: '02. توت العليق الملكي',
    nameEn: 'Royal Mulberry Frost',
    primary: '#49193E',
    secondary: '#D2CBD6',
    accent: '#B06D9E',
    background: '#F8F4F7',
    category: 'aubergine-core',
  },
  {
    id: 'velvet-burgundy',
    nameAr: '03. البرغندي المخملي والبلاتين',
    nameEn: 'Velvet Burgundy & Platinum',
    primary: '#43172E',
    secondary: '#CEC3CB',
    accent: '#A55D85',
    background: '#F9F4F6',
    category: 'velvet-plum',
  },
  {
    id: 'smoked-lavender',
    nameAr: '04. الخزامى الدخاني والكروم',
    nameEn: 'Smoked Lavender & Chrome',
    primary: '#352445',
    secondary: '#CAC5D4',
    accent: '#8E7DA6',
    background: '#F5F3F8',
    category: 'smoked-lavender',
  },
  {
    id: 'amethyst-twilight',
    nameAr: '05. شفق الأميثيست الأرجواني',
    nameEn: 'Amethyst Twilight Glass',
    primary: '#381C4A',
    secondary: '#D4C9DD',
    accent: '#9A6BB8',
    background: '#F7F4F9',
    category: 'dusk-amethyst',
  },
  {
    id: 'plum-pearl',
    nameAr: '06. البرقوق ولؤلؤ الخليج',
    nameEn: 'Plum & Gulf Pearl',
    primary: '#3B183B',
    secondary: '#CFC6D1',
    accent: '#9E649E',
    background: '#F8F5F8',
    category: 'velvet-plum',
  },
  {
    id: 'ethereal-iris',
    nameAr: '07. السوسن الأثيري النقي',
    nameEn: 'Ethereal Iris Liquid',
    primary: '#341E4B',
    secondary: '#C8BFD6',
    accent: '#8C67B6',
    background: '#F6F3F9',
    category: 'smoked-lavender',
  },
  {
    id: 'smoked-ruby-glass',
    nameAr: '08. الياقوت الدخاني والصلب الفضي',
    nameEn: 'Smoked Ruby & Steel Silver',
    primary: '#461633',
    secondary: '#D0C2CB',
    accent: '#AA5983',
    background: '#FAF4F6',
    category: 'velvet-plum',
  },
  {
    id: 'violet-agate',
    nameAr: '09. العقيق البنفسجي المعتم',
    nameEn: 'Violet Agate Quartz',
    primary: '#3A1B43',
    secondary: '#CFC5D3',
    accent: '#9560A3',
    background: '#F7F4F8',
    category: 'dusk-amethyst',
  },
  {
    id: 'neo-andalusian-plum',
    nameAr: '10. الأندلسي المعاصر',
    nameEn: 'Neo-Andalusian Plum Glass',
    primary: '#3F1C40',
    secondary: '#CEC4CF',
    accent: '#A064A3',
    background: '#F8F4F8',
    category: 'heritage-modern',
  },
  {
    id: 'baghdad-nebula',
    nameAr: '11. سديم بغداد الرقمي',
    nameEn: 'Baghdad Digital Nebula',
    primary: '#321D44',
    secondary: '#C9C2D2',
    accent: '#835EA5',
    background: '#F5F3F7',
    category: 'heritage-modern',
  },
  {
    id: 'mesopotamian-dusk',
    nameAr: '12. شفق الرافدين الدافئ',
    nameEn: 'Mesopotamian Dusk',
    primary: '#3D1C44',
    secondary: '#D1C6D4',
    accent: '#A166A8',
    background: '#F8F4F9',
    category: 'heritage-modern',
  },
  {
    id: 'basra-silk',
    nameAr: '13. حرير البصرة البنفسجي',
    nameEn: 'Basra Violet Silk',
    primary: '#361D42',
    secondary: '#CCC3D1',
    accent: '#9163A0',
    background: '#F7F4F8',
    category: 'heritage-modern',
  },
  {
    id: 'midnight-cashmere',
    nameAr: '14. كشمير الليل والفضي الضبابي',
    nameEn: 'Midnight Cashmere & Mist',
    primary: '#2E1837',
    secondary: '#C6BFCD',
    accent: '#835794',
    background: '#F5F2F7',
    category: 'aubergine-core',
  },
  {
    id: 'vintage-vine',
    nameAr: '15. الكرمة المعتقة والفضة الخام',
    nameEn: 'Vintage Vine & Raw Silver',
    primary: '#401A3D',
    secondary: '#CDC3CE',
    accent: '#9D5E99',
    background: '#F8F4F8',
    category: 'velvet-plum',
  },
  {
    id: 'platinum-lilac',
    nameAr: '16. البلاتين والليلك الصقيل',
    nameEn: 'Platinum & Polished Lilac',
    primary: '#372047',
    secondary: '#CDC6D6',
    accent: '#8F6CAB',
    background: '#F6F3F8',
    category: 'smoked-lavender',
  },
  {
    id: 'frosted-magenta-dark',
    nameAr: '17. الماغنيتا الزجاجي الدخاني',
    nameEn: 'Frosted Dark Magenta',
    primary: '#481944',
    secondary: '#D4C6D1',
    accent: '#AC5A9E',
    background: '#F9F4F8',
    category: 'dusk-amethyst',
  },
  {
    id: 'lilac-porcelain',
    nameAr: '18. البورسلان الليلكي النقي',
    nameEn: 'Lilac Porcelain Glass',
    primary: '#39224A',
    secondary: '#CFC8DA',
    accent: '#926CB2',
    background: '#F7F5FA',
    category: 'smoked-lavender',
  },
  {
    id: 'ancient-plum-glaze',
    nameAr: '19. خزف البرقوق البابلي العتيق',
    nameEn: 'Babylonian Plum Glaze',
    primary: '#3C1B3E',
    secondary: '#CDC3CF',
    accent: '#9B5B9E',
    background: '#F8F4F8',
    category: 'heritage-modern',
  },
  {
    id: 'smoky-rose-quartz',
    nameAr: '20. الكوارتز الوردي الدخاني',
    nameEn: 'Smoky Rose Quartz & Plum',
    primary: '#441B37',
    secondary: '#D3C6CF',
    accent: '#A8648F',
    background: '#F9F4F7',
    category: 'velvet-plum',
  },
  {
    id: 'imperial-orchid',
    nameAr: '21. الأوركيد الإمبراطوري',
    nameEn: 'Imperial Orchid Glass',
    primary: '#3B1A48',
    secondary: '#D0C4D7',
    accent: '#9A5EB5',
    background: '#F7F3F9',
    category: 'dusk-amethyst',
  },
  {
    id: 'nocturne-garnet',
    nameAr: '22. عقيق الليل الدخاني',
    nameEn: 'Nocturne Garnet & Silver',
    primary: '#41152D',
    secondary: '#CEC1C9',
    accent: '#A1537A',
    background: '#F9F3F6',
    category: 'velvet-plum',
  },
  {
    id: 'violet-mist',
    nameAr: '23. الضباب البنفسجي الأثيري',
    nameEn: 'Violet Mist Translucent',
    primary: '#331F41',
    secondary: '#CCC4D4',
    accent: '#8B65A3',
    background: '#F6F4F8',
    category: 'smoked-lavender',
  },
  {
    id: 'date-bloom-purple',
    nameAr: '24. طلع النخيل البنفسجي',
    nameEn: 'Date Bloom Purple Glass',
    primary: '#3A1E43',
    secondary: '#CDC3D2',
    accent: '#9762A4',
    background: '#F7F4F8',
    category: 'heritage-modern',
  },
  {
    id: 'digital-dawn-purple',
    nameAr: '25. الفجر الرقمي لمنصة دنانير',
    nameEn: 'Digital Dawn Liquid Glass',
    primary: '#3F1D46',
    secondary: '#CCC3D0',
    accent: '#9F68A8',
    background: '#F8F4F8',
    category: 'aubergine-core',
  },
  {
    id: 'boysenberry-onyx',
    nameAr: '26. عقيق يماني وتوت ملكي',
    nameEn: 'Imperial Boysenberry & Onyx',
    primary: '#4E1A3D',
    secondary: '#D5CBD3',
    accent: '#BA5D99',
    background: '#FAF5F8',
    category: 'velvet-plum',
  },
  {
    id: 'frosted-grape-silver',
    nameAr: '27. عنب ثلجي وفضة عاكسة',
    nameEn: 'Frosted Grape & Mirror Silver',
    primary: '#35183F',
    secondary: '#C6BCC8',
    accent: '#A26EB4',
    background: '#F7F4F9',
    category: 'aubergine-core',
  },
  {
    id: 'cranberry-velvet-crimson',
    nameAr: '28. توت العليق الزجاجي والقرمزي المخملي',
    nameEn: 'Cranberry Wine & Velvet Crimson',
    primary: '#521532',
    secondary: '#D8CAD1',
    accent: '#C4577F',
    background: '#FBF5F7',
    category: 'velvet-plum',
  },
  {
    id: 'andalusian-violet-damascus',
    nameAr: '29. بنفسج أندلسي ورماد دمشقي',
    nameEn: 'Andalusian Violet & Damascus Ash',
    primary: '#2B1644',
    secondary: '#BEB8CA',
    accent: '#7D54A8',
    background: '#F5F3F8',
    category: 'dusk-amethyst',
  },
  {
    id: 'obsidian-plum-mist',
    nameAr: '30. سبج أرجواني عميق وضباب الخزامى',
    nameEn: 'Obsidian Plum & Lavender Mist',
    primary: '#24102A',
    secondary: '#D1CBD5',
    accent: '#9B5BB0',
    background: '#F8F5F9',
    category: 'aubergine-core',
  },
  {
    id: 'wild-cloudberry-titanium',
    nameAr: '31. توت بري سحابي وتيتانيوم دافئ',
    nameEn: 'Wild Cloudberry & Slate Titanium',
    primary: '#46193E',
    secondary: '#C9C1CC',
    accent: '#B5689E',
    background: '#F8F4F7',
    category: 'velvet-plum',
  },
  {
    id: 'nejd-lavender-moonlit',
    nameAr: '32. خزامى نجدية وقمر فضي',
    nameEn: 'Nejd Lavender & Moonlit Silver',
    primary: '#3A1E4A',
    secondary: '#CCC4D3',
    accent: '#9167AE',
    background: '#F6F4F9',
    category: 'smoked-lavender',
  },
  {
    id: 'dark-pomegranate-smoked',
    nameAr: '33. رمان داكن وزجاج مدخن',
    nameEn: 'Dark Pomegranate & Smoked Glass',
    primary: '#4D1428',
    secondary: '#D7CBD0',
    accent: '#BD4F6F',
    background: '#FBF4F6',
    category: 'velvet-plum',
  },
  {
    id: 'imperial-amethyst-pearl',
    nameAr: '34. مها باذنجاني ولؤلؤ بارد',
    nameEn: 'Imperial Amethyst & Frost Pearl',
    primary: '#32163E',
    secondary: '#CDC6D2',
    accent: '#8E52A2',
    background: '#F7F4F8',
    category: 'dusk-amethyst',
  },
  {
    id: 'cashmere-purple-crystal',
    nameAr: '35. كشمير بنفسجي وبلور صافي',
    nameEn: 'Cashmere Purple & Crystal Clear',
    primary: '#3C2048',
    secondary: '#CFC6D4',
    accent: '#9E71AC',
    background: '#F6F3F7',
    category: 'smoked-lavender',
  },
  {
    id: 'neo-babylonian-purple',
    nameAr: '36. أرجوان بابل المعاصر',
    nameEn: 'Neo-Babylonian Royal Purple',
    primary: '#391747',
    secondary: '#D0C4D5',
    accent: '#A75FBC',
    background: '#F8F4F9',
    category: 'heritage-modern',
  },
  {
    id: 'tigris-twilight-violet',
    nameAr: '37. شفق دجلة الأرجواني',
    nameEn: 'Tigris Twilight Violet',
    primary: '#2D1745',
    secondary: '#C3BACB',
    accent: '#835CB0',
    background: '#F5F3F8',
    category: 'heritage-modern',
  },
  {
    id: 'syriac-agate-polished',
    nameAr: '38. عقيق سرياني مصقول',
    nameEn: 'Polished Syriac Agate',
    primary: '#441635',
    secondary: '#CEBFCA',
    accent: '#AB4F8E',
    background: '#F9F4F7',
    category: 'dusk-amethyst',
  },
  {
    id: 'metallic-lilac-silver',
    nameAr: '39. ليلك ميتاليك وفضة ناعمة',
    nameEn: 'Metallic Lilac & Soft Silver',
    primary: '#3F214D',
    secondary: '#D3CAD8',
    accent: '#A574BC',
    background: '#F7F4F9',
    category: 'smoked-lavender',
  },
  {
    id: 'aubergine-carbon-glass',
    nameAr: '40. كربون باذنجاني وزجاج عائم',
    nameEn: 'Aubergine Carbon & Floating Glass',
    primary: '#27122E',
    secondary: '#C8BFCF',
    accent: '#9454A6',
    background: '#F6F4F7',
    category: 'aubergine-core',
  },
  {
    id: 'damask-black-rose',
    nameAr: '41. الورد الدمشقي الليلي والعقيق',
    nameEn: 'Night Damask & Black Agate',
    primary: '#3B132B',
    secondary: '#D0C3C9',
    accent: '#A64F7C',
    background: '#F9F4F6',
    category: 'velvet-plum',
  },
  {
    id: 'babylonian-lapis-plum',
    nameAr: '42. نيلي بابل والبرقوق الملكي',
    nameEn: 'Babylonian Twilight & Deep Plum',
    primary: '#2A1B44',
    secondary: '#C8C0D4',
    accent: '#7E5CA8',
    background: '#F5F3F8',
    category: 'heritage-modern',
  },
  {
    id: 'foggy-eucalyptus-plum',
    nameAr: '43. ضباب شاطئ دجلة والباذنجاني البارد',
    nameEn: 'Tigris River Mist & Cold Aubergine',
    primary: '#372846',
    secondary: '#CDC8D6',
    accent: '#9382A8',
    background: '#F6F4F8',
    category: 'smoked-lavender',
  },
  {
    id: 'obsidian-silk-violet',
    nameAr: '44. حرير السنديان والسبج الأسود',
    nameEn: 'Obsidian Silk & Charcoal Violet',
    primary: '#2B1232',
    secondary: '#CBC0CE',
    accent: '#8E4B99',
    background: '#F7F4F7',
    category: 'aubergine-core',
  },
  {
    id: 'royal-iris-cashmere',
    nameAr: '45. سوسن كشميري وفضة ناصعة',
    nameEn: 'Royal Iris & Pure Cashmere',
    primary: '#411E52',
    secondary: '#D4CBD9',
    accent: '#A76BC4',
    background: '#F8F5FA',
    category: 'dusk-amethyst',
  },
  {
    id: 'espresso-plum-crema',
    nameAr: '46. إسبريسو البرقوق والكاكاو الداكن',
    nameEn: 'Espresso Plum & Dark Cacao',
    primary: '#3D1B28',
    secondary: '#CFC2C8',
    accent: '#9F5170',
    background: '#FAF5F7',
    category: 'velvet-plum',
  },
  {
    id: 'titanium-aurora-violet',
    nameAr: '47. تيتانيوم الشفق والبلاتينوم المصقول',
    nameEn: 'Titanium Aurora & Polished Platinum',
    primary: '#32263C',
    secondary: '#CBC4D2',
    accent: '#887399',
    background: '#F5F3F7',
    category: 'smoked-lavender',
  },
  {
    id: 'persian-mulberry-velvet',
    nameAr: '48. توت شامي مخملي ورماد اللافندر',
    nameEn: 'Levant Mulberry & Velvet Ash',
    primary: '#4A1B43',
    secondary: '#D5C8D4',
    accent: '#B360A8',
    background: '#F8F4F8',
    category: 'dusk-amethyst',
  },
  {
    id: 'sumerian-bronze-amethyst',
    nameAr: '49. برونز سومري وجمشت عتيق',
    nameEn: 'Sumerian Bronze & Antique Amethyst',
    primary: '#391D3E',
    secondary: '#CDC3CC',
    accent: '#955B9E',
    background: '#F7F4F7',
    category: 'heritage-modern',
  },
  {
    id: 'crystal-nebula-aubergine',
    nameAr: '50. سديم الكريستال والباذنجاني الأبدي',
    nameEn: 'Crystal Nebula & Eternal Aubergine',
    primary: '#2D1334',
    secondary: '#CFC7D5',
    accent: '#9E53B0',
    background: '#F7F4F8',
    category: 'aubergine-core',
  },
];

// Helper functions for dynamic CSS variable calculation
function hexToRgb(hex: string): [number, number, number] {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map((char) => char + char).join('');
  }
  const num = parseInt(c, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (val: number) => Math.max(0, Math.min(255, Math.round(val)));
  return (
    '#' +
    [clamp(r), clamp(g), clamp(b)]
      .map((x) => x.toString(16).padStart(2, '0'))
      .join('')
  );
}

function lightenHex(hex: string, percent: number): string {
  const [r, g, b] = hexToRgb(hex);
  return rgbToHex(
    r + (255 - r) * (percent / 100),
    g + (255 - g) * (percent / 100),
    b + (255 - b) * (percent / 100)
  );
}

function darkenHex(hex: string, percent: number): string {
  const [r, g, b] = hexToRgb(hex);
  return rgbToHex(
    r * (1 - percent / 100),
    g * (1 - percent / 100),
    b * (1 - percent / 100)
  );
}

/**
 * Applies the color palette dynamically across all CSS variables on :root
 */
export function applyDananirPalette(palette: ColorPalette) {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;

  // Primary Shades
  root.style.setProperty('--brand-primary', palette.primary);
  root.style.setProperty('--brand-dark', palette.primary);
  root.style.setProperty('--brand-dark-surface', darkenHex(palette.primary, 25));
  root.style.setProperty('--brand-dark-card', darkenHex(palette.primary, 15));
  root.style.setProperty('--brand-dark-border', lightenHex(palette.primary, 20));
  root.style.setProperty('--brand-dark-hover', lightenHex(palette.primary, 10));

  // Accent Shades & Tints
  root.style.setProperty('--brand-accent', palette.accent);
  root.style.setProperty('--brand-accent-500', palette.accent);
  root.style.setProperty('--brand-accent-50', lightenHex(palette.accent, 92));
  root.style.setProperty('--brand-accent-100', lightenHex(palette.accent, 85));
  root.style.setProperty('--brand-accent-200', lightenHex(palette.accent, 70));
  root.style.setProperty('--brand-accent-300', lightenHex(palette.accent, 50));
  root.style.setProperty('--brand-accent-400', lightenHex(palette.accent, 25));
  root.style.setProperty('--brand-accent-600', darkenHex(palette.accent, 15));
  root.style.setProperty('--brand-accent-700', darkenHex(palette.accent, 28));

  // Accent Gradient & Glow
  const lightAccent = lightenHex(palette.accent, 14);
  const darkAccent = darkenHex(palette.accent, 18);
  const accentGrad = `linear-gradient(135deg, ${lightAccent} 0%, ${palette.accent} 50%, ${darkAccent} 100%)`;
  root.style.setProperty('--brand-accent-gradient', accentGrad);
  root.style.setProperty('--brand-accent-glow', `0 4px 20px ${palette.accent}4D`);

  // Gold Aliases
  root.style.setProperty('--brand-gold-50', lightenHex(palette.accent, 92));
  root.style.setProperty('--brand-gold-100', lightenHex(palette.accent, 85));
  root.style.setProperty('--brand-gold-200', lightenHex(palette.accent, 70));
  root.style.setProperty('--brand-gold-300', lightenHex(palette.accent, 50));
  root.style.setProperty('--brand-gold-400', lightenHex(palette.accent, 25));
  root.style.setProperty('--brand-gold-500', palette.accent);
  root.style.setProperty('--brand-gold-600', darkenHex(palette.accent, 15));
  root.style.setProperty('--brand-gold-700', darkenHex(palette.accent, 28));
  root.style.setProperty('--brand-gold-gradient', accentGrad);
  root.style.setProperty('--brand-gold-glow', `0 4px 20px ${palette.accent}4D`);

  // Secondary Silver & Platinum
  root.style.setProperty('--brand-silver', palette.secondary);
  root.style.setProperty('--brand-silver-300', palette.secondary);
  root.style.setProperty('--brand-silver-100', lightenHex(palette.secondary, 50));
  root.style.setProperty('--brand-silver-200', lightenHex(palette.secondary, 25));
  root.style.setProperty('--brand-silver-400', darkenHex(palette.secondary, 15));
  root.style.setProperty('--border-silver', palette.secondary);

  // Background Canvas & Surfaces
  root.style.setProperty('--bg-body', palette.background);
  root.style.setProperty('--bg-subtle', darkenHex(palette.background, 3));
  root.style.setProperty('--bg-muted', darkenHex(palette.background, 7));

  // Text Contrast
  root.style.setProperty('--text-primary', darkenHex(palette.primary, 35));
  root.style.setProperty('--text-secondary', lightenHex(palette.primary, 22));
  root.style.setProperty('--text-muted', lightenHex(palette.primary, 38));

  // Focus
  root.style.setProperty('--border-focus', palette.accent);

  try {
    localStorage.setItem('dananir_selected_palette', palette.id);
  } catch (e) {
    // ignore in private window
  }
}
