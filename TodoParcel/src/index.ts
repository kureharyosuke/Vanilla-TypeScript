document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".todo");
  todo(container);
});

function todo(container: Element) {
  container.innerHTML = `<div></div>`;
}
