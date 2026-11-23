/**
 * Jurain Green Bank — Core Interactive Script & Astramonks Agency Engine
 * Features: Bilingual Engine (BN/EN), Interactive Tabs, Bento Lightbox, 
 * Eco-Impact Calculator, Sapling Request Generator, Volunteer Handler,
 * Astramonks Micro-Interactions, and Particle Dynamics.
 */

// Global State
const appState = {
  lang: localStorage.getItem('jgb_lang') || 'bn',
  galleryFilter: 'all',
  benefitRole: 'residents',
  organicId: 'compost',
  volunteers: JSON.parse(localStorage.getItem('jgb_volunteers') || '[]'),
  requests: JSON.parse(localStorage.getItem('jgb_requests') || '[]')
};

// Complete Bilingual Dictionary
const translations = {
  bn: {
    pageTitle: 'জুরাইন গ্রিন ব্যাংক — টেকসই কৃষি, নিরাপদ খাদ্য, সবুজ সমৃদ্ধি',
    langToggle: 'English',
    brandName: 'জুরাইন গ্রিন ব্যাংক',
    brandSub: 'জুরাইন সবুজ যোদ্ধার একটি উদ্যোগ',
    agencyCreditShort: 'ডিজিটাল পার্টনার: অ্যাস্ট্রামঙ্কস',
    agencyCreditFull: 'স্বেচ্ছায় নকশা ও নির্মাণ করেছে অ্যাস্ট্রামঙ্কস (Astramonks)',
    navHome: 'হোম',
    navAbout: 'আমাদের কথা',
    navPrograms: 'কর্মসূচি',
    navGallery: 'মাঠের অ্যালবাম',
    navRequest: 'চারা ও সার সংগ্রহ',
    navVolunteer: 'স্বেচ্ছাসেবক',
    navContact: 'যোগাযোগ',
    ctaVolunteer: 'স্বেচ্ছাসেবক হোন',
    ctaRequest: 'চারা সংগ্রহ করুন',
    ctaExplore: 'আমাদের কার্যক্রম দেখুন',
    ctaLearnMore: 'বিস্তারিত জানুন',
    
    // Hero
    heroBadge: 'পূর্ব জুরাইন, ঢাকা · তৃণমূল পরিবেশ আন্দোলন',
    heroAgencyBadge: 'অ্যাস্ট্রামঙ্কস স্বেচ্ছাসেবী ডিজিটাল পার্টনারশিপ',
    heroTitle: 'টেকসই কৃষি, নিরাপদ খাদ্য, সবুজ সমৃদ্ধি',
    heroDesc: 'জুরাইন সবুজ যোদ্ধার উদ্যোগে আমরা রাসায়নিকমুক্ত কৃষি, নগর সবুজায়ন ও জীবন্ত মাটির পক্ষে কাজ করি—ইউরিয়া ও বিষাক্ত কীটনাশকের বদলে জৈব কম্পোস্ট ও বায়োচার ছড়িয়ে দিচ্ছি।',
    heroStat1Label: 'কমিউনিটি অনুসারী',
    heroStat2Label: 'চারা প্রস্তুত ও বিতরণ',
    heroStat3Label: 'ছাদবাগান ও নগর প্রকল্প',
    heroStat4Label: 'সন্ধ্যার চারা রোপণ ক্যাম্প',
    heroLoc: 'নূরানী মসজিদ, পূর্ব জুরাইন, ঢাকা',
    heroCard1Tag: 'পুনর্ব্যবহৃত কাপ নার্সারি',
    heroCard1Title: 'নগর চারা ও কাটিং রোপণ',
    heroCard2Title: 'সবুজ সঞ্চয়ে, সমৃদ্ধ ভবিষ্যৎ',
    heroCard2Desc: 'সংরক্ষিত প্রতিটি বীজ ও রাসায়নিকমুক্ত প্রতিটি চারা ঢাকার মাটি, বাতাস ও নিরাপদ খাদ্য ফিরিয়ে আনে।',
    
    // Urgent Crisis / Why Jurain
    whyTitleDark: 'কেন জুরাইনে',
    whyTitleMuted: 'গ্রিন ব্যাংকের প্রয়োজন?',
    whyDesc: 'ঢাকা শহরের অন্যতম ঘনবসতিপূর্ণ ও শিল্প-কারখানা বেষ্টিত এলাকা পূর্ব জুরাইন। এখানে কংক্রিটের উত্তাপ, প্লাস্টিক বর্জ্য ও অনিরাপদ রাসায়নিক খাবারের প্রকোপ সবচেয়ে বেশি। এই মাটিকে বাঁচাতেই আমাদের লড়াই।',
    whyPoint1Title: 'নগর উত্তাপ ও বায়ু দূষণ রোধ',
    whyPoint1Desc: 'শিল্পাঞ্চলের কারণে জুরাইনের তাপমাত্রা গড় ঢাকার চেয়ে বেশি। প্রতিটি ছাদ ও গলিতে সবুজ চারা রোপণ তাপমাত্রা কমাতে সাহায্য করে।',
    whyPoint2Title: 'একক-ব্যবহার্য প্লাস্টিক বর্জ্য পুনর্ব্যবহার',
    whyPoint2Desc: 'চায়ের দোকানে ফেলে দেওয়া লাখ লাখ প্লাস্টিক কাপ নর্দমা আটকে জলাবদ্ধতা তৈরি করে। আমরা সেই কাপ সংগ্রহ করে জীবন্ত চারা তৈরিতে ব্যবহার করি।',
    whyPoint3Title: 'রাসায়নিক বিষমুক্ত নিরাপদ খাদ্য',
    whyPoint3Desc: 'অতিরিক্ত ইউরিয়া ও কীটনাশক মাটির অণুজীব ধ্বংস করে। জৈব কম্পোস্ট ও বায়োচার ফিরিয়ে এনে কৃষকদের নিরাপদ ফসল চাষে উদ্বুদ্ধ করছি।',
    
    // 5 Pillars
    pillarsEyebrow: 'আমাদের চিরন্তন লক্ষ্য · ৫টি মূল স্তম্ভ',
    pillarsSub: 'জুরাইন সবুজ যোদ্ধার নেতৃত্বে',
    
    // Comparison: Chemical vs Organic
    compEyebrow: 'মাটি ও স্বাস্থ্যের সুরক্ষা',
    compTitleDark: 'রাসায়নিক ইউরিয়া ও কীটনাশককে না বলুন,',
    compTitleMuted: 'জীবন্ত মাটির ৪টি প্রাকৃতিক বিকল্প বেছে নিন',
    compDesc: 'কৃত্রিম ইউরিয়া (৪৬% নাইট্রোজেন) ও রাসায়নিক বিষ মাটিকে অ্যাসিডিক করে এবং মাটির প্রাকৃতিক কেঁচো ও উপকারী অণুজীব মেরে ফেলে। আমাদের প্রাকৃতিক সমাধান দেখুন:',
    
    // Eco-Calculator
    calcEyebrow: 'সবুজ পদক্ষেপ পরিমাপক',
    calcTitleDark: 'আপনার পরিবারের',
    calcTitleMuted: 'সবুজ প্রভাব হিসাব করুন',
    calcDesc: 'আপনার পরিবারের সদস্য সংখ্যা নির্বাচন করুন এবং দেখুন প্রতিদিনের রান্নার বর্জ্য দিয়ে আপনি কতটা খাঁটি জৈব সার তৈরি ও কতটি চারা বড় করতে পারেন।',
    calcSliderLabel: 'পরিবারের সদস্য সংখ্যা:',
    calcResultWaste: 'মাসিক অপসারিত জৈব বর্জ্য',
    calcResultCompost: 'উত্পাদিত খাঁটি কম্পোস্ট সার',
    calcResultPlants: 'চারার পর্যাপ্ত পুষ্টি জোগান',
    calcResultCo2: 'কার্বন নির্গমন হ্রাস',
    calcUnitKg: 'কেজি',
    calcUnitPlants: 'টি চারা',
    
    // Bento Gallery
    galleryTitleDark: 'বাস্তব মাঠের কাজে,',
    galleryTitleMuted: 'জুরাইন জুড়ে প্রকৃতির প্রতি ভালোবাসা',
    filterAll: 'সব কার্যক্রম',
    filterSaplings: 'চারা বিতরণ ও রোপণ',
    filterCommunity: 'স্বেচ্ছাসেবকদের কাজ',
    filterSeeds: 'বীজ ও মাটি',
    
    // Roles
    benefitEyebrow: 'কমিউনিটি নির্দেশিকা',
    benefitTitleDark: 'কীভাবে উপকৃত হবেন',
    benefitTitleMuted: 'জুরাইন গ্রিন ব্যাংক থেকে',
    roleResidents: 'নগরবাসী ও ছাদবাগানি',
    roleFarmers: 'কৃষক ও চাষি',
    roleYouth: 'তরুণ ও শিক্ষার্থী',
    
    // FAQ
    faqEyebrow: 'সাধারণ জিজ্ঞাসা',
    faqTitleDark: 'সচরাচর জানতে চাওয়া',
    faqTitleMuted: 'প্রশ্নোত্তর',
    
    // Astramonks Solidarity Section
    agencySecTitle: 'একটি স্বেচ্ছাসেবী প্রযুক্তি ও নকশা উদ্যোগ',
    agencySecDesc: 'আমাদের ডিজিটাল এজেন্সি Astramonks (অ্যাস্ট্রামঙ্কস) পূর্ব জুরাইনের তৃণমূল পরিবেশ যোদ্ধা এবং গ্রিন ব্যাংকের জন্য এই প্ল্যাটফর্মটি সম্পূর্ণ স্বেচ্ছাশ্রমে তৈরি করেছে। তৃণমূল আন্দোলনকে বিশ্বমানের ডিজিটাল রূপ দেওয়াই আমাদের সামাজিক অঙ্গীকার।',
    agencyCtaBtn: 'অ্যাস্ট্রামঙ্কস সম্পর্কে জানুন',
    
    // Common Form / Contact labels
    fieldName: 'পূর্ণ নাম',
    fieldPhone: 'ফোন নম্বর',
    fieldEmail: 'ইমেইল (ঐচ্ছিক)',
    fieldArea: 'এলাকা / ঠিকানা',
    fieldInterest: 'যেভাবে যুক্ত হতে চান',
    fieldPlantType: 'চারার ধরন বেছে নিন',
    fieldQuantity: 'পরিমাণ (সংখ্যা)',
    fieldNotes: 'মন্তব্য বা বিশেষ চাহিদা',
    formSubmit: 'আবেদন জমা দিন',
    btnCopy: 'কপি',
    copiedToast: 'ক্লিপবোর্ডে কপি হয়েছে!',
    
    // Footer
    footerTagline: 'টেকসই কৃষি, নিরাপদ খাদ্য ও সবুজ সমৃদ্ধির লক্ষ্যে পূর্ব জুরাইনের তৃণমূল পরিবেশ পরিবার।',
    footerQuickLinks: 'দ্রুত লিংক',
    footerPrograms: 'কর্মসূচি',
    footerLegal: '© ২০২৬ জুরাইন গ্রিন ব্যাংক · জুরাইন সবুজ যোদ্ধা কর্তৃক পরিচালিত।',
    footerAgencyCredit: 'স্বেচ্ছায় কারিগরি ও নান্দনিক সহায়তা প্রদান করেছে'
  },
  
  en: {
    pageTitle: 'Jurain Green Bank — Sustainable Agriculture, Safe Food, Green Prosperity',
    langToggle: 'বাংলা',
    brandName: 'Jurain Green Bank',
    brandSub: 'An Initiative by Jurain Sabuj Joddha',
    agencyCreditShort: 'Digital Partner: Astramonks',
    agencyCreditFull: 'Voluntarily designed & engineered by Astramonks',
    navHome: 'Home',
    navAbout: 'About Us',
    navPrograms: 'Programs',
    navGallery: 'Field Gallery',
    navRequest: 'Request Plants & Compost',
    navVolunteer: 'Volunteer',
    navContact: 'Contact',
    ctaVolunteer: 'Join as Volunteer',
    ctaRequest: 'Get Free Saplings',
    ctaExplore: 'Explore Our Work',
    ctaLearnMore: 'Learn More',
    
    // Hero
    heroBadge: 'East Jurain, Dhaka · Grassroots Nature Movement',
    heroAgencyBadge: 'Astramonks Voluntary Digital Partnership',
    heroTitle: 'Sustainable Agriculture, Safe Food, Green Prosperity',
    heroDesc: 'Spearheaded by Jurain Sabuj Joddha, we champion chemical-free agriculture, urban re-greening, and living soil—replacing synthetic urea and harsh pesticides with organic compost and biochar.',
    heroStat1Label: 'Community Followers',
    heroStat2Label: 'Saplings Distributed',
    heroStat3Label: 'Rooftops Greened',
    heroStat4Label: 'Evening Potting Drives',
    heroLoc: 'Nurani Masjid, East Jurain, Dhaka',
    heroCard1Tag: 'Reused Cup Nursery',
    heroCard1Title: 'Urban Saplings & Cuttings',
    heroCard2Title: 'In Green Savings, A Prosperous Future',
    heroCard2Desc: 'Every seed safeguarded and chemical-free sapling planted breathes life back into Dhaka\'s soil, atmosphere, and community food sovereignty.',
    
    // Urgent Crisis / Why Jurain
    whyTitleDark: 'Why Jurain Needs a',
    whyTitleMuted: 'Green Bank Urgently',
    whyDesc: 'East Jurain is one of Dhaka\'s densest industrial and residential hubs, heavily impacted by concrete heat, clogged plastic drains, and chemically adulterated food. We formed this bank to protect our living soil and community health.',
    whyPoint1Title: 'Combatting Urban Heat & Particulate Smog',
    whyPoint1Desc: 'Heavy traffic and dense brick buildings elevate Jurain temperatures. Every green balcony and rooftop actively cools neighborhood alleys.',
    whyPoint2Title: 'Repurposing Single-Use Tea Plastic',
    whyPoint2Desc: 'Discarded plastic tea cups clog storm drains and pollute canals. We intercept thousands of cups and repurpose them as thriving micro-nurseries.',
    whyPoint3Title: 'Protecting Soil from Synthetic Toxicity',
    whyPoint3Desc: 'Heavy synthetic urea and toxic sprays sterilize soil microbes. We teach and supply biochar and organic compost to restore living earth.',
    
    // 5 Pillars
    pillarsEyebrow: 'Our Eternal Goals · Five Core Pillars',
    pillarsSub: 'Guided by Jurain Sabuj Joddha',
    
    // Comparison: Chemical vs Organic
    compEyebrow: 'Soil Health & Safe Food',
    compTitleDark: 'Say No to Chemical Urea & Toxic Sprays,',
    compTitleMuted: 'Embrace 4 Living Soil Alternatives',
    compDesc: 'Synthetic Urea (46% Nitrogen) acidifies soil, burns earthworms, and leaches toxic nitrates into local drinking water. Discover our natural alternatives:',
    
    // Eco-Calculator
    calcEyebrow: 'Actionable Green Impact',
    calcTitleDark: 'Calculate Your Household',
    calcTitleMuted: 'Green Dividend',
    calcDesc: 'Select your household size to see how much organic waste you can divert from landfills and convert into nutrient-rich compost each month.',
    calcSliderLabel: 'Household Family Members:',
    calcResultWaste: 'Monthly Organic Waste Diverted',
    calcResultCompost: 'Pure Organic Compost Produced',
    calcResultPlants: 'Potted Plants Nourished',
    calcResultCo2: 'Carbon Emissions Saved',
    calcUnitKg: 'kg',
    calcUnitPlants: 'plants',
    
    // Bento Gallery
    galleryTitleDark: 'Rooted in Real Action,',
    galleryTitleMuted: 'Glorifying Love for Nature Across Jurain',
    filterAll: 'All Drives',
    filterSaplings: 'Sapling Drives',
    filterCommunity: 'Volunteer Action',
    filterSeeds: 'Seed & Soil',
    
    // Roles
    benefitEyebrow: 'Community Guide',
    benefitTitleDark: 'How to Benefit',
    benefitTitleMuted: 'from Jurain Green Bank',
    roleResidents: 'Urban Residents',
    roleFarmers: 'Farmers & Growers',
    roleYouth: 'Youth & Students',
    
    // FAQ
    faqEyebrow: 'Common Queries',
    faqTitleDark: 'Frequently Asked',
    faqTitleMuted: 'Questions',
    
    // Astramonks Solidarity Section
    agencySecTitle: 'A Voluntary Pro-Bono Innovation Initiative',
    agencySecDesc: 'Our digital studio Astramonks proudly developed and deployed this platform pro-bono for Jurain Green Bank. We believe grassroots environmental pioneers deserve world-class digital craftsmanship and aesthetic excellence.',
    agencyCtaBtn: 'Explore Astramonks Agency',
    
    // Common Form / Contact labels
    fieldName: 'Full Name',
    fieldPhone: 'Phone Number',
    fieldEmail: 'Email (Optional)',
    fieldArea: 'Neighborhood / Area',
    fieldInterest: 'Preferred Involvement',
    fieldPlantType: 'Select Sapling / Organic Input',
    fieldQuantity: 'Quantity',
    fieldNotes: 'Notes or Rooftop Details',
    formSubmit: 'Submit Application',
    btnCopy: 'Copy',
    copiedToast: 'Copied to clipboard!',
    
    // Footer
    footerTagline: 'A grassroots environmental family in East Jurain striving for sustainable agriculture, safe food, and living soil.',
    footerQuickLinks: 'Quick Links',
    footerPrograms: 'Initiatives',
    footerLegal: '© 2026 Jurain Green Bank · Powered by Jurain Sabuj Joddha.',
    footerAgencyCredit: 'Voluntarily crafted with passion by'
  }
};

