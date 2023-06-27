let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #af4b80;">Desarrollo sitios web y escribo articulos de diferentes temas.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
