
export const navbarItems = [
  { menu: "Products", url: "/products" },

  {
    menu: "Solutions",
    sections: [
      {
        title: "BY STAGE",
        items: [
          { label: "Enterprises", icon: "building", url: "#" },
          { label: "Startups", icon: "rocket", url: "#" },
        ],
      },
      {
        title: "BY USE CASE",
        items: [
          { label: "Crypto", icon: "crypto", url: "#" },
          { label: "In-app payments", icon: "mobile", url: "#" },
          { label: "E-commerce", icon: "cart", url: "#" },
          { label: "Marketplaces", icon: "store", url: "#" },
          { label: "Embedded finance", icon: "layers", url: "#" },
          { label: "Platforms", icon: "grid", url: "#" },
          { label: "Finance automation", icon: "chart", url: "#" },
          { label: "SaaS", icon: "cloud", url: "#" },
          { label: "Global businesses", icon: "globe", url: "#" },
        ],
      },
      {
        title: "BY INDUSTRY",
        items: [
          { label: "AI companies", icon: "ai", url: "#" },
          { label: "Media and entertainment", icon: "play", url: "#" },
          { label: "Creator economy", icon: "creator", url: "#" },
          { label: "Non-profits", icon: "heart", url: "#" },
          { label: "Hospitality, travel and leisure", icon: "plane", url: "#" },
          { label: "Retail", icon: "bag", url: "#" },
          { label: "Insurance", icon: "umbrella", url: "#" },
        ],
      },
      {
        title: "ECOSYSTEM",
        items: [
          { label: "Stripe App Marketplace", icon: "marketplace", external: true, url: "https://stripe.com/apps" },
          { label: "Partners", icon: "partners", url: "#" },
        ],
      },
    ],
  },

  { menu: "Developers", url: "/developers" },
  { menu: "Resources", url: "/resources" },
  { menu: "Pricing", url: "/pricing" },
];
