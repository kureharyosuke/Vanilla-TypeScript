document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".todo");
  todo(container);
});

function todo(container: Element) {
  container.innerHTML = `
  <h2>Todo</h2>
  <ul></ul>
  <h3>0 Done</h3>
  <form>
    <input type="text" name="text" />
    <button type="sumbit">Add</button>
  </form>
  `;

  const list = container.querySelector<HTMLUListElement>("ul");
  const done = container.querySelector<HTMLHeadingElement>("h3");
  const form = container.querySelector<HTMLFormElement>("form");

  form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // form in input
    const input = form.elements["text"] as HTMLInputElement;

    // form reset
    form.reset();
    // form focus
    form.focus();
  });
}
