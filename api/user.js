const express = require('express');
const { Pool } = require('pg');


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


module.exports = app =>{
    express()
        .get('/usuarios',  async (req, res) => {
        try {
          const client = await pool.connect();
          const result = await client.query('SELECT * FROM usuarios');
          const results = { 'results': (result) ? result.rows : null};
          client.release();
        } catch (err) {
          console.error(err);
          res.send("Error " + err);
        }
      })
    

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