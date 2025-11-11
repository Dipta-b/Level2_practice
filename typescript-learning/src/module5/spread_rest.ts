//*Spread operator:choray deya and Rest operator: combined kora

//!frinds er moddhe sclfrnds kintu push kora jabe na cause eta erkm dekhabe ["Dipta", "lipta",["Tik", "bul", "chil"]] mane array er bhitore r ekta array hoye jacche tai

const friends = ["Dipta", "lipta"];
const schoolFriends = ["Tik", "bul", "chil"];
const collegefriends = ["Sabbir", "Tabbir", "Labbir"];

friends.push(...collegefriends);
console.log(friends)

//*shamne 0 thakle integer hoy na tai string banano hoiche

const user = {
    name: 'Dipta',
    phNumber: '01798785',
}

const otherinfo = {
    hobby: "Outing",
    favouriteColor: "Black",

}

const userInfo = { ...user, ...otherinfo };
console.log(userInfo)

//!Rest Operator
//*shobgulo friends ke nite (...) use kora hoiche ,ebhabe korle joto iccha add kora jabe , daynamic .
//?rest operator er maddhome array banay fla hoiche.
const sendInvite = (...friends: string[]) => {
    // console.log(`send invitation to ${friend1}`)
    // console.log(`send invitation to ${friend2}`)
    // console.log(`send invitation to ${friend3}`)

    friends.forEach((friend: string) => {
        console.log(`frinds invitation to ${friend}`)
    })

}
sendInvite('Pintu', 'chintu', 'lu', 'kader', 'savber');
