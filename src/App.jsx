import { useState } from 'react'
import Product from './components/Product'
import SimpleList from './components/SimpleList'
import Fruits from './components/Fruits'
import CityList from './components/CityList'
import './App.css'

const data = [
	{
		name: 'Hammare',
		price: 125,
		img: 'https://www.lindqvist-msk.se/produkter/mindre/74266---2.jpg?id=0328114'
	},
	{
		name: 'Spik',
		price: 35,
		img: 'https://5.imimg.com/data5/ES/YM/MY-27125663/round-ms-wire-nail-500x500.jpg'
	}
]
const cityData = [
	{
		id: 5,
		name: 'Mölndal',
		population: 70000
	},
	{
		id: 4,
		name: 'Ulan Bator',
		population: 1400000
	},
	{
		id: 3,
		name: 'Kapstaden',
		population: 4600000
	},
	{
		id: 2,
		name: 'Gränna',
		population: 2665
	},
	{
		id: 100,
		name: 'Shanghai',
		population: 26320000
	},
	{
		id: 101,
		name: 'Oslo',
		population: 634293
	}
]

function App() {
	const [cities, setCities] = useState(cityData)

	return (
		<div className="app">
			<CityList cities={cities} setCities={setCities} />
			<Fruits />
			<div className="product-container">
			{data.map(item => (
				<Product key={item.name + item.img} data={item} />
			))}
			</div>
			<SimpleList />
		</div>
	)
}

export default App
