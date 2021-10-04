
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').prymary()
        table.string('nome').notNull().unique()
        table.string('senha').notNull
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
