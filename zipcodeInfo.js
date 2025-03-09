// Mock Data for Pricing and Sales Tax based on ZIP code
const mockData = {
    '95340': { water_per_foot_acre: 50.0 },
    '91962': { water_per_foot_acre: 65.0 },
    '91340': { water_per_foot_acre: 85.0 }
  };
  
  // Mock Eco-Friendly Suggestions
  const ecoAlternatives = {
    'Drip irrigation': { rank: '#1', eco: 'Best Option' },
    'Central Pivot Irrigation': { rank: '#2', eco: 'Drip irrigation' },
    'Sprinkler': { rank: '#3', eco: 'Central Pivot Irrigation' },
    'Flood irrigation': { rank: '#4', eco: 'Sprinkler' },
  };
          
  // Function to handle pricing based on ZIP code
  function getPricing() {
    const zipcode = document.getElementById("zipcode").value;
    const pricingPerFA = mockData[zipcode]; //price per Foot Acre for this zip code
  
  
<<<<<<< HEAD
    //if (pricing) {
      //document.getElementById("pricing-results").innerHTML = `
        //<p>95340: ${water_per_foot_acre}%</p>
        //<p>91962: ${water_per_foot_acre}%</p>
        //<p>9: ${water_per_foot_acre}%</p>
      //`;
    //} else {
     // document.getElementById("pricing-results").innerHTML = "<p>No data available for this ZIP code.</p>";
    //}
=======
    if (pricing) {
      document.getElementById("pricing-results").innerHTML = `
        <p>Local Sales Tax: ${pricing.sales_tax * 100}%</p>
        <p>Material Cost: $${pricing.material_cost}</p>
      `;
    } else {
      document.getElementById("pricing-results").innerHTML = "<p>No data available for this ZIP code.</p>";
    }
>>>>>>> parent of 976f4ca (Added programatic pricing by zip code)
  }
  
