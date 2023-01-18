const { response } = require('express');

const usuariosGet = (req, res = response) => {
    const query = req.query;
    res.json({
        msg: "get Api - controlador",
        query
    })
}

const usuariosPost = (req, res = response) => {
    // const body = req.body;
    const { nombre, edad } = req.body;
    res.json({
        msg: "post Api - controlador",
        nombre,
        edad
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;
    res.json({
        msg: "put Api - controlador",
        id
    })
}



const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete Api - controlador"
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}