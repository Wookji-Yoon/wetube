export const trending = (req, res) =>
  res.render("home.pug", { pageTitle: "Home" });
export const see = (req, res) =>
  res.render("watch.pug", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit.pug", { pageTitle: "Edit" });
export const remove = (req, res) => res.send("Remove Video");
export const upload = (req, res) => res.send("Upload Video");
export const search = (req, res) => res.send("Search");
