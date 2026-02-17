const reviews = [
  {
    name: "Rahul",
    text: "Amazing stay!",
  },

  {
    name: "Priya",
    text: "Beautiful property!",
  },
];

const container = document.getElementById("reviews");

reviews.forEach((r) => {
  container.innerHTML += `<div>

★★★★★

<p>${r.text}</p>

<b>${r.name}</b>

</div>`;
});
