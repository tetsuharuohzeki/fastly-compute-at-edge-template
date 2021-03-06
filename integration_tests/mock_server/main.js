import * as http from 'node:http';

import * as HttpHeader from '../http_helpers/http_header.js';
import * as HttpStatus from '../http_helpers/http_status.js';
import * as Mime from '../http_helpers/mime.js';

const PORT = 8030;

(async function main() {
    const server = http.createServer((req, res) => {
        const url = req.url;
        console.log(`request incoming: ${url}`);

        if (url === '/hello_this_is_mock') {
            res.setHeader(HttpHeader.CONTENT_TYPE, Mime.TEXT_PLAIN_UTF_8);
            res.writeHead(HttpStatus.OK);
            res.end(`this is mock server listening on ${String(PORT)}`);
            return;
        }

        res.writeHead(HttpStatus.NOT_FOUND);
        res.end();
    });
    server.listen(PORT);
    console.log(`mock server listen on ${String(PORT)}`);
})();
