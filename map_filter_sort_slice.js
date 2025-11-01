const rawApiData = [
    { id: 1, category: "Electronics", productName: "Wireless Bluetooth Headphones", price: 59.99, rating: 4.5, stock: 120 },
    { id: 2, category: "Home & Kitchen", productName: "Stainless Steel Water Bottle", price: 19.99, rating: 4.7, stock: 200 },
    { id: 3, category: "Books", productName: "Atomic Habits by James Clear", price: 14.95, rating: 4.9, stock: 75 },
    { id: 4, category: "Fashion", productName: "Men's Slim Fit T-Shirt", price: 24.99, rating: 4.2, stock: 180 },
    { id: 5, category: "Beauty", productName: "Vitamin C Face Serum", price: 29.99, rating: 4.6, stock: 150 },
    { id: 6, category: "Electronics", productName: "Smart LED Light Bulb", price: 12.49, rating: 4.4, stock: 300 },
    { id: 7, category: "Sports", productName: "Yoga Mat with Carry Strap", price: 35.00, rating: 4.8, stock: 95 },
    { id: 8, category: "Gaming", productName: "Wireless Gaming Mouse", price: 49.99, rating: 4.5, stock: 110 },
    { id: 9, category: "Toys", productName: "Lego Classic Creative Bricks Set", price: 39.99, rating: 4.9, stock: 80 },
    { id: 10, category: "Office Supplies", productName: "Ergonomic Desk Chair", price: 159.99, rating: 4.3, stock: 60 },
    { id: 11, category: "Pet Supplies", productName: "Adjustable Dog Harness", price: 27.50, rating: 4.6, stock: 130 },
    { id: 12, category: "Automotive", productName: "Car Phone Mount", price: 18.99, rating: 4.2, stock: 220 },
    { id: 13, category: "Health", productName: "Digital Thermometer", price: 11.99, rating: 4.3, stock: 175 },
    { id: 14, category: "Home & Kitchen", productName: "Electric Kettle 1.7L", price: 34.99, rating: 4.7, stock: 140 },
    { id: 15, category: "Electronics", productName: "Portable Power Bank 10000mAh", price: 25.99, rating: 4.6, stock: 210 },
    { id: 16, category: "Clothing", productName: "Women's Denim Jacket", price: 49.99, rating: 4.5, stock: 85 },
    { id: 17, category: "Beauty", productName: "Moisturizing Body Lotion", price: 15.49, rating: 4.4, stock: 190 },
    { id: 18, category: "Tools", productName: "Cordless Electric Drill Set", price: 89.99, rating: 4.7, stock: 70 },
    { id: 19, category: "Garden", productName: "Outdoor Solar Lights (Set of 4)", price: 42.99, rating: 4.6, stock: 100 },
    { id: 20, category: "Electronics", productName: "Noise Cancelling Earbuds", price: 99.99, rating: 4.8, stock: 65 }
]

/*
filter by electronics
sort by rating
slice top 3
map=> transform object shape to {name:"Name"}
*/


const topElectronicsProducts = rawApiData.filter(item => item.category.toLowerCase() === "Electronics".toLowerCase()).sort((a, b) => b.rating - a.rating).slice(0, 3).map(item => {
    return { name: item.productName, price: item.price }

})



console.log("From here", topElectronicsProducts)



