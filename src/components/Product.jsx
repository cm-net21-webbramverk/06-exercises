

const Product = ({ data: { name, price, img } }) => (
	<section className="product">
		<h3> {name} </h3>
		<img src={img} />
		<p> {price} SEK </p>
	</section>
)
/*
5 Skapa en komponent som kan visa information om en produkt. Använd följande data:

// Använd en egen bild om länken inte fungerar
*/
export default Product
