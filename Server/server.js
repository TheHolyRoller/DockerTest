const express = require('express');
const app = express();
const cors = require('cors'); 

app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', '');
  next();
});

app.get('/upload', (req, res) => {
    // Your code here
    const payload = req.body;
    console.log("this is the payload", payload);
    res.setHeader('Content-Security-Policy', "default-src 'self' http://localhost:3000");
 
    res.json({ message: "Testing" });

  });
  

const port = process.env.PORT || 8080; 

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));