const City = ({ id, name, population, removeCity }) => (
	<li> {name} har {population / 1000000} miljoner invånare. <button onClick={() => removeCity(id)}> Ta bort </button> </li>
)

export default City
