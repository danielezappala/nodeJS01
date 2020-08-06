/*
const db = require('../util/database');

module.exports = class Cliente {
  constructor(id, cognome, nome) {
    this.id = id;
    this.cognome = cognome;
    this.nome = nome;
  }

  save() {
    return db.execute(
      'INSERT INTO clienti (cognome, nome) VALUES (?, ?)',
      [this.cognome, this.nome]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute('SELECT * FROM clienti');
  }

  static findById(id) {
    return db.execute('SELECT * FROM clienti WHERE clienti.id = ?', [id]);
  }
};

*/