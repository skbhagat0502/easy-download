import axios from "axios";
import React, { useState } from "react";

const Home = () => {
  const [urlValue, setUrlValue] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const baseUrl = import.meta.env.VITE_REACT_API_URL;
  const handleDownload = async () => {
    if (!urlValue) {
      setError("Please enter a YouTube video URL.");
      return;
    }
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.get(`${baseUrl}/download?url=${urlValue}`);
      setData(response.data);
      setUrlValue("");
    } catch (err) {
      setError(
        "Failed to fetch video info. Please check the URL and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start">
      <main className="flex-grow flex flex-col items-center justify-start px-4 mt-[5rem]">
        <div className="flex flex-row items-center mb-8">
          <div className="text-4xl font-bold">
            <h1 className="w-full text-center">
              <span className="text-red-700">YouTube</span> Video Downloader
            </h1>
          </div>
        </div>
        <div className="flex flex-row max-[550px]:flex-col max-[550px]:gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter URL"
            value={urlValue}
            onChange={(e) => setUrlValue(e.target.value)}
            className="outline-none p-2 bg-gray-700 border-2 border-gray-500 rounded-md md:mr-4 text-white w-96 max-[550px]:w-[90vw]"
          />
          <button
            onClick={handleDownload}
            className={`bg-black text-yellow-500 py-2 px-6 rounded-md font-bold ${
              isLoading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Fetching Info..." : "Download"}
          </button>
        </div>
        {error && <p className="text-red-600">{error}</p>}
        {data !== null ? (
          <div className="mt-4 w-full flex flex-col items-center justify-start">
            <div className="my-4">
              <iframe
                width="570"
                height="320"
                src={`${data.url}`}
                title="video"
                allowFullScreen
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.info.map((formatName, index) => (
                <div
                  key={index}
                  className="bg-gray-800 text-white rounded-lg p-4 flex flex-col items-center"
                >
                  <p className="text-lg font-bold mb-2">
                    {formatName.mimeType.split(";")[0]}
                  </p>
                  <p className="text-gray-400 mb-4">
                    {formatName.hasVideo
                      ? `${formatName.height}p`
                      : "Audio only"}
                  </p>
                  <a
                    href={formatName.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-bold"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-red-700 font-bold mt-10">No download yet</div>
        )}
      </main>
      <footer className="w-full py-6 bg-gray-800">
        <div className="container mx-auto text-center text-gray-400">
          &copy; 2024 YouTube Downloader. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
