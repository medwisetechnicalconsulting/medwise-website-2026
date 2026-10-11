export interface OtherDepartmentProduct {
  id: string;
  name: string;
  category?: string;
  image?: string;
  badge?: string;
  tagline?: string;
  warranty?: string;
  deliveryTime?: string;
  keySpecs?: string[];
  description?: string;
}

// Helper function to generate WhatsApp inquiry link for a product
export function getOtherProductWhatsAppUrl(product: OtherDepartmentProduct): string {
  const phone = "YOUR_PHONE_NUMBER_HERE"; // Replace with your WhatsApp business number
  const message = encodeURIComponent(
    `Hello, I am interested in inquiring about the product: ${product.name} (ID: ${product.id})`
  );
  return `https://wa.me/${phone}?text=${message}`;
}

// Add your product array / exports below as needed
