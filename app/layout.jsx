import "./globals.css";

export const metadata = {
  title: "SrisVee Foods | 100% Pure Nendram Banana Powder",
  description:
    "Buy authentic SrisVee Nendram Banana Powder. 100% natural, sun-dried raw Kerala Nendran bananas, zero preservatives, no added sugar. Ideal for baby porridge, toddlers, and family nutrition.",
  keywords: [
    "Nendram Banana Powder",
    "SrisVee Foods",
    "Raw Nendran Powder for babies",
    "Kerala Nendran Porridge",
    "Natural Baby Food India",
    "Banana Powder Tamil Nadu",
  ],
  openGraph: {
    title: "SrisVee Foods | Pure Nendram Banana Powder",
    description:
      "100% Pure Raw Nendram Banana Powder. Traditional goodness, zero preservatives, hygienically packed.",
    type: "website",
    locale: "en_IN",
    siteName: "SrisVee Foods",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "SrisVee Nendram Banana Powder 100g",
      image: "https://srisveefoods.com/products/nendram-banana-pouch-front.png",
      description:
        "100% natural banana powder made from selected raw Nendram bananas. Pure, additive-free, and suitable for baby porridge (6+ months) and family snacks.",
      brand: {
        "@type": "Brand",
        name: "SrisVee Foods",
      },
      offers: {
        "@type": "Offer",
        price: "150",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2027-12-31",
      },
    },
    {
      "@type": "Organization",
      name: "SrisVee Foods",
      email: "srisveefoods@gmail.com",
      telephone: "+919790491850",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is SrisVee Nendram Banana Powder suitable for babies starting solid foods?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, traditional raw Nendram banana porridge is one of the most recommended first foods across South India for infants aged 6 months and above. It is easy on digestion and supports natural healthy weight gain.",
          },
        },
        {
          "@type": "Question",
          name: "Are there any preservatives or added sugar in SrisVee Banana Powder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zero preservatives, zero chemicals, and zero added sugar. It is made strictly with 100% raw Nendram bananas.",
          },
        },
        {
          "@type": "Question",
          name: "What is the shelf life and how should it be stored?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The product has a shelf life of 6 months from the date of manufacture. Store in a clean, cool, and dry place in an airtight jar.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
