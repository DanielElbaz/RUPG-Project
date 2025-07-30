import { Render } from './render.js'
import { APIRequests } from './model.js';


export class Main {
    constructor() { }

    generate() {
        const render = new Render();
        const api = new APIRequests
        document.addEventListener("click", async function (event) {
            if (event.target.classList.contains("generate")) {

                const mainUser = await api.randomUser();

                const friends = await api.getFriends()

                const pokemon = await api.poke()

                const quote = await api.randomKanyeQuote()

                const bacon = await api.baconIpsum()

                render.RenderAll(mainUser, friends, pokemon, quote, bacon)
            }
        })
    }
}

const main = new Main();
main.generate();
