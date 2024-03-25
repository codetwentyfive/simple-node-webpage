const http = require("http");
const fs = require("fs");
const path = require("path");

// Define mappings from clean URLs to file paths
const routeMappings = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
  "/404": "404.html",

};

// Create a server
http.createServer(function (req, res) {
  // Parse the URL
  const url = req.url;

  // Map clean URLs to file paths
  const filePath = routeMappings[url];

  if (filePath) {
    // Serve the corresponding file
    fs.readFile(filePath, function (err, data) {
      if (err) {
        res.writeHead(500);
        res.end("Error loading file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    // Handle 404 - Not Found
    res.writeHead(404);
    res.end("Page not found");
  }
}).listen(8080);
