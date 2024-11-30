const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

app.use(express.json());


const mongoURL = "mongodb+srv://pradnyeshbhalekar78:UgFN3gDSzAXL55Ii@aws-mum-01.kns6f.mongodb.net/12hrshussle?retryWrites=true&w=majority&appName=aws-mum-01";



mongoose
  .connect(mongoURL)
  .then(() => console.log("MongoDB Connected!!"))
  .catch((error) => console.log("Error occurred: ", error));


const challengeSchema = new mongoose.Schema({
  challengeName: String,
  category: [String],
  description: String,
  img:String,
});


const Challenge = mongoose.model("Challenge", challengeSchema);

app.get('/challenges/trending', async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);  
  } catch (error) {
    console.log("Error occurred: ", error);
    res.status(500).json({ message: "Error occurred while fetching challenges" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
