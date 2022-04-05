const express = require('express');
const { body } = require('express-validator');
const { param } = require('express/lib/request');
const router = express.Router();
const userRepository = require('../models/user-repository');
const { validateBody } = require('./validation/route.validator');

router.get('/users'),
    async (req,res) => {
    
}

router.post('/login/:params',
    async (req, res) => {
        const parameters = JSON.parse(req.params['params'])

        validateBody(req);

        res.status(204).end();
})

router.post('/register/:params',
    async (req,res) => {
        const parameters = JSON.parse(req.params['params'])

        const user = await userRepository.getUserByPseudo(parameters.username)

        if (user) {
            throw new Error("Utilisateur déjà existant")
        }

        const newUser = await userRepository.createUser(parameters)

        if (newUser) {
            res.status(400).send()
        } else {
            res.status(201).send()
        }
})

exports.initializeRoutes = () => router;
