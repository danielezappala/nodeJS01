const Customer = require('../models/customer');
const Membership = require('../models/membership');

Customer.hasMany(Membership);
Membership.belongsTo(Customer);

exports.getCustomers = (req, res, next) => {
  console.log('getCustomers');
  var editing = req.query.editing;
  Customer.findAll(
    { include: [Membership] }
  )
    .then(customers => {
      res.render('clienti/list', {
        clienti: customers,
        title: 'Elenco clienti',
        editing: editing,
        path: 'clienti/elenco'
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
      res.render('clienti/list', {
        clienti: customers,
        title: customer.surname,
        editing: editing,
        path: 'clienti/elenco'
      });
    })
    .catch(err => console.log(err));
};

exports.getEditCustomer = (req, res, next) => {
  var customerId = req.params.customerId;
  var editing = req.params.editing;
  console.log('editing ' + editing);
  console.log('customerId ' + customerId);
  if (editing === 'true') {
    Customer.findOne(
      {
        where: {
          id: parseInt(customerId)
        },
        include: [Membership],
      })
      .then(customer => {
        console.log(JSON.stringify(customer))
        res.render('clienti/edit', {
          cliente: customer,
          title: customer.surname,
          editing: true,
          path: 'clienti/modifica'
        });
      })
      .catch(err => console.log(err))
  }
  else {

    res.render('clienti/edit', {
      cliente: [],
      title: 'Nuovo cliente',
      editing: false,
      path: 'clienti/modifica'
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

exports.postUpdateCustomer = (req, res, next) => {

  const idToUpdate = req.body.customerId;
  const updatedSurname = req.body.surname;
  const updatedName = req.body.name;

  console.log('postUpdateCustomer id ' + idToUpdate);

  Customer.findOne(
    {
      where: {
        id: parseInt(idToUpdate)
      }
    })
    .then(customer => {
      customer.id = idToUpdate;
      customer.surname = updatedSurname;
      customer.name = updatedName;
      return customer.save()
    })
    .then(customer => {
      console.log('customer to update ' + customer.surname);
      console.log('customer updated');
      res.redirect('/clienti');
    })
    .catch(err => console.log(err));
};

exports.getCustomerMemberships = (req, res, next) => {
  console.log('getCustomerMemberships');
  var customerId = req.params.customerId;
  Customer.findOne({
    where: { id: customerId },
    include: {
      model: Membership
    }
  })
    .then(customer => {
      res.render('clienti/edit', {
        cliente: customer,
        editing: true,
        title: 'Dettaglio abbonamenti cliente',
        path: 'clienti/modifica'
      })
    })
    .catch(err => console.log(err));
};

exports.getAddCustomer = (req, res, next) => {
  var customerId = req.query.customerId;
  console.log('customerId ' + customerId);
  Customer.create({
    name: "",
    surname: ""
  })
    .then(customer => {
      res.render('clienti/add', {
        title: customer.name + ' ' + customer.surname,
        abbonamento: [],
        editing: true,
        path: '>clienti/aggiungi'
      })
    })
}

exports.getNewCustomer = (req, res, next) => {
  console.log('controller getNewCustomer');
  Customer.create(
    {
      name: "",
      surname: ""
    })
  .then(customer => {
  res.render('clienti/edit/true/' + customer.id, {
    title: "Aggiungi cliente",
    cliente: [customer],
    editing: false,
    path: '>abbonamenti'
  })
  })
  .catch(err => console.log(err));
}