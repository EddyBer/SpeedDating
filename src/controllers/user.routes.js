const express = require('express');
const { body } = require('express-validator');
const { param } = require('express/lib/request');
const router = express.Router();
const userRepository = require('../models/user/user-repository');
const rencontresRepository = require('../models/Rencontres/rencontre-repository');
const personneRepository = require('../models/personnes/personnes-repository');
const { validateBody } = require('./validation/route.validator');
const { generateAuthToken, verifyToken } = require('../security/auth');
var  bcrypt = require('bcryptjs');
const req = require('express/lib/request');

router.post('/login/:params',
    async (req, res) => {
        const parameters = JSON.parse(req.params['params'])

        let user = await userRepository.getUserByEmail(parameters.mail)

        if (!user) {
            res.status(401).send('Unauthorized');
            return
        } else {
            let isPassword = await bcrypt.compare(parameters.password,user.password)

            if (!isPassword) {
                res.status(401).send('Unauthorized');
                return;
            }
            const token = generateAuthToken(user.id, user.firstName, user.roles);
    
            res.json({ token });
            res.status(204).end();
            return;
        }
})

router.post('/register/:params',
    async (req,res) => {
        const parameters = JSON.parse(req.params['params'])

        const user = await userRepository.getUserByPseudo(parameters.username)

        if (user) {
            res.status(400).send("Utilisateur déjà existant")
            return;
        }

        const newUser = await userRepository.createUser(parameters)

        if (newUser) {
            res.status(400).send("Erreur lors de la création")
            return;
        } else {
            res.status(201).send("Création effectué avec succès")
        }
})

router.post('/rencontres/create/:params',
    async (req,res) => {
        const parameters = JSON.parse(req.params['params'])

        const newRencontres = await rencontresRepository.createRencontre(parameters)

        if (newRencontres) {
            res.status(400).send("Erreur lors de la création")
            return;
        } else {
            res.status(201).end()
        }
})

router.delete('/rencontres/delete/:id',
    async (req,res) => {

        const deleted = await rencontresRepository.deleteRencontre(req.params.id)

        if (!deleted) {
            res.status('200').end()
        } else {
            res.status('400').send('Erreur lors de la suppression')
        }
})

router.get('/rencontres/:id',
    async (req,res) => {

        const listOfRencontres = await rencontresRepository.getAllById(req.params.id)
        
        if (!listOfRencontres) {
            res.status('204').send('Aucune rencontres trouvées')
        } else {
            res.json({listOfRencontres})
            res.status('200').end()
        }

})

router.get('/personne/:id',
    async (req,res) => {

        const listOfPersonnes = await personneRepository.getAllById(req.params.id)
        
        if (!listOfPersonnes) {
            res.status('204').send('Aucune rencontres trouvées')
        } else {
            res.json({listOfPersonnes})
            res.status('200').end()
        }

})

router.post('/personne/create/:params',
    async (req,res) => {
        const parameters = JSON.parse(req.params['params'])

        const newPersonne = await personneRepository.createPersonne(parameters)

        if (newPersonne) {
            res.status(400).send("Erreur lors de la création")
            return;
        } else {
            res.status(201).end()
        }
})

router.delete('/personne/delete/:id',
    async (req,res) => {

        const deleted = await personneRepository.deletePersonne(req.params.id)

        if (!deleted) {
            res.status('200').end()
        } else {
            res.status('400').send('Erreur lors de la suppression')
        }
})



exports.initializeRoutes = () => router;
