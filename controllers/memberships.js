const Customer = require('../models/customer');
const Membership = require('../models/membership');
const { get } = require('jquery');

Customer.hasMany(Membership);
Membership.belongsTo(Customer);


exports.postAddMembership = (req, res, next) => {

  const m_type = req.body.m_type;
  console.log('postAddMembership ');

  Membership.create(
    {
      m_type: m_type,

    })
    .then(membership => {
      console.log('New membership created ' + membership.m_type);
      console.log('Created Membership');
      res.redirect('/abbonamenti');
    })
    .catch(err => console.log(err));
};

exports.postUpdateMembership = (req, res, next) => {
  console.log('postUpdateMembership ');
  const id= req.params.membershipId;
  Membership.update(
    {m_type: req.body.m_type},
    {where: {id: id}}
    )
  .then(membership => {
      console.log(`membership updated ${membership.m_type}`);
      console.log('Created Membership');
      res.redirect('/abbonamenti');
    })
    .catch(err => console.log(err));
};

exports.getMemberships = (req, res, next) => {
  console.log('getMemberships');
  var editing = req.query.editing;
  Membership.findAll({
    include: [Customer]
  })
    .then((memberships) => {
      res.render('abbonamenti/list', {
        abbonamenti: memberships,
        title: 'Elenco abbonamenti',
        editing: editing,
        path: '>abbonamenti'
      });
    })
    .catch(err => console.log(err));
};

exports.getEditMembership = (req, res, next) => {

  var editing = req.params.editing;
  console.log('editing ' + editing);

  if (editing === 'true') {
    var membershipId = req.params.membershipId;
    console.log('membershipId ' + membershipId);
    Membership.findOne(
      {
        where: {
          id: parseInt(membershipId)
        },
        include: [Customer]
      })
      .then(membership => {

        res.render('abbonamenti/edit', {
          title: membership.customer.name + ' ' + membership.customer.surname,
          abbonamento: membership,
          editing: true,
          path: '>membership'
        })

      })
      .catch(err => console.log(err))
  }
  
  
}

exports.getNewMembership = (req, res, next) => {
  var customerId = req.params.customerId;
    console.log('customerId ' + customerId);

        Membership.create(
          {
            m_type: "Intero",
            customerId: customerId
         },
         {
          include: [ Customer ]
         }
        )
        .then(membership =>{
          console.log('membership ' + membership.id + ' created')
        res.render('clienti/edit/false&'+customerId, {
          title: Customer.name + ' ' + Customer.surname,
          cliente: [],
          editing: true,
          path: '>membership'
        })
      })
      .catch(err => console.log(err))
  }

  exports.getDeleteMembership = (req, res, next) => {
    console.log('getDeleteMembership')
    Membership.findOne(

      {where: 
        {id: req.params.membershipId}
      ,
      include: Customer
    })
    .then(membership =>{
      return membership.destroy()
    })
    .then(membership => {
      
      console.log('cliente ' + customer.id)
      console.log( 'deleted membership ' + membership.id);
      var customer = membership.customer;
      console.log('abbonamenti cliente ' + customer.memberships.length )
      console.log('render to clienti/edit/true/' + membership.customer.id)
      //res.render('clienti/edit/true/' + membership.customer.id ,
      res.redirect('clienti')
    })
    .catch(err => console.log(err))
  }
