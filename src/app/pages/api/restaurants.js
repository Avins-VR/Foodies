

const restaurants = [
  {
    id: 1,
    name: "Mario's Italian Kitchen",
    image: "/italian.jpg",
    rating: 4.8,
    reviews: 120,
    deliveryTime: "25-35 min",
    price: "$0.31 ",
    Menu:"https://mariasitaliankitchen.com/take-out-menu/"
  },
  {
    id: 2,
    name: "Tokyo Sushi Bar",
    image: "/sushi.jpg",
    rating: 4.6,
    reviews: 89,
    deliveryTime: "20-30 min",
    price: "$5.40",
    Menu: "https://www.tokyosushibarliege.be/menu/93/Nouveaut%C3%A9s"
  },
  {
    id: 3,
    name: "Burger Palace",
    image: "/burger.jpg",
    rating: 4.7,
    reviews: 156,
    deliveryTime: "15-25 min",
    price: "$8",
    Menu: "http://www.bobbysburgerpalace.com/files/uploads/BBP-Menu.pdf"
  },
  {
    id: 4,
    name: "El Mariachi",
    image: "/mexican.jpg",
    rating: 4.5,
    reviews: 97,
    deliveryTime: "30-40 min",
    price: "$10",
    Menu: "https://elmariachisrestaurant.com/albany-el-mariachi-restaurant-food-menu"
  },
  {
    id: 5,
    name: "Curry House",
    image: "/indian.jpg", 
    rating: 4.9,
    reviews: 200, 
    deliveryTime: "20-30 min",
    price: "$5",
    Menu: "https://greatcurryrecipes.net/recipe-index/"
  },
  { 
    id: 6,
    name: "Vegan Delight",
    image: "/vegan.jpg",
    rating: 4.4,
    reviews: 75,
    deliveryTime: "25-35 min",  
    price: "$7",
    Menu: "https://naturevegedelights.oddle.me/en_SG/"
  },
  {
    id: 7,
    name: "Pasta Perfection",
    image: "/pasta.jpg",
    rating: 4.8,
    reviews: 110,
    deliveryTime: "30-40 min",
    price: "$12",
    Menu: "https://raviolis.in/collections/pasta"
  },
  {
    id: 8,
    name: "BBQ Haven",
    image: "/bbq.jpg",
    rating: 4.6,
    reviews: 95,
    deliveryTime: "20-30 min",
    price: "$10",
    Menu: "https://bbqhavenllc.com/menu"
  },
  {
    id: 9,
    name: "Dessert Oasis",
    image: "/dessert.jpg",
    rating: 4.9,
    reviews: 150,
    deliveryTime: "15-25 min",
    price: "$15",
    Menu: "https://docr.coffee/pages/desserts-pastries"
  },
  {
    id: 10,
    name: "Seafood Shack",
    image: "/seafood.jpg",
    rating: 4.7,
    reviews: 130,
    deliveryTime: "30-40 min",
    price: "$13",
    Menu: "https://www.seafoodshack.social/menu"
  }
];

function handler(req, res) {
  res.status(200).json(restaurants);
}
export default handler;
