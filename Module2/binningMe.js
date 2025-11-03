const events = [
    { timestamp: "2025-10-22T10:01:00Z", type: "click" },
    { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
    { timestamp: "2025-10-22T10:14:00Z", type: "click" },
    { timestamp: "2025-10-22T10:31:00Z", type: "click" },
    { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
    { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

// interval of 30 minutes in milliseconds
const INTERVAL = 30 * 60 * 1000;

const getBinningTimeSetUp = (timestamp) => {
    //date as js object
    const date = new Date(timestamp);
    //flooring this time, time tare milisecond(data.getTime()) e nite hobe cause interval millisecond e nya
    const flooredDate = Math.floor(date.getTime() / INTERVAL) * INTERVAL;
    //ei  time tare ISOString() kore dibo jeno ,If your event time is 10:23, it will be binned (grouped) into the 10:00–10:30 interval —
    //so its “bin start time” will be 10:00:00.000Z.
    return new Date(flooredDate).toISOString();

}
//TODO 1️⃣: Take one event from array (loop runs one by one)
// For example, first event = { timestamp: "2025-10-22T10:01:00Z", type: "click" }
const binnedData = events.reduce((acc, event) => {


    //TODO 2️⃣: Convert timestamp to bin start time (floored to nearest 30-min)
    // Example:
    // 10:01 → "2025-10-22T10:00:00.000Z"
    // 10:31 → "2025-10-22T10:30:00.000Z"
    // 11:02 → "2025-10-22T11:00:00.000Z"
    const bin = getBinningTimeSetUp(event.timestamp);

    //TODO 3️⃣: Check if acc already has this bin key
    // acc is the accumulator object collecting bins
    if (!acc[bin]) {
        acc[bin] = { total: 0 }
    }
    acc[bin].total += 1;
    return acc;
}, {})

console.log(binnedData);
