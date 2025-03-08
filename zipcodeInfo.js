// Mock Data for Pricing and Sales Tax based on ZIP code
const mockData = {
    '10001': { sales_tax: 0.08, material_cost: 150 },
    '90210': { sales_tax: 0.07, material_cost: 180 },
    '94110': { sales_tax: 0.09, material_cost: 160 }
  };
  
  // Mock Eco-Friendly Suggestions
  const ecoAlternatives = {
    'irrigation': { regular: 'Traditional Irrigation', eco: 'Drip Irrigation' },
    'fertilizer': { regular: 'Chemical Fertilizer', eco: 'Organic Fertilizer' },
    'tractor': { regular: 'Gas', eco: 'Biofuels' }
  };
  
  // Function to handle pricing based on ZIP code
  function getPricing() {
    const zipcode = document.getElementById("zipcode").value;
    const pricing = mockData[zipcode];
  
    if (pricing) {
      document.getElementById("pricing-results").innerHTML = `
        <p>Local Sales Tax: ${pricing.sales_tax * 100}%</p>
        <p>Material Cost: $${pricing.material_cost}</p>
      `;
    } else {
      document.getElementById("pricing-results").innerHTML = "<p>No data available for this ZIP code.</p>";
    }
  }
  
  // Function to handle eco-friendly suggestions based on material choice
  function getEcoAlternative() {
    const material = document.getElementById("material").value;
    const alternative = ecoAlternatives[material];
  
    if (alternative) {
      document.getElementById("eco-results").innerHTML = `
        <p>Eco-Friendly Alternative: ${alternative.eco}</p>
      `;
    } else {
      document.getElementById("eco-results").innerHTML = "<p>No eco-friendly alternative found for this material.</p>";
    } 
  }
  