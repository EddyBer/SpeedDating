const { users } = require('../db');
const uuid = require('uuid');
const {Rencontres} = require('./rencontres-model')

exports.createRencontre = async (body) => {
    await Rencontres.create({
        user : body.user,
        personne : body.nom,
        date : body.date,
        note : body.note,
        commentaire : body.commentaire
    })
}

exports.deleteRencontre = async (id) => {
    await Rencontres.destroy({
        where: {
            id: id
          }
    })
}

exports.getAllById = async (id) => {
    return await Rencontres.findAll({
        where: {
          user: id
        }
      });
}