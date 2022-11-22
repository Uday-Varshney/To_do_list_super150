window.addEventListener("load", () => {
  const form = document.querySelector("#new-tsk-form");
  const input = document.querySelector("#new-tsk-input");
  const list_el = document.querySelector("#tsks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const tsk = input.value;

    const tsk_el = document.createElement("div");
    tsk_el.classList.add("tsk");

    const tsk_content_el = document.createElement("div");
    tsk_content_el.classList.add("content");

    tsk_el.appendChild(tsk_content_el);

    const tsk_input_el = document.createElement("input");
    tsk_input_el.classList.add("text");
    tsk_input_el.type = "text";
    tsk_input_el.value = tsk;
    tsk_input_el.setAttribute("readonly", "readonly");

    tsk_content_el.appendChild(tsk_input_el);

    const tsk_actions_el = document.createElement("div");
    tsk_actions_el.classList.add("actions");

    const tsk_edit_el = document.createElement("button");
    tsk_edit_el.classList.add("edit");
    tsk_edit_el.innerText = "Edit";

    const tsk_delete_el = document.createElement("button");
    tsk_delete_el.classList.add("delete");
    tsk_delete_el.innerText = "Delete";

    tsk_actions_el.appendChild(tsk_edit_el);
    tsk_actions_el.appendChild(tsk_delete_el);

    tsk_el.appendChild(tsk_actions_el);

    list_el.appendChild(tsk_el);

    input.value = "";

    tsk_edit_el.addEventListener("click", (e) => {
      if (tsk_edit_el.innerText.toLowerCase() == "edit") {
        tsk_edit_el.innerText = "Save";
        tsk_input_el.removeAttribute("readonly");
        tsk_input_el.focus();
      } else {
        tsk_edit_el.innerText = "Edit";
        tsk_input_el.setAttribute("readonly", "readonly");
      }
    });

    tsk_delete_el.addEventListener("click", (e) => {
      list_el.removeChild(tsk_el);
    });
  });
});
