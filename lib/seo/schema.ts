export const SITE_CONFIG = {
  name: 'Medwise Technical Consulting',
  tagline: 'Independent Medical Equipment Consulting, Sourcing & Technical Support in Kenya',
  description:
    'Proactive technical support, independent medical equipment advisory, sourcing, installation, training, calibration, and maintenance for healthcare facilities across Kisumu, Nairobi, and Kenya.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.medwisetechnicalconsulting.co.ke',
  ogImage: '/images/medwise-og.jpg',
  telephone: '+254117233522',
  altTelephone: '+254711233522',
  whatsappNumber: '254117233522',
  email: 'medwisetechnicalconsulting@gmail.com',
  googleMapsUrl: 'https://maps.google.com/?q=Medwise+Technical+Consulting+Kisumu+Kakamega+Road+Kenya',
  address: {
    streetAddress: 'Kisumu Kakamega Road (HQ)',
    addressLocality: 'Kisumu',
    addressRegion: 'Kisumu County',
    postalCode: '40100',
    addressCountry: 'KE',
  },
  nairobiHub: {
    streetAddress: 'Nairobi Metropolitan Field Hub',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi County',
    addressCountry: 'KE',
  },
  geo: {
    latitude: -0.0917,
    longitude: 34.7680,
  },
  openingHours: 'Mo-Fr 08:00-17:00, Sa 09:00-13:00',
  priceRange: '$$',
  socialLinks: {
    googleMaps: 'https://maps.google.com/?q=Medwise+Technical+Consulting+Kisumu+Kakamega+Road+Kenya',
    tiktok: 'https://www.tiktok.com/@medwise.technical',
    linkedin: 'https://www.linkedin.com/company/medwisetechnicalconsulting/',
    facebook: 'https://www.facebook.com/share/1DcUPmPes2/',
    instagram: 'https://instagram.com/medwisetechnicalconsulting',
    whatsapp: 'https://wa.me/254117233522',
  },
};

export function getMedicalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.name,
    alternateName: [
      'Medwise',
      'Medwise Kenya',
      'Medwise Technical',
      'Medwise Medical Consulting',
    ],
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.telephone,
    email: SITE_CONFIG.email,
    priceRange: SITE_CONFIG.priceRange,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/images/medwise-logo.png`,
      caption: SITE_CONFIG.name,
    },
    hasMap: SITE_CONFIG.googleMapsUrl,
    currenciesAccepted: 'KES, USD',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer, M-Pesa',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.streetAddress,
      addressLocality: SITE_CONFIG.address.addressLocality,
      addressRegion: SITE_CONFIG.address.addressRegion,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.telephone,
        contactType: 'customer service',
        areaServed: 'KE',
        availableLanguage: ['English', 'Swahili'],
      },
      {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG.altTelephone,
        contactType: 'technical support',
        areaServed: 'KE',
        availableLanguage: ['English', 'Swahili'],
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Kisumu',
      },
      {
        '@type': 'City',
        name: 'Nairobi',
      },
      {
        '@type': 'City',
        name: 'Eldoret',
      },
      {
        '@type': 'City',
        name: 'Nakuru',
      },
      {
        '@type': 'Country',
        name: 'Kenya',
      },
    ],
    knowsAbout: [
      'Medical Equipment Consulting Kenya',
      'Biomedical Engineering Technical Support',
      'Medical Device Sourcing & Procurement Kenya',
      'Clinical Laboratory Device Calibration',
      'Clinical Laboratory Centrifuges & Brushless Systems Kenya',
      'Laboratory Microscope Calibration Olympus Kenya',
      'Immunoassay Analyzers FIA ELISA CLIA Kenya',
      'Automated Hematology Analyzers 3-Part 5-Part Kenya',
      'Automated Biochemistry Analyzers Kenya',
      'Digital X-Ray Machines Kenya & Radiation Safety',
      'Ultrasound Machine Maintenance Kenya',
      'Zybio Z3 and Mindray BC Hematology Analyzer Troubleshooting',
      'Hospital Setup & Medical Technology Advisory',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medical Equipment Technical Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pre-Purchase Medical Device Consulting',
            description:
              'Independent needs assessment and technical advice to help healthcare facilities acquire the right medical equipment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medical Equipment Sourcing & Supply',
            description:
              'Competitive sourcing and procurement of high-quality laboratory and clinical devices from trusted manufacturers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Installation & Calibration',
            description:
              'Certified medical device installation, room commissioning, and precise metrology calibration to manufacturer standards.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Biomedical Staff Training',
            description:
              'Hands-on technical and operational training for clinical and laboratory staff.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maintenance & Quality Control Analysis',
            description:
              'Preventive maintenance, rapid emergency repair, and ongoing quality assurance for maximum device uptime.',
          },
        },
      ],
    },
    sameAs: [
      SITE_CONFIG.googleMapsUrl,
      SITE_CONFIG.socialLinks.whatsapp,
      SITE_CONFIG.socialLinks.tiktok,
      SITE_CONFIG.socialLinks.linkedin,
      SITE_CONFIG.socialLinks.facebook,
      SITE_CONFIG.socialLinks.instagram,
    ],
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  image?: string;
  authorName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    mainEntityOfPage: `${SITE_CONFIG.url}/blog/${article.slug}`,
    url: `${SITE_CONFIG.url}/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.authorName || SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/medwise-logo.png`,
      },
    },
    image: article.image
      ? article.image.startsWith('http')
        ? article.image
        : `${SITE_CONFIG.url}${article.image}`
      : `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getProductListSchema(products: {
  id: string;
  name: string;
  model: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number | null;
  priceFormatted: string;
  description: string;
  specs: { label: string; value: string }[];
}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Medical & Laboratory Equipment Sourcing Catalog Kenya',
    description:
      'Verified clinical laboratory machinery, hematology analyzers, biochemistry analyzers, immunoassay POCT, and microscopes with KSh prices in Kenya.',
    url: `${SITE_CONFIG.url}/products`,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        '@id': `${SITE_CONFIG.url}/products#${product.id}`,
        name: product.name,
        description: product.description,
        model: product.model,
        sku: `MEDWISE-${product.model.replace(/\s+/g, '-').toUpperCase()}`,
        mpn: product.model,
        brand: {
          '@type': 'Brand',
          name: product.brand,
        },
        category: `Medical Equipment > ${product.subcategory}`,
        image: `${SITE_CONFIG.url}/images/medwise-og.jpg`,
        offers: {
          '@type': 'Offer',
          url: `${SITE_CONFIG.url}/products#${product.id}`,
          priceCurrency: 'KES',
          price: product.price ? product.price : undefined,
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          seller: {
            '@type': 'MedicalBusiness',
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
            telephone: SITE_CONFIG.telephone,
          },
        },
        additionalProperty: product.specs.map((spec) => ({
          '@type': 'PropertyValue',
          name: spec.label,
          value: spec.value,
        })),
      },
    })),
  };
}

