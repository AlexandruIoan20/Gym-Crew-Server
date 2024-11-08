const express = require("express"); 
const PORT = 3000; 
const APIRouter = require('./routes/api'); 
const mongoose = require('mongoose'); 
const dotenv = require("dotenv"); 
dotenv.config({ path: '.env.local' }); 

const app = express(); 

app.use("/api", APIRouter); 

main().catch(err => console.log(err)); 

async function main () {  
    const mongodb = process.env.MONGODB_URL; 
    await mongoose.connect(
        mongodb, 
    ); 

    console.log("Connected to the database."); 
}

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'production' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`)); 

module.exports = app; 