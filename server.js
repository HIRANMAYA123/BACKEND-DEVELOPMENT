// server.js

const http = require("http");

const PORT = 3000;

console.log("Creating HTTP server...");

const server = http.createServer((req, res) => {

    console.log("Request received:", req.method, req.url);

    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/") {
        console.log("Serving Home Page");

        res.statusCode = 200;
        res.end("Welcome to My Node.js Server!");
    }

    else if (req.url === "/about") {
        console.log("Serving About Page");

        res.statusCode = 200;
        res.end("This is the About Page.");
    }

    else if (req.url === "/contact") {
        console.log("Serving Contact Page");

        res.statusCode = 200;
        res.end("This is the Contact Page.");
    }

    else {
        console.log("Invalid Route:", req.url);

        res.statusCode = 404;
        res.end("404 Error: Page Not Found.");
    }
});

console.log("Starting server...");

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
