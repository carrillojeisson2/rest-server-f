const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios');
const router = Router();

router.get('/', usuariosGet)
router.post('/', usuariosPost)
router.put('/:id', usuariosPut)
router.delete('/', usuariosDelete)


// router.get('/', (req, res) => {
//     res.json({
//         msg: 'hola get...'
//     })
// })

module.exports = router;