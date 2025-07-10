function handler(req, res) {
  // For demo, returning static cart items
  const cartData = {
    items: [
      { name: 'Burger', quantity: 2 },
      { name: 'Coke', quantity: 3 },
      {name:'Pizza',quantity:5}
    ],
  };

  res.status(200).json(cartData);
}
export default handler;