const tableName = "users";

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable(tableName, table => {
      table.increments("id").primary();
      table
        .string("username")
        .notNullable()
        .unique();
      table.string("name");
      table
        .string("email")
        .notNullable()
        .unique();
      table.string("hashedPassword");
      table.string("address");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .then(table => console.log(`-->Table '${tableName}' created.`));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(tableName);
};
