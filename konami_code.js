const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
function init() {
  var page = document.body
  var pressedKey = []
  page.addEventListener('keydown', function(event) {
    pressedKey.push(event.key) ;
    (pressedKey[0] === codes[0]) ? compare(pressedKey) : pressedKey.shift();
  })
}
function compare(array) {

}
