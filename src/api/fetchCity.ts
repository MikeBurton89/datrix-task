const fetchCity = async (city: string) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${city}&format=json`
    );
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchCity;
