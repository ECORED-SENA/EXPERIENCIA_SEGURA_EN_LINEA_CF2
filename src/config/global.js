export default {
  global: {
    componenteFormativo: 'Herramientas y estrategias de protección digital',
    descripcionCurso:
      'Este componente formativo presenta las herramientas y estrategias a utilizar en el caso de protección digital, con el fin de evitar amenaza y riesgo que afecte la experiencia al momento de utilizar recursos digitales.',
    imagenBannerPrincipal: require('@/assets/curso/inicio.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Herramientas y estrategias de protección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Clasificación y características de las herramientas de protección',
            hash: 't1-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Antivirus gratuitos',
            hash: 't1-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Gestión de contraseñas',
            hash: 't1-3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Fuentes de descarga segura de software',
            hash: 't1-4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Datos personales y datos de terceros ',
            hash: 't1-5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Compras por internet',
            hash: 't1-6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas y estrategias de protección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fuentes de descarga segura de software',
            hash: 't2-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Identidad digital',
            hash: 't2-2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Delitos informáticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Legislación actual',
            hash: 't3-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Tipología, sanciones y penalizaciones de los delitos informáticos',
            hash: 't3-2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Avance Jurídico Casa Editorial Ltda. (2021). Leyes desde 1992 - Vigencia expresa y control de constitucionalidad [Ley 1273 de 2009]. Senado de la República de Colombia. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1273_2009.html',
    },
    {
      referencia: 'Bastidas, H. (2021). Gestión de contraseñas. ',
      link: 'https://www.youtube.com/watch?v=WuO1Fu38yPk',
    },
    {
      referencia: 'Bastidas, H. (2021). Huella digital. ',
      link: 'https://www.youtube.com/watch?v=-p5HezBeYQE',
    },
    {
      referencia: 'Interpol. (s.f). Huellas dactilares. ',
      link:
        'https://www.interpol.int/es/Como-trabajamos/Policia-cientifica/Huellas-dactilares',
    },
  ],
  glosario: [
    {
      termino: 'Antivirus',
      significado:
        'tipo <em>software</em> diseñado específicamente para ayudar a detectar, prevenir y eliminar virus informáticos y <em>software</em> malicioso o <em>malware</em>.',
    },
    {
      termino: 'Contraseña',
      significado:
        'clave que permite acceder a un lugar, ya sea en el mundo real o en el virtual. Las contraseñas se utilizan por varios motivos: para preservar la intimidad, para mantener un secreto, como una medida de seguridad o como una combinación de todo ello.',
    },
    {
      termino: 'Delito informático',
      significado:
        'actos ilícitos en los que se usan las tecnologías de la información, como las computadoras, los programas informáticos, los medios electrónicos, internet, entre otros, como medio o como fin.',
    },
    {
      termino: 'Huella digital',
      // terminoHtml: '<em>Áectores</em>',
      significado:
        'corresponde a los rastros y huellas de identidad que un usuario deja al utilizar la internet o dispositivos digitales. ',
    },
    {
      termino: 'Internet',
      significado:
        'unión de todas las redes y computadoras distribuidas por todo el mundo, por lo que se podría definir como una red global en la que se conjuntan todas las redes que utilizan protocolos TCP/IP y que son compatibles entre sí.',
    },
    {
      termino: 'Redes sociales',
      significado:
        'estructuras formadas en internet por personas u organizaciones que se conectan a partir de intereses o valores comunes.',
    },
    {
      termino: 'Software',
      terminoHtml: '<em>Software</em>',
      significado:
        'conjunto de programas o aplicaciones, instrucciones y reglas informáticas que hacen posible el funcionamiento del equipo informático.',
    },
  ],
  complementario: [
    {
      texto: 'Bastidas, H. (2021). Gestión de contraseñas.',
      tipo: 'Video',
      link: 'https://youtu.be/WuO1Fu38yPk',
    },
    {
      texto: 'Bastidas, H. (2021). Huella digital.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-p5HezBeYQE ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
