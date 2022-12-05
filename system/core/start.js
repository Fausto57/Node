const bodyParser = require('body-parser')
const cors = require('cors');

module.exports = function(app){
    let apiRoutes = require("../routes/routes");

    app.get('/', (req, res) => res.send('Hello World Node v2!'));

    app.use('/api', apiRoutes);

    app.get('/favicon.ico', (req, res) => {
        res.sendStatus(404);
    });

    InitApp(app);
}

//heroku restart -a backroyal

function InitApp(app){
    const port = process.env.PORT || 3000;
    app.use(bodyParser.json())
    app.use(cors());
    app.listen(port, () => console.log(`Corriendo en el puerto ${port}`))
}