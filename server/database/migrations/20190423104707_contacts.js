const tableName = "contacts";
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable(tableName, table => {
      table.increments("id").primary();
      table.integer("userId").references("users.id");
      table.string("nameFirst").notNullable();
      table.string("nameLast").notNullable();
      table.string("companyName");
      table.string("address1");
      table.string("address2");
      table.string("city");
      table.string("state");
      table.string("zipcode");
      table.string("emailWork");
      table.string("emailPersonal");
      table.string("phoneWork");
      table.string("phoneCell");
      table.string("facebook");
      table.string("linkedIn");
      table.string("portfolioURL");
      table.string("tags");
      table.text("notes");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .then(table => console.log(`-->Table '${tableName}' created.`));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(tableName);
};
