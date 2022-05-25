// Checks the life status of a character and returns an html template

// export function getStatus(isAlive) {
//   if (isAlive) {
//     return '<i class="fas fa-thumbs-up"></i>';
//   } else if (!isAlive) {
//     return '<i class="fas fa-thumbs-down"></i>';
//   }
// }
export function getStatus(isAlive) {
  console.log(">>>>>>>>>>", isAlive);
  isAlive === false
    ? '<i class="fas fa-thumbs-up"></i>'
    : '<i class="fas fa-thumbs-down"></i>';
}
