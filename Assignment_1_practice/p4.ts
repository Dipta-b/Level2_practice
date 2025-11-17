
type ArrayType = { title: string, rating: number }
function filterByRating(array: ArrayType[]): ArrayType[] {
    const filteredArraysAre = array.filter(arr => arr.rating >= 4);
    return filteredArraysAre;
}
