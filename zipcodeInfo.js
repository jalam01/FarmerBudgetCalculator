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
    
  // Function to handle pricing based on ZIP code
  function getPricing() {
    console.log(1)
    const zipcode = document.getElementById("zipcode").value;
    const pricingPerFA = mockData[zipcode]; //price per Foot Acre for this zip code
  

  if (pricingPerFA) {
    var m1 = document.getElementById("current_method");
    var m2 = document.getElementById("other_method");

    var m1Loss = 999999;
    var m2Loss = 999999;
    
    if (m1.value == "Sprinklers"){
      m1Loss = pricingPerFA.water_per_foot_acre * irrigationEfficiency.Sprinklers;
      
      
    }
    else if(m1.value == "Drip Irrigation"){
      m1Loss = pricingPerFA.water_per_foot_acre * irrigationEfficiency.Drip_Irrigation;

    }
    else if(m1.value == "Flood Irrigation"){
      m1Loss = pricingPerFA.water_per_foot_acre * irrigationEfficiency.Flood_Irrigation;

    }
    else if(m1.value == "Center Pivot"){
      m1Loss = pricingPerFA.water_per_foot_acre * irrigationEfficiency.Center_Pivot;

    }
    console.log(m1Loss);

    


    document.getElementById("pricing-results").innerHTML = `

    `;
  } else {
    document.getElementById("pricing-results").innerHTML = "<p>No data available for this ZIP code.</p>";
  }

  }
  
