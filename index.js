const express = require("express"); 
const PORT = 3000; 
const APIRouter = require('./routes/api'); 

const app = express(); 

app.use("/api", APIRouter); 

app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`)); 