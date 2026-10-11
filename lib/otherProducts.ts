export interface OtherProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
}

export const otherProducts: OtherProduct[] = [
  {
    id: "lab-centrifuge",
    name: "Laboratory Centrifuge",
    category: "Laboratory Equipment",
    description: "High-speed benchtop centrifuge for clinical and research laboratories.",
    features: ["Digital speed control", "Automatic imbalance detection", "Quiet operation"]
  },
  {
    id: "patient-monitor",
    name: "Multi-Parameter Patient Monitor",
    category: "Ward Equipment",
    description: "Real-time tracking of ECG, SpO2, NIBP, respiration, and temperature.",
    features: ["12.1-inch TFT display", "Built-in rechargeable battery", "Visual and audible alarms"]
  }
];

export function getOtherProductById(id: string): OtherProduct | undefined {
  return otherProducts.find((p) => p.id === id);
}
