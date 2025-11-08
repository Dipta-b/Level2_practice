const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let mainIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[mainIndex]) {
                mainIndex = j;
            }
        }
        if (mainIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[mainIndex];
            arr[mainIndex] = temp;
        }
    }
}