// 5 Core Pillars Data
const pillarsData = [
  {
    icon: 'sprout',
    bn: { title: 'টেকসই কৃষি', desc: 'রাসায়নিক সার ও কীটনাশক পরিহার করে প্রাকৃতিক ও জৈব পদ্ধতিতে ফসল উৎপাদন।' },
    en: { title: 'Sustainable Agriculture', desc: 'Growing food through organic ecological methods without chemical toxicity.' }
  },
  {
    icon: 'apple',
    bn: { title: 'নিরাপদ খাদ্য', desc: 'পরিবারের প্রতিটি সদস্যের জন্য স্বাস্থ্যকর, বিষমুক্ত ও পুষ্টিকর খাদ্য নিশ্চিতকরণ।' },
    en: { title: 'Safe Food Sovereignty', desc: 'Guaranteeing wholesome, chemical-free nutrition for every family.' }
  },
  {
    icon: 'layers',
    bn: { title: 'মাটির উর্বরতা রক্ষা', desc: 'জৈব কম্পোস্ট ও বায়োচার ব্যবহারে মাটির অণুজীব বাঁচিয়ে রাখা ও মাটিকে জীবন্ত রাখা।' },
    en: { title: 'Living Soil Fertility', desc: 'Preserving microbial soil health and moisture using organic compost and biochar.' }
  },
  {
    icon: 'trees',
    bn: { title: 'পরিবেশ সংরক্ষণ', desc: 'প্লাস্টিক বর্জ্য পুনর্ব্যবহার ও ঢাকা শহরের তাপমাত্রা কমাতে নগর সবুজায়ন অভিযান।' },
    en: { title: 'Urban Climate Resilience', desc: 'Reclaiming plastic waste and cooling hot concrete streets through tree canopy.' }
  },
  {
    icon: 'coins',
    bn: { title: 'কৃষকের সমৃদ্ধি', desc: 'ব্যয়বহুল বিষাক্ত ইউরিয়া থেকে মুক্তি দিয়ে কম খরচে বেশি ফলন ও কৃষকের আত্মনির্ভরশীলতা।' },
    en: { title: 'Grower Self-Reliance', desc: 'Slashing input costs, eliminating synthetic debt, and empowering local growers.' }
  }
];

