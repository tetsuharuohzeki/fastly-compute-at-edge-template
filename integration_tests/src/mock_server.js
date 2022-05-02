import * as http from 'node:http';

import * as HttpHeader from '../__helpers__/http_header.js';
import * as HttpStatus from '../__helpers__/http_status.js';
import * as Mime from '../__helpers__/mime.js';

const PORT = 8030;

(async function main(_process) {
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
})(process);
