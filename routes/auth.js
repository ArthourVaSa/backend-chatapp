/*
    path: api/login
*/

const {Router, response} = require('express');
const { crearUsuario } = require('../controllers/auth');
const { check } = require('express-validator');
const router = Router();

router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
], crearUsuario);

module.exports = router;