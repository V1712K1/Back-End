//a)
app.get('/persons', function (request, response){
    person.findAll().then(persons => response.json(persons)
    );
});
 
// b)
app.post('/persons', function (req, res){
     const result = person.create({
        Firstname:'Jose',
        Lastname: 'Silva',
        Profession: 'Bombeiro',
        Age: '40'
     }).then(resultado => res.json(resultado))   
     console.log(result);
});
 
// c)
 
app.delete('/persons', function (req, res) {
    
    const result = person.destroy({
         where: { id: req.body.id }
    })
    .then((resultado) => {
        if (resultado == 0){
            console.log("Id inesxistente!")
        }else{
            res.json(resultado)
        }
    })
    console.log(result)
})
 
// d)
 
app.delete('/persons/:id', function (req, res) {
 
    const result = person.destroy({
         where: { id: req.params.id }
    })
    .then((resultado) => {
        if (resultado == 0){
            console.log("Id inesxistente!")
        }else{
            res.json(resultado)
        }
    })
    console.log(result)
})
 
// e)
 
app.get('/person', function (req, res) {
 
    const result = person.findAll({
        where: { id: req.query.id }
    })
    .then((resultado) => {
        if (resultado == 0){
            console.log("Id inesxistente!")
        }else{
            res.json(resultado)
        }
    })
    console.log(result)
})
 
// f)
 
app.get('/person/:age/:profession', function (req, res) {
 
    const result = person.findAll({
        where: {
             Age: req.params.age,
             Profession: req.params.profession 
        }
    })
    .then((resultado) => {
        if (resultado == 0){
            console.log("Id inesxistente!")
        }else{
            res.json(resultado)
        }
    })
    console.log(result)
})
 
//g)
 
app.post('/persons', function(req, res){
 
    person.update(req.body, {
         where: { id: req.query.id }
    })
    .then(resultado => {
        if (resultado == 0){
            console.log("Id inexistente!")
        }else{
            res.json(resultado)
        }
    });
});