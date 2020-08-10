const Customer = require('../models/customer');

exports.getCustomers = (req, res, next) => {
    console.log('getCustomers');
    var editing = req.query.editing;
    Customer.findAll()
      .then((customers) => {
        res.render('customers', {
          clienti: customers,
          title: 'Elenco clienti',
          editing: editing,
          path: '>clienti'
        });
      })
      .catch(err => console.log(err));
  };
  
  exports.getCustomerById = (req, res, next) => {
    console.log('getCustomerById');
    var customerId = req.params.customerId;
    var editing = req.query.editing;
    Customer.findById(customerId)
      .then(customer => {
        res.render('customer', {
          clienti: customers,
          title: customer.surname,
          editing: editing,
          path: '>customer'
        });
      })
      .catch(err => console.log(err));
  };
  
  exports.editCustomer = (req, res, next) => {
    console.log('render edit-customer')
    var customerId = req.params.customerId;
    var editing = req.query.editing;
    console.log('editing ' + editing);
    console.log('customerId ' + customerId);
    if(editing === 'true'){
      Customer.findByPk(customerId)
      .then(customers => {
        var customer = customers[0];
        res.render('edit-customer', {
          clienti: customer,
          title: customer.surname,
          editing: true,
          path: '>customer'
        });
      })
      .catch(err => console.log(err))
    }
    else {
        
        res.render('edit-customer', {
            clienti: [],
            title: 'Nuovo cliente',
            editing: false,
            path: '>customer'
      })
    }
  };
  
  exports.postAddCustomer = (req, res, next) => {
    
    const surname = req.body.surname;
    const name = req.body.name;
    console.log('postAddCustomer ' + surname);

     Customer.create(
      {
        name: name,
        surname: surname
        
      })
      .then(customer => {
        console.log('New customer created ' + customer.surname);
          console.log('Created Product');
          res.redirect('/clienti');
        })
      .catch(err => console.log(err));
  };

  exports.template = (req, res, next) => {
    res.render('template', {
        clienti: [],
        title: 'Nuovo cliente',
        editing: false,
        path: '>customer'
  })
};
