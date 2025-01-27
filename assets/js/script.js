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

const alquiler = document.querySelector(".propiedades-alquiler");

for (let card_alquiler of alquiler) {
  alquiler.innerHTML = `<article class="card">
    <img src="${propiedades_alquiler[0].src}" alt="${
    propiedades_alquiler[0].nombre
  }">
    <h2>${propiedades_alquiler[0].nombre}</h2>
    <p>${propiedades_alquiler[0].descripcion}</p>
    <p>${propiedades_alquiler[0].ubicacion}</p>
    <p>Habitaciones: ${propiedades_alquiler[0].habitaciones}</p>
    <p>Baños: ${propiedades_alquiler[0].baños}</p>
    <p>Costo: $${propiedades_alquiler[0].costo}</p>
    <p>Smoke: ${propiedades_alquiler[0].smoke ? "Si" : "No"}</p>
    <p>Pets: ${propiedades_alquiler[0].pets ? "Si" : "No"}</p>
</article>;`;
}
/* 
propiedades_alquiler.forEach(function() => { */