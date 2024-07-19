const API_ID = 'YOUR_API_ID';
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://trackapi.nutritionix.com/v2/';

const headers = {
  'x-app-id': "411f82f2",
  'x-app-key': 
  "22180a49ddfe9074a792e86d3aff01d3"	,
  'Content-Type': 'application/json',
};

export const fetchFromNutritionix = async (endpoint, options = {}) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers,
    ...options,
  });
  return response.json();
};
