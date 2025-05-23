const sistema = new System();

let ultimoId = 0;

class Proyect {
    constructor(img, description, technology, link){
        this.id = ultimoId++
        this.img = img;
        this.description = description;
        this.technology = technology;
        this.link = link;
    }
}

class Technology{
    constructor(img, nombre){
        this.img = img;
        this.nombre = nombre;
    }
}


// Crear tecnologías
const html = new Technology("img/html.webp", "HTML");
const css = new Technology("img/css.webp", "CSS");
const js = new Technology("img/javascript.webp", "JavaScript");
const bootstrap = new Technology("img/bootstrap.webp", "Bootstrap");
const csharp = new Technology("img/asp-net.webp", "C#");


// Agregarlas al sistema (mapa)
sistema.technologies.set("HTML", html);
sistema.technologies.set("CSS", css);
sistema.technologies.set("JavaScript", js);
sistema.technologies.set("Bootstrap", bootstrap);
sistema.technologies.set("C#", csharp);


// Agregar proyectos reales
sistema.proyects.push(
  new Proyect("img/portfolio.webp", "Portfolio personal responsive", [html, css, js, bootstrap], "https://github.com/MaxdemonIM/portfolio-ignacio-marichal"),
  new Proyect("img/consoleapp.webp", "Primera parte de sistema de gestión de aerolinea en consola", [csharp], "#https://github.com/MaxdemonIM/obligatorio-programacion-2"),
);