import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const OrderPage = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    cartTotal,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return (
      <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className="text-red-500 text-6xl mb-4"
        />
        <h1 className="text-xl font-semibold">Your cart is empty</h1>
        <Link to="/menu">
          <button className="border border-gray-500 md:hover:border-0 p-2 mt-3 rounded-lg transition-all md:hover:translate-y-1 md:hover:bg-[#6d4c41] md:hover:text-[#fafafa] active:bg-[#4d3128] active:text-[#fafafa]">Order now</button>
        </Link>
      </div>

      <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="min-h-screen p-4">
        <h1 className="text-2xl md:text-3xl merriweather-bold mb-6 text-center">
          Cart ({totalUniqueItems} items) - Total: ${cartTotal.toFixed(2)}
        </h1>

        <div className="max-w-4xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center">
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-300 p-2 rounded mr-2"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-300 p-2 rounded ml-2"
                >
                  +
                </button>
              </div>

              <div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 transition-all hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => emptyCart()}
              className="bg-red-500 text-white p-2 rounded transition-all hover:translate-y-1 active:translate-y-2"
            >
              Empty Cart
            </button>
          </div>
        </div>

        
      </div>
      <Footer />
    </>
  );
};

export default OrderPage;
