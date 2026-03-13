const posts = ["images/room1.jpg", "images/room2.jpg"];

const container = document.getElementById("instagram-feed");

posts.forEach((img) => {
  container.innerHTML += `<img src="${img}">`;
});
