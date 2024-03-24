const http = require("http");
const fs = require("fs");
const path = require("path");

// Create a server
const server = http.createServer((req, res) => {
  // Set the content type
  res.setHeader("Content-Type", "text/html");

  // Routing
  if (req.url === "/" || req.url === "/index.html") {
    // Serve the index.html file
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading index.html");
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  } else if (req.url === "/about" || req.url === "/about.html") {
    // Serve the about.html file
    fs.readFile(path.join(__dirname, "about.html"), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading about.html");
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  } else {
    // Handle 404 - Not Found
    res.writeHead(404);
    res.end("Page not found");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
