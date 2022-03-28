/*
2a Skapa en lista med objekt som representerar städer. Objekten ska ha namn och antal invånare. Gör en komponent som tar emot listan med props och renderar den som ett <ul> element.
*/

const CityList = ({ cities }) => (
	<ul>
		{cities.map(city => (
			<li key={city.id}> {city.name} har {city.population / 1000000} miljoner invånare. </li>
		))}
	</ul>
)

export default CityList
