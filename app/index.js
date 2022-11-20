const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1 , name: 'Maths'},
    { id: 2 , name: 'Physics'},
    { id: 3 , name: 'Chemistry'},
];

app.get('/', (req, res) => {
    res.send('Hello World!!!!');
});

app.get('/api/courses', (req,res) => {
    res.send([1,2,3]);
});

app.get('/api/courses/:id', (req,res) =>{
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name : Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);
    if(result.error){
        // console.log(result.error.details[0].message);
        // res.status.apply(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);

});


// PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listen on port ${port}...`));