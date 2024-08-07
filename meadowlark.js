let express = require("express");
let handlebars = require("express3-handlebars").create({
    defaultLayout: "main"
});

let app = express();

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.set("port", process.env.PORT || 5000);

app.get("/", (req, res) => {
    res.type("text/plain");
    res.send("MeadowLark Travel");
})

app.get("/about", (req, res) => {
    res.type("text/plain");
    res.send("About MeadowLark Travel")
})

app.use((req, res) => {
    res.type("text/plain");
    res.status(404);
    res.send("404 - Not Found");
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type("text/plain");
    res.status(500);
    res.send("500 - Server Error")
});

app.listen(app.get("port"), () => {
    console.log("Express started on http://localhost:" + app.get("port") + "; press Ctrl-C to terminate.")
})