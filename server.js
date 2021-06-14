// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware middle*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 8000;

// Spin up the server
const server = app.listen(port, function (){
  console.log('server is running on port:'+ port);
});

//routes with a callback function
// Post Route
let projectData ={}

app.post('/addData', function (req, res){
  projectData.temp = req.body.temp;
  projectData.date = req.body.date;
  projectData.userResponse = req.body.feelings;
  res.send(projectData);
});

// get Route
app.get('/all', function (req, res) {
  res.send(projectData);
  console.log(projectData);
});
