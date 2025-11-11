//*Type take beshi bujha

//? kono kichuke any diye set korle (anything as string or number or null).(dot)   diye prokash korte hobe; jeta set hobe dot er por shae property ashbe.

let anything: any;
anything = 'Dipta';
(anything as string).replaceAll


const kgToGmConvertor = (input: string | number): string | number | undefined => {

    if (typeof input === 'number') {
        return input * 1000
    } else if (typeof input === 'string') {
        const [value] = input.split(" ");
        return `Converted output is: ${Number(value) * 1000}`
    }

}

const result1 = kgToGmConvertor(2) as number;
const result2 = kgToGmConvertor('2 kg') as string;
console.log(result1, result2)