const express = require( 'express' );
const { usersRouter } = require( './routes/users.routes' );
const { repairsRouter } = require( './routes/repairs.routes' );
const { db } = require( './utils/database' );

const app = express(  );

app.use( express.json() );

app.use( '/api/v1/users', usersRouter );
app.use( '/api/v1/repairs', repairsRouter );

db.authenticate()
    .then( (  ) => console.log('Database authenticated') )
    .catch( error => console.log( error ) );

db.sync()
    .then( (  ) => console.log('Database synced') )
    .catch( error => console.log( error ) );

const PORT = 4000;

app.listen( PORT, (  ) => {
    console.log( `Express app running on PORT: ${ PORT }` );
} );