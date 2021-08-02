require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 6000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.listen(PORT, async () => {
  try {
    await sequelize.sync({ force: true });
    console.log(`Connection has been established successfully.\nServer running on port: ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
// app.listen(PORT, async () =>{
//   try {
//     await db.authenticate();
//     console.log(`Connection has been established successfully.\nServer running on port: ${PORT}`);
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// });

app.use("/", (req, res) => {
  res.status(200).send("Hello express");
})




// app.use("/posts", postRoutes);
// const CONNECTION_URL = 'mongodb+srv://panumas:qwerty123456@memories.g6swm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//   .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false); 
