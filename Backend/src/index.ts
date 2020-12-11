import express from 'express';

const app = express();

app.use('/', (req: any, res: any, next: any) => {
    res.json({
        message: 'success'
    })
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
}) ;