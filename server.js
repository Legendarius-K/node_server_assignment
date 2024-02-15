const http = require("http");
const url = require("url");
const fs = require("fs");
const guitars = require("./guitars.js")
const guitarists = require("./guitarists.js")
console.log(guitarists);

let server = http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url, true);
    
    if (req.url === "/") {        
        res.writeHead(200, "The response is OK", { "Content-Type": "html" });
        res.write("<h1>Welcome to best guitar page of the entire internet</h1>");
        res.write("<p>Add '/guitars' in the URL to see a list of models, and add '/guitars/model-of-your-choice' to see more info on a specific model. You can also add '/guitarists' to show a bunch of legendary guitarists, or '/guitarists?guitarist=guitarist-name' to show a specific guitarist.</p>")
        res.end();

    } else if (req.url === "/guitars") {
        fs.readFile("./guitars.html", (err, data) => {
            if (!data) res.write(`${err}. No guitars were found`)
            res.writeHead(200, "The response is OK", { "Content-Type": "html" });
            res.end(data);
        })  

    } else if (parsedUrl.pathname.startsWith("/guitars/")) {
        const modelName = parsedUrl.pathname.split("/")[2];
        const guitar = guitars.getGuitarByPath(modelName); 
        if (guitar) {
            res.writeHead(200, "The response is OK", { "Content-Type": "html" });
            res.write(`<h1>${guitar.name}</h1>`);
            res.write(`<p>Users: ${guitar.Users}</p>`);
            res.write(`<p>Pickups: ${guitar.Pickups}</p>`);
            res.write(`<p>Information: ${guitar.Information}</p>`);
        } else {
            res.writeHead(404, "Not found");
            res.write("Guitar not found. Try different model.");
        }
        res.end();

    } else if (parsedUrl.pathname.startsWith("/guitarists")) {        
        if (parsedUrl.query.guitarist) {
            const guitaristName = parsedUrl.query.guitarist;
            const filteredGuitarists = guitarists.filter(guitarist => {
                return guitarist.path.includes(guitaristName);
            });
            res.writeHead(200, "The response is OK", { "Content-Type": "application/json" });
            res.write(JSON.stringify(filteredGuitarists));
            res.end();
        } else {
            res.writeHead(200, "The response is OK", { "Content-Type": "application/json" });
            res.write(JSON.stringify(guitarists));
            res.end();
        }
    }
})

server.listen(3040, () => console.log("Listening on port 3040..."));