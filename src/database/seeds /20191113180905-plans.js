module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'plans',
      [
        {
          title: 'Genin',
          duration: 3,
          price: 153,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Chuunin',
          duration: 6,
          price: 200,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Jounin',
          duration: 12,
          price: 300,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Sennin',
          duration: 24,
          price: 600,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
