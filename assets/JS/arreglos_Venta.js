
const propiedadesVenta = [
  {
    nombre: 'Departamento Premium en Vitacura',
    src: "assets/img/deptoPremium.webp",
    descripcion: 'Departamento con terminaciones de lujo, vista panorámica y estacionamiento subterráneo.',
    ubicacion: 'Vitacura, Santiago',
    habitaciones: 3,
    baño: 2,
    costo: "284,210.53",
    smoke: false,
    pets: true
  },
  {
    nombre: 'Casa con jardín en La Reina',
    src: 'assets/img/casaJardin.jpg',
    descripcion: 'Casa independiente con gran patio, árboles frutales y espacio para ampliaciones.',
    ubicacion: 'La Reina, Santiago',
    habitaciones: 4,
    baño: 3,
    costo: "336,842",
    smoke: true,
    pets: true
  },
  {
    nombre: 'Estudio compacto en Santiago Centro',
    src: 'assets/img/estudioCompacto.jpg',
    descripcion: 'Estudio funcional ideal para inversionistas o jóvenes profesionales.',
    ubicacion: 'Santiago Centro, Santiago',
    habitaciones: 1,
    baño: 1,
    costo: "82,105.26",
    smoke: false,
    pets: false
  },
  {
    nombre: 'Duplex con terraza en Peñalolén',
    src: 'assets/img/OIP.webp',
    descripcion: 'Dúplex moderno con terraza privada y excelente conectividad.',
    ubicacion: 'Peñalolén, Santiago',
    habitaciones: 2,
    baño: 1,
    costo: "152,631.58",
    smoke: true,
    pets: true
  },
  {
    nombre: 'Loft industrial en Providencia',
    src: 'assets/img/loftIndustrial.jpg',
    descripcion: 'Loft con diseño industrial, amplios ventanales y excelente ubicación cerca del metro.',
    ubicacion: 'Providencia, Santiago',
    habitaciones: 1,
    baño: 1,
    costo: "173,684.21",
    smoke: false,
    pets: true
  },
  {
    nombre: 'Casa familiar en Ñuñoa',
    src: 'assets/img/casaFamiliar.jpg',
    descripcion: 'Casa ideal para familias, con patio trasero, quincho y seguridad 24/7.',
    ubicacion: 'Ñuñoa, Santiago',
    habitaciones: 3,
    baño: 2,
    costo: "221,052.63",
    smoke: true,
    pets: false
  }
]

const cardsVenta = document.querySelector("#venta")

cardsVenta.innerHTML = propiedadesVenta.map(propiedad => `

<div class="col-md-4 mb-4">
  <div class="card">
    <img
      src=${propiedad.src}
      class="card-img-top"
      alt="Imagen del departamento"
    />
    <div class="card-body">
      <h5 class="card-title">${propiedad.nombre}</h5>
      <p class="card-text">
        ${propiedad.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
        <i class="fas fa-bath"></i> ${propiedad.baño}
      </p>
      <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
      <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
        ${propiedad.smoke 
          ? '<i class="fas fa-smoking"></i> Permitido fumar' 
          : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}
      </p>
      <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
        ${propiedad.pets 
          ? '<i class="fas fa-paw"></i> Mascotas permitidas' 
          : '<i class="fa-solid fa-ban"></i> No se permiten mascotas'}
      </p>
    </div>
  </div>
</div>`).join(``);
