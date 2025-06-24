 function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    console.log('New Contact Message Received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    return res.status(200).json({ message: 'Thank you for contacting us!' });
  }
}
export default handler;


