const express = require('express')

const port = 3000
const app = express();

app.use(express.urlencoded({ extended: true }));

const stringify = obj =>
    Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');

app.get('/', (req, res) => {
    const ret = stringify(req.query);
    res.send(ret);
});

const callbackForNotGet = (req, res) => {
    const ret = stringify(req.body);
    res.send(ret);
}

app.post('/', callbackForNotGet);
app.put('/', callbackForNotGet);
app.delete('/', callbackForNotGet);

app.listen(port, () => console.log(`Server`))