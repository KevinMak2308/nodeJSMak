 const express = require("express");
 const fs = require("fs");
 const app = express();

 app.use(express.static("public"));

 const navigation = fs.readFileSync("./public/components/navigation/navigation.html").toString();
 const footer = fs.readFileSync("./public/components/footer/footer.html").toString();
 
 const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
 const intro = fs.readFileSync("./public/pages/weeks/intro.html").toString();
 const functions = fs.readFileSync("./public/pages/weeks/functions.html").toString();
 const exp = fs.readFileSync("./public/pages/weeks/express.html").toString();

 const frontpageWithNavAndFoot = navigation.replace("%%TITLE_PLACEHOLDER%%", "Frontpage") + frontpage + footer;
 const introWithNavAndFoot = navigation.replace("%%TITLE_PLACEHOLDER%%", "Introduction Page") + intro + footer;
 const functionsWithNavAndFoot = navigation.replace("%%TITLE_PLACEHOLDER%%", "Functions Page") + functions + footer;
 const expWithNavAndFoot = navigation.replace("%%TITLE_PLACEHOLDER%%", "Express Page") + exp + footer;

 app.get("/", (req, res) => {
     res.send(frontpageWithNavAndFoot);
 });

 app.get("/intro", (req, res) => {
    res.send(introWithNavAndFoot);
});

app.get("/functions", (req, res) => {
    res.send(functionsWithNavAndFoot);
});

app.get("/express", (req, res) => {
    res.send(expWithNavAndFoot);
});

 const PORT = 8080;
 app.listen(PORT, () => {
     console.log("Your server has booted up on this port: ", PORT);
 });