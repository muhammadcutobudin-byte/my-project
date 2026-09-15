function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/mc-light.png")
  } else {
    img.setAttribute("src", "assets/mc1.png")
  }
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "tenho oculos escuros , barda , cara redonda , serio , muhammadcutobudin",
    )
  } else {
    img.setAttribute(
      "alt",
      "tenho oculos de vista , barda , cara redonda , serio , muhammadcutobudin",
    )
  }
}
