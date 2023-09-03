// STRETCH
 const cars = [
    {
        vin: '1G1ND52J8X6272941',
        make: "honda",
        model: 'civic',
        mileage: 12765,
        transmission: 'auto'

    },
    {
        vin: 'JH4DC4440RS004255',
        make: "toyota",
        model: 'avalon',
        mileage: 12987,
        
    },
    {
        vin: 'SMT905JN26J262542',
        make: "Honda",
        model: 'accord',
        mileage: 122000,
        
    }
 ]



 exports.seed =  async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)

   
 }