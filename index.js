const http = require('http');
const fs = require('fs/promises');


const PORT = 3000;

const requestListener = async (req, res) => {
    const {url} = req;
    if ( url === '/index.html') {
        try {
            const data = await fs.readFile('./views/index.html', 'utf-8');
            res.end(data);
        } catch(error) {
            res.statusCode = 404;
            res.end();
        }

    } else {
        res.statusCode = 400;
        res.end();
    }
}

const server = http.createServer(requestListener);

server.listen(PORT);