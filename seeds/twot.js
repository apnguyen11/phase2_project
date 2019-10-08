
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Post').del()
    .then(function () {
      // Inserts seed entries
      return knex('Post').insert([
        {twot: 'Hello World'},
        {twot: 'My second twot'}
      ]);
    });
};

