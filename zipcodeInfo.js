// Mock Data for Pricing and Sales Tax based on ZIP code
const mockData = {
    '95340': { water_per_foot_acre: 50.0 },
    '91962': { water_per_foot_acre: 65.0 },
    '91340': { water_per_foot_acre: 85.0 }
  };

  const irrigationEfficiency = { 
    //How water efficent it is (fraction) or how much water isnt lost to evaporation
    "Sprinklers": 0.70,
    "Drip_Irrigation": 0.95,
    "Flood_Irrigation": 0.52,
    "Center_Pivot":0.88

  };
  
  
  // Mock Eco-Friendly Suggestions
  //const ecoAlternatives = {
    //'Drip irrigation': { rank: '#1', eco: 'Best Option' },
    //'Central Pivot Irrigation': { rank: '#2', eco: 'Drip irrigation' },
    //'Sprinkler': { rank: '#3', eco: 'Central Pivot Irrigation' },
    //'Flood irrigation': { rank: '#4', eco: 'Sprinkler' },
  //};
          
  // Function to handle pricing based on ZIP code
  function getPricing() {
    const zipcode = document.getElementById("zipcode").value;
    const pricingPerFA = mockData[zipcode]; //price per Foot Acre for this zip code
  

  if (pricingPerFA) {
    var m1 = document.getElementById("current_method");
    var m2 = document.getElementById("other_method");

    var m1Loss = 999999;
    var m2Loss = 999999;
    
    if (m1.value == "Sprinklers"){
      m1Loss = pricingPerFA.water_per_foot_acre * (1-irrigationEfficiency.Sprinklers);
      
      
    }
    else if(m1.value == "Drip Irrigation"){
      m1Loss =  pricingPerFA.water_per_foot_acre * (1-irrigationEfficiency.Drip_Irrigation);

    }
    else if(m1.value == "Flood Irrigation"){
      m1Loss =  pricingPerFA.water_per_foot_acre * (1-irrigationEfficiency.Flood_Irrigation);

    }
    else if(m1.value == "Center Pivot"){
      m1Loss =  pricingPerFA.water_per_foot_acre * (1-irrigationEfficiency.Center_Pivot);

    }
    console.log(m1Loss);

    if (m2.value == "Sprinklers"){
      m2Loss = pricingPerFA.water_per_foot_acre * (1-irrigationEfficiency.Sprinklers);
      
      
    }
    else if(m2.value == "Drip Irrigation"){
      m2Loss =  pricingPerFA.water_per_foot_acre * (1-irrigationEfficiency.Drip_Irrigation);

    }
    else if(m2.value == "Flood Irrigation"){
      m2Loss =  pricingPerFA.water_per_foot_acre * (1-irrigationEfficiency.Flood_Irrigation);

    }
    else if(m2.value == "Center Pivot"){
      m2Loss =  pricingPerFA.water_per_foot_acre * (1-irrigationEfficiency.Center_Pivot);

    }
    var m1DollarLostText = document.getElementById("m1Loss");
    m1DollarLostText.innerHTML = "Method 1 has " +m1Loss+ " dollars lost per acre foot of water"
    var m2DollarLostText = document.getElementById("m2Loss");
    m2DollarLostText.innerHTML = "Method 2 has " +m2Loss+ " dollars lost per acre foot of water";

    






    


    document.getElementById("pricing-results").innerHTML = `

    `;
  } else {
    document.getElementById("pricing-results").innerHTML = "<p>No data available for this ZIP code.</p>";
  }

  }
  
