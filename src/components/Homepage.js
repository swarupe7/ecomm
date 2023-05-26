import React ,{useState} from "react";
import { Image, Container, Navbar, Card } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import Description from "./Description";
import Cart from "./Cart";

const Homepage = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((p) => p !== product));
  };
  return (
    <div>

      <Description/>
     
      <Container>
      {cart.map((product) => (
          <Card key={product.id}>
            <Image src={product.image} />
            <Card.Body>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <h5>Price: ${product.price}</h5>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default Homepage;




{/* <Card>
<Image src="https://placecage.com/100/100" />
<Card.Body>
  <h4>Product 1</h4>
  <p>This is a product description.</p>
  <h5>Price: $10</h5>
  <button>Add to Cart</button>
</Card.Body>
</Card>
<Card>
<Image src="https://placecage.com/100/100" />
<Card.Body>
  <h4>Product 2</h4>
  <p>This is a product description.</p>
  <h5>Price: $20</h5>
  <button>Add to Cart</button>
</Card.Body>
</Card>
<Card>
<Image src="https://placecage.com/100/100" />
<Card.Body>
  <h4>Product 3</h4>
  <p>This is a product description.</p>
  <h5>Price: $30</h5>
  <button>Add to Cart</button>
</Card.Body>
</Card> */}