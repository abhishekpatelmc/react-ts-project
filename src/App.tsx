import { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface Purchase {
  type: string;
  rate: number;
  cost: number;
  color: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [customPurchase, setCustomPurchase] = useState<Purchase>({
    type: "",
    rate: 0,
    cost: 0,
    color: "",
  });
  const [customPurchaseTypes, setCustomPurchaseTypes] = useState<Purchase[]>(
    []
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomPurchase({
      ...customPurchase,
      [name]: name === "rate" || name === "cost" ? Number(value) : value,
    });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCustomPurchaseTypes([...customPurchaseTypes, customPurchase]);
    setCustomPurchase({ type: "", rate: 0, cost: 0, color: "" });
  };

  const buyPurchase = (purchase: Purchase) => {
    if (count >= purchase.cost) {
      setCount(count - purchase.cost);
      setPurchases([...purchases, purchase]);
    } else {
      alert(`Not enough points to buy a ${purchase.type}!`);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const totalPoints = purchases.reduce(
        (acc, purchase) => acc + purchase.rate,
        0
      );
      setCount((prevCount) => prevCount + totalPoints);
    }, 1000);

    return () => clearInterval(interval);
  }, [purchases]);

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-10 text-xl p-5 lg:p-0">
      <div className="flex space-x-10 items-center flex-wrap">
        <button
          onClick={() => setCount(count + 1)}
          className="w-36 h-36 bg-red-600 rounded-full"
        ></button>
        <p className="text-center">{count} points</p>
      </div>

      <div className="lg:flex lg:space-x-5 grid gap-5 flex-wrap justify-center">
        <button
          onClick={() =>
            buyPurchase({ type: "Factory", rate: 1, cost: 5, color: "blue" })
          }
          className="px-4 py-2 bg-blue-600 rounded"
        >
          Buy 1 Factory
        </button>
        <button
          onClick={() =>
            buyPurchase({
              type: "Enterprise",
              rate: 3,
              cost: 10,
              color: "gray",
            })
          }
          className="px-4 py-2 bg-gray-600 rounded"
        >
          Buy 1 Enterprise
        </button>
        <button
          onClick={() =>
            buyPurchase({
              type: "Small Business",
              rate: 5,
              cost: 25,
              color: "orange",
            })
          }
          className="px-4 py-2 bg-yellow-600 rounded"
        >
          Buy 1 Small Business
        </button>
        <button
          onClick={() =>
            buyPurchase({
              type: "Big Business",
              rate: 10,
              cost: 50,
              color: "green",
            })
          }
          className="px-4 py-2 bg-green-600 rounded"
        >
          Buy 1 Big Business
        </button>
        <button
          onClick={() =>
            buyPurchase({
              type: "Corporation",
              rate: 20,
              cost: 100,
              color: "red",
            })
          }
          className="px-4 py-2 bg-red-600 rounded"
        >
          Buy 1 Corporation
        </button>
        {customPurchaseTypes.map((purchase, index) => (
          <button
            key={index}
            onClick={() => buyPurchase(purchase)}
            className={`px-4 py-2 rounded`}
            style={{ backgroundColor: purchase.color }}
          >
            Buy 1 {purchase.type}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleFormSubmit}
        className="lg:flex lg:space-x-5 grid gap-5 items-center flex-wrap justify-center"
      >
        <label>
          Rate:
          <input
            type="number"
            name="rate"
            value={customPurchase.rate}
            onChange={handleInputChange}
            required
            className="ml-2 p-1 border rounded text-gray-800"
          />
        </label>
        <label>
          Cost:
          <input
            type="number"
            name="cost"
            value={customPurchase.cost}
            onChange={handleInputChange}
            required
            className="ml-2 p-1 border rounded text-gray-800"
          />
        </label>
        <label>
          Color:
          <input
            type="text"
            name="color"
            value={customPurchase.color}
            onChange={handleInputChange}
            required
            className="ml-2 p-1 border rounded text-gray-800"
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="type"
            value={customPurchase.type}
            onChange={handleInputChange}
            required
            className="ml-2 p-1 border rounded text-gray-800"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-1 bg-blue-600 rounded text-white"
        >
          Submit factory plans!
        </button>
      </form>

      <div className="flex flex-wrap justify-center">
        {purchases.map((purchase, index) => (
          <div
            key={index}
            className="w-36 h-36 m-5 flex justify-center items-center rounded"
            style={{ backgroundColor: purchase.color }}
          >
            <span className="text-white">{purchase.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
