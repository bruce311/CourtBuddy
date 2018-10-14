# Court Buddy

## Testing Locally

Run Cloud SQL Proxy Using Cloud SDK authentication

```shell
./cloud_sql_proxy -instances=<INSTANCE_CONNECTION_NAME>=tcp:3306
```

Filling in environment variables, run:

```shell
export SQL_USER=[YOUR_SQL_USER]
export SQL_PASSWORD=[YOUR_SQL_PASSWORD]
export SQL_DATABASE=[YOUR_SQL_DATABASE]
npm install
npm start
```

Invoking `npm start` concurrently starts the React application on port 3000 and the Node server on port 8080.

You can also enter the Cloud SQL instance with mysql client to communicate directly
```shell
mysql -u <USERNAME> -p --host 127.0.0.1
```

## Deployment to Google App Engine

Create a file called `app.yaml` with env variables filled in for your MySQL database, based on the template in `app.standard.yaml`

Deploy and Launch
```shell
gcloud app deploy
gcloud app browse
```

### Useful Links:
Local debugging and linking Cloud SQL
https://cloud.google.com/appengine/docs/standard/nodejs/using-cloud-sql

Deploying an app to App Engine
https://cloud.google.com/appengine/docs/standard/nodejs/testing-and-deploying-your-app#deploying_your_program

