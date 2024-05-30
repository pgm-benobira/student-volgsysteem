const tableName = "employee_functions"; //! Change TABLENAME to the name of the table you want to create

const seed = async function (knex) {
    // Deletes ALL existing entries
    await knex(tableName).del();
    await knex(tableName).insert([
        {
            employee_id: 1,
            function_id: 1,
        },
        {
            employee_id: 1,
            function_id: 2,
        },
        {
            employee_id: 1,
            function_id: 3,
        },
        {
            employee_id: 1,
            function_id: 4,
        },
        {
            employee_id: 1,
            function_id: 5,
        },
        {
            employee_id: 1,
            function_id: 6,
        },
        {
            employee_id: 1,
            function_id: 7,
        },
    ]);
};

export { seed };