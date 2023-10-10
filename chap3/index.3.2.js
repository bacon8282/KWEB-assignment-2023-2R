const express = require('express')

const port = 3000
const app = express();

app.get('/board/page/:page', (req, res) => {
    const ret = `This is page #${req.params.page}`;
    res.send(ret);
});

app.listen(port, () => console.log(`Server`))