const express = require('express');

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    return res.render('login.pug');
});

const stringify = o => Object.keys(o).map(k => `${k}: ${o[k]}`).join('\n');
app.post('/login', (req, res) => {
    const ret = stringify(req.body);
    return res.send(ret);
})

app.listen(port, () => console.log(`Server`));