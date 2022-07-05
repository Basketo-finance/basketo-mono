const data = [
    {
        name: 'basket',
        symbol: 'b',
        description: 'Lorem ipsum dolor sit amet blanditiis nemo recusandae nisi fugit, illo, impedit at dolore quia.',
        coins: {
            coin1: { image: 'coin1 image', ratio: 23 },
            coin2: { image: 'coin2 image', ratio: 77 }
        },
        growthRate: 2.3,
        image: 'basket image'
    }
];

const basketImgs = [
    'https://daohq-dao-images.s3.us-east-2.amazonaws.com/images/sHGUQ_0F_400x400.jpg',
    'https://daohq-dao-images.s3.us-east-2.amazonaws.com/images/SgXEhvrc_400x400.png',
    'https://daohq-dao-images.s3.us-east-2.amazonaws.com/images/2xAESSeV_400x400.jpg',
    'https://daohq-dao-images.s3.us-east-2.amazonaws.com/images/M_QDth1C_400x400.png',
    'https://daohq-dao-images.s3.us-east-2.amazonaws.com/images/2tEAaqTS_400x400.jpg',
    'https://daohq-dao-images.s3.us-east-2.amazonaws.com/images/vuVyubkz_400x400.jpg',
    'https://daohq-dao-images.s3.us-east-2.amazonaws.com/images/bteKOcAH_400x400.jpg',
    'https://daohq-dao-images.s3.us-east-2.amazonaws.com/images/Sgc5zYvO_400x400.jpg',
    'https://daohq-dao-images.s3.us-east-2.amazonaws.com/images/Sgc5zYvO_400x400.jpg',
    'https://daohq-dao-images.s3.us-east-2.amazonaws.com/images/iuNlNb1h_400x400.png',
    'https://daohq-dao-images.s3.us-east-2.amazonaws.com/images/14HQHq5F_400x400.jpg',
    'https://daohq-dao-images.s3.us-east-2.amazonaws.com/images/cvT6WBES_400x400.jpg',
];

export default function handler(req, res) {

    const baskets = [...Array(12)].map((_, i) => {
        return {
            ...data[0],
            name: data[0].name + (i + 1),
            symbol: data[0].symbol + (i + 1),
            image: basketImgs[i],
            growthRate: Math.round((Math.random() * (5 - -5 + 1) + -5) * 100) / 100
        };
    });
    res.status(200).json(baskets);
}