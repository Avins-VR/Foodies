import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import '../styles/App.css';

function Home() {
  const router = useRouter(); 
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/api/restaurants')
      .then(res => res.json())
      .then(data => setRestaurants(data))
      .catch(err => console.error('Failed to fetch:', err));
  }, []);

  return (
    <>
      {/* Black Header */}
      <header className="header">
        <h1 className="logo">Foodies</h1>
        <nav className="navbar">
          <p onClick={() => router.push('/')}>Home</p>
          <p onClick={() => router.push('/order')}>Orders</p>
          <p onClick={() => router.push('/cart')}>Cart</p>
          <p onClick={() => router.push('/contact')}>Contact</p>
        </nav>
      </header>
      <section className="hero-section">
        <div className="hero-text">
          <h2>Delicious Food</h2>
          <h2>Delivered Fast</h2>
          <p>Order from your favorite restaurants and get fresh, hot meals delivered right to your doorstep</p>
          <button onClick={() => router.push('/order')}>Order Now</button>
        </div>
      </section>

      {/* Featured Section */}
      <div className="featured">
        <h2>Featured Restaurants</h2>
        <p>Discover amazing food from top-rated restaurants</p>

        <div className="restaurant-list">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
              <div className="restaurant-info">
                <h3>{restaurant.name}</h3>
                <p>⭐ {restaurant.rating} ({restaurant.reviews} reviews)</p>
                <div className="info-row">
                  <span>{restaurant.deliveryTime}</span>
                  <span>{restaurant.price}</span>
                </div>
                <a href={restaurant.Menu} target="_blank" rel="noopener noreferrer">
                  <button>View Menu</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;