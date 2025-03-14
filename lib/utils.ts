import toast from "react-hot-toast";

export const embedYoutubeUrl = (youtubeUrl: string): string => {
  const res = youtubeUrl.split("=");
  const embeddedUrl = "https://www.youtube.com/embed/" + res[1];
  return embeddedUrl;
};

export const toastMessage = (message: string) => {
  toast.success(`${message}`, {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });
};
