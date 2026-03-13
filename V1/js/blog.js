fetch("blog.json")
  .then((res) => res.json())
  .then((posts) => {
    const container = document.getElementById("blog");

    posts.forEach((post) => {
      container.innerHTML += `

<div>

<h3>${post.title}</h3>

<p>${post.content}</p>

</div>

`;
    });
  });
