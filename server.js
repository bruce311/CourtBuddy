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


app.get("/api/create/:id", function (req, res) {    
    const tableName = req.params.id;
    knex.schema.createTable(tableName,
            (table) => {
                table.increments('id');
                table.string('name');
            })
        .then(() => {
            console.log(`Successfully created ${tableName} table.`);
            return knex.destroy();
        })
        .catch((err) => {
            console.error(`Failed to create ${tableName} table:`, err);
            if (knex) {
                knex.destroy();
            }
        });
    res.send("done")
})

// change to POST
app.get("/api/add/courts", function (req, res) { 
    knex('courts')
    .insert({ name: 'Intramural Sports Building' })
    .then(() => {
        console.log(`Successful insert.`);
        return knex.destroy();
    })
    .catch((err) => {
        console.error(`Failed to insert:`, err);
        if (knex) {
            knex.destroy();
        }
    });
    res.send("done")
})

app.get("/api/courts", (req, res) => {
    knex
        .from('courts')
        .select('id', 'name').then(results => {
            console.log(results)
            res.json(results);
        })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});