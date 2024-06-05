"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
(0, logger_1.startLogger)();
setInterval(() => {
    // games.push({
    //     "id":Math.random().toString(),
    //     "whitePlayer":"omsureja",
    //     "blackPlayer":"daud_imbrahim",
    //     moves:[]
    // })
    store_1.gameManager.addGame(Math.random().toString());
}, 5000);
//Here we actually create a web socket server , catch all the events and push the events
