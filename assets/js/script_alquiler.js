const propiedades_alquiler_ventana = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "344 Elm Street, Somecity, CA 66788",
    habitaciones: 2,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa sobre pilotes en el lago",
    src: "./assets/img/Casa_sobre_pilotes_lago.jpg",
    descripcion:
      "Esta hermosa casa sobre pilotes está ubicada en un lago Merdin, zona tranquila y protegida",
    ubicacion: "5346 Lakeview Drive, Bournville, CA 11564",
    habitaciones: 2,
    baños: 2,
    costo: 2300,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Cabaña en bosque de pinos y abetos",
    src: "./assets/img/Cabaña_bosque.jpg",
    descripcion:
      "Esta cabaña de madera está ubicada en un bosque de pinos y abetos en las montañas y cercano a una reserva natural",
    ubicacion: "s/n Pine Forest Road, Yellowville, CA 90991",
    habitaciones: 3,
    baños: 2,
    costo: 2700,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento en pleno centro de la ciudad",
    src: "./assets/img/Apartamento_centro.jpg",
    descripcion:
      "Este departamento de 2 habitaciones está ubicado en el centro, en barrio universitario",
    ubicacion: "5678 University Avenue, Jimmitown, SA 12333",
    habitaciones: 2,
    baños: 1,
    costo: 1500,
    smoke: false,
    pets: false,
  },
];

//Generar templates para pagina de alquileres

const alquiler_ventana = document.getElementById(
  "propiedades-alquiler-ventana"
);

// Inicializar una variable para almacenar todas las tarjetas
let contenido_alquiler_ventana = "";

// Recorrer el arreglo de propiedades
propiedades_alquiler_ventana.forEach(function (propiedad_ventana) {
  let smokeText_ventana_alquiler = "";
  let petsText_ventana_alquiler = "";

  // Condicional para smoke
  if (propiedad_ventana.smoke) {
    smokeText_ventana_alquiler = `<p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                  </p>`;
  } else {
    smokeText_ventana_alquiler = `<p class="text-danger">
        <i class="fas fa-smoking-ban"></i> No se permite fumar
      </p>`;
  }

  // Condicional para pets
  if (propiedad_ventana.pets) {
    petsText_ventana_alquiler = `<p class="text-success">
        <i class="fas fa-paw"></i> Mascotas permitidas
      </p>`;
  } else {
    petsText_ventana_alquiler = `<p class="text-danger">
        <i class="fas fa-ban"></i> No se permiten mascotas
      </p>`;
  }

  contenido_alquiler_ventana += `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="${propiedad_ventana.src}"
        class="card-img-top"
        alt="${propiedad_ventana.nombre}"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${propiedad_ventana.nombre}
        </h5>
        <p class="card-text">
          ${propiedad_ventana.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedad_ventana.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${propiedad_ventana.habitaciones} |
          <i class="fas fa-bath"></i> ${propiedad_ventana.baños}
        </p>
        <p><i class="fas fa-dollar-sign"></i>${propiedad_ventana.costo}</p>
        ${smokeText_ventana_alquiler}
        ${petsText_ventana_alquiler}
      </div>
    </div>
  </div>`;
});

// Asignar todo el contenido generado al contenedor
alquiler_ventana.innerHTML = contenido_alquiler_ventana;