// Organic Solutions vs Chemical Inputs
const organicData = [
  {
    id: 'compost',
    bn: {
      name: 'জৈব কম্পোস্ট (Organic Compost)',
      tag: 'জীবন্ত মাটির ভিত্তি',
      desc: 'রান্নাঘরের পচনশীল বর্জ্য, ঝরা পাতা ও উদ্ভিদাবশেষ থেকে প্রস্তুত প্রাকৃতিক সার। এটি মাটির পানি ধারণ ক্ষমতা দ্বিগুণ করে এবং মাটির অম্লত্ব নিয়ন্ত্রণ করে।',
      benefit: 'কৃত্রিম ইউরিয়ার মতো মাটি পোড়ায় না; মাটিকে দীর্ঘমেয়াদে উর্বর ও কেঁচোসমৃদ্ধ রাখে।'
    },
    en: {
      name: 'Organic Compost',
      tag: 'Living Soil Foundation',
      desc: 'Decomposed organic matter, leaf mould, and kitchen scraps rich in beneficial microbes and active humus, doubling moisture retention.',
      benefit: 'Never acidifies soil like synthetic urea; creates thriving micro-ecosystems.'
    }
  },
  {
    id: 'cowdung',
    bn: {
      name: 'গোবর সার (Natural Cow Dung)',
      tag: 'ঐতিহ্যবাহী পুষ্টি ভাণ্ডার',
      desc: 'সুষম নাইট্রোজেন, ফসফরাস ও পটাশিয়ামসমৃদ্ধ শতবর্ষী ঐতিহ্যবাহী সার। এটি শিকড়ের গঠন শক্তিশালী করে ও গাছের রোগ প্রতিরোধ ক্ষমতা বাড়ায়।',
      benefit: 'মাটির টেক্সচার বা গঠন নিখুঁত রাখে এবং ভূগর্ভস্থ পানি দূষিত হওয়া থেকে রক্ষা করে।'
    },
    en: {
      name: 'Cow Dung Fertilizer',
      tag: 'Traditional Nutrient Base',
      desc: 'Balanced organic N-P-K and humic carbon supporting resilient root mass and natural disease resistance.',
      benefit: 'Maintains ideal crumb structure and eliminates synthetic nitrate run-off.'
    }
  },
  {
    id: 'biochar',
    bn: {
      name: 'বায়োচার (Biochar Sponge)',
      tag: 'কার্বনসমৃদ্ধ মাটি সংরক্ষক',
      desc: 'কৃষি বর্জ্যকে স্বল্প-অক্সিজেনে পুড়িয়ে তৈরি বিশেষ চারকোল। এটি মাটির ভেতর শত বছর স্থায়ী ছিদ্রময় স্পঞ্জের মতো কাজ করে পুষ্টি ও পানি ধরে রাখে।',
      benefit: 'মাটি থেকে পুষ্টি ধুয়ে যাওয়া ৮০% কমায় এবং বায়ুমণ্ডলের ক্ষতিকর কার্বন মাটিতে লক করে রাখে।'
    },
    en: {
      name: 'Biochar',
      tag: 'Carbon Sponge & Catalyst',
      desc: 'Pyrolyzed agricultural biomass acting as a permanent porous subterranean sponge for beneficial mycorrhizal fungi and water.',
      benefit: 'Cuts nutrient leaching by 80% while permanently sequestering atmospheric carbon.'
    }
  },
  {
    id: 'liquid',
    bn: {
      name: 'জৈব তরল সার (Liquid Organic Tonic)',
      tag: 'দ্রুত কার্যকরী প্রাকৃতিক টনিক',
      desc: 'নিমপাতা, খৈল ও ভেষজ উপাদান গাঁজন করে তৈরি পাতার পুষ্টি ও প্রাকৃতিক কীটবিতাড়ক। এটি কোনো ক্ষতিকর রাসায়নিক গ্যাস তৈরি করে না।',
      benefit: 'ছাদবাগান ও শাকসবজিতে দ্রুত উজ্জ্বল সবুজ বৃদ্ধি এনে দেয়, ফুল ও ফল ঝরা বন্ধ করে।'
    },
    en: {
      name: 'Organic Liquid Fertilizer',
      tag: 'Rapid Foliar Nutrition',
      desc: 'Fermented neem, oilcake, and botanicals delivering rapid bio-available micronutrients and natural pest repellency.',
      benefit: 'Safe for edible rooftop greens and eliminates hazardous organophosphate pesticides.'
    }
  }
];

