const process = require('process');
const express = require('express');
const Knex = require('knex');

const app = express();
app.enable('trust proxy');

const knex = connect();

function connect() {
    const config = {
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE
    };

    if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
        config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
    }

    // Connect to the database
    const knex = Knex({
        client: 'mysql',
        connection: config
    });

    return knex;
}


//get all the courts
app.get("/api/create/:id", function (req, res) {    
    const tableName = req.params.id;
    knex.schema.createTable(tableName,
            (table) => {
                table.increments('id');
                table.string('name');
            })
        .then(() => {
            console.log(`Successfully created ${tableName} table.`);
        })
        .catch((err) => {
            console.error(`Failed to create ${tableName} table:`, err);
            if (knex) {
                knex.destroy();
            }
        });
    res.send("done")
})

//post
app.post("/api/add/courts/:name", function (req, res) {
    knex('courts')
    .insert({ name: req.params.name})
    .then(() => {
        console.log(`Successful insert.`);
    })
    .catch((err) => {
        console.error(`Failed to insert:`, err);
        if (knex) {
            knex.destroy();
        }
    });
    res.json("done")
})


app.get("/api/info/:name", function (req, res) { 
    knex
        .from('courts')
        .select('id', 'name')
        .where('name', req.params.name)
        .then(results => {
            console.log(results)
            res.json(results);
        })
    });


app.get("/api/courts", (req, res) => {
    knex
        .from('courts')
        .select('name', 'image', 'comments').then(results => {
            console.log(results)
            console.log(JSON.stringify(results))
            res.json(results);
        })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});