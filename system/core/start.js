const bodyParser = require('body-parser')
const cors = require('cors');

module.exports = function(app){
    let apiRoutes = require("../routes/routes");

    app.get('/', (req, res) => res.send('Bienvenido a nuestra api de RoyalCookie. Todas nuestras rutas para consumir nuestra api empiezan por https://royalback.herokuapp.com/api/'));

    app.use('/api', apiRoutes);

    app.get('/favicon.ico', (req, res) => {
        res.sendStatus(404);
    });

    InitApp(app);
}

function InitApp(app){
    const port = process.env.PORT || 3000;
    app.use(bodyParser.json())

    

app.use((req, res, next) => {
    //allow access from every, elminate CORS
    res.setHeader('Access-Control-Allow-Origin','*');
    res.removeHeader('x-powered-by');
    //set the allowed HTTP methods to be requested
    res.setHeader('Access-Control-Allow-Methods','POST');
    //headers clients can use in their requests
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    //allow request to continue and be handled by routes
    next();
  });
/*
    app.use(cors({
        origin: '*',
        methods: '*',
        optionsSuccessStatus: 200,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Credentials': true

    }));  */ 

    app.listen(port, () => console.log(`Corriendo en el puerto ${port}`))
}