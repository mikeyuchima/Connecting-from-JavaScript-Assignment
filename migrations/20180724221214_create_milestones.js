
exports.up = function(knex, Promise) {
    return knex.schema.createTable('milestones', table => {
        table.increments('id').primary()
        table.string('description')
        table.date('date_achieved')
      }).then(function (row){
          console.log(row);
      })
    
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};
