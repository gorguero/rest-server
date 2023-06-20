const {Router} = require('express');
const {getUsuario, putUsuario, postUsuario, deleteUsuario} = require('../controllers/user');

const router = Router();

router.get('/', getUsuario );

router.put('/:id', putUsuario );

router.post('/', postUsuario );

router.delete('/:id', deleteUsuario );

module.exports = router;