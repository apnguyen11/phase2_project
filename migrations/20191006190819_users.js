
exports.up = function(knex) {
    return knex.schema.createTable('User', (table) => {
        table.increments('id')
        table.string('twot')
        table.datetime('time')
      })
};

exports.down = function(knex) {
    return knex.schema.raw('DROP TABLE "User"')
};
