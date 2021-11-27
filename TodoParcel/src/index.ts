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
    const input: HTMLInputElement = form.elements["text"] as HTMLInputElement;

    // add item
    addItem(input.value);
    // form reset
    form.reset();
    // form focus
    form.focus();
  });

  // Add Item
  function addItem(itemText: string) {
    // add li
    const item: HTMLLIElement = document.createElement("li");
    // 1. add li in text
    item.appendChild(document.createTextNode(itemText));

    // checkbox
    const checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";
    // checkbox count
    checkbox.addEventListener("change", () => recount());
    // 2. checkbox
    item.appendChild(checkbox);

    // delete button
    const deleteButton: HTMLButtonElement = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      list.removeChild(item);
      recount();
    });
    item.appendChild(deleteButton);

    list.appendChild(item);
  }

  function recount() {
    const count = list.querySelectorAll("input:checked").length;
    done.textContent = `${count} Done`;
  }
}
