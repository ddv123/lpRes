var  express = require('express'),
	 app = express();

var port = process.env.PORT || 8080;
app.use(express.static(__dirname +'/public'));

app.set("view engine", "ejs");

app.get('/', function (req, res) {
  res.render("home");
})
 
app.listen(port, function (){
	console.log("Server started");
})