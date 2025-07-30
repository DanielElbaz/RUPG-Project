

export class Render {
    constructor() { }

    RenderMainUser(user) {
        const picture = document.getElementById('userPicture');
        picture.src = user.picture;

        const mainUser = document.getElementById('mainUser');
        mainUser.innerHTML = `${user.fname} ${user.lname} <br> ${user.city}, ${user.state}`
    }

    RenderFriends(friends) {
        const friendsID = document.getElementById('friends');
        friendsID.innerHTML = "";

        const title = document.createElement('li');
        title.textContent = "Friends"
        title.style.fontWeight = "bold"
        friendsID.appendChild(title);

        friends.forEach(friend => {
            const li = document.createElement('li');
            li.textContent = `${friend.fname} ${friend.lname}`;
            friendsID.appendChild(li);
        });
    }

    RenderKanye(quote) {
        const quote1 = document.getElementById('quote');
        quote1.innerHTML = `${quote}`
    }

    RenderPoke(pokemon) {
        const pokePicture = document.getElementById('poke-picture');
        pokePicture.src = pokemon.image;
        const pokeName = document.getElementById('poke-name');
        pokeName.innerHTML = `${pokemon.name}`
    }

    RenderBacon(bacon) {
        const bacon1 = document.getElementById("bacon");
        bacon1.innerHTML = `${bacon}`
    }
    
    RenderError(message) {
        const errorDiv = document.getElementById("error");
        errorDiv.textContent = message;
    }


    RenderAll(user, friends, pokemon, quote, bacon) {
        this.RenderMainUser(user)
        this.RenderFriends(friends)
        this.RenderPoke(pokemon)
        this.RenderKanye(quote)
        this.RenderBacon(bacon)
    }

}