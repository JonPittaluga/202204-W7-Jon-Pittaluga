export function killCharacter(id) {
  console.log(`${id} has been killed`);
  // let target = document.getElementById(`#${id}, i`);
  let target = document.getElementById(`${id}`);
  console.dir(target.childNodes);
  console.log(target.classList);
  target.classList.replace("fa-thumbs-up", "fa-thumbs-down");
}
