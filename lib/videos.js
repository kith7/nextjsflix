export const getVideos = async (searchQuery) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${searchQuery}&key=${YOUTUBE_API_KEY}`
    );
    const data = await res.json();
    if (data?.error) {
      console.error("Youtube API error", data.error);
      return [];
    }
    return data?.items.map((item) => {
      const id = item.id?.videoId || item.id;
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id,
      };
    });
  } catch (err) {
    console.log(err, "Something wnet wrong with the video library");
    return [];
  }
};
