const tableName = "deregisters"; //! Change TABLENAME to the name of the table you want to create
 
// Create the table (this is for creating the migration)
export function up(knex) {
    return knex.schema.table(tableName, function (table) {
        table.foreign("student_id").references("students.id");
        table.foreign("statuses_registration_id").references("statuses_registrations.id");
    });
}
 
// Drop the table (this is for in case of reverting the migration)
export function down(knex) {
    return knex.schema.table(tableName);
}