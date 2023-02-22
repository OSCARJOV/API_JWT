const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
    }, 
    (err, res) => { // funcion callback
    if(!err){        
    console.log('*******CONEXION CORRECTA********');
}else{
    console.log('*******ERROR CONEXION********');

}
}
    );
}



module.exports = dbConnect


// mongodb+srv://oscarorjuelavargas:oscar80173807@cluster0.tzc1m9g.mongodb.net/?retryWrites=true&w=majority