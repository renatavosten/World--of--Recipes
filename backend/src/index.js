import express from 'express';
import data from './store';
import cors from 'cors';
import connect from './db.js';
import mongo from 'mongodb'

const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati

app.use(cors());
app.use(express.json());

let checkAttributes= (data)=>{
    if (!data.postedBy || !data.naziv || !data.slika || !data.priprema || !data.vrijeme || !data.kategorija ){
        return false;
    }
    return true;
};

// recepti po id-u
app.get('/recepti/:id',async (req,res )=> {
    let id= req.params.id;
    let db = await connect();
    
    let doc= await db.collection("recepti").findOne({_id: mongo.ObjectId(id)});
    console.log(doc);
    res.json(doc);
    
});
    
app.get('/recepti', async (req, res) => {
    let db = await connect(); // pristup db objektu    
    let cursor = await db.collection("recepti").find();  
    let results = await cursor.toArray();
            
    res.json(results) 
});
        

app.post('/recepti', async (req, res) => {
    let data= req.body;
    //postavi vrijeme i datum posta
    //zelimo validan id pa pustamo da ga mongo postavi
    delete data._id;

    let check= checkAttributes(data);
    if(!check){
        res.json({
            status: "fail",
            reason:"incomplete post",
        });
        return 
    }
    
    let db= await connect();

    let result= await db.collection("recepti").insertOne(data);
    

    if(result && result.insertedCount == 1){
        res.json(result.ops[0]);
    }
    else {
        res.json({
            status: "fail",
        });
    }
});



app.listen(port, () => console.log(`Slušam na portu ${port}!`));









