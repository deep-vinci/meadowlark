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
    res.render("home", {
        name: "Shivam"
    });
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.use((req, res) => {
    res.status(404);
    res.render("404")
})

app.use((err, req, res, next) => {
    res.status(500);
    res.render("500")
});

app.listen(app.get("port"), () => {
    console.log("Express started on http://localhost:" + app.get("port") + "; press Ctrl-C to terminate.")
})