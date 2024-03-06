function toggle() {
  const html = document.documentElement

  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // função acima resumida na linha abaixo

  html.classList.toggle("light")

  img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/4263.jpg")
    img.setAttribute(
      "alt",
      "Foto de uma lâmpada apagada, com o tema claro de fundo"
    )
  } else {
    img.setAttribute("src", "./assets/4262.jpg")
    img.setAttribute(
      "alt",
      "Foto de uma lâmpada acesa, com o tema escuro de fundo"
    )
  }
}
