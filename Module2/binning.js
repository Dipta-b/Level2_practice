/**
 * ধরো তোমার কাছে কিছু সংখ্যার ডেটা আছে:

23, 25, 26, 29, 31, 35, 38, 40, 42


তুমি চাইছো এগুলোকে তিনটা রেঞ্জে ভাগ করতে:

Bin 1: 20–29

Bin 2: 30–39

Bin 3: 40–49

তাহলে ডেটা এমনভাবে ভাগ হবে:

Bin 1 → 23, 25, 26, 29

Bin 2 → 31, 35, 38

Bin 3 → 40, 42

এটাই হলো binning।
 * 
 */


//TODO Interval er time unit and actual date er time unit interval e cnovert in milisecoond
//TODO floor date ber kora by formula ; before and after floor Date 1761127260000 ,1761127200000


const events = [
    { timestamp: "2025-10-22T10:01:00Z", type: "click" },
    { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
    { timestamp: "2025-10-22T10:14:00Z", type: "click" },
    { timestamp: "2025-10-22T10:31:00Z", type: "click" },
    { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
    { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];
//30 secoond er interval ber korbo milisecond e
const INTERVAL = 30 * 60 * 1000;

const getBinningTimeSetUp = (timestamp) => {
    const date = new Date(timestamp);
    //getTime() use kore milisecond e convert kora holo
    console.log(date.getTime())
    const flooredDate = Math.floor(date.getTime() / INTERVAL) * INTERVAL;


    console.log(flooredDate)
    return new Date(flooredDate).toISOString()

}

const binnedData = events.reduce((acc, evnt) => {
    const bin = getBinningTimeSetUp(evnt.timestamp);
    if (!acc[bin]) {
        acc[bin] = { total: 0 }
    }
    acc[bin].total += 1;
    return acc
}, {})

console.log(binnedData)