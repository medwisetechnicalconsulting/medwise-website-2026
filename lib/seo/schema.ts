export const SITE_CONFIG = {
  name: 'Medwise Technical Consulting',
  tagline: 'Independent Medical Equipment Consulting, Sourcing & Technical Support in Kenya',
  description:
    'Proactive technical support, independent medical equipment advisory, sourcing, installation, training, calibration, and maintenance for healthcare facilities in Kenya.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://medwise-technical-consulting.vercel.app',
  ogImage: '/images/medwise-og.jpg',
  telephone: '+254700000000', // [PLACEHOLDER — confirm with client]
  whatsappNumber: '254700000000', // [PLACEHOLDER — confirm with client]
  email: 'info@medwisetech.co.ke', // [PLACEHOLDER — confirm with client]
  address: {
    streetAddress: 'Langata Rongai Road',
    addressLocality: 'Rongai / Langata Region',
    addressRegion: 'Rift Valley Province',
    addressCountry: 'KE',
  },
  geo: {
    latitude: -1.3963,
    longitude: 36.7606,
  },
  openingHours: 'Mo-Fr 08:00-17:00, Sa 09:00-13:00',
  priceRange: '$$',
};

export function getMedicalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'LocalBusiness'],
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.telephone,
    email: SITE_CONFIG.email,
    priceRange: SITE_CONFIG.priceRange,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    logo: `${SITE_CONFIG.url}/images/medwise-logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.streetAddress,
      addressLocality: SITE_CONFIG.address.addressLocality,
      addressRegion: SITE_CONFIG.address.addressRegion,
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
    areaServed: {
      '@type': 'Country',
      name: 'Kenya',
    },
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
              'Seamless device installation and precise calibration to manufacturer and regulatory standards.',
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
      'https://www.google.com/maps?cid=medwise-technical-consulting', // [PLACEHOLDER — confirm with client]
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
