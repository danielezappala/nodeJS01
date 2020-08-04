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