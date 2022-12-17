const mongoose = require("mongoose");
const { MongoClient } = require('mongodb')

const connString = process.env.URI;
const client = new MongoClient(connString);

// const connectDB = async () => {
//   try {
//       await mongoose.connect(client, {
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//       });
  
//       console.log("Mongodb connected!!");
//     } catch (error) {
//       console.log("Mongodb not connected...");
//       console.log(error);
//       process.exit(1);
//     }
//   };

const connectDB = async () => {
  try {
    await mongoose.connect(connString, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    });

    console.log("Mongodb connected!!");

  } catch (error) {
    console.log("Mongodb not connected...");
    console.log(error);
    } finally {
    await client.close();
  }
};


module.exports = connectDB;
  
  // const uri = "mongodb+srv://KK:KK1234@cluster0.kk30mmg.mongodb.net/?retryWrites=true&w=majority";
  
//    
// const connectDB = async () => {
//   try {
//     await mongoose.connect(connString, {
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });

//     console.log("Mongodb connected!!");
//   } catch (error) {
//     console.log("Mongodb not connected...");
//     console.log(error);
//     process.exit(1);
//   }
// };




// const { MongoClient } = require('mongodb')

// 

//     try {
//         await client.connect();

//         
//         })

//         

//     } catch (error) {
//         console.log(error);
//     } finally {
//         await client.close();
//     }
    
// }

// main().catch(console.error);

