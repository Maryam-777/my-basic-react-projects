import "./App.css";
import InputBtn from "./components/InputBtn";
import ProductsList from "./components/ProductsList";
import UserList from "./components/UserList";

function App() {
  const users  = [
    {
      name: "mohammad",
      age: 24,
      city: "sari",
    },
    {
      name: "maryam",
      age: 23,
      city: "tehran",
    },
    {
      name: "ava",
      age: 21,
      city: "sari",
    },
    {
      name: "fatemeh",
      age: 20,
      city: "mashhad",
    },
    {
      name: "sina",
      age: 27,
      city: "semnan",
    },
  ];
  const products = [
    {
      name: "T-shirt",
      price: 78.44,
      description: "100% organic",
    },
    {
      name: "LED",
      price: 178.44,
      description: "very good",
    },
    {
      name: "watch",
      price: 98.44,
      description: "water proof",
    },
  ];
  return (
    <>
      <InputBtn  />
      <ProductsList items={products} />
      <UserList items={users} />
    </>
  );
}

export default App;
