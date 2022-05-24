const { tables } = require('..');

module.exports = {
  up: async (knex) => {
    await knex.schema.alterTable(tables.user, (table) => {
      table.string('username')
        .notNullable();

      table.string('password_hash')
        .notNullable();

      table.jsonb('roles')
        .notNullable();

      // Give this unique index a name for better error handling in service layer
      table.unique('username', 'idx_user_username_unique');
    });
  },
  down: (knex) => {
    return knex.schema.alterTable(tables.user, (table) => {
      table.dropColumns('username', 'password_hash', 'roles');
    });
  },
};
