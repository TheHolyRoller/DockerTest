const express = require('express');
const cors = require('cors'); 

// IP ADDRESS
// 172.17.0.2

const app = express();


app.use(cors())

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self' *");
  next();
});




app.get('/', (req, res) => {
    // Your code here

    res.json({ message: 'Hello World!' });
  });
  

const port = process.env.PORT || 8080; 

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));