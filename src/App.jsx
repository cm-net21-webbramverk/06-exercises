import { useState } from 'react'
import Product from './components/Product'
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

function App() {

	return (
		<div className="app">
			<div className="product-container">
				<Product data={data[0]} />
				<Product data={data[1]} />
			</div>
		</div>
	)
}


export default App
