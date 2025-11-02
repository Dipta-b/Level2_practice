const cartitems = [
    { id: "p-001", name: "Daraz", price: 1500, quantity: 1 },
    { id: "p-002", name: "Walton", price: 350, quantity: 2 },
    { id: "p-003", name: "Arong", price: 2200, quantity: 1 },
];

//subtotal of the cart
const subtotal = cartitems.reduce((acc, item) => {
    return acc += item.price * item.quantity;
}, 0);
console.log(subtotal)

const maxQuantity = cartitems.reduce((maxItem, item) => {

    return maxItem.quantity > item.quantity ? maxItem : item;
}, { quantity: 0 })
console.log(maxQuantity);


const players = [
    { name: 'kamal', score: 88 },
    { name: 'Morsalin', score: 81 },
    { name: 'Rakib', score: 95 },
    { name: 'Tomu', score: 91 },
    { name: 'Shohel', score: 72 },
]

const bestSocrer = players.reduce((mostScorer, scorer) => {
    return mostScorer.score > scorer.score ? mostScorer : scorer;
}, { name: '', score: 0 });
console.log(bestSocrer);



const bestScore = players.reduce((max, player) => {
    return player.score > max ? player.score : max;
}, 0);
console.log(bestScore)
