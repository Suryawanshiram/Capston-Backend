const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://netaji:UXnG3mwxl778rnbx@cluster0.oqozoj2.mongodb.net/test?retryWrites=true&w=majority"


const createConnection = async () => {
     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, result) => {

          if (err)
               console.log("something is went wrong please try again", err)
          else {
               console.log("MongoDB is Connected successfully");

               const fetched_data = await mongoose.connection.db.collection("foodCategory"); //thes data itms coming form "sample"_collection
               fetched_data.find({}).toArray(async function (err, data) {

                    const fetched_category = await mongoose.connection.db.collection("food_items");//thse data comming "categroy"_collection
                    fetched_category.find({}).toArray(function (err, data) {

                         if (err)
                              console.log(err);
                         else
                              //  console.log(data)   // Check for data on console 
                              global.food_items = data; // declaring globle variable which can updata/use anywhere in our application and assining to that variabel "data" 
                              global.food_category = data; // assining to globale variable category collection entire data 

                    })

               })


          }
     });
}
module.exports = createConnection;




























