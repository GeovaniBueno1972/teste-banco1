const bcrypt = require('bcrypt-nodejs')


module.exports = app =>{

    

    const save = async (req, res) => {
        const user = {...req.body}
        if (req.params.id) user.id = req.params.id
        
        app.db('usuarios')
            .insert(user)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    return { save }
}