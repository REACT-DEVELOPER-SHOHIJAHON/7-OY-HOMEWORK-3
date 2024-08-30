import React, { useState } from "react";
import {
  FaExchangeAlt,
  FaLanguage,
  FaTextHeight,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import useFetch from "../hooks/useFetch";

function Home() {
  const [data, setData] = useState("");
  const [translation, setTranslation] = useState("");
  const [source, setSource] = useState("en");
  const [target, setTarget] = useState("uz");

  const fetchTranslation = async (e) => {
    e.preventDefault();
    const result = await useFetch(translation, source, target);
    setData(result);
  };

  const swapLanguages = () => {
    const temp = source;
    setSource(target);
    setTarget(temp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Yandex Translation
        </h1>
        <form onSubmit={fetchTranslation} className="space-y-6">
          <div className="flex justify-center items-center space-x-6 mb-6">
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-2 text-center flex items-center justify-center space-x-2">
                <FaLanguage className="w-5 h-5 text-blue-500" />
                <span>From:</span>
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring focus:border-blue-500 bg-gray-100"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              >
                <option value="en">English</option>
                <option value="uz">Uzbek</option>
              </select>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white p-3 rounded-full transition-colors flex items-center justify-center"
                onClick={swapLanguages}
              >
                <FaExchangeAlt className="w-8 h-8" />
              </button>
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-2 text-center flex items-center justify-center space-x-2">
                <FaLanguage className="w-5 h-5 text-blue-500" />
                <span>To:</span>
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring focus:border-blue-500 bg-gray-100"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              >
                <option value="uz">Uzbek</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-center flex items-center justify-center space-x-2">
              <FaTextHeight className="w-5 h-5 text-blue-500" />
              <span>Text:</span>
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring focus:border-blue-500 bg-gray-100 resize-none"
              placeholder="Enter text here..."
              rows="4"
              onChange={(e) => setTranslation(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-12 py-4 rounded-lg text-lg hover:bg-teal-800 transition-colors shadow-lg flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <span>Translate</span>
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
        <div className="mt-8">
          <div className="mt-4 bg-gray-200 p-4 rounded-lg shadow-inner text-gray-900 text-lg text-center">
            {data || "Sizning tarjimangiz shu erda paydo boʻladi..."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
