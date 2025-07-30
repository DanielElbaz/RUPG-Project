export class APIRequests {
    constructor() { }

    async randomUser() {
        try {
            const user = await fetch("https://randomuser.me/api/");
            const JsonUser = await user.json();
            const result = JsonUser.results[0];
            const mainUser = {
                picture: result.picture.medium,
                fname: result.name.first,
                lname: result.name.last,
                city: result.location.city,
                state: result.location.state
            }
            return mainUser;

        } catch (error) {
            console.error("Unable to fetch the API" + error)
        }
    }

    async getFriends(count = 6) {
        const friends = [];
        try {
            for (let i = 0; i < count; i++) {
                const response = await fetch("https://randomuser.me/api/");
                const JsonResponse = await response.json();
                const user = JsonResponse.results[0];
                friends.push({
                    fname: user.name.first,
                    lname: user.name.last
                });
            }
            return friends;
        } catch (error) {
            console.error("Unable to fetch the API"+ error);
        }
    }

    async randomKanyeQuote() {
        try {
            const quote = await fetch("https://api.kanye.rest");
            const JsonQuote = await quote.json();
            return JsonQuote.quote;
        } catch (error) {
            console.error("Unable to fetch the API"+ error)
        }
    }

    async poke() {
        try {
            const randomId = Math.floor(Math.random() * 898) + 1;
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            const data = await response.json();
            const pokemonName = data.name[0].toUpperCase() + data.name.slice(1); // for extension 
            const poke = {
                name: pokemonName,
                image: data.sprites.front_default
            }
            return poke;
        } catch (error) {
            return ("Unable to fetch the API"+ error)
        }
    }

    async baconIpsum() {
       try {
         const response = await fetch("https://baconipsum.com/api/?type=meat-and-filler");
         const bacon = await response.json();
         return bacon[0];
       } catch (error) {
         console.error("Unable to fetch the API" + error)
       }

    }
}
const api = new APIRequests;
api.randomUser().then(user => console.log(user));
// api.getFriends().then(friends => console.log(friends));
// api.randomKanyeQuote().then(quote => console.log(quote)).catch(err => console.error(err));
// api.poke().then(pokemon => {
//     console.log(`Nom : ${pokemon.name}`);
//     console.log(`Image : ${pokemon.image}`);
// });
// api.baconIpsum().then(bacon => console.log(bacon))
