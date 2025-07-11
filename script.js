const canvas = document.getElementById("binario-fondo");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0ff";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
      
    const secciones = {
        "presentaciones": "presentaciones",
        "troyanos": "troyanos",
        "certificados": "certificados",
        "bio": "bio",
        "sobre mí": "bio",
        "contacto": "contacto",
        "donaciones": "donacion"
      };

      function buscar() {
        const query = document.getElementById("busqueda").value.toLowerCase();
        for (let clave in secciones) {
          if (clave.includes(query)) {
            document.getElementById(secciones[clave]).scrollIntoView({ behavior: "smooth" });
            return;
          }
        }
      }

      function mostrarSugerencias() {
        const input = document.getElementById("busqueda");
        const lista = document.getElementById("sugerencias");
        const texto = input.value.toLowerCase();
        lista.innerHTML = "";

        const coincidencias = Object.keys(secciones).filter(s => s.includes(texto));
        if (coincidencias.length > 0 && texto !== "") {
          lista.style.display = "block";
          coincidencias.forEach(s => {
            const item = document.createElement("li");
            item.textContent = s.charAt(0).toUpperCase() + s.slice(1);
            item.onclick = () => {
              input.value = s;
              lista.style.display = "none";
              buscar();
            };
            lista.appendChild(item);
          });
        } else {
          lista.style.display = "none";
        }
      }

  

  const canvas = document.getElementById("binario-fondo");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letras = "01";
  const fontSize = 14;
  const columnas = canvas.width / fontSize;
  const gotas = Array.from({ length: columnas }).fill(1);

  function dibujar() {
    ctx.fillStyle = "rgba(15, 15, 15, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00bcd4";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < gotas.length; i++) {
      const texto = letras[Math.floor(Math.random() * letras.length)];
      ctx.fillText(texto, i * fontSize, gotas[i] * fontSize);

      if (gotas[i] * fontSize > canvas.height || Math.random() > 0.975) {
        gotas[i] = 0;
      }
      gotas[i]++;
    }
  }

  setInterval(dibujar, 70);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });


      const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

function updateCarousel() {
  const width = images[0].clientWidth;
  track.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));        
