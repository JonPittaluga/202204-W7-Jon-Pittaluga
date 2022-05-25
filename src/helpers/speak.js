export function speak(id) {
  console.log(`${id} speaks`);

  let target = document.querySelector(`#${id} i`);
  console.log(target.classList);
  target.classList.replace("fa-thumbs-up", "fa-thumbs-down");
}
