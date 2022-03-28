/*
1 Skapa en array med frukter. (alltså string[]) Skapa en komponent med namnet Fruits som renderar ett <ul> element som visar alla frukterna i varsitt <li> element.
*/

const fruitList = [ 'russin', 'melon', 'mango', 'päron', 'banan' ]

const Fruits = () => (
	<ul>
		{fruitList.map(fruit => (
			<li key={fruit}> {fruit} </li>
		))}
	</ul>
)

export default Fruits
