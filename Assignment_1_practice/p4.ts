
type ArrayTypess = { title: string, rating: number }
function filterByRating(array: ArrayTypess[]): ArrayTypess[] {
    const filteredArraysAre = array.filter(arr => arr.rating >= 4);
    return filteredArraysAre;
}
