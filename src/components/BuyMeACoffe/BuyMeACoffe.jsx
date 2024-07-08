import React from "react";
import qrImage from "../../assets/qr.png";
const BuyMeACoffee = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto my-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Buy Me a Coffee ☕️
      </h2>
      <p className="text-gray-600 mb-4">
        If you find this project helpful, consider buying me a coffee to support
        further development.
      </p>
      <div className="w-full grid place-items-center">
        <img src={qrImage} alt="qr code" width="200" />
      </div>
      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg shadow-lg block text-center">
        Buy me a coffee
      </button>
    </div>
  );
};

export default BuyMeACoffee;
