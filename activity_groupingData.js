const surveyResponses = [
    "A",
    "C",
    "B",
    "A",
    "B",
    "B",
    "C",
    "A",
    "B",
    "D",
    "A",
    "C",
    "B",
    "A",
];

//TODO initilize empty obj
//TODO chk rspns exts or not if ys icmnt cnt if not make 1

const countGenarator = surveyResponses.reduce((table, responese) => {

    if (table[responese]
    ) {
        table[responese] = table[responese] + 1
    }
    else {
        table[responese] = 1
    }
    return table;
}, {})
console.log(countGenarator)

/**
 * "A"	{ A: 1 }
"C"	{ A: 1, C: 1 }
"B"	{ A: 1, C: 1, B: 1 }
"A"	{ A: 2, C: 1, B: 1 }
 * 
 */