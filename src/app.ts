

 import express from "express";
// const app = express();

// app.get("/", (req,res) =>{
//     res.json({message: "yesss succefully"});
// });

// app.listen("3000", ()=>{
//     console.log(`Server running on http://localhost:3000`);
// });

class App{
    public express: express.Application;

    constructor(){
        this.express = express();
        this.middleware();
    }

    private middleware(): void {
        this.express.use('/hello',(req: express.Request, res: express.Response, next: express.NextFunction)=>{
            res.json({hello: "out there"});
        });
    }

}