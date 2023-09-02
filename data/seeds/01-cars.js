// STRETCH
 const cars = [
    {
        vin: '1111181111111',
        make: "honda",
        model: 'civic',
        mileage: 12765,
        transmission: 'auto'

    },
    {
        vin: '1111191111111',
        make: "toyota",
        model: 'avalon',
        mileage: 12987,
        
    },
    {
        vin: '1111111911111',
        make: "Honda",
        model: 'accord',
        mileage: 122000,
        
    }
 ]



 exports.seed =  async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)

   
 }