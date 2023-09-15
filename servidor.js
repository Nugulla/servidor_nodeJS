const  http = require('http');

const chalk = require('chalk');

const port = 3000;

const host = 'localhost';

const server = http.createServer((req, res) => {
    // Configura la cabecera de respuesta para que el cliente sepa que se envía JSON
    res.setHeader('Content-Type', 'application/json');
  
    // Crea un objeto JSON con tu nombre y un mensaje
    const response = {
      name: 'Ana Fuentes',
      message: '¡Hola desde mi servidor!'
    };
  
    // Envía la respuesta en formato JSON
    res.end(JSON.stringify(response));
  });

  
server.listen(port, host, () => {
    //imprime un mensaje por consola con la ruta incluyendo host y el puerto
    const message = `Server is running at ${chalk.green(`http://${host}:${port}`)}`;
    console.log(message);
   
   
});
