interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    discountPrice?: number; // Optional, used for discounted items
    imageUrl: string;
    category: string;
  }
  
  const promotionalItems: Item[] = [
    {
      id: 1,
      name: "Teclado Mecânico RGB",
      description: "Teclado mecânico com iluminação RGB e switches de alta qualidade.",
      price: 150.0,
      discountPrice: 120.0,
      imageUrl: "https://example.com/teclado-rgb.png",
      category: "teclado",
    },
    {
      id: 2,
      name: "Mouse Gamer",
      description: "Mouse gamer com sensor de alta precisão e iluminação RGB.",
      price: 80.0,
      discountPrice: 60.0,
      imageUrl: "https://example.com/mouse-gamer.png",
      category: "mouse",
    },
    {
      id: 3,
      name: "Fone de Ouvido Bluetooth",
      description: "Fone de ouvido com som de alta qualidade e conectividade Bluetooth.",
      price: 100.0,
      discountPrice: 75.0,
      imageUrl: "https://example.com/fone-bluetooth.png",
      category: "fone",
    },
    // Adicione mais itens promocionais conforme necessário
  ];
  
  const teclados: Item[] = [
    {
      id: 4,
      name: "Teclado Compacto",
      description: "Teclado compacto ideal para espaços reduzidos.",
      price: 50.0,
      imageUrl: "https://example.com/teclado-compacto.png",
      category: "teclado",
    },
    {
      id: 5,
      name: "Teclado Ergonômico",
      description: "Teclado ergonômico projetado para reduzir o cansaço.",
      price: 70.0,
      imageUrl: "https://example.com/teclado-ergonomico.png",
      category: "teclado",
    },
    // Adicione mais teclados conforme necessário
  ];
  
  export { promotionalItems, teclados };
  