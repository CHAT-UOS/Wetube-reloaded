//global controller
export const home = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comment: 2,
      createdAt: "2minites ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comment: 2,
      createdAt: "2minites ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 1,
      comment: 3,
      createdAt: "2minites ago",
      views: 73,
      id: 1,
    },
  ];
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("Search");
//videos controller
export const upload = (req, res) => res.send("upload");
export const see = (req, res) =>
  res.render("watch", { pageTitle: "Watch", videoNumber: req.params.id });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const deleteVideo = (req, res) => res.send("deleteVideo");
