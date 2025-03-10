// src/utils/fakeData.ts

export interface Feature {
  id: number;
  name: string;
  description: string;
  isEnabled: boolean;
  icon: string;
  priority: number;
  featureTier: "free" | "basic" | "premium" | "special-request";
}
export const fakeFeatures: Feature[] = [
  {
    id: 1,
    name: "Dark Mode",
    description: "Enable dark mode for the UI.",
    isEnabled: true,
    icon: "https://cdn-icons-png.flaticon.com/512/869/869869.png", // 🌙 Dark Mode Icon
    priority: 1,
    featureTier: "premium",
  },
  {
    id: 2,
    name: "Live Chat Support",
    description: "24/7 support via live chat.",
    isEnabled: false,
    icon: "https://cdn-icons-png.flaticon.com/512/1384/1384055.png", // 💬 Chat Icon
    priority: 2,
    featureTier: "basic",
  },
  {
    id: 3,
    name: "Offline Mode",
    description: "Access features without an internet connection.",
    isEnabled: false,
    icon: "https://cdn-icons-png.flaticon.com/512/2099/2099186.png", // 📶 Offline Icon
    priority: 3,
    featureTier: "special-request",
  },
];
