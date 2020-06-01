import express from 'express';

const app = express();

app.get('/users',(request, response)=>{
    //método GET
    
    response.json([
        'Diego',
        'Italo',
        'Lucas'
    ])

    
});

app.listen(3333)//definindo a porta

