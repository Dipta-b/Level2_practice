//*have to show index of sums result

const twoSum = (arr, target) => {

    const numbermap = new Map();
    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        const complement = target - currentNumber;

        if (numbermap.has(complement)) {
            return [numbermap.get(complement), i]
        }
        numbermap.set(currentNumber, i)
    }


    return undefined;
}

console.log(twoSum([2, 11, 7, 15], 9))