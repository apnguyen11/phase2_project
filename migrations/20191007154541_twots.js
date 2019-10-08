exports.up = function(knex) {
    return knex.schema.createTable('Post', (table) => {
        table.increments('id')
        table.string('twot')
        table.timestamps(true,true)
      })
};

exports.down = function(knex) {
    return knex.schema.raw('DROP TABLE "Post"')
};
