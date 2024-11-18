const books = [
  {
    src: "/assets/img/libros_leidos/el_fin_de_la_muerte.jpeg",
    url: "https://www.amazon.com.mx/El-fin-muerte-Cixin-Liu/dp/6073164521/ref=sr_1_1?__mk_es_MX=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=8QY3CMTT379A&amp;keywords=el+fin+de+la+muerte&amp;qid=1687628492&amp;s=gift-cards&amp;sprefix=el+fin+de+la+muerte%252Cgift-cards%252C136&amp;sr=1-1&_encoding=UTF8&tag=enriquesec-20&linkCode=ur2&linkId=c254c83de526f0e6b99e39a1a41cef17&camp=1789&creative=9325",
    alt: "El fin de la muerte",
  },
  {
    src: "/assets/img/libros_leidos/el_pequeno_libro_para_invertir_con_sentido_comun.jpg",
    url: "https://www.amazon.com.mx/peque%25C3%25B1o-libro-invertir-sentido-com%25C3%25BAn/dp/8423425401/ref=sr_1_1?__mk_es_MX=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=1JUE1A9HZL0SB&amp;keywords=El+peque%25C3%25B1o+libro+para+invertir+con+sentido+com%25C3%25BAn&amp;qid=1687628803&amp;sprefix=el+peque%25C3%25B1o+libro+para+invertir+con+sentido+com%25C3%25BAn%252Caps%252C149&amp;sr=8-1&_encoding=UTF8&tag=enriquesec-20&linkCode=ur2&linkId=f24d3d09602960b13957813ebdf1afc9&camp=1789&creative=9325",
    alt: "El pequeño libro para invertir con sentido común",
  },
  {
    src: "/assets/img/libros_leidos/el_club_de_las_5_de_la_manana.jpeg",
    url: "",
    alt: "El club de las 5 de la mañana",
  },
  {
    src: "/assets/img/libros_leidos/como_ganar_amigos_e_influir_sobre_las_personas.jpg",
    url: "",
    alt: "Cómo ganar amigos e influir sobre las personas",
  },
  {
    src: "/assets/img/libros_leidos/segunda_fundacion.jpg",
    url: "https://www.amazon.com.mx/Segunda-Fundaci%25C3%25B3n-Isaac-Asimov/dp/6073138792/ref=sr_1_1?__mk_es_MX=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=1G1D85ZOYDRNR&amp;keywords=segunda+fundacion&amp;qid=1689400502&amp;sprefix=segunda+fundacion%252Caps%252C129&amp;sr=8-1&_encoding=UTF8&tag=enriquesec-20&linkCode=ur2&linkId=b61a1dd273894d14548f04fe05e540e8&camp=1789&creative=9325",
    alt: "Segunda Fundación",
  },
  {
    src: "/assets/img/libros_leidos/fundacion_e_imperio.jpg",
    url: "https://www.amazon.com.mx/Fundaci%25C3%25B3n-Imperio-Isaac-Asimov/dp/6073130902/ref=sr_1_1?keywords=fundacion+e+imperio&amp;qid=1689400763&amp;sprefix=fundacion+e%252Caps%252C127&amp;sr=8-1&_encoding=UTF8&tag=enriquesec-20&linkCode=ur2&linkId=cba56f8d6cd49a4b3d3670f3f8525767&camp=1789&creative=9325",
    alt: "Fundación e imperio",
  },
  {
    src: "/assets/img/libros_leidos/cronicas_marcianas.jpeg",
    url: "https://www.amazon.com.mx/Cr%25C3%25B3nicas-marcianas-Ray-Bradbury/dp/6070761545/ref=sr_1_2?crid=2LT008TL936KA&amp;keywords=cronicas+marcianas+ray+bradbury&amp;qid=1689401014&amp;sprefix=cronicas+marcianas%252Caps%252C130&amp;sr=8-2&_encoding=UTF8&tag=enriquesec-20&linkCode=ur2&linkId=2f269dd96eadf59948588485d6a6e301&camp=1789&creative=9325",
    alt: "Crónicas Marcianas",
  },
  {
    src: "/assets/img/libros_leidos/fundacion.jpg",
    url: "https://www.amazon.com.mx/Fundaci%25C3%25B3n-Trilog%25C3%25ADa-fundaci%25C3%25B3n-Isaac-Asimov/dp/6071137578/ref=sr_1_2?crid=2ZP8XX924QKHA&amp;keywords=fundacion+isaac+asimov&amp;qid=1689401120&amp;sprefix=fundacion%252Caps%252C132&amp;sr=8-2&_encoding=UTF8&tag=enriquesec-20&linkCode=ur2&linkId=3ff5ec2eacb9e6346aed89415d7e7ccc&camp=1789&creative=9325",
    alt: "Fundación",
  },
  {
    src: "/assets/img/libros_leidos/el_arte_de_amar.jpeg",
    url: "https://amzn.to/3PPN1y5",
    alt: "El arte de amar",
  },
  {
    src: "/assets/img/libros_leidos/habitos_atomicos.jpeg",
    url: "https://amzn.to/3uXgL4d",
    alt: "Hábitos Atómicos",
  },
  {
    src: "/assets/img/libros_leidos/el_varon_domado.jpg",
    url: "https://amzn.to/3NQN4bP",
    alt: "El Varon domado",
  },
  {
    src: "/assets/img/libros_leidos/la_teoria_del_todo.jpg",
    url: "https://amzn.to/3ARWdOt",
    alt: "La teoría del todo",
  },
  {
    src: "/assets/img/libros_leidos/inteligencia_fisica.jpeg",
    url: "https://amzn.to/3zaGhp0",
    alt: "Inteligencia Física",
  },
  {
    src: "/assets/img/libros_leidos/tiende_tu_cama.jpg",
    url: "https://amzn.to/3OdejgE",
    alt: "Tiende tu cama y otros pequeños hábitos",
  },
  {
    src: "/assets/img/libros_leidos/los_jugadores_del_titan.jpg",
    url: "https://amzn.to/3yOahWo",
    alt: "Los jugadores de Titán",
  },
  {
    src: "/assets/img/libros_leidos/las_dos_ancianas.jpg",
    url: "https://amzn.to/3OdegBu",
    alt: "Las dos ancianas",
  },
  {
    src: "/assets/img/libros_leidos/los_cuatro_acuerdos.jpg",
    url: "https://amzn.to/3uTzygQ",
    alt: "Los cuatro acuerdos",
  },
  {
    src: "/assets/img/libros_leidos/milenio_oscuro.jpeg",
    url: "",
    alt: "Milenio Oscuro",
  },
  {
    src: "/assets/img/libros_leidos/1984.jpg",
    url: "https://amzn.to/3o6vvtQ",
    alt: "1984",
  },
  {
    src: "/assets/img/libros_leidos/flores_en_el_atico.jpg",
    url: "https://amzn.to/3O90uQs",
    alt: "Flores en el ático",
  },
  {
    src: "/assets/img/libros_leidos/jaque_al_psicoanalista.jpg",
    url: "https://amzn.to/3oaVTTk",
    alt: "Jaque al Psicoanalista",
  },
  {
    src: "/assets/img/libros_leidos/el_sutil_arte.jpg",
    url: "https://amzn.to/3PuD4pI",
    alt: "El sutil arte de que te importe un carajo",
  },
  {
    src: "/assets/img/libros_leidos/la_biblia_de_los_caidos.jpg",
    url: "https://amzn.to/3PfhUMN",
    alt: "La Biblia de los Caídos. Tomo 1",
  },
  {
    src: "/assets/img/libros_leidos/quien_se_ha_llevado_mi_queso.jpg",
    url: "https://amzn.to/3cnHTCT",
    alt: "¿Quién se ha llevado mi queso?",
  },
  {
    src: "/assets/img/libros_leidos/mas_alla_del_invierno.jpg",
    url: "https://amzn.to/3zaBPa0",
    alt: "Más allá del invierno",
  },
  {
    src: "/assets/img/libros_leidos/el_secreto.jpg",
    url: "https://amzn.to/3IOmpLU",
    alt: "El secreto",
  },
  {
    src: "/assets/img/libros_leidos/el_bosque_oscuro.jpg",
    url: "https://amzn.to/3IOmpLU",
    alt: "El bosque oscuro",
  },
  {
    src: "/assets/img/libros_leidos/el_problema_de_los_tres_cuerpo.jpg",
    url: "https://amzn.to/3uTWQmG",
    alt: "El problema de los tres cuerpos",
  },
  {
    src: "/assets/img/libros_leidos/un_mundo_feliz.jpg",
    url: "https://amzn.to/3clu6wC",
    alt: "Un mundo feliz",
  },
  {
    src: "/assets/img/libros_leidos/origen.jpg",
    url: "https://amzn.to/3IITOYa",
    alt: "Origen",
  },
  {
    src: "/assets/img/libros_leidos/el_psicoanalista.jpg",
    url: "https://amzn.to/3RH0L07",
    alt: "El psicoanalista",
  },
];