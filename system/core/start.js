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

    const corsOpts = {
        origin: 'http://localhost/:8080',
      
        methods: [
          'GET',
          'POST',
        ],
      
        allowedHeaders: [
          'Content-Type',
        ],
      };

    app.use(cors(corsOpts))

    app.listen(port, () => console.log(`Corriendo en el puerto ${port}`))
}