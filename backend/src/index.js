import app from "./app.js";
import connectionWithDatabase from "./db/index.js";


connectionWithDatabase()
.then(()=>{
    app.listen(process.env.PORT || 5000 ,()=>{
        console.log(`Server Start at port http://localhost:${process.env.PORT}`); 
    }
    )
})