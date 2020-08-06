const Cliente = require('../models/clienti');

exports.getFirst = (req, res, next) => {
        res.render('first', { 
            title: 'first', 
            name: 'first ',
            path: '>first', 
          });
    };
exports.getHome = (req, res, next) => {
        res.render('home', { 
            title: 'home', 
            name: 'home ',
            path: '>home', 
          });
};
exports.getClienti = (req, res, next) => {
  console.log('getClienti');
  Cliente.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('clienti', {
        clienti: rows,
        title: 'Elenco clienti',
        path: '>clienti'
      });
    })
    .catch(err => console.log(err));
};


