"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = void 0;
// export const games : Game[] = [];
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addMove(id, move) {
        console.log(`Adding move ${move} to game id ${id}`);
        const game = this.games.find(game => game.id === id);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameid) {
        const game = {
            id: gameid,
            whitePlayer: "om",
            blackPlayer: "nigga",
            moves: []
        };
        this.games.push(game);
    }
    log() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
exports.gameManager = new GameManager();
