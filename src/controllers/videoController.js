//global controller
export const trending = (res, req) => res.send("Home Page Videos");
export const search = (req, res) => res.send("Search");
//videos controller
export const upload = (req, res) => res.send("upload");
export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit");
};
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("deleteVideo");
};
