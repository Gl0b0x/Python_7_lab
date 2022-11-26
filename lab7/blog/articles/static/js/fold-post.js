let foldBtns = document.querySelectorAll(".fold-button");
let article_contents = document.querySelectorAll(".article-content");
// for (let i = 0; i < foldBtns.length; i++) {
//   foldBtns[i].addEventListener("click", (e) => {
//     if (e.target.className == "fold-button folded") {
//       e.target.innerHTML = "свернуть";
//       e.target.className = "fold-button";
//       var displayState = "block";
//     } else {
//       e.target.className = "fold-button folded";
//       e.target.innerHTML = "развернуть";
//       var displayState = "none";
//     }
//     article_contents[i].style.display = displayState;
//   });
// }

for (let i = 0; i < foldBtns.length; i++) {
  foldBtns[i].addEventListener("click", (e) => {
    if (e.target.parentElement.className == "one-post folded") {
      e.target.parentElement.className = "one-post";
      e.target.innerHTML = "свернуть";
    } else {
      e.target.parentElement.className = "one-post folded";
      e.target.innerHTML = "развернуть";
    }
  });
}