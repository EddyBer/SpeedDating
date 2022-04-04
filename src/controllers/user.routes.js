const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const userRepository = require('../models/user-repository');
const { validateBody } = require('./validation/route.validator');

router.get('/', (req, res) => {
  res.send("Test");
});

router.post(
    '/login/:params',
    body('username').notEmpty(),
    body('password').notEmpty().isLength({ min: 8 }),
    async (req, res) => {
        console.log(req.params)

      validateBody(req);

      res.status(201).end();
    }
  );

exports.initializeRoutes = () => router;