// Benefit Guide By Role
const benefitData = {
  residents: {
    bn: [
      {
        icon: 'flower-2',
        title: 'ছাদবাগান ও বারান্দার জন্য চারা',
        desc: 'আমাদের নার্সারি থেকে মানিপ্ল্যান্ট, তুলসী, নিম, মরিচ ও পুদিনা চারা বিনামূল্যে বা নামমাত্র মূল্যে সংগ্রহ করতে পারেন।'
      },
      {
        icon: 'recycle',
        title: 'বাসার বর্জ্য থেকে সার তৈরি গাইড',
        desc: 'রান্নাঘরের খোসা ও চা-পাতা ফেলে না দিয়ে কীভাবে দুর্গন্ধহীন খাঁটি কম্পোস্ট বানাবেন তার সরাসরি প্রশিক্ষণ নিন।'
      },
      {
        icon: 'wind',
        title: 'মহল্লা ও গলিপথ সবুজায়ন',
        desc: 'আপনার বাড়ির সামনে বা মসজিদের দেয়াল ঘেঁষে গাছ লাগাতে চান? আমাদের সবুজ যোদ্ধারা চারা ও মাটি নিয়ে পাশে থাকবে।'
      }
    ],
    en: [
      {
        icon: 'flower-2',
        title: 'Balcony & Rooftop Saplings',
        desc: 'Adopt resilient pothos, holy basil, neem, chili, and mint cuttings nurtured in recycled tea cups.'
      },
      {
        icon: 'recycle',
        title: 'Home Waste Composting Guidance',
        desc: 'Learn odorless, space-efficient kitchen composting methods to nourish your urban plants for free.'
      },
      {
        icon: 'wind',
        title: 'Neighborhood Alleyway Greening',
        desc: 'Partner with our Green Warriors squad to plant shade trees along community streets and mosque verandas.'
      }
    ]
  },
  farmers: {
    bn: [
      {
        icon: 'ban',
        title: 'ইউরিয়া ও কীটনাশকের খরচ হ্রাস',
        desc: 'ব্যয়বহুল রাসায়নিক সারের বদলে গোবর সার ও কম্পোস্ট ব্যবহারে উৎপাদন খরচ ৪০% পর্যন্ত কমানো সম্ভব।'
      },
      {
        icon: 'flame',
        title: 'বায়োচার প্রয়োগ ও মাটির পুনরুজ্জীবন',
        desc: 'কঠিন হয়ে যাওয়া বন্ধ্যা মাটিতে বায়োচার প্রয়োগ করে উর্বরতা ও ফসল ধারক ক্ষমতা দীর্ঘস্থায়ী করুন।'
      },
      {
        icon: 'badge-check',
        title: 'নিরাপদ ফসলের প্রিমিয়াম বাজার',
        desc: 'রাসায়নিকমুক্ত সবজি চাষ করে সচেতন নগরবাসীর কাছে উচ্চ মূল্যে ও বিশ্বস্ততার সাথে ফসল বিক্রি করুন।'
      }
    ],
    en: [
      {
        icon: 'ban',
        title: 'Eliminate Urea & Pesticide Expenses',
        desc: 'Transitioning to bio-compost cuts input expenditures by up to 40% while rebuilding exhausted topsoil.'
      },
      {
        icon: 'flame',
        title: 'Biochar Application Field Trials',
        desc: 'Rehabilitate compacted, chemically damaged soil with high-surface-area biochar amendments.'
      },
      {
        icon: 'badge-check',
        title: 'Safe Produce Community Trust',
        desc: 'Command premium value and deep community loyalty with verified chemical-free harvest.'
      }
    ]
  },
  youth: {
    bn: [
      {
        icon: 'users',
        title: 'সন্ধ্যার চারা রোপণ অভিযানে অংশগ্রহণ',
        desc: 'প্রতি সন্ধ্যায় নূরানী মসজিদের উন্মুক্ত চত্বরে সহযোদ্ধাদের সাথে চারা রোপণ ও কাটিং তৈরির আনন্দ উপভোগ করুন।'
      },
      {
        icon: 'megaphone',
        title: 'সবুজ প্রচার ও কমিউনিটি সচেতনতা',
        desc: 'বিদ্যালয়, বাজার ও বন্ধুদের মাঝে প্লাস্টিক দূষণ ও রাসায়নিকমুক্ত জীবনের বার্তা ছড়িয়ে দিন।'
      },
      {
        icon: 'award',
        title: 'তৃণমূল পরিবেশ নেতৃত্ব ও সনদ',
        desc: 'সরাসরি জলবায়ু রক্ষার মাঠপর্যায়ে কাজ করে তৃণমূল নেতৃত্বের বাস্তব অভিজ্ঞতা ও স্বীকৃতি অর্জন করুন।'
      }
    ],
    en: [
      {
        icon: 'users',
        title: 'Evening Potting Sessions',
        desc: 'Join local youth at Nurani Masjid after sunset to pot cuttings, mix soil, and build community bonds.'
      },
      {
        icon: 'megaphone',
        title: 'Green Literacy & Campaigning',
        desc: 'Advocate for zero-waste living and organic eating in neighborhood schools and digital channels.'
      },
      {
        icon: 'award',
        title: 'Grassroots Leadership Experience',
        desc: 'Gain real-world community organizing experience and volunteer appreciation credentials.'
      }
    ]
  }
};

