function saveBlog() {
  const title = document.getElementById("title").value;

  const content = document.getElementById("content").value;

  fetch("blog.json")
    .then((res) => res.json())
    .then((data) => {
      data.push({ title, content });

      const blob = new Blob([JSON.stringify(data)], {
        type: "application/json",
      });

      const a = document.createElement("a");

      a.href = URL.createObjectURL(blob);

      a.download = "blog.json";

      a.click();
    });
}
