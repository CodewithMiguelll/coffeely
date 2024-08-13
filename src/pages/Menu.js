import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MenuPage = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await fetch("https://api.sampleapis.com/coffee/hot");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCoffees(data);
      } catch (error) {
        setError("Failed to fetch coffee data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCoffees();
  }, []);

  if (loading) return
  <>
    <Header />
    <p className="text-center mt-4">Loading...</p>;
  </>;
 
  if (error) return 
  <>
    <Header />
    <p className="text-center mt-4">{error}</p>;
  </>;

  return (
    <>
      <div className="min-h-screen bg-[#f6f6f6]">
        <Header />

        <h1 className="text-2xl md:text-3xl merriweather-bold mb-6 text-center">
          Our Menu
        </h1>

        <div className="flex">
          <aside className="w-1/4 p-4 bg-white border-r border-gray-300">
            <h2 className="text-xl font-semibold">Filter by Category</h2>
            <ul className="mt-4">
              <li>
                <a href="/" className="text-blue-600 hover:underline">
                  Espresso
                </a>
              </li>
              <li>
                <a href="/" className="text-blue-600 hover:underline">
                  Single-Origin
                </a>
              </li>
              <li>
                <a href="/" className="text-blue-600 hover:underline">
                  Blends
                </a>
              </li>
              <li>
                <a href="/" className="text-blue-600 hover:underline">
                  Accessories
                </a>
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-6">Sort by</h2>
            <select
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              id="sort"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="popularity">Popularity</option>
            </select>
          </aside>

          <main className="w-3/4 p-4">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {coffees.map((coffee) => (
                <article
                  key={coffee.id}
                  className="bg-white border border-gray-300 rounded p-4 text-center"
                >
                  <img
                    src={coffee.image}
                    alt={coffee.title}
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-semibold">{coffee.title}</h3>
                  <p className="mt-2">{coffee.description}</p>
                  <p className="mt-2 font-bold">${coffee.price}</p>
                  <button className="mt-4 bg-gray-800 text-white p-2 rounded hover:bg-gray-600">
                    Add to Cart
                  </button>
                </article>
              ))}
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
