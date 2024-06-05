//!In this slightly approach there are still some chances that some new developer comes and can create new instance , like they might create a new instance 
//!so to avoid this thing here we introduce singleton pattern so that we expoert only one instance and use that instacne everywhere and if 
//!someone trys to create a new instance they will see red squiry


interface Game{
    id:string,
    whitePlayer:string,
    blackPlayer:string,
    moves:string[]
}

// export const games : Game[] = [];

export class GameManager{
    games:Game[]=[];
    // static attributes are direclty acossiated to class not the object of the class
    private static instance : GameManager;
    //so if we make this constructor private then no-one can create a new instance from outside of this file
    private constructor(){
        this.games=[];
    }

    static getInstance(){
        if(GameManager.instance){
            return GameManager.instance;
        }
        GameManager.instance=new GameManager();
        return GameManager.instance;
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

export const gameManager=GameManager.getInstance();
// export const gameManager = new GameManager();