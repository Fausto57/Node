const bodyParser = require('body-parser')
const cors = require('cors');

module.exports = function(app){
    let apiRoutes = require("../routes/routes");

    app.get('/', (req, res) => res.send('Bienvenido a nuestra api de RoyalCookie. Todas nuestas rutas para consumir nuestra api empiezan por https://royalback.herokuapp.com/api/'));

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

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
     
        next();
    });
    

    app.listen(port, () => console.log(`Corriendo en el puerto ${port}`))
}