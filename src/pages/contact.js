import '../styles/index.css'; 
import { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setResponseMsg(data.message);
  };

  return (
    <div className="container">
        <header className="header">
        <div className="logo" onClick={() => router.push('/')}>Foodies</div>
        <div className="help" onClick={() => alert('Need help? Please contact Foodies')}>Help</div>
      </header>
  <div className="left-section">
    <h1>Customer Support</h1>
    <p>Email: <a href="mailto:support@swiggy.in">support@swiggy.in</a></p>
    <p>Phone: <a href="tel:+919488715046">+91 9488715046</a></p>
    <h2>Corporate Office</h2>
    <p className="address">
      Marthandam-Thengapattanam Rd, Puthukkadai, Tamil Nadu 629171, India<br />
      Corporate Identity Number: L78945TN2020PLC123456<br />
      Registration Number: 123456
    </p>

    <a href="https://www.google.com/maps/place/Puthukkadai,+Tamil+Nadu+629171/@8.2750778,77.1422403,6895m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b04ffedb7ed8697:0xe5a3c5769b15bd20!8m2!3d8.2750798!4d77.1812094!16zL20vMGY2MTM0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="directions">Get Directions</a>
  </div>

  <div className="right-section">
    <h2>Get in touch</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Enter Email Address" value={formData.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Enter Message" rows={5} value={formData.message} onChange={handleChange} required></textarea>
      <button type="submit">Submit</button>
    </form>
    {responseMsg && <p style={{ color: 'green', marginTop: '10px' }}>{responseMsg}</p>}
    <p className="terms">
      By contacting us you agree to our communication policy.
    </p>
  </div>
</div>
  );
}
export default ContactPage;