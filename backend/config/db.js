import mongoose from "mongoose";

const conectarDB = async () => {

try {
    
    const db = await mongoose.connect(
        'mongodb+srv://root:root@cluster0.dfzzo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    const url = `${db.connection.host}:${db.connection.port}`
    console.log(`Mongodb conectado en:${url}`);

} catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
}

}

export default conectarDB;