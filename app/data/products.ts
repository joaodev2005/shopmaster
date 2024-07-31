interface Product {
    id: number;
    image: string;
    title: string;
    oldPrice: number;
    newPrice: number;
}

const products: Product[] = [
    {
        id: 1,
        image: 'image1.jpg',
        title: 'Produto 1',
        oldPrice: 100,
        newPrice: 80,
    },
    {
        id: 2,
        image: 'image2.jpg',
        title: 'Produto 2',
        oldPrice: 200,
        newPrice: 180,
    },
    {
        id: 3,
        image: 'image3.jpg',
        title: 'Produto 3',
        oldPrice: 300, 
        newPrice: 280,
    },
    {
        id: 4,
        image: 'image4.jpg',
        title: 'Produto 4',
        oldPrice: 400,
        newPrice: 380,
    },
    {
        id: 5,
        image: 'image5.jpg',
        title: 'Produto 5',
        oldPrice: 500,
        newPrice: 480,
    },
    {
        id: 6,
        image: 'image5.jpg',
        title: 'Produto 6',
        oldPrice: 500,
        newPrice: 480,
    },
];

export default products;