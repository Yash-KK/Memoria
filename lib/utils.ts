export const embedYoutubeUrl = (youtubeUrl: string): string => {
  const res = youtubeUrl.split("=");
  const embeddedUrl = "https://www.youtube.com/embed/" + res[1];
  return embeddedUrl;
};
