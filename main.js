import { Render } from './render.js'
import { APIRequests } from './model.js';


const render = new Render();
const api = new APIRequests();

export class Main {
    constructor() { }

    async generateAll() {

        try {
            const mainUser = await api.randomUser();
            const friends = await api.getFriends()
            const pokemon = await api.poke()
            const quote = await api.randomKanyeQuote()
            const bacon = await api.baconIpsum()
            render.RenderAll(mainUser, friends, pokemon, quote, bacon)
            document.body.style.display = "block";
            render.RenderError("")
        } catch (error) {
            render.RenderError("An error occured")
        }
    }

    generate() {
        this.generateAll()
        document.addEventListener("click", (event) => {
            if (event.target.classList.contains("generate")) {
                this.generateAll();
            }
        })
    }
}

const main = new Main();
main.generate();
