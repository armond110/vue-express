const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
