const propiedades_venta_ventana = [
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

//Generar templates para pagina de ventas

const venta_ventana = document.getElementById("propiedades-venta-ventana");

// Inicializar una variable para almacenar todas las tarjetas
let contenido_venta_ventana = "";

// Recorrer el arreglo de propiedades
propiedades_venta_ventana.forEach(function (propiedad_ventana) {

  let smokeText_ventana_venta = "";
  let petsText_ventana_venta = "";

  // Condicional para smoke
  if (propiedad_ventana.smoke) {
    smokeText_ventana_venta = `<p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                  </p>`;
  } else {
    smokeText_ventana_venta = `<p class="text-danger">
        <i class="fas fa-smoking-ban"></i> No se permite fumar
      </p>`;
  }

  // Condicional para pets
  if (propiedad_ventana.pets) {
    petsText_ventana_venta = `<p class="text-success">
        <i class="fas fa-paw"></i> Mascotas permitidas
      </p>`;
  } else {
    petsText_ventana_venta = `<p class="text-danger">
        <i class="fas fa-ban"></i> No se permiten mascotas
      </p>`;
  }

  contenido_venta_ventana += `
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
        ${smokeText_ventana_venta}
        ${petsText_ventana_venta}
      </div>
    </div>
  </div>`;
});

venta_ventana.innerHTML = contenido_venta_ventana;
