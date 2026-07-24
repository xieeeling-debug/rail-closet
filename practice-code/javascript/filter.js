const items = [
  { type: "top", color: "black" },
  { type: "bottom", color: "blue" },
  { type: "top", color: "white" },
  { type: "bottom", color: "khaki" },
];

let filter = "all";
const list = document.querySelector("#list");

function render() {
  list.innerHTML = "";
  const visible =
    filter === "all" ? items : items.filter((item) => item.type === filter);
  for (const item of visible) {
    const li = document.createElement("li");
    li.textContent = `${item.color} ${item.type}`;
    list.appendChild(li);
  }
}

document.querySelectorAll("button[data-filter]").forEach((btn) => {
  btn.addEventListener("click", () => {
    filter = btn.getAttribute("data-filter");
    render();
  });
});

document.querySelector("#add").addEventListener("click", () => {
  const type = document.querySelector("#type").value;
  const color = document.querySelector("#color").value.trim();
  if (!color) return;
  items.push({ type, color });
  document.querySelector("#color").value = "";
  render();
});

render();
