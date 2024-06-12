import { useState, useEffect } from "react";

interface Purchase {
  type:
    | "factory"
    | "enterprise"
    | "small-business"
    | "big-business"
    | "corporation";
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  const buyFactory = () => {
    if (count < 5) {
      return;
    }
    setCount(count - 5);
    setPurchases([...purchases, { type: "factory" }]);
  };

  const buyEnterprise = () => {
    if (count < 10) {
      return;
    }
    setCount(count - 10);
    setPurchases([...purchases, { type: "enterprise" }]);
  };

  const buySmallBusiness = () => {
    if (count < 25) {
      return;
    }
    setCount(count - 25);
    setPurchases([...purchases, { type: "small-business" }]);
  };

  const buyBigBusiness = () => {
    if (count < 50) {
      return;
    }
    setCount(count - 50);
    setPurchases([...purchases, { type: "big-business" }]);
  };

  const buyCorporation = () => {
    if (count < 100) {
      return;
    }
    setCount(count - 100);
    setPurchases([...purchases, { type: "corporation" }]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const factoryCount = purchases.filter(
        (purchase) => purchase.type === "factory"
      ).length;
      const enterpriseCount = purchases.filter(
        (purchase) => purchase.type === "enterprise"
      ).length;
      const smallBusinessCount = purchases.filter(
        (purchase) => purchase.type === "small-business"
      ).length;
      const bigBusinessCount = purchases.filter(
        (purchase) => purchase.type === "big-business"
      ).length;
      const corporationCount = purchases.filter(
        (purchase) => purchase.type === "corporation"
      ).length;
      setCount(
        (prevCount) =>
          prevCount +
          factoryCount +
          enterpriseCount * 3 +
          smallBusinessCount * 5 +
          bigBusinessCount * 10 +
          corporationCount * 20
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [purchases]);

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-10 text-xl">
      <div className="flex space-x-10 items-center">
        <button
          onClick={() => setCount(count + 1)}
          className="w-36 h-36 bg-red-600 rounded-full"
        ></button>
        <p>{count} points</p>
      </div>

      <div className="flex space-x-5">
        <button onClick={buyFactory} className="px-4 py-2 bg-green-600 rounded">
          Buy 1 Factory
        </button>
        <button
          onClick={buyEnterprise}
          className="px-4 py-2 bg-purple-600 rounded"
        >
          Buy 1 Enterprise
        </button>
        <button
          onClick={buySmallBusiness}
          className="px-4 py-2 bg-yellow-600 rounded"
        >
          Buy 1 Small Business
        </button>
        <button
          onClick={buyBigBusiness}
          className="px-4 py-2 bg-blue-600 rounded"
        >
          Buy 1 Big Business
        </button>
        <button
          onClick={buyCorporation}
          className="px-4 py-2 bg-red-600 rounded"
        >
          Buy 1 Corporation
        </button>
      </div>

      <div className="flex flex-wrap space-x-2">
        {purchases.map((purchase, index) => (
          <div
            key={index}
            className={`w-36 h-36 ${
              purchase.type === "factory" && "bg-blue-600"
            } ${purchase.type === "enterprise" && "bg-gray-600"} ${
              purchase.type === "small-business" && "bg-yellow-600"
            } ${purchase.type === "big-business" && "bg-green-600"} ${
              purchase.type === "corporation" && "bg-red-600"
            } 
            }`}
          ></div>
        ))}
      </div>

      <form>
        <label>Rate</label>\
        <input type="number" />
        <label>cost</label>
        <input type="number" />
        <label>color</label>
        <input type="text" />
        <label>Name</label>
        <input type="text" />
        <button type="submit">Submit factory plans!</button>
      </form>
    </div>
  );
}

export default App;
