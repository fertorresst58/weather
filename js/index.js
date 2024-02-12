const btnSearch = document.getElementById('btnBuscar')
const inputCity = document.getElementById('searchCity')

btnSearch.addEventListener('click', () => {
  if(inputCity.value.trim().length > 0) {
    console.log('INPUT VALUE -> ', inputCity.value)
    buscarCiudad(inputCity.value)
  }
})

const buscarCiudad = async (ciudad) => {
  const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${ciudad}&language=es`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1c5ec1eb1emsh444521e92d6e611p1389abjsn30b71bc54811',
      'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}