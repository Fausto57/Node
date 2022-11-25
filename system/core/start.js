const bodyParser = require('body-parser')

module.exports = function(app){
    let apiRoutes = require("../routes/routes");

    app.get('/', (req, res) => res.send('Hello World Node v2!'));

    app.use('/api', apiRoutes);

    InitApp(app);
}

function InitApp(app){
    const port = process.env.PORT || 3000;
    app.use(bodyParser.json())
    app.listen(port, () => console.log(`Corriendo en el puerto ${port}`))
}