import express from "express";
import { LowSync, JSONFileSync} from 'lowdb'
const PORT = 4000;


const app = express();
app.listen(PORT);

const dbPath = "./src/phoneCatalog.json";
const adapter = new JSONFileSync(dbPath);
const db = new LowSync(adapter);

/*
<-------------------- Middleware -------------------->
*/

//Allow react app use fetch API to consume my Node API
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);

    next();
});

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

/*
<-------------------- GET Requests -------------------->
*/

app.get("/phones", (req, res) => {

    db.read()
    let data = db.data 
    res.setHeader("Content-Type","application/json")
    res.send(data)
})

app.get("/phone=:name", (req, res) => {
    db.read()
    const objectArray = db.data;
    let included;
    //Find will call a callback function that will iterate the phone object array and compare the name of each item of the db with the param in the URL
    const phoneFound = objectArray.find(i => {
        included = (i.name.toLowerCase()).includes(req.params.name.toLocaleLowerCase())
        if (included == true) {
            return i;
        } else { return null}
    })
    //This get has to return an array so in phoneList, the useState can update the phones array value with this
    let resultArray = [];
    if (phoneFound != null) {
        resultArray = [phoneFound]
    }
    res.send(resultArray);
})

/*
<-------------------- POST Requests -------------------->
*/

app.post("/addPhone", (req, res) => {
    
    req.body = setUnkown(req.body);

    db.read();
    db.data.push(req.body);
    db.write();
    res.redirect(`http://127.0.0.1:3000/`)
})

/*
<-------------------- PUT Requests -------------------->
*/

//Should be PUT, but HTML form donest allow method="PUT"
app.post("/editPhone",(req,res) => {
    let newPhone = req.body;
    console.log(req.body)
    console.log("antes" +newPhone.name)
    db.read();
    db.data.forEach(i => {
        if (i.name == newPhone.name) {
            i.name = newPhone.newName
            console.log("i.name: " + i.name)
            i.manufacturer = newPhone.manufacturer
            i.description = newPhone.description
            i.color = newPhone.color
            i.price = newPhone.price
            i.imageFileName = newPhone.imageFileName
            i.screen = newPhone.screen
            i.processor = newPhone.processor
            i.ram = newPhone.ram
            i = setUnkown(i);
        }
    });
    console.log("despues " + db.data[1].name)
    db.write();
    res.redirect(`http://127.0.0.1:3000/`)
})

/*
<-------------------- DELETE Requests -------------------->
*/

app.delete("/delete=:name", (req, res) => {
    db.read();
    const objectArray = db.data;
    const filteredArray = objectArray.filter(i => i.name != req.params.name);
    db.data = filteredArray;
    db.write()
    res.send("ok")
})

/*
<-------------------- Additional Functions -------------------->
*/

function setUnkown(x) {
    if(x.manufacturer == ""){
        x.manufacturer = "unknown"
    }

    if(x.description == ""){
        x.description = "unknown"
    }

    if(x.color == ""){
        x.color = "unknown"
    }

    if(x.price == "" || x.price == null){
        x.price = "unknown"
    }

    if(x.screen == ""){
        x.screen = "unknown"
    }

    if(x.processor == ""){
        x.processor = "unknown"
    }

    if(x.ram == "" || x.ram == null){
        x.ram = "unknown"
    }

    return x
}