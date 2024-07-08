import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - YouTube Video Downloader</title>
        <meta
          name="description"
          content="Learn more about YouTube Video Downloader, our mission, and the team behind this project."
        />
        <meta
          name="keywords"
          content="About Us, YouTube Video Downloader, Team, Mission"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="About Us - YouTube Video Downloader"
        />
        <meta
          property="og:description"
          content="Learn more about YouTube Video Downloader, our mission, and the team behind this project."
        />
        <meta property="og:image" content="/path/to/about-image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/about" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - YouTube Video Downloader"
        />
        <meta
          name="twitter:description"
          content="Learn more about YouTube Video Downloader, our mission, and the team behind this project."
        />
        <meta name="twitter:image" content="/path/to/about-image.jpg" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
      </Helmet>
      <div className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to YouTube Video Downloader, your number one source for
          downloading YouTube videos quickly and easily. We're dedicated to
          providing you the very best service, with an emphasis on speed,
          reliability, and user-friendliness.
        </p>
        <p className="text-lg mb-4">
          Founded in 2024 by Sandeep Bhagat, YouTube Video Downloader has come a
          long way from its beginnings in the world. When I first started out,
          my passion for providing an easy way to download YouTube videos drove
          me to start this project.
        </p>
        <p className="text-lg mb-4">
          We hope you enjoy using our service as much as we enjoy offering it to
          you. If you have any questions or comments, please don't hesitate to
          contact us.
        </p>
        <p className="text-lg">
          Sincerely,
          <br />
          Youtube Downloader
        </p>
      </div>
    </div>
  );
};

export default About;
