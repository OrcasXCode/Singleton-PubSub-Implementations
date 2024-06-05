interface Game{
    id:string,
    whitePlayer:string,
    blackPlayer:string,
    moves:string[]
}

// export const games : Game[] = [];

export class GameManager{
    games:Game[]=[];
    constructor(){
        this.games=[];
    }

    addMove(id:string,move:string){
        console.log(`Adding move ${move} to game id ${id}`);
        const game=this.games.find(game=>game.id===id);
        game?.moves.push(move);
    }

    addGame(gameid:string) {
        const game={
            id:gameid,
            whitePlayer:"om",
            blackPlayer:"nigga",
            moves:[]
        }
        this.games.push(game);
    }

    log(){
        console.log(this.games);
    }

}

export const gameManager = new GameManager();