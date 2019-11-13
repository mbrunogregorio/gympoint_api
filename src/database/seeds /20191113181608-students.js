module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Uchiha Itachi',
          email: 'itachi@uchiha.ko',
          age: 21,
          weight: 58,
          height: 178,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Uzumaki Naruto',
          email: 'dattebayo@uzumaki.ko',
          age: 16,
          weight: 51,
          height: 166,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Senju Tsunade',
          email: 'gambling@senju.ko',
          age: 53,
          weight: 49,
          height: 163,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
