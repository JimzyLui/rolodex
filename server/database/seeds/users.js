exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "ed", email: "ed@ed.com" },
        { username: "raymond", email: "raymond@raymond.com" },
        { username: "jason", email: "jason@jason.com" }
      ]);
    });
};
