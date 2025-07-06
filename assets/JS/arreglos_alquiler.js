
const propiedadesAlquiler = [
  {
    nombre: 'Departamento amoblado en Las Condes',
    src: 'assets/img/deptoAmoblado.jpg',
    descripcion: 'Cómodo departamento amoblado, cercano a metro y centros comerciales.',
    ubicacion: 'Las Condes, Santiago',
    habitaciones: 2,
    baño: 2,
    costo: 850,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Casa con patio en Maipú',
    src: 'assets/img/casaPatio.jpg',
    descripcion: 'Casa familiar con amplio patio, ideal para niños y mascotas.',
    ubicacion: 'Maipú, Santiago',
    habitaciones: 3,
    baño: 2,
    costo: 700,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Estudio moderno en Providencia',
    src: 'assets/img/estudioModerno.jpg',
    descripcion: 'Estudio moderno, excelente conectividad y seguridad 24/7.',
    ubicacion: 'Providencia, Santiago',
    habitaciones: 1,
    baño: 1,
    costo: 520,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Departamento con vista al mar',
    src: 'assets/img/deptoVistaMar.jpg',
    descripcion: 'Departamento en piso alto con espectacular vista al mar y terraza.',
    ubicacion: 'Viña del Mar, Valparaíso',
    habitaciones: 2,
    baño: 2,
    costo: 950,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Loft céntrico en Santiago',
    src: 'assets/img/loftCentro.jpg',
    descripcion: 'Loft en pleno centro, cercano a universidades y servicios.',
    ubicacion: 'Santiago Centro, Santiago',
    habitaciones: 1,
    baño: 1,
    costo: 480,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Casa amplia en La Florida',
    src: 'assets/img/casaFlorida.jpg',
    descripcion: 'Casa amplia con quincho y estacionamiento para dos autos.',
    ubicacion: 'La Florida, Santiago',
    habitaciones: 4,
    baño: 3,
    costo: "1.100",
    smoke: true,
    pets: true
  }
]

const cardsAlquiler = document.querySelector("#venta")

cardsAlquiler.innerHTML = propiedadesAlquiler.map(propiedad => `

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
