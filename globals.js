//DB CRDS
const USERNAME = "admin";
const PASSWORD = "icep2020"
const DATABASE_HOSTNAME = "inst-orientation-db.cvqpj5ith2h1.us-east-1.rds.amazonaws.com";
//API PORTS
const HOSTNAME = "https://qkdefufg7m.us-east-1.awsapprunner.com"
const SOCKETIO_PORT = process.env.PORT || 443;
const GRAPH_PORT = process.env.PORT || 80;
const APP_PORT = process.env.PORT || 80;


function DATABASE()
{ 
    if(DATABASE_HOSTNAME == 'localhost')
        return "localhost"
    else
        return "awshosted"

}

module.exports = {
    HOSTNAME,
    DATABASE_HOSTNAME,
    USERNAME,
    PASSWORD,
    SOCKETIO_PORT,
    GRAPH_PORT,
    APP_PORT,
    DATABASE
}
