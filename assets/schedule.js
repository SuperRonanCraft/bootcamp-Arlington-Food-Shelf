
// module exports 
module.exports = {
  schedule: [ // displays the day and hours they are open and provides additinal resources 
    {
      day: 'Tuesday', // displays the day
      times: ['1st Tuesday 1:30-4 pm', '3rd Tuesday 3:30-5 pm'],
      additionalSources: [
        {
          name: '3SquaresVT',
          description: '3SquaresVT helps you buy food from grocery and convenience stores, farmers markets, and co-ops. 3SquaresVT benefits are loaded each month on an EBT card, which works like a debit card. To find out more and get help applying visit VermontFoodHelp.com or text VFBSNAP to 85511.',
        },
        {
          name: 'Meals for Kids',
          description: 'Summer meal sites across the state serve free nutritious meals to kids, 0-18. To find meal locations open to all kids near you, view this sheet of Open Meal Site Locations or the USDA Summer Meal Map.',
        },
        {
          name: 'The Take Care Project',
          description: 'The Take Care Project is on a mission to expand access to free period products and hygiene essentials in the Bennington region. Explore the Care Map for locations and organizations in Bennington that offer free personal care items including tampons, pads, shampoo, soap, and deodorant.',
        },
      ],
    },
  
  ],
};
