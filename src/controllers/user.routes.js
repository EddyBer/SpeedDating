const express = require('express');
const { body } = require('express-validator');
const { param } = require('express/lib/request');
const router = express.Router();
const userRepository = require('../models/user-repository');
const { validateBody } = require('./validation/route.validator');
var  bcrypt = require('bcryptjs');

router.get('/users'),
    async (req,res) => {
    
}

router.post('/login/:params',
    async (req, res) => {
        const parameters = JSON.parse(req.params['params'])

        validateBody(req);

        let user = await userRepository.getUserByEmail(parameters.mail)
        let isPassword = await bcrypt.compare(parameters.password,user.password)
        console.log(parameters.password)
        console.log(user.password)

        if (!isPassword) {
            res.status(401).send('Unauthorized');
            return;
        }
        const token = generateAuthToken(user.id, user.firstName, user.roles);

        res.json({ token });
        res.status(204).end();
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

exports.initializeRoutes = () => router;
