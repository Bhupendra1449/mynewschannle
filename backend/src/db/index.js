import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'

const connectionWithDatabase = async()=>{
    try {
        const connectionEstablished = await mongoose.connect(`${process.env.URL}/${DB_NAME}`,
            console.log(`Connection established in host : ${connectionEstablished.connection.host}`)
        )
    } catch (errore) {
        console.log("MongoDB Connection failed occer error", errore);
        process.exit(1);
    }
}

export default connectionWithDatabase;