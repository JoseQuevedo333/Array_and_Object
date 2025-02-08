const propiedades_alquiler = [
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
const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de lujo en zona tranquila",
    src: "assets/img/Apartamento_lujo.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado cerca del río que cruza la ciudad",
    ubicacion: "432 Quiet Lane, Silence Suburb, SA 234547",
    habitaciones: 3,
    baños: 3,
    costo: 6000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa familiar alejada del ruido de la ciudad",
    src: "./assets/img/Casa_familiar_suburbio.jpg",
    descripcion:
      "Esta casa familiar está ubicada en un suburbio tranquilo y seguro",
    ubicacion: "678 Country Road, Family Suburb 2, FR 567543",
    habitaciones: 4,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa familiar con jardín en suburbio seguro",
    src: "./assets/img/Casa_familiar_suburbio_2.jpg",
    descripcion:
      "Esta casa familiar cuenta con un jardín amplio y seguro para los niños",
    ubicacion: "332 Bear Place, Texas, US 456990",
    habitaciones: 3,
    baños: 4,
    costo: 6200,
    smoke: false,
    pets: true,
  },
];

const alquiler = document.getElementById("propiedades-alquiler");

// Inicializar una variable para almacenar todas las tarjetas
let contenido_alquiler = "";

let countAlquiler = 0;
let offsetAlquiler = Math.floor(
  Math.random() * (propiedades_alquiler.length - 3)
);

// Recorrer el arreglo de propiedades
propiedades_alquiler.forEach(function (propiedad, index) {
  if (index < offsetAlquiler) {
    return;
  }
  if (countAlquiler > 2) {
    return;
  }
  countAlquiler++;

  let smokeText = "";
  let petsText = "";

  // Condicional para smoke
  if (propiedad.smoke) {
    smokeText = `<p class="text-success">
                  <i class="fas fa-smoking"></i> Permitido fumar
                </p>`;
  } else {
    smokeText = `<p class="text-danger">
      <i class="fas fa-smoking-ban"></i> No se permite fumar
    </p>`;
  }

  // Condicional para pets
  if (propiedad.pets) {
    petsText = `<p class="text-success">
      <i class="fas fa-paw"></i> Mascotas permitidas
    </p>`;
  } else {
    petsText = `<p class="text-danger">
      <i class="fas fa-ban"></i> No se permiten mascotas
    </p>`;
  }

  contenido_alquiler += `
<div class="col-md-4 mb-4">
  <div class="card">
    <img
      src="${propiedad.src}"
      class="card-img-top"
      alt="${propiedad.nombre}"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${propiedad.nombre}
      </h5>
      <p class="card-text">
        ${propiedad.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
        <i class="fas fa-bath"></i> ${propiedad.baños}
      </p>
      <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
      ${smokeText}
      ${petsText}
    </div>
  </div>
</div>`;
});

// Asignar todo el contenido generado al contenedor
alquiler.innerHTML = contenido_alquiler;

const venta = document.getElementById("propiedades-venta");

// Inicializar una variable para almacenar todas las tarjetas
let contenido_venta = "";

// Recorrer el arreglo de propiedades
let countVenta = 0;
let offsetVenta = Math.floor(Math.random() * (propiedades_venta.length - 3));

propiedades_venta.forEach(function (propiedad, index) {
  if (index < offsetVenta) {
    return;
  }
  if (countVenta > 2) {
    return;
  }
  countVenta++;

  let smokeText = "";
  let petsText = "";

  // Condicional para smoke
  if (propiedad.smoke) {
    smokeText = `<p class="text-success">
                  <i class="fas fa-smoking"></i> Permitido fumar
                </p>`;
  } else {
    smokeText = `<p class="text-danger">
      <i class="fas fa-smoking-ban"></i> No se permite fumar
    </p>`;
  }

  // Condicional para pets
  if (propiedad.pets) {
    petsText = `<p class="text-success">
      <i class="fas fa-paw"></i> Mascotas permitidas
    </p>`;
  } else {
    petsText = `<p class="text-danger">
      <i class="fas fa-ban"></i> No se permiten mascotas
    </p>`;
  }

  contenido_venta += `
<div class="col-md-4 mb-4">
  <div class="card">
    <img
      src="${propiedad.src}"
      class="card-img-top"
      alt="${propiedad.nombre}"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${propiedad.nombre}
      </h5>
      <p class="card-text">
        ${propiedad.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
        <i class="fas fa-bath"></i> ${propiedad.baños}
      </p>
      <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
      ${smokeText}
      ${petsText}
    </div>
  </div>
</div>`;
});

venta.innerHTML = contenido_venta;