// Bento Grid Gallery Data
const galleryData = [
  {
    id: 'flyover',
    cat: 'saplings',
    span: 'md:col-span-5 md:row-span-2 min-h-[320px] sm:min-h-[380px] md:min-h-[460px]',
    img: 'assets/images/flyover-distribution.jpg',
    bn: {
      tag: 'জুরাইন ফ্লাইওভার · বিতরণ কেন্দ্র',
      title: 'জুরাইনে চারাগাছের বিশাল সমাবেশ',
      desc: 'এলাকাজুড়ে ছাদ ও নগর সবুজায়নের জন্য বস্তাভর্তি শত শত সবুজ চারা ফ্লাইওভারের নিচে বিতরণ কেন্দ্রে নিয়ে আসা হয়েছে।'
    },
    en: {
      tag: 'Jurain Flyover · Distribution Hub',
      title: 'Truckloads of Green Hope in Jurain',
      desc: 'Hundreds of healthy saplings arriving beneath the Jurain flyover ready for immediate neighborhood distribution.'
    }
  },
  {
    id: 'night-potting',
    cat: 'community',
    span: 'md:col-span-7 min-h-[240px]',
    img: 'assets/images/night-potting.jpg',
    bn: {
      tag: 'সন্ধ্যার কার্যক্রম · দলগত উদ্যোগ',
      title: 'রাতের আলোয় তরুণদের চারা রোপণ ক্যাম্প',
      desc: 'নূরানী মসজিদের পাশে স্থানীয় তরুণ ও স্বেচ্ছাসেবকেরা প্লাস্টিকের কাপে মাটি ও জৈব কম্পোস্ট ভরে চারা প্রস্তুত করছেন।'
    },
    en: {
      tag: 'Evening Session · Youth Squad',
      title: 'Night-Time Volunteer Potting Camp',
      desc: 'Local youth gathering under outdoor lamps at Nurani Masjid to pot hundreds of resilient green cuttings.'
    }
  },
  {
    id: 'cups',
    cat: 'saplings',
    span: 'md:col-span-3 min-h-[240px]',
    img: 'assets/images/reused-cups.jpg',
    bn: {
      tag: 'জিরো-ওয়েস্ট উদ্ভাবন',
      title: 'পুনর্ব্যবহৃত কাপে নতুন প্রাণের বিকাশ',
      desc: 'রাস্তা ও চায়ের দোকান থেকে ফেলে দেওয়া প্লাস্টিক কাপ ধুয়ে পরিষ্কার করে তাতে রোপণ করা হচ্ছে মানিপ্ল্যান্টের চারা।'
    },
    en: {
      tag: 'Zero-Waste Innovation',
      title: 'Single-Use Tea Cups Reborn as Greenery',
      desc: 'Intercepting discarded plastic cups and giving them second life as thriving urban cutting nurseries.'
    }
  },
  {
    id: 'seeds',
    cat: 'seeds',
    span: 'md:col-span-4 min-h-[240px]',
    img: 'assets/images/seed-circle.jpg',
    bn: {
      tag: 'বীজ বৈচিত্র্য ও স্বার্বভৌমত্ব',
      title: 'দেশি বীজ সংরক্ষণে সবার হাত',
      desc: 'আমাদের সবুজ যোদ্ধাদের হাতে নানা জাতের দেশীয় ডাল, তেলবীজ ও শস্যের বীজ—যা ভবিষ্যৎ প্রজন্মের খাদ্য নিরাপত্তার ভিত্তি।'
    },
    en: {
      tag: 'Seed Sovereignty Circle',
      title: 'Protecting Heirloom Seed Heritage',
      desc: 'Community hands uniting indigenous pulses, oilseeds, and grains to guarantee generational food resilience.'
    }
  }
];

