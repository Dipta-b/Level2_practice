//object destructuring and array desructuring

const user = {
    id: 212,
    name: {
        firstName: 'sree',
        middleName: 'dipta',
        lastName: 'banik'
    },
    gender: 'male',
    favouriteColor: 'black'
}


//*jake destructuring korbo takae dane rakhbo
//?destructuring er shomoy type define korbo na.


const { favouriteColor: myFavouritecolor, name: { middleName: myMiddlename } } = user;

console.log(myFavouritecolor, myMiddlename)

const friends = ['rahim', 'karim', 'lorim'];
// const mybestFrineds =friends[1]


//*shamner duita karon ami chacchi ekhon lorim ke kintu tar agawe dui jon ache tai duita comma dite hobe 
const [, , mybestFrined] = friends;

console.log(mybestFrined)