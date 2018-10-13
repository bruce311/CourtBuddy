const express = require('express'); 

const app = express();

app.get('/hello', (req, res) => {
    console.log("working")
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})