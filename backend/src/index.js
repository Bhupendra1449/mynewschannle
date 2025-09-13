import express, { json } from "express"

const app =express();
let mytoken =1234;

app.use(express.json())

const checkupdate = (req, res, next)=>{
    if(req.query.token == "" || req.query.token == undefined){
        res.send(
            {
                status :0,
                msg : "please fill token"
            }
        )
    }
    if(req.query.token != mytoken){
        res.send(
            {
                status:0,
                msg: "Please fill the correct token"
            }
        )
    }
    next()
}

app.use(checkupdate)

app.get('/myPage', (req,res)=>{
    res.send(
        {
            status :1,
            massage:"Hello kabeer"
        }
    )
})

app.post('/login', (req, res)=>{
    console.log(req.body);
    res.send({
        status : 1,
        msg : "login successfull"
    })
})


app.listen(8000, console.log("server start successfull"))