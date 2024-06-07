const image1 = require("../images/product/product-1.svg").default;
const image2 = require("../images/product/product-2.svg").default;
const image3 = require("../images/product/product-3.svg").default;
const image4 = require("../images/product/product-4.svg").default;
const image5 = require("../images/product/product-5.svg").default;
const image6 = require("../images/product/product-6.svg").default;
const image7 = require("../images/product/product-7.svg").default;
const image8 = require("../images/product/product-8.svg").default;
const image9 = require("../images/product/product-9.svg").default;
const image10 = require("../images/product/product-10.svg").default;
const image11 = require("../images/product/product-11.svg").default;
const image12 = require("../images/product/product-12.svg").default;
const image13 = require("../images/product/product-13.svg").default;
const image14 = require("../images/product/product-14.svg").default;
const image15 = require("../images/product/product-15.svg").default;

export const productList = [
    {
        "id": 1,
        "name": "Hammock",
        "category": "Outdoor",
        "price": 999.99,
        "images": [image1, image1, image1, image1, image1],
        "shortDescription": "Hammock short description",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.",
        "totalRating": 4.7,
        "totalRatingCount": 345,
        "totalSold": 178,
        "totalWatched": 2500,
        "isWishlisted": true,
        "stockStatus": "SELL",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 3,
                "reviewerName": "Sharif Vai",
                "reviewerImage": "",
                "review": "This is the best Hammock I have ever owned. It is so comfortable and spacious",
                "reviewerRating": 5,
                "date": new Date()
            },
            {
                "reviewerId": 4,
                "reviewerName": "MD Imran",
                "reviewerImage": "",
                "review": "I love this corner sofa. It is perfect for relaxing and watching movies",
                "reviewerRating": 4.8,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "What is the size of the corner sofa?",
                "answer": "The size of the corner sofa is 150 cm x 200 cm"
            },
            {
                "id": 2,
                "question": "What is the material of the corner sofa?",
                "answer": "The material of the corner sofa is leather and fabric"
            }
        ]
    },
    {
        "id": 2,
        "name": "Chairs",
        "category": "Indoor",
        "price": 499.99,
        "images": [image2, image2, image2, image2, image2],
        "shortDescription": "Dining Table Set short description",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.",
        "totalRating": 4.2,
        "totalRatingCount": 210,
        "totalSold": 123,
        "totalWatched": 1800,
        "isWishlisted": false,
        "stockStatus": "SELL",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 5,
                "reviewerName": "Abdullah Al Mamun",
                "reviewerImage": "",
                "review": "This is a great dining table set for the price. It is stylish and functional",
                "reviewerRating": 4,
                "date": new Date()
            },
            {
                "reviewerId": 6,
                "reviewerName": "Asif Iqbal",
                "reviewerImage": "",
                "review": "I am happy with this dining table set. It is the perfect size for my family",
                "reviewerRating": 4.5,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "What is the size of the dining table?",
                "answer": "The size of the dining table is 150 cm x 90 cm"
            },
            {
                "id": 2,
                "question": "What is the material of the dining table?",
                "answer": "The material of the dining table is wood and glass"
            }
        ]
    },
    {
        "id": 3,
        "name": "Patio Sets",
        "category": "Outdoor",
        "price": 399.99,
        "images": [image3, image3, image3, image3, image3],
        "shortDescription": "Bed Frame short description",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.",
        "totalRating": 4.4,
        "totalRatingCount": 140,
        "totalSold": 84,
        "totalWatched": 1200,
        "isWishlisted": false,
        "stockStatus": "NEW",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 8,
                "reviewerName": "Shakil Ahmed",
                "reviewerImage": "",
                "review": "This is a great bed frame for the price. It is sturdy and easy to assemble",
                "reviewerRating": 4,
                "date": new Date()
            },
            {
                "reviewerId": 9,
                "reviewerName": "Rafi Elahi",
                "reviewerImage": "",
                "review": "I am happy with this bed frame. It is comfortable and stylish",
                "reviewerRating": 4.5,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "What is the size of the bed frame?",
                "answer": "The size of the bed frame is available in multiple sizes, including Queen, King, and California King"
            },
            {
                "id": 2,
                "question": "What is the material of the bed frame?",
                "answer": "The material of the bed frame is metal and wood"
            }
        ]
    },
    {
        "id": 4,
        "name": "Stools",
        "category": "Indoor",
        "price": 599.99,
        "images": [image4, image4, image4, image4, image4],
        "shortDescription": "Wardrobe short description",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.",
        "totalRating": 4.6,
        "totalRatingCount": 110,
        "totalSold": 66,
        "totalWatched": 900,
        "isWishlisted": true,
        "stockStatus": "SELL",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 10,
                "reviewerName": "Karim Khan",
                "reviewerImage": "",
                "review": "This is a spacious and well-designed wardrobe. It is perfect for storing my clothes and shoes",
                "reviewerRating": 4.5,
                "date": new Date()
            },
            {
                "reviewerId": 11,
                "reviewerName": "Hasan Mahmud",
                "reviewerImage": "",
                "review": "I am very happy with this wardrobe. It is sturdy and looks great in my bedroom",
                "reviewerRating": 5,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "What is the size of the wardrobe?",
                "answer": "The size of the wardrobe is 180 cm x 120 cm x 40 cm"
            },
            {
                "id": 2,
                "question": "What is the material of the wardrobe?",
                "answer": "The material of the wardrobe is wood and particleboard"
            }
        ]
    },
    {
        "id": 5,
        "name": "Bookshelves",
        "category": "Indoor",
        "price": 149.99,
        "images": [image5, image5, image5, image5, image5],
        "shortDescription": "This coffee table is made of durable glass and features a modern design. It is perfect for your living room or den.",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.This coffee table is available for free shipping and returns.",
        "totalRating": 4.5,
        "totalRatingCount": 70,
        "totalSold": 42,
        "totalWatched": 500,
        "isWishlisted": true,
        "stockStatus": "NEW",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 13,
                "reviewerName": "Jashim Uddin",
                "reviewerImage": "",
                "review": "This is a great coffee table for the price. It is stylish and functional.",
                "reviewerRating": 4,
                "date": new Date()
            },
            {
                "reviewerId": 14,
                "reviewerName": "Mizan Rahman",
                "reviewerImage": "",
                "review": "I love this coffee table. It is perfect for my living room.",
                "reviewerRating": 4,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "What is the size of the coffee table?",
                "answer": "The size of the coffee table is 100 cm x 50 cm x 40 cm."
            },
            {
                "id": 2,
                "question": "What is the material of the coffee table?",
                "answer": "The material of the coffee table is glass and metal."
            }
        ]
    },
    {
        "id": 6,
        "name": "Office Furniture",
        "category": "Indoor",
        "price": 129.99,
        "images": [image6, image6, image6, image6, image6],
        "shortDescription": "This camping tent is perfect for camping trips with family or friends.",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.This camping tent is available for free shipping and returns. It comes with a 1-year warranty.",
        "totalRating": 4.8,
        "totalRatingCount": 340,
        "totalSold": 204,
        "totalWatched": 2800,
        "isWishlisted": true,
        "stockStatus": "NEW",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 15,
                "reviewerName": "Salma Akter",
                "reviewerImage": "",
                "review": "This is a great camping tent for the price. It is spacious and easy to set up.",
                "reviewerRating": 5,
                "date": new Date()
            },
            {
                "reviewerId": 16,
                "reviewerName": "Fahim Ahmed",
                "reviewerImage": "",
                "review": "I love this camping tent. It is perfect for my family camping trips.",
                "reviewerRating": 4.5,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "How many people can sleep in this tent?",
                "answer": "This tent can sleep up to four people."
            },
            {
                "id": 2,
                "question": "What is the size of the tent when it is set up?",
                "answer": "The size of the tent when it is set up is 10 ft x 10 ft x 7 ft."
            }
        ]
    },
    {
        "id": 7,
        "name": "Barstool",
        "category": "Outdoor",
        "price": 249.99,
        "images": [image7, image7, image7, image7, image7],
        "shortDescription": "This large family camping tent is perfect for camping trips with large families or groups of friends.",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.This camping tent is available for free shipping and returns. It comes with a 1-year warranty.",
        "totalRating": 4.7,
        "totalRatingCount": 210,
        "totalSold": 126,
        "totalWatched": 1800,
        "isWishlisted": true,
        "stockStatus": "NEW",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 17,
                "reviewerName": "Khadija Rahman",
                "reviewerImage": "",
                "review": "This is a great camping tent for large families. It is spacious and easy to set up.",
                "reviewerRating": 5,
                "date": new Date()
            },
            {
                "reviewerId": 18,
                "reviewerName": "Ahmed Hasan",
                "reviewerImage": "",
                "review": "I love this camping tent. It is perfect for our family camping trips.",
                "reviewerRating": 4.5,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "How many people can sleep in this tent?",
                "answer": "This tent can sleep up to eight people."
            },
            {
                "id": 2,
                "question": "What is the size of the tent when it is set up?",
                "answer": "The size of the tent when it is set up is 12 ft x 12 ft x 10 ft."
            }
        ]
    },
    {
        "id": 8,
        "name": "Recliner Chair",
        "category": "Indoor",
        "price": 69.99,
        "images": [image8, image8, image8, image8, image8],
        "shortDescription": "This portable fire pit is perfect for backyard camping trips or campfires on the go.",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.This portable fire pit is available for free shipping and returns. It comes with a 1-year warranty.",
        "totalRating": 4.6,
        "totalRatingCount": 180,
        "totalSold": 108,
        "totalWatched": 1500,
        "isWishlisted": true,
        "stockStatus": "SELL",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 19,
                "reviewerName": "Rashedul Islam",
                "reviewerImage": "",
                "review": "This is a great portable fire pit for the price. It is easy to set up and use.",
                "reviewerRating": 5,
                "date": new Date()
            },
            {
                "reviewerId": 20,
                "reviewerName": "Kamal Hossain",
                "reviewerImage": "",
                "review": "I love this portable fire pit. It is perfect for our backyard campfires.",
                "reviewerRating": 4.5,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "What is the size of the fire pit?",
                "answer": "The diameter of the fire pit is 24 inches and the height is 12 inches."
            },
            {
                "id": 2,
                "question": "What is the weight of the fire pit?",
                "answer": "The weight of the fire pit is 15 pounds."
            }
        ]
    },
    {
        "id": 9,
        "name": "Gaming Chair",
        "category": "Indoor",
        "price": 199.99,
        "images": [image9, image9, image9, image9, image9],
        "shortDescription": "This outdoor patio heater is perfect for keeping your guests warm on chilly evenings.",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.This outdoor patio heater is available for free shipping and returns. It comes with a 1-year warranty.",
        "totalRating": 4.9,
        "totalRatingCount": 140,
        "totalSold": 84,
        "totalWatched": 1200,
        "isWishlisted": true,
        "stockStatus": "NEW",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 21,
                "reviewerName": "Shafiul Alam",
                "reviewerImage": "",
                "review": "This is a great outdoor patio heater for the price. It keeps my guests warm on chilly evenings.",
                "reviewerRating": 5,
                "date": new Date()
            },
            {
                "reviewerId": 22,
                "reviewerName": "Rafiqul Islam",
                "reviewerImage": "",
                "review": "I love this outdoor patio heater. It is perfect for our backyard gatherings.",
                "reviewerRating": 4.5,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "How many people can this heater warm?",
                "answer": "This heater can warm up a patio area of up to 15 feet in diameter."
            },
            {
                "id": 2,
                "question": "How long does the propane tank last?",
                "answer": "A 20-pound propane tank will last up to 10 hours on this heater."
            }
        ]
    },
    {
        "id": 10,
        "name": "Cantilever Chair",
        "category": "Indoor",
        "price": 39.99,
        "images": [image10, image10, image10, image10, image10],
        "shortDescription": "This outdoor picnic blanket is perfect for picnics, camping trips, or simply lounging in the backyard.",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.This outdoor picnic blanket is available for free shipping and returns. It comes with a 1-year warranty.",
        "totalRating": 4.7,
        "totalRatingCount": 110,
        "totalSold": 66,
        "totalWatched": 900,
        "isWishlisted": true,
        "stockStatus": "NEW",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 23,
                "reviewerName": "Nazmul Islam",
                "reviewerImage": "",
                "review": "This is a great outdoor picnic blanket for the price. It is durable, waterproof, and large enough for a group of people.",
                "reviewerRating": 5,
                "date": new Date()
            },
            {
                "reviewerId": 24,
                "reviewerName": "Karim Uddin",
                "reviewerImage": "",
                "review": "I love this outdoor picnic blanket. It is perfect for our family picnics.",
                "reviewerRating": 4.5,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "What is the size of the blanket when it is unfolded?",
                "answer": "The size of the blanket when it is unfolded is 10 ft x 6 ft."
            },
            {
                "id": 2,
                "question": "What is the material of the blanket?",
                "answer": "The material of the blanket is polyester and PVC."
            }
        ]
    },
    {
        "id": 11,
        "name": "Armchair and pillow",
        "category": "Indoor",
        "price": 39.99,
        "images": [image11, image11, image11, image11, image11],
        "shortDescription": "This outdoor picnic blanket is perfect for picnics, camping trips, or simply lounging in the backyard.",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.This outdoor picnic blanket is available for free shipping and returns. It comes with a 1-year warranty.",
        "totalRating": 4.7,
        "totalRatingCount": 110,
        "totalSold": 66,
        "totalWatched": 900,
        "isWishlisted": true,
        "stockStatus": "NEW",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 23,
                "reviewerName": "Nazmul Islam",
                "reviewerImage": "",
                "review": "This is a great outdoor picnic blanket for the price. It is durable, waterproof, and large enough for a group of people.",
                "reviewerRating": 5,
                "date": new Date()
            },
            {
                "reviewerId": 24,
                "reviewerName": "Karim Uddin",
                "reviewerImage": "",
                "review": "I love this outdoor picnic blanket. It is perfect for our family picnics.",
                "reviewerRating": 4.5,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "What is the size of the blanket when it is unfolded?",
                "answer": "The size of the blanket when it is unfolded is 10 ft x 6 ft."
            },
            {
                "id": 2,
                "question": "What is the material of the blanket?",
                "answer": "The material of the blanket is polyester and PVC."
            }
        ]
    },
    {
        "id": 12,
        "name": "Modern armchair ",
        "category": "Outdoor",
        "price": 39.99,
        "images": [image12, image12, image12, image12, image12],
        "shortDescription": "This outdoor picnic blanket is perfect for picnics, camping trips, or simply lounging in the backyard.",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.This outdoor picnic blanket is available for free shipping and returns. It comes with a 1-year warranty.",
        "totalRating": 4.7,
        "totalRatingCount": 110,
        "totalSold": 66,
        "totalWatched": 900,
        "isWishlisted": true,
        "stockStatus": "NEW",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 23,
                "reviewerName": "Nazmul Islam",
                "reviewerImage": "",
                "review": "This is a great outdoor picnic blanket for the price. It is durable, waterproof, and large enough for a group of people.",
                "reviewerRating": 5,
                "date": new Date()
            },
            {
                "reviewerId": 24,
                "reviewerName": "Karim Uddin",
                "reviewerImage": "",
                "review": "I love this outdoor picnic blanket. It is perfect for our family picnics.",
                "reviewerRating": 4.5,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "What is the size of the blanket when it is unfolded?",
                "answer": "The size of the blanket when it is unfolded is 10 ft x 6 ft."
            },
            {
                "id": 2,
                "question": "What is the material of the blanket?",
                "answer": "The material of the blanket is polyester and PVC."
            }
        ]
    },
    {
        "id": 13,
        "name": "Chair and pillow",
        "category": "Outdoor",
        "price": 39.99,
        "images": [image13, image13, image13, image13, image13],
        "shortDescription": "This outdoor picnic blanket is perfect for picnics, camping trips, or simply lounging in the backyard.",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.This outdoor picnic blanket is available for free shipping and returns. It comes with a 1-year warranty.",
        "totalRating": 4.7,
        "totalRatingCount": 110,
        "totalSold": 66,
        "totalWatched": 900,
        "isWishlisted": true,
        "stockStatus": "NEW",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 23,
                "reviewerName": "Nazmul Islam",
                "reviewerImage": "",
                "review": "This is a great outdoor picnic blanket for the price. It is durable, waterproof, and large enough for a group of people.",
                "reviewerRating": 5,
                "date": new Date()
            },
            {
                "reviewerId": 24,
                "reviewerName": "Karim Uddin",
                "reviewerImage": "",
                "review": "I love this outdoor picnic blanket. It is perfect for our family picnics.",
                "reviewerRating": 4.5,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "What is the size of the blanket when it is unfolded?",
                "answer": "The size of the blanket when it is unfolded is 10 ft x 6 ft."
            },
            {
                "id": 2,
                "question": "What is the material of the blanket?",
                "answer": "The material of the blanket is polyester and PVC."
            }
        ]
    },
    {
        "id": 14,
        "name": "Nightstand isolated",
        "category": "Outdoor",
        "price": 39.99,
        "images": [image14, image14, image14, image14, image14],
        "shortDescription": "This outdoor picnic blanket is perfect for picnics, camping trips, or simply lounging in the backyard.",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.This outdoor picnic blanket is available for free shipping and returns. It comes with a 1-year warranty.",
        "totalRating": 4.7,
        "totalRatingCount": 110,
        "totalSold": 66,
        "totalWatched": 900,
        "isWishlisted": true,
        "stockStatus": "NEW",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 23,
                "reviewerName": "Nazmul Islam",
                "reviewerImage": "",
                "review": "This is a great outdoor picnic blanket for the price. It is durable, waterproof, and large enough for a group of people.",
                "reviewerRating": 5,
                "date": new Date()
            },
            {
                "reviewerId": 24,
                "reviewerName": "Karim Uddin",
                "reviewerImage": "",
                "review": "I love this outdoor picnic blanket. It is perfect for our family picnics.",
                "reviewerRating": 4.5,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "What is the size of the blanket when it is unfolded?",
                "answer": "The size of the blanket when it is unfolded is 10 ft x 6 ft."
            },
            {
                "id": 2,
                "question": "What is the material of the blanket?",
                "answer": "The material of the blanket is polyester and PVC."
            }
        ]
    },
    {
        "id": 15,
        "name": "Comfortable modern chair",
        "category": "Outdoor",
        "price": 39.99,
        "images": [image15, image15, image15, image15, image15],
        "shortDescription": "This outdoor picnic blanket is perfect for picnics, camping trips, or simply lounging in the backyard.",
        "fullDescription": "Introducing our minimal sofa product - a sleek and stylish addition to any modern home. With its clean lines and simple design, this sofa is perfect for those who value both form and function. The neutral color palette and understated profile allow it to blend seamlessly into any living space, while the sturdy frame and comfortable cushioning ensure maximum comfort and durability.",
        "deliveryAndReturnDescription": "Free Shipping: Enjoy free shipping on this product to your doorstep. We strive to deliver your order as quickly as possible. Return Policy: If you are not completely satisfied with your purchase, you may return it within 30 days for a full refund. Please contact our customer service team for assistance with returns.This outdoor picnic blanket is available for free shipping and returns. It comes with a 1-year warranty.",
        "totalRating": 4.7,
        "totalRatingCount": 110,
        "totalSold": 66,
        "totalWatched": 900,
        "isWishlisted": true,
        "stockStatus": "NEW",
        "totalReviews": 2,
        "reviews": [
            {
                "reviewerId": 23,
                "reviewerName": "Nazmul Islam",
                "reviewerImage": "",
                "review": "This is a great outdoor picnic blanket for the price. It is durable, waterproof, and large enough for a group of people.",
                "reviewerRating": 5,
                "date": new Date()
            },
            {
                "reviewerId": 24,
                "reviewerName": "Karim Uddin",
                "reviewerImage": "",
                "review": "I love this outdoor picnic blanket. It is perfect for our family picnics.",
                "reviewerRating": 4.5,
                "date": new Date()
            }
        ],
        "questionList": [
            {
                "id": 1,
                "question": "What is the size of the blanket when it is unfolded?",
                "answer": "The size of the blanket when it is unfolded is 10 ft x 6 ft."
            },
            {
                "id": 2,
                "question": "What is the material of the blanket?",
                "answer": "The material of the blanket is polyester and PVC."
            }
        ]
    },
];

export const fitsAndFeatures = [
    "Minimal sofas have sleek designs with sturdy frames and firm cushions.",
    "They feature neutral-colored upholstery made of leather or high-quality fabric.",
    "Some designs may have modular components or hidden storage.",
    "Minimal sofas are practical, versatile, and timeless.",
    "Upgrade your living space with a minimal sofa today.",
];

export const addedCartList = [
    {
        id: 15,
        name: "Comfortable modern chair",
        image: image15,
        price: 39.99,
    },
    {
        id: 14,
        name: "Nightstand isolated",
        image: image14,
        price: 49.99,
    },
];

export const checkoutCartList = [
    {
        id: 15,
        name: "Comfortable modern chair",
        image: image15,
        price: 39.99,
        quantity: 2
    },
    {
        id: 14,
        name: "Nightstand isolated",
        image: image14,
        price: 49.99,
        quantity: 3
    },
];