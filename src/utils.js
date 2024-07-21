const getYoutubeVideos = async () => {
  try {
    const res = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyBjpxbAN7yMfpEHIiSjLXMjXT1ZxJPCBK4"
    );
    const data = res.json();
    return data;
  } catch (err) {
    console.log("oops", err);
  }
};

import { formatDistanceToNow, parseISO } from "date-fns";

export const formatPublishedAt = (publishedAt) => {
  const date = parseISO(publishedAt);
  return formatDistanceToNow(date, { addSuffix: true });
};

export const getChannelLogo = async (channelId) => {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyBjpxbAN7yMfpEHIiSjLXMjXT1ZxJPCBK4`
  );
  const data = res.json();
  return (
    data.items &&
    data.items.length > 0 &&
    data.items[0].snippet.thumbnails.default.url
  );
};
