import axios from "axios";
import React, { useEffect, useState } from "react";
import BuyMeACoffee from "../components/BuyMeACoffe/BuyMeACoffe";

const Home = () => {
  const [urlValue, setUrlValue] = useState("");
  const [youtubeData, setYoutubeData] = useState(null);
  const [instaReelData, setInstaReelData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const baseUrl = import.meta.env.VITE_REACT_API_URL;
  const [formats, setFormats] = useState([]);
  const [activeTab, setActiveTab] = useState("youtube");

  const handleYtDownload = async () => {
    if (!urlValue) {
      setError("Please enter a YouTube video URL.");
      return;
    }
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.get(`${baseUrl}/yt/download`, {
        params: { url: urlValue },
      });
      setYoutubeData(response.data);
      setUrlValue("");
    } catch (err) {
      setError(
        "Failed to fetch video info. Please check the URL and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleInstaReelDownload = async () => {
    if (!urlValue) {
      setError("Please enter an Instagram reel URL.");
      return;
    }
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.get(`${baseUrl}/instareel/download`, {
        params: { url: urlValue },
      });
      setInstaReelData(response.data);
      setUrlValue("");
    } catch (err) {
      setError(
        "Failed to fetch video info. Please check the URL and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (youtubeData && youtubeData.info) {
      const arr = youtubeData.info;
      const requiredFormats = arr.filter((a) =>
        a.mimeType.split(";")[0].includes("mp4")
      );

      const uniqueFormats = Array.from(
        new Set(requiredFormats.map((a) => a.qualityLabel))
      ).map((qualityLabel) => {
        return requiredFormats.find((a) => a.qualityLabel === qualityLabel);
      });

      setFormats(uniqueFormats);
    }
  }, [youtubeData]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start">
      <main className="flex-grow flex flex-col items-center justify-start px-4 mt-[5rem]">
        <div className="flex flex-row items-center mb-8">
          <h1 className="text-4xl font-bold text-center w-full">
            {activeTab == "youtube" ? "Youtube " : "Instagram "}
            <span className="text-red-700">Video</span> Downloader
          </h1>
        </div>
        <div className="flex flex-row mb-8">
          <button
            className={`px-4 py-2 rounded-md font-bold ${
              activeTab === "youtube"
                ? "bg-red-700 text-white"
                : "bg-gray-700 text-gray-400"
            }`}
            onClick={() => setActiveTab("youtube")}
          >
            YouTube
          </button>
          <button
            className={`px-4 py-2 ml-4 rounded-md font-bold ${
              activeTab === "instagram"
                ? "bg-red-700 text-white"
                : "bg-gray-700 text-gray-400"
            }`}
            onClick={() => setActiveTab("instagram")}
          >
            Instagram
          </button>
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
            onClick={
              activeTab === "youtube"
                ? handleYtDownload
                : handleInstaReelDownload
            }
            className={`bg-black text-yellow-500 py-2 px-6 rounded-md font-bold ${
              isLoading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Fetching Info..." : "Download"}
          </button>
        </div>
        {error && <p className="text-red-600">{error}</p>}
        {youtubeData && activeTab === "youtube" && (
          <div className="my-4 w-full flex flex-col items-center justify-start">
            <div className="my-4">
              <iframe
                width="570"
                height="320"
                className="max-[550px]:w-[95vw]"
                src={youtubeData?.url}
                title="video"
                allowFullScreen
              />
            </div>
            <div className="grid max-[550px]:grid-cols-2 min-[550px]:grid-cols-3 gap-2">
              {formats?.map((format, index) => (
                <div
                  key={index}
                  className="bg-gray-800 text-white rounded-lg p-4 flex flex-col items-center"
                >
                  <p className="text-lg font-bold mb-2">
                    {format.mimeType.split(";")[0]}
                  </p>
                  <p className="text-gray-400 mb-4">
                    {format.hasVideo && format.hasAudio
                      ? `${format.height}p Audio+Video`
                      : format.hasAudio
                      ? "Audio only"
                      : `${format.height}p Video only`}
                  </p>
                  <a
                    target="_blank"
                    href={format.url}
                    className={`bg-black text-yellow-500 py-2 px-6 rounded-md font-bold ${
                      isLoading ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    disabled={isLoading}
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
        {instaReelData && activeTab === "instagram" && (
          <div className="my-4 w-full flex flex-col items-center justify-start">
            <div className="my-4">
              {/* <video
                width="570"
                height="320"
                className="max-[550px]:w-[95vw]"
                controls
                src={data.videoUrl}
              /> */}
              <video
                width="570"
                height="320"
                className="max-[550px]:w-[95vw]"
                src={instaReelData[0]?.download_link}
                title="video"
                allowFullScreen
                controls
              />
            </div>
            <a
              target="_blank"
              href={instaReelData[0]?.download_link}
              className={`bg-black text-yellow-500 py-2 px-6 rounded-md font-bold ${
                isLoading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              disabled={isLoading}
              download
            >
              Download
            </a>
          </div>
        )}
        {!youtubeData && (
          <div className="text-white font-bold mt-10">
            Enter a {activeTab === "youtube" ? "YouTube" : "Instagram"} video
            URL and hit the download button.
          </div>
        )}
      </main>
      <BuyMeACoffee />
      <footer className="w-full py-6 bg-gray-800">
        <div className="container mx-auto text-center text-gray-400">
          &copy; 2024 Video Downloader. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
