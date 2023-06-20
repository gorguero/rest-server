const {response} = require('express');


const getUsuario = (req, res=response) => {

    const query = req.query;

    res.json({
        msg: 'get chango desde controller',
        query
    })
}

const putUsuario = (req, res) => {

    const {id} = req.params;

    res.json({
        msg: 'put chango desde controller',
        id
    })
}

const postUsuario = (req, res) => {

    const body = req.body;

    res.json({
        msg: 'post chango desde controller',
        body
    })
}

const deleteUsuario = (req, res) => {

    const {id} = req.params;

    res.json({
        msg: 'delete chango desde controller'
    })
}

module.exports = {
    getUsuario,
    putUsuario,
    postUsuario,
    deleteUsuario
}