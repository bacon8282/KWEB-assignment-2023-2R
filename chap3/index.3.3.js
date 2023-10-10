const express = require('express');

const port = 3000;
const app = express();

const factorial = (num, product = 1) => {
    if (num === 1) return product;
    return factorial(num - 1, product * num);
};

app.get('/factorial', (req, res) => {
    const num = req.query.number;
    return res.redirect(`factorial/${num}`);
});

app.get('/factorial/:number', (req, res) => {
    const num = Number(req.params.number);
    const ret = factorial(num);
    res.send(ret.toString());
});

app.listen(port, () => console.log(`Server`));