import { useState } from 'react'
import Product from './components/Product'
import SimpleList from './components/SimpleList'
import Fruits from './components/Fruits'
import CityList from './components/CityList'
import './App.css'
import { data } from './data/tools.js'
import { cityData } from './data/cities.js'


function App() {
	// const [cities, setCities] = useState(cityData)
	const array = useState(cityData)
	const cities = array[0], setCities = array[1]

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
