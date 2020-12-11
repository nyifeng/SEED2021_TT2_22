import express from 'express';

import { db } from './database/db';

const app = express();

app.use('/', (req: any, res: any, next: any) => {
    res.json({
        message: 'success'
    })
});

db
    .then(result => {
        console.log('Connected to mongo database');
        app.listen(8080, () => {
            console.log('Server running on port 8080');
        });
    })
    .catch(err => console.log(err));
