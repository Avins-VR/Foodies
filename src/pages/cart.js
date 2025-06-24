import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/App.css';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchCart() {
      const res = await fetch('/api/cart');
      const data = await res.json();
      setCartItems(data.items);
      setLoading(false);
    }
    fetchCart();
  }, []);

  if (loading) return <p>Loading your cart...</p>;

  return (
    <>
      <header className="header">
        <div className="logo" onClick={() => router.push('/')}>Foodies</div>
        <div className="help" onClick={() => alert('Need help? Please contact Foodies')}>Help</div>
      </header>

      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <img src="/cart.png" alt="cart" className="cart-image" />
            <h2>Your cart is empty</h2>
            <p>You can go to home page to view more Orders</p>
          </div>
        ) : (
          <>
            <h1>Your Cart</h1>
            <ul className="cart-items">
              {cartItems.map((item, i) => (
                <li key={i} className="cart-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-quantity">Quantity: {item.quantity}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default CartPage;