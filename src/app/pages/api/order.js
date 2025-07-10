function handler(req, res) {
  if (req.method === 'POST') {
    const { name, address, contact, restaurant, items } = req.body;
    console.log('New Order Received:', { name, address, contact, restaurant, items });

    return res.status(200).json({ message: 'Order placed successfully! Please pay with Cash on Delivery ' });
  }

}
export default handler;