type ArrayType = number[];

function getUniqueValues(arrayOne: ArrayType, arrayTwo: ArrayType) {

    let uniqueArray: ArrayType = [];
    let allNumbersArray: ArrayType = [];
    let i, j;
    for (i = 0; i < arrayOne.length; i++) {
        allNumbersArray.push(arrayOne[i]);
    }
    for (i = 0; i < arrayTwo.length; i++) {
        allNumbersArray.push(arrayTwo[i]);
    }


    for (i = 0; i < allNumbersArray.length; i++) {
        let exist = false;
        for (j = 0; j < uniqueArray.length; j++) {
            if (allNumbersArray[i] === uniqueArray[j]) {
                exist = true;

            }
        }
        if (!exist) {
            uniqueArray.push(allNumbersArray[i]);
        }
    }

    return uniqueArray

}
