import { APIRequests } from "./model"
const api=new APIRequests();

export class Render {
    constructor() { }
    
    RenderMainUser(user){
      const picture= document.getElementById('userPicture');
      picture.src=user.picture;
      const mainUser=document.getElementById('mainUser');
      mainUser.innerHTML=user.fname + user.lname
    }

    RenderFriends(friends){

    }

    RenderKanye(quote){

    }
    
    RenderPoke(pokemon){

    }

    RenderBacon(bacon){

    }

    RenderAll(user,friends,quote,pokemon,bacon){
        this.RenderMainUser(user)
        this.RenderFriends(friends)
        this.RenderKanye(quote)
        this.RenderPoke(pokemon)
        this.RenderBacon(bacon)
    }

}