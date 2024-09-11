import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const CheckoutPage = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    cartTotal,
    removeItem,
    emptyCart,
  } = useCart();

  const [step, setStep] = useState(1); // Step 1 is cart, Step 2 is shipping details
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  // Function to handle shipping info changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

 
  const handleSubmitOrder = () => {
    alert("Order successfully placed!");
    emptyCart();
    setStep(1); 
  };

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
            <button className="border border-gray-500 md:hover:border-0 p-2 mt-3 rounded-lg transition-all md:hover:translate-y-1 md:hover:bg-[#6d4c41] md:hover:text-[#fafafa] active:bg-[#4d3128] active:text-[#fafafa]">
              Order now
            </button>
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
        {/* Cart Review Section */}
        {step === 1 && (
          <>
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
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className="bg-gray-300 p-2 rounded mr-2"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
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

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => emptyCart()}
                  className="bg-red-500 text-white p-2 rounded transition-all md:hover:translate-y-1 active:translate-y-2"
                >
                  Empty Cart
                </button>
                <button
                  onClick={() => setStep(2)}
                  className="bg-green-500 text-white p-2 rounded transition-all md:hover:translate-y-1 active:translate-y-2"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}

        {/* SHIPPING INFO AND PAYMENT SECTION */}
        {step === 2 && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl merriweather-bold mb-6 text-center">
              Shipping Information
            </h1>

            <form className="space-y-4">
              <div>
                <label className="block text-lg font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={shippingInfo.name}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold">Address</label>
                <input
                required
                  type="text"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                  placeholder="Your address"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold">Email</label>
                <input
                required
                  type="email"
                  name="email"
                  value={shippingInfo.email}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold">Phone</label>
                <input
                required
                  type="tel"
                  name="phone"
                  value={shippingInfo.phone}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                  placeholder="Your phone number"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="bg-gray-500 text-white p-2 rounded transition-all hover:translate-y-1 active:translate-y-2"
                >
                  Back to Cart
                </button>
                <button
                  onClick={handleSubmitOrder}
                  className="bg-green-500 text-white p-2 rounded transition-all hover:translate-y-1 active:translate-y-2"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CheckoutPage;
