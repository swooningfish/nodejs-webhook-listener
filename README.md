# .env

Edit the .env file for setting port or token. 


# Install Node modules
`$ npm install`

# Run the webhook listener
`$ node index.js`

# ngork tunnle

Install ngork and run as a tunnle to access the box

`$ ngork http 3000`

# Using IFTTT

To create a webhook on alexa commands to run commands

# PM2
Source: https://pm2.keymetrics.io/docs/usage/quick-start/

##Install 
`sudo npm install pm2@latest -g`

## Start Service and restart if any changes
`pm2 start index.js --name webhook-listener --watch --ignore-watch="node_modules"`