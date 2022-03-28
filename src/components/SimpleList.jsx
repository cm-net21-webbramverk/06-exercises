

const SimpleList = () => (
	<ul>
		{[1, 2, 3, 5, 8, 11].map(number => (
			<li key={number}> {number} </li>
		))}
	</ul>
)

export default SimpleList
