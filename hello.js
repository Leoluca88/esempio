createPage("Ciao Domenico").open();
createPage("Ciao Massimo");

var drawer = tabris.create("Drawer");

tabris.create("ImageView", {
  image: "img/napoli.jpg",
  scaleMode: "fill",
  layoutData: {left: 0, right: 0, top: 0, height: 200}
}).appendTo(drawer);

tabris.create("PageSelector", {
  layoutData: {left: 0, top: 200, right: 0, bottom: 0}
}).appendTo(drawer);

function createPage(title) {
  var page = tabris.create("Page", {
    title: title,
    image: "img/users.png",
    topLevel: true
  });
  return page;
}

