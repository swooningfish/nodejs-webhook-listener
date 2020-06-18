// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")
require('dotenv').config();
const { exec } = require("child_process");



// Initialize express and define a port
const app = express()
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;
const token = process.env.TOKEN;

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())

app.post("/hook", (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
})

app.get('/', (req, res) => {
    // check if verification token is correct
    if (req.query.token !== token) {
        return res.sendStatus(401);
    }

    // return challenge
    return res.end('Webhook Example');
    //return res.end(req.query.challenge);
});

app.get('/unblock', (req, res) => {
    // check if verification token is correct
    if (req.query.token !== token) {
        return res.sendStatus(401);
    }

	exec("./commands/unblockdomains.sh", (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		return res.end(stdout);
	});
});

app.get('/block', (req, res) => {
    // check if verification token is correct
    if (req.query.token !== token) {
        return res.sendStatus(401);
    }

	exec("./commands/blockdomains.sh", (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		return res.end(stdout);
	});
});



app.get('/test', (req, res) => {
    // check if verification token is correct
    
	const data = {
        responses: [
            {
                query: req.query,
				body: req.body
            }
        ]
    };
	
	//console.log(req.body);
	//console.log(req.query);
    // return challenge
    res.json(data);
	
    //return res.end(req.query.challenge);
});

//app.get('/', (req, res) => res.send('Webhook Example'))

app.post('/bot', (req, res) => {
    // check if verification token is correct
    if (req.query.token !== token) {
        return res.sendStatus(401);
    }

    // print request body
    console.log(req.body);

    // return a text response
    const data = {
        responses: [
            {
                type: 'text',
                elements: ['Hi', 'Hello']
            }
        ]
    };

    res.json(data);
});

// Start express on the defined port
app.listen(PORT, HOST);
console.log(`🚀 Server running on port http://${HOST}:${PORT}`);


