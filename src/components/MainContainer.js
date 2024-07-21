import { useEffect, useState } from "react";
import { formatPublishedAt, getChannelLogo } from "../utils";
// Sample static product array with unique IDs for example purposes
const products = [
  {
    id: 1,
    name: "100 Kids vs 100 Adults For $500,000",
    href: "#",
    imageSrc: "https://img.youtube.com/vi/0CTp1a-aCUM/sddefault.jpg",
    logoSrc:
      "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s68-c-k-c0x00ffffff-no-rj",
    imageAlt: "Photo of 100 Kids vs 100 Adults For $500,000",
    views: "266M",
    publishedAt: "1 year ago",
  },
  // Additional unique items...
];

const MainContainer = ({ sidebarOpen }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getYoutubeVideos = async () => {
      try {
        const res = await fetch(
          "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=AIzaSyBjpxbAN7yMfpEHIiSjLXMjXT1ZxJPCBK4"
        );
        const data = await res.json(); // Await JSON conversion
        setVideos(data.items);
      } catch (err) {
        console.log("oops", err);
      }
    };
    getYoutubeVideos();
  }, []);

  return (
    <div
      className={`${
        sidebarOpen ? "sm:col-span-10" : "sm:col-span-12"
      } col-span-12 bg-white`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
          {videos.length
            ? videos.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt={product.snippet.title}
                      src={product.snippet.thumbnails.medium.url}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex gap-4 items-start justify-between">
                    <img
                      alt={product.snippet.channelTitle}
                      src={getChannelLogo(product.snippet.channelId)}
                      className="object-cover object-center lg:h-12 lg:w-12 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.snippet.title}
                        </a>
                      </h3>
                      <p className="text-sm font-medium text-gray-900">
                        {product.statistics.viewCount} views :{" "}
                        {formatPublishedAt(product.snippet.publishedAt)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
