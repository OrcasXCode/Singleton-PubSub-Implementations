import { startLogger } from "./logger";
import { gameManager } from "./store";

startLogger();

setInterval(()=>{
    // games.push({
    //     "id":Math.random().toString(),
    //     "whitePlayer":"omsureja",
    //     "blackPlayer":"daud_imbrahim",
    //     moves:[]
    // })
    gameManager.addGame(Math.random().toString())
},5000);


//Here we actually create a web socket server , catch all the events and push the events