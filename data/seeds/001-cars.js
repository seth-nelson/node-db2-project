
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: '11223344ABCD', make: 'toyota', model: 'tacoma', mileage: '82500', transmissionType: 'auto', titleStatus: 'clean'},
        {id: 2, VIN: '12345678DBHF', make: 'lexus', model: 'lc500', mileage: '2', transmissionType: 'auto', titleStatus: 'clean'},
        {id: 3, VIN: 'abbg3746bf8', make: 'toyota', model: 'camry', mileage: '286520', transmissionType: 'manual', titleStatus: 'rebuilt'}
      ]);
    });
};
