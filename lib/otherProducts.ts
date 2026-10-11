export interface OtherDepartmentProduct {
  id: string;
  name: string;
  category?: string;
  image?: string;
  badge?: string;
  tagline?: string;
  warranty?: string;
  deliveryTime?: string;
  keySpecs?: Array<{ label: string; value: string } | string>;
  constituents?: string[];
  description?: string;
}

export const OTHER_PRODUCTS_CATALOG: OtherDepartmentProduct[] = [
  {
    id: "sample-product-1",
    name: "Sample Product",
    category: "General",
    tagline: "High quality medical supply",
    keySpecs: [{ label: "Material", value: "Standard" }]
  }
];

export function getOtherProductWhatsAppUrl(product: OtherDepartmentProduct): string {
  const phone = "YOUR_PHONE_NUMBER_HERE";
  const message = encodeURIComponent(
    `Hello, I am interested in inquiring about the product: ${product.name} (ID: ${product.id})`
  );
  return `https://wa.me/${phone}?text=${message}`;
}
