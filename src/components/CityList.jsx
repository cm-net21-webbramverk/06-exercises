/*
2a Skapa en lista med objekt som representerar städer. Objekten ska ha namn och antal invånare. Gör en komponent som tar emot listan med props och renderar den som ett <ul> element.
*/
import City from './City'

const CityList = ({ cities, setCities }) => {
	function removeCity(id) {
		let newCities = cities.filter(city => city.id !== id)
		// Bra tillfälle att göra console.log för att se hur arrayen ser ut
		setCities(newCities)
	}

	return (
		<ul className="city-list">
			{cities.map(city => (
				<City
					key={city.id}
					id={city.id}
					name={city.name}
					population={city.population}
					removeCity={removeCity} />
			))}
		</ul>
	)
}

export default CityList
