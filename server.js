const express = require('express');
const routes = require('./Routes/routes');

/////*********** create Sample Data to test the connection *******//////////

// usersModel.create({
// 	name: 'TestUser',
// 	email: 'TestEmail@test.net',
// 	password: 'Test1234',
// });

//Initialize Express
const app = express();

//rEGISTER ROUTES

app.use(routes);

//Configure the port

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('SERVER RUNNING ON PORT 3000');
});