// FAQs Data
const faqsData = [
  {
    bn: {
      q: 'জুরাইন গ্রিন ব্যাংক থেকে চারা কীভাবে বিনামূল্যে পাওয়া যাবে?',
      a: 'যে কেউ আমাদের ওয়েবসাইটে "চারা ও সার সংগ্রহ" পেজে গিয়ে আবেদন করতে পারেন অথবা সরাসরি পূর্ব জুরাইন নূরানী মসজিদের চারা বিতরণ কেন্দ্রে এসে সংগ্রহ করতে পারেন। আমরা প্রতিটি পরিবারকে বিনামূল্যে বা নামমাত্র খরচে চারা সরবরাহ করি।'
    },
    en: {
      q: 'How can residents receive free saplings from Jurain Green Bank?',
      a: 'Anyone can submit a request through our online portal or visit our Nurani Masjid center in East Jurain in person during evening distribution hours. We supply saplings free of charge or at nominal community cost.'
    }
  },
  {
    bn: {
      q: 'আমরা কেন প্লাস্টিক কাপে চারা তৈরি করি?',
      a: 'পূর্ব জুরাইনের চায়ের দোকানগুলোতে প্রতিদিন হাজার হাজার ওয়ান-টাইম প্লাস্টিক কাপ নর্দমায় ফেলা হয়, যার কারণে জলাবদ্ধতা তৈরি হয়। আমরা সেই প্লাস্টিক বর্জ্য সংগ্রহ ও জীবাণুমুক্ত করে নার্সারি পাত্র হিসেবে ব্যবহার করি, যা একাধারে পরিবেশ রক্ষা করে ও খরচ বাঁচায়।'
    },
    en: {
      q: 'Why do we propagate saplings inside reused tea cups?',
      a: 'Every day thousands of single-use plastic cups are dumped into Jurain drains, causing severe waterlogging. We intercept and sanitize this plastic waste to serve as potting cups, achieving zero waste while reducing nursery costs.'
    }
  },
  {
    bn: {
      q: 'রাসায়নিক ইউরিয়া সার কেন ক্ষতিকর এবং বিকল্প কী?',
      a: 'কৃত্রিম ইউরিয়াতে ৪৬% নাইট্রোজেন থাকে যা মাটির স্বাভাবিক অম্লতা নষ্ট করে এবং মাটিতে থাকা উপকারী কেঁচো ও ব্যাকটেরিয়া মেরে ফেলে। এর স্বাস্থ্যকর বিকল্প হলো ভালো পচানো গোবর সার, উদ্ভিজ্জ কম্পোস্ট ও বায়োচার যা মাটির উর্বরতা সারাজীবন ধরে রাখে।'
    },
    en: {
      q: 'Why is chemical Urea detrimental and what are natural alternatives?',
      a: 'Synthetic Urea contains 46% concentrated Nitrogen that acidifies soil, burns microbial flora, and leaches nitrates. Well-cured cow dung, aerobic plant compost, and biochar restore living soil without chemical toxicity.'
    }
  },
  {
    bn: {
      q: 'স্বেচ্ছাসেবক হিসেবে যোগ দিতে কী কোনো যোগ্যতা প্রয়োজন?',
      a: 'কোনো আনুষ্ঠানিক যোগ্যতার প্রয়োজন নেই! প্রকৃতির প্রতি ভালোবাসা এবং সপ্তাহে অন্তত ২-৩ ঘণ্টা সময় থাকলেই চলবে। ছাত্র, গৃহিণী, ব্যবসায়ী বা চাকরিজীবী—যে কেউ আমাদের সন্ধ্যাকালীন চারা রোপণ বা সচেতনতা দলে যুক্ত হতে পারেন।'
    },
    en: {
      q: 'Are there any prerequisites to joining as a volunteer?',
      a: 'None! All that is needed is a genuine love for nature and a few hours each week. Students, residents, and professionals are welcome to participate in evening potting drives and neighborhood greening campaigns.'
    }
  },
  {
    bn: {
      q: 'অ্যাস্ট্রামঙ্কস (Astramonks) কীভাবে এই উদ্যোগের সাথে যুক্ত?',
      a: 'Astramonks একটি আধুনিক ডিজিটাল ও কৃত্রিম বুদ্ধিমত্তা এজেন্সি। জুরাইন সবুজ যোদ্ধার এই মহৎ তৃণমূল আন্দোলনকে ডিজিটাল রূপ দিতে এবং সাধারণ মানুষের কাছে পৌঁছে দিতে অ্যাস্ট্রামঙ্কস সম্পূর্ণ অলাভজনক ও স্বেচ্ছাশ্রমে এই ওয়েবসাইট তৈরি করেছে।'
    },
    en: {
      q: 'How is Astramonks agency associated with this project?',
      a: 'Astramonks is an AI-native digital agency. As a pro-bono community partnership, Astramonks voluntarily designed, engineered, and deployed this digital platform to amplify the grassroots impact of Jurain Green Bank.'
    }
  }
];

// --- Core Helper Functions ---

function showToast(message) {
  const toast = document.getElementById('toast');
  const text = document.getElementById('toastText');
  if (!toast || !text) return;
  text.textContent = message;
  toast.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 2800);
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(translations[appState.lang].copiedToast);
    }).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast(translations[appState.lang].copiedToast);
  } catch (e) {
    console.error('Copy failed', e);
  }
  document.body.removeChild(ta);
}

// Render Pillars
function renderPillars() {
  const container = document.getElementById('pillarsGrid');
  if (!container) return;
  const l = appState.lang;
  container.innerHTML = pillarsData.map((p, idx) => `
    <div class="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-leaf-400/40 hover:-translate-y-1 transition-all duration-300">
      <div class="flex items-center justify-between mb-3">
        <span class="w-10 h-10 rounded-xl bg-leaf-500/20 text-leaf-400 flex items-center justify-center shrink-0 shadow-sm">
          <i data-lucide="${p.icon}" class="w-5 h-5"></i>
        </span>
        <span class="text-xs font-bold font-mono text-white/35">0${idx + 1}</span>
      </div>
      <h3 class="font-heading font-semibold text-base text-white">${p[l].title}</h3>
      <p class="text-xs sm:text-sm text-white/70 mt-1.5 leading-relaxed">${p[l].desc}</p>
    </div>
  `).join('');
}

