require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { sequelize, User, Post } = require('./models');

const app = express();
const PORT = process.env.PORT || 6000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.listen(PORT, async () => {
  try {
    // await sequelize.sync({ force: true});
    await sequelize.authenticate();
    console.log(`Connection has been established successfully.\nServer running at http://localhost: ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status.apply(500).json({ error: 'Somthing went wrong' })
  }
});

app.get('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({
      where: { uuid },
      include: 'posts'
    })
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status.apply(500).json({ error: 'Somthing went wrong' })
  }
});


app.post('/user', async (req, res) => {
  const { name, email, role, userName } = req.body;
  try {
    const user = await User.create({ name, email, role, userName });
    return res.json(user)
  } catch (error) {
    console.log(error);
    return res.status(500).json(error)
  }
});

app.post('/post', async (req, res) => {
  const { userUuid, body } = req.body;
  try {
    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.create({ body, userId: user.id });
    return res.json(post)
  } catch (error) {
    console.log(error);
    return res.status(500).json(error)
  }
});

app.get('/posts', async (req, res) => {
  try {

    const posts = await Post.findAll({ include: 'user' });

    return res.json(posts)
  } catch (error) {
    console.log(error);
    return res.status(500).json(error)
  }
});

app.delete('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({ where: { uuid } });
    await user.destroy();

    return res.json({ message: 'User deleted!' });
  } catch (error) {
    console.log(error);
    return res.status.apply(500).json({ error: 'Somthing went wrong' })
  }
});

app.put('/users/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  const { name, email, role } = req.body;
  try {
    const user = await User.findOne({ where: { uuid } });
    user.name = name;
    user.email = email;
    user.role = role;

    await user.save();

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status.apply(500).json({ error: 'Somthing went wrong' })
  }
});

// app.use("/posts", postRoutes);
// const CONNECTION_URL = 'mongodb+srv://panumas:qwerty123456@memories.g6swm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//   .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false); 
