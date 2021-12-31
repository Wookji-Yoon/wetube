let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 0,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
];

export const trending = (req, res) => {
  return res.render("home.pug", { pageTitle: "Home", videos });
};
export const see = (req, res) => {
  const { id } = req.params;
  const video = videos[id];
  return res.render("watch.pug", {
    pageTitle: `Watching ${video.title}`,
    video,
  });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id];
  return res.render("edit.pug", {
    pageTitle: `Editing :  ${video.title}`,
    video,
  });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload.pug", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  const id = videos.length + 1;
  videos.push({ title, id });
  return res.redirect("/");
};