// Render Bento Gallery
function renderGallery() {
  const container = document.getElementById('bentoGrid');
  if (!container) return;
  const l = appState.lang;
  const items = appState.galleryFilter === 'all'
    ? galleryData
    : galleryData.filter(g => g.cat === appState.galleryFilter);

  container.innerHTML = items.map(item => `
    <article data-id="${item.id}" class="gallery-card group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 animate-panel ${appState.galleryFilter === 'all' ? item.span : 'md:col-span-6 min-h-[260px] sm:min-h-[300px]'}">
      <img src="${item.img}" alt="${item[l].title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
      <div class="absolute inset-0 bento-overlay"></div>
      <div class="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white">
        <span class="inline-block px-3 py-1 rounded-full bg-leaf-500/90 backdrop-blur-md text-[11px] font-semibold mb-2.5 shadow-sm">${item[l].tag}</span>
        <h3 class="font-heading font-bold text-base sm:text-xl leading-snug group-hover:text-leaf-300 transition-colors">${item[l].title}</h3>
        <p class="text-xs sm:text-sm text-white/80 mt-1.5 line-clamp-2 leading-relaxed">${item[l].desc}</p>
      </div>
      <div class="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <i data-lucide="maximize-2" class="w-4 h-4"></i>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const found = galleryData.find(g => g.id === card.dataset.id);
      if (found) openLightbox(found);
    });
  });
}

// Render Organic Alternatives
function renderOrganic() {
  const tabs = document.getElementById('organicTabs');
  const card = document.getElementById('organicDetailCard');
  if (!tabs || !card) return;
  const l = appState.lang;

  tabs.innerHTML = organicData.map(item => {
    const active = item.id === appState.organicId;
    return `
      <button type="button" data-org="${item.id}" class="org-tab px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all active:scale-95 ${active ? 'bg-leaf-500 text-white shadow-md shadow-leaf-500/30' : 'bg-white/10 text-white/80 hover:bg-white/20'}">
        ${item[l].name}
      </button>
    `;
  }).join('');

  tabs.querySelectorAll('.org-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      appState.organicId = btn.dataset.org;
      renderOrganic();
      if (window.lucide) lucide.createIcons();
    });
  });

  const curr = organicData.find(o => o.id === appState.organicId)[l];
  card.innerHTML = `
    <div class="animate-panel space-y-4">
      <div class="flex items-center justify-between gap-2">
        <span class="text-xs font-semibold uppercase tracking-wider text-leaf-400 bg-leaf-500/10 px-3 py-1 rounded-full border border-leaf-500/20">${curr.tag}</span>
        <i data-lucide="sprout" class="w-6 h-6 text-leaf-400"></i>
      </div>
      <h4 class="font-heading font-bold text-xl sm:text-2xl text-white">${curr.name}</h4>
      <p class="text-sm sm:text-base text-white/85 leading-relaxed">${curr.desc}</p>
      <div class="pt-3 border-t border-white/15 flex items-start gap-2.5 text-xs sm:text-sm text-leaf-200 font-medium">
        <i data-lucide="check-circle-2" class="w-5 h-5 text-leaf-400 shrink-0 mt-0.5"></i>
        <span>${curr.benefit}</span>
      </div>
    </div>
  `;
}

// Render Roles Benefits
function renderBenefits() {
  const container = document.getElementById('benefitCardsContainer');
  if (!container) return;
  const l = appState.lang;
  const cards = benefitData[appState.benefitRole][l];

  container.innerHTML = cards.map(c => `
    <div class="rounded-3xl bg-soil-50 border border-soil-200/90 p-6 hover:border-leaf-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-panel flex flex-col justify-between">
      <div>
        <div class="w-12 h-12 rounded-2xl bg-leaf-100 text-leaf-600 flex items-center justify-center mb-5 shadow-sm">
          <i data-lucide="${c.icon}" class="w-6 h-6"></i>
        </div>
        <h3 class="font-heading font-bold text-lg text-forest-950">${c.title}</h3>
        <p class="text-xs sm:text-sm text-forest-900/75 mt-2.5 leading-relaxed">${c.desc}</p>
      </div>
    </div>
  `).join('');
}

// Render FAQs
function renderFAQs() {
  const container = document.getElementById('faqContainer');
  if (!container) return;
  const l = appState.lang;

  container.innerHTML = faqsData.map((f, i) => `
    <details class="group bg-white rounded-2xl border border-soil-200/80 p-4 sm:p-5 transition-all open:shadow-md">
      <summary class="flex items-center justify-between cursor-pointer list-none font-heading font-semibold text-base sm:text-lg text-forest-950">
        <span>${f[l].q}</span>
        <span class="faq-chevron ml-3 text-leaf-600 transition-transform duration-300">
          <i data-lucide="chevron-down" class="w-5 h-5"></i>
        </span>
      </summary>
      <p class="mt-3 text-xs sm:text-sm text-forest-900/75 leading-relaxed pt-2 border-t border-soil-100">${f[l].a}</p>
    </details>
  `).join('');
}

// Interactive Eco-Calculator
function setupEcoCalculator() {
  const slider = document.getElementById('calcFamilySlider');
  const countDisplay = document.getElementById('calcFamilyCount');
  if (!slider || !countDisplay) return;

  function update() {
    const count = parseInt(slider.value, 10);
    countDisplay.textContent = count;
    // Calculation model: ~0.45kg organic kitchen waste per person per day = 13.5 kg/month
    const monthlyWaste = Math.round(count * 13.5);
    // ~40% compost yield from wet waste
    const compostYield = Math.round(monthlyWaste * 0.4);
    // 0.35kg compost nourishes 1 potted sapling
    const plantsNourished = Math.round(compostYield / 0.35);
    // Diverting from landfill avoids methane: ~0.65 kg CO2e per kg waste
    const co2Saved = Math.round(monthlyWaste * 0.65);

    const wasteEl = document.getElementById('calcValWaste');
    const compostEl = document.getElementById('calcValCompost');
    const plantsEl = document.getElementById('calcValPlants');
    const co2El = document.getElementById('calcValCo2');

    if (wasteEl) wasteEl.textContent = monthlyWaste;
    if (compostEl) compostEl.textContent = compostYield;
    if (plantsEl) plantsEl.textContent = plantsNourished;
    if (co2El) co2El.textContent = co2Saved;
  }

  slider.addEventListener('input', update);
  update();
}

// Lightbox Modal
function openLightbox(item) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const tag = document.getElementById('lightboxTag');
  const title = document.getElementById('lightboxTitle');
  const desc = document.getElementById('lightboxDesc');
  if (!modal || !img) return;

  const l = appState.lang;
  img.src = item.img;
  img.alt = item[l].title;
  tag.textContent = item[l].tag;
  title.textContent = item[l].title;
  desc.textContent = item[l].desc;
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  if (window.lucide) lucide.createIcons();
}

function closeAllModals() {
  document.querySelectorAll('.app-modal').forEach(m => m.classList.add('hidden'));
  document.body.classList.remove('overflow-hidden');
}

// Volunteer Modal
function openVolunteerModal() {
  const modal = document.getElementById('volunteerModal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    if (window.lucide) lucide.createIcons();
  }
}

// Sapling Request Modal
function openRequestModal() {
  const modal = document.getElementById('requestModal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    if (window.lucide) lucide.createIcons();
  }
}

// Canvas Leaves Animation
function setupCanvasParticles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const particles = Array.from({ length: 22 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 4 + 2,
    speedX: (Math.random() - 0.5) * 0.6,
    speedY: Math.random() * 0.4 + 0.2,
    opacity: Math.random() * 0.4 + 0.15,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.02
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.angle += p.spin;

      if (p.y > height + 10) {
        p.y = -10;
        p.x = Math.random() * width;
      }
      if (p.x > width + 10) p.x = -10;
      if (p.x < -10) p.x = width + 10;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = `rgba(88, 185, 103, ${p.opacity})`;
      // draw soft leaf petal
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size * 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// Update Active Nav Link
function updateActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Translate Entire Page
function applyTranslations() {
  const l = appState.lang;
  localStorage.setItem('jgb_lang', l);
  document.documentElement.lang = l;
  const t = translations[l];

  document.title = t.pageTitle;

  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = t.langToggle;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (typeof t[key] === 'string') {
      el.textContent = t[key];
    }
  });

  renderPillars();
  renderGallery();
  renderOrganic();
  renderBenefits();
  renderFAQs();
  updateVolunteerBadges();
  if (window.lucide) lucide.createIcons();
}

function updateVolunteerBadges() {
  const badge = document.getElementById('volunteerCountBadge');
  if (!badge) return;
  const count = appState.volunteers.length;
  if (appState.lang === 'bn') {
    badge.textContent = count > 0 ? `আজ নতুন ${count} জন নিবন্ধিত` : 'নতুন স্বেচ্ছাসেবকদের জন্য উন্মুক্ত';
  } else {
    badge.textContent = count > 0 ? `${count} New Sign-up${count === 1 ? '' : 's'} Today` : 'Open for New Volunteers';
  }
}

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });
  }

  // Language Switcher
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      appState.lang = appState.lang === 'bn' ? 'en' : 'bn';
      applyTranslations();
    });
  }

  // Copy Buttons
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => copyToClipboard(btn.dataset.copy));
  });

  // Gallery Filters
  const galleryFilters = document.getElementById('galleryFilters');
  if (galleryFilters) {
    galleryFilters.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        appState.galleryFilter = btn.dataset.filter;
        galleryFilters.querySelectorAll('.filter-btn').forEach(b => {
          const active = b.dataset.filter === appState.galleryFilter;
          b.className = `filter-btn px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all active:scale-95 ${active ? 'bg-forest-900 text-white shadow-md' : 'bg-soil-100 text-forest-900/75 hover:bg-soil-200'}`;
        });
        renderGallery();
        if (window.lucide) lucide.createIcons();
      });
    });
  }

  // Benefit Role Tabs
  const benefitTabs = document.getElementById('benefitRoleTabs');
  if (benefitTabs) {
    benefitTabs.querySelectorAll('.role-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        appState.benefitRole = btn.dataset.role;
        benefitTabs.querySelectorAll('.role-tab').forEach(b => {
          const active = b.dataset.role === appState.benefitRole;
          b.className = `role-tab px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all active:scale-95 ${active ? 'bg-leaf-500 text-white shadow-md' : 'bg-soil-100 text-forest-900 hover:bg-soil-200'}`;
        });
        renderBenefits();
        if (window.lucide) lucide.createIcons();
      });
    });
  }

  // Modal Open Triggers
  document.querySelectorAll('.open-volunteer-modal').forEach(b => b.addEventListener('click', openVolunteerModal));
  document.querySelectorAll('.open-request-modal').forEach(b => b.addEventListener('click', openRequestModal));

  // Modal Close Triggers
  document.querySelectorAll('.close-modal-btn').forEach(b => b.addEventListener('click', closeAllModals));
  document.querySelectorAll('.app-modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAllModals();
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

  // Volunteer Form Submission Handlers
  const handleVolunteerSubmit = (name, contact, interest, area) => {
    const newVol = {
      id: Date.now(),
      name,
      contact,
      interest: interest || 'general',
      area: area || 'East Jurain',
      date: new Date().toISOString()
    };
    appState.volunteers.push(newVol);
    localStorage.setItem('jgb_volunteers', JSON.stringify(appState.volunteers));
    updateVolunteerBadges();

    // Call Supabase sync if client is available
    if (window.syncVolunteerWithSupabase) {
      window.syncVolunteerWithSupabase(newVol);
    }

    const msg = appState.lang === 'bn'
      ? `ধন্যবাদ, ${name}! আপনার স্বেচ্ছাসেবক আবেদনটি সফলভাবে গৃহীত হয়েছে। শীঘ্রই আমাদের দল আপনার সাথে যোগাযোগ করবে।`
      : `Thank you, ${name}! Your volunteer registration has been recorded. Our team will connect with you soon.`;
    return msg;
  };

  const inlineVolForm = document.getElementById('inlineVolunteerForm');
  if (inlineVolForm) {
    inlineVolForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('vName').value.trim();
      const contact = document.getElementById('vContact').value.trim();
      const interest = document.getElementById('vInterest')?.value;
      const area = document.getElementById('vArea')?.value.trim();
      if (!name || !contact) return;

      const msg = handleVolunteerSubmit(name, contact, interest, area);
      const successEl = document.getElementById('inlineFormSuccess');
      const textEl = document.getElementById('inlineFormSuccessText');
      if (successEl && textEl) {
        textEl.textContent = msg;
        successEl.classList.remove('hidden');
      }
      inlineVolForm.reset();
    });
  }

  const modalVolForm = document.getElementById('modalVolunteerForm');
  if (modalVolForm) {
    modalVolForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('mName').value.trim();
      const contact = document.getElementById('mContact').value.trim();
      const interest = document.getElementById('mInterest')?.value;
      if (!name || !contact) return;

      const msg = handleVolunteerSubmit(name, contact, interest);
      const successBox = document.getElementById('modalFormSuccess');
      if (successBox) {
        successBox.textContent = msg;
        successBox.classList.remove('hidden');
      }
      modalVolForm.reset();
    });
  }

  // Sapling Request Form Handler
  const requestForm = document.getElementById('saplingRequestForm');
  if (requestForm) {
    requestForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reqName').value.trim();
      const phone = document.getElementById('reqPhone').value.trim();
      const plantType = document.getElementById('reqPlantType').value;
      const quantity = document.getElementById('reqQuantity').value;
      const area = document.getElementById('reqArea').value.trim();
      const notes = document.getElementById('reqNotes')?.value.trim();

      const refCode = `JGB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const requestData = {
        id: Date.now(),
        refCode,
        name,
        phone,
        plantType,
        quantity,
        area,
        notes,
        status: 'pending',
        date: new Date().toISOString()
      };

      appState.requests.push(requestData);
      localStorage.setItem('jgb_requests', JSON.stringify(appState.requests));

      if (window.syncRequestWithSupabase) {
        window.syncRequestWithSupabase(requestData);
      }

      const modalSuccess = document.getElementById('requestSuccessBox');
      const modalRefCode = document.getElementById('requestRefCode');
      if (modalSuccess && modalRefCode) {
        modalRefCode.textContent = refCode;
        modalSuccess.classList.remove('hidden');
      }
      requestForm.reset();
    });
  }

  // Scroll Reveal Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Initialize
  setupCanvasParticles();
  setupEcoCalculator();
  updateActiveNav();
  applyTranslations();
  if (window.lucide) lucide.createIcons();
});
