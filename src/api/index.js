/* Añadir nuevo negocio con esta plantilla, 
dentro del array businesses en la categoria adecuada

    {
        name: '',
        owner: '',
        phone: ,
        zone: ''
    },
*/

const data = [{
    category: 'Comidas ',
    subcategory: 'Elaboradas',
    businesses: [{
        name: 'Café Sur',
        owner: 'Agustín Lajcher',
        phone: 1135809005,
        zone: 'Bernal'
    },{
        name: 'El Charro',
        owner: 'Melina Rosa Bravo',
        phone: 1140782248,
        zone: 'Bernal'
    },{
        name: 'Mamucha',
        owner: 'Ana Maria Rodriguez',
        phone: 1135816090,
        zone: 'Quilmes'
    },{
        name: 'Bar Cultural Despertandonos',
        owner: 'Karina Marecos',
        phone: 1141752915,
        zone: 'Quilmes'
    },{
        name: 'La Chocolatta',
        owner: 'Sofia Bonani / Martin Green',
        phone: 1139151802,
        zone: 'Quilmes'
    },{
        name: 'Blondies',
        owner: 'Francisco Bellocchio',
        phone: 1136336581,
        zone: 'Quilmes'
    },{
        name: 'Puerto Sur Quilmes',
        owner: 'Patricia Prokopczuk',
        phone: 1144919215,
        zone: 'Quilmes'
    },{
        name: 'Casa Feten',
        owner: 'Federico Paniconi',
        phone: 1123174309,
        zone: 'Quilmes'
    },{
        name: 'Roees',
        owner: 'Roman DE Stefano',
        phone: 1154841513,
        zone: 'Quilmes'
    },{
        name: 'Bier Bank',
        owner: 'Matias Delarrivat',
        phone: 1138968869,
        zone: 'Quilmes'
    },{
        name: 'Café para TR3S',
        owner: 'Andrea Lucia Beloso Kofman',
        phone: 1154900236,
        zone: 'Quilmes'
    },{
        name: 'Comidas Yanina',
        owner: 'Yanina Marisol Diaz',
        phone: 1134991910,
        zone: 'Quilmes'
    },{
        name: 'Brote Alimentos',
        owner: 'Sara Brunengo',
        phone: 1128232413,
        zone: 'Bernal'
    },{
        name: 'Taberna Bier',
        owner: 'Fernando Aguilar',
        phone: 1151580320,
        zone: 'Quilmes'
    },{
        name: 'Aniceto',
        owner: 'Denise Fighera',
        phone: 1140804291,
        zone: 'Quilmes'
    },{
        name: 'Comidas Huesca',
        owner: 'Verónica Huesca',
        phone: 1153281038,
        zone: 'Quilmes Oeste'
    },{
        name: 'La cocina de Silvia',
        owner: 'Ligia Bacciadonne',
        phone: 1165764248,
        zone: 'Quilmes'
    },{
        name: 'Comida Patricio',
        owner: 'Patricio Otero',
        phone: 1136891995,
        zone: 'Bernal'
    },{
        name: 'Entre Pa Food',
        owner: 'Juan Martin Sanchez',
        phone: 1169775140,
        zone: 'Quilmes'
    },{
        name: 'Draft',
        owner: 'Mario Coccaro',
        phone: 1169140773,
        zone: 'Quilmes Oeste'
    },{
        name: 'Caseritos Bernal',
        owner: 'Nicolas Glorioso',
        phone: 1137632212,
        zone: 'Bernal'
    },{
        name: 'Comida Salustio',
        owner: 'Diego Salustio',
        phone: 1166709766,
        zone: 'Quilmes'
    },{
        name: 'Comidas Marcela',
        owner: 'Marcela Frette',
        phone: 1160572769,
        zone: 'Quilmes'
    },{
        name: 'Resto Balboa',
        owner: 'Pablo Luciano Blois',
        phone: 1158094355,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Adriana Mingiani',
        phone: 115118021,
        zone: 'Quilmes'
    },{
        name: 'SS Cocina y Catering',
        owner: 'Sebastian Suarez Huertas',
        phone: 1168558068,
        zone: 'Quilmes'
    },{
        name: 'Antúnez',
        owner: 'Marta Beatriz Antúnez',
        phone: 1135579225,
        zone: 'Ezpeleta Oeste'
    },{
        name: 'Comida Gerardo',
        owner: 'Gerardo Bernis',
        phone: 2213541698,
        zone: 'Bernal'
    },{
        name: 'Comidas Gustavo',
        owner: 'Gustavo Fabián Daer',
        phone: 1141819648,
        zone: 'Quilmes'
    },{
        name: 'Comidas Maria',
        owner: 'Maria Fernanda Rey',
        phone: 1135618181,
        zone: 'Quilmes'
    },{
        name: 'Comidas Caseras',
        owner: 'Stella Maris',
        phone: 1164781203,
        zone: 'Quilmes'
    },{
        name: 'Restaurante El Paso',
        owner: 'Fabián Montes de Oca',
        phone: 1126188923,
        zone: 'Bernal'
    },{
        name: 'La Francesa Bar',
        owner: 'Sandra Meniguelli',
        phone: 1124561587,
        zone: 'Quilmes'
    },{
        name: 'Comida Analía',
        owner: 'Analia Villasanti',
        phone: 1164780120,
        zone: 'Ezpeleta'
    },{
        name: 'Comida Haydee',
        owner: 'Haydee Hinojosa',
        phone: 1131408894,
        zone: 'Quilmes Oeste'
    },{
        name: 'Catering Del Sur',
        owner: 'Alberto Dario Ayala',
        phone: 1159307732,
        zone: 'Quilmes Oeste'
    },{
        name: 'Quem',
        owner: 'Santiago Giordana',
        phone: 1138311344,
        zone: 'Quilmes'
    },{
        name: 'Comida Marcela',
        owner: 'Marcela Laura Nieto',
        phone: 1125745583,
        zone: 'Quilmes Oeste'
    }
]},{
    category: 'Panaderías',
    subcategory: null,
    businesses: [{
        name: 'Postorivo',
        owner: 'Ramiro',
        phone: 1158177191,
        zone: 'Quilmes'
    },{
        name: 'El Sabor Artesanal - Sabrosisimo',
        owner: 'Claudio Denovitzer',
        phone: 1167361616,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Horacio Mesaglio',
        phone: 1134774448,
        zone: 'Quilmes'
    },{
        name: 'Umi Delicias',
        owner: 'Sandra Romero',
        phone: 1127225849,
        zone: 'Quilmes'
    },{
        name: 'Pablo Marcone Catering',
        owner: 'Pablo Marcone',
        phone: 1153107499,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Velázquez Silvia Alejandra',
        phone: 1132705142,
        zone: 'Quilmes Oeste'
    },{
        name: null,
        owner: 'Ariel Fabián Rosas',
        phone: 1139498072,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Gastón Preneste',
        phone: 1165139824,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Nayla Ludimila Baudry',
        phone: 1169006379,
        zone: 'Quilmes Oeste'
    },{
        name: null,
        owner: 'Viviana Karina Paez',
        phone: 1132484023,
        zone: 'Quilmes Oeste'
    },{
        name: null,
        owner: 'Eduardo',
        phone: 1125945726,
        zone: 'Quilmes'
    },{
        name: 'Fresia y chocolate',
        owner: 'Cintia Fiorentino',
        phone: 1140953721,
        zone: 'Bernal Oeste'
    },{
        name: null,
        owner: 'Mayra Irrazabal',
        phone: 1131595950,
        zone: 'Bernal Oeste'
    },{
        name: 'BLESS Pastelería Artesanal',
        owner: 'Alejandra Cáceres',
        phone: 1167907877,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Valeria Verónica Calzetta',
        phone: 1151779317,
        zone: 'Quilmes'
    },{
        name: 'Huevos de Pascua Artesanales',
        owner: 'Cintia Vanesa Cano',
        phone: 1156663407,
        zone: 'Ezpeleta Oeste'
    },{
        name: null,
        owner: 'Lorena Susana Ferraro',
        phone: 1158950752,
        zone: 'Quilmes Oeste'
    },{
        name: 'Endulzate Conmigo',
        owner: 'Joaquin Steiman',
        phone: 1169821595,
        zone: 'Quilmes Oeste'
    },{
        name: null,
        owner: 'Pablo Figlioli',
        phone: 1169821595,
        zone: 'Quilmes Oeste'
    },{
        name: 'CAPRICCIO CAFÉ',
        owner: 'Carolina Guagliano',
        phone: 1137851252,
        zone: 'Bernal Oeste'
    },{
        name: 'Tini Morita Pastelería',
        owner: 'Maria Celeste Escobar',
        phone: 1121785256,
        zone: 'Quilmes Oeste'
    },{
        name: null,
        owner: 'Timoteo Guido Iglesias',
        phone: 2235989306,
        zone: 'Quilmes Oeste'
    },{
        name: 'Erica sin Gluten',
        owner: 'Erica Vanesa Sal',
        phone: 1161665539,
        zone: 'Quilmes Oeste'
    },{
        name: null,
        owner: 'Alejandra Dome',
        phone: 1167675814,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Joaquín Steiman',
        phone: 1169821595,
        zone: 'Quilmes Oeste'
    },{
        name: null,
        owner: 'Gabriela Susana Riveros Esparza',
        phone: 1166363702,
        zone: 'Bernal Oeste'
    },{
        name: null,
        owner: 'Ana Maria Devitt',
        phone: 1140610951,
        zone: 'Quilmes'
    },{
        name: 'Panaderia Amoedo',
        owner: 'Nelson Comandini',
        phone: 1139113673,
        zone: 'Quilmes Oeste'
    },{
        name: 'Dulce Mamina',
        owner: 'Mariel Campana',
        phone: 1162070361,
        zone: 'Quilmes Oeste'
    },{
        name: null,
        owner: 'Luciana Roca',
        phone: 1133361214,
        zone: 'Bernal Oeste'
    }
]},{
    category: 'Alimentos ',
    subcategory: 'para Mascotas',
    businesses: [{
        name: 'Ladridos Pet Shop',
        owner: 'Fernando Andrés Pignuolo',
        phone: 1156521908,
        zone: 'Bernal'
    },{
        name: 'Siempre a tu lado',
        owner: 'Julian Matias Amato Martin',
        phone: 1167867260,
        zone: 'Bernal Oeste'
    },{
        name: 'Alimento Mascotas - Cequeira',
        owner: 'Juan Manuel Cequeira',
        phone: 1161848891,
        zone: 'Quilmes'
    },{
        name: 'Pet Shop Lamadrid',
        owner: 'Noelia Gisela Patalano',
        phone: 1161848891,
        zone: 'Quilmes'
    },{
        name: 'Alimento Mascotas - Cánepa',
        owner: 'Fabián Cánepa',
        phone: 1140287817,
        zone: 'Quilmes'
    },{
        name: 'Pet Friendly Shop Sur',
        owner: 'Alberto Giordano',
        phone: 1165428498,
        zone: 'Quilmes Oeste'
    },{
        name: 'Nutrisef',
        owner: 'Sebastián Farioli',
        phone: 1131862418,
        zone: 'Quilmes Oeste'
    },{
        name: 'Alimentos Ariel para Mascotas',
        owner: 'Ariel Ramanzin',
        phone: 1135742806,
        zone: 'Quilmes'
    }]
},{
    category: 'Helados',
    businesses: [{
        name: 'El Piave Bernal',
        owner: 'Sandra Bortolot',
        phone: 1145342940,
        zone: 'Bernal'
    },{
        name: 'Grido(Quilmes)',
        owner: 'Pablo Pescio',
        phone: 1157047444,
        zone: 'Quilmes'
    },{
        name: 'El Piave',
        owner: 'Sebastián Dalli Bortolot y Martin Códoba',
        phone: 1154296773,
        zone: 'Quilmes'
    },{
        name: 'Quilcrem',
        owner: 'Gabriela Bailon',
        phone: 1134277005,
        zone: 'Bernal'
    },{
        name: 'Isla de Capri',
        owner: 'Marcelo Diñeiro',
        phone: 1154282533,
        zone: 'Bernal'
    },{
        name: 'Bizantino',
        owner: 'Martín Adrián Pereiro',
        phone: 1135887036,
        zone: 'Bernal'
    },{
        name: 'Piamonte Heladeria',
        owner: 'Anibal Morando',
        phone: 1151802314,
        zone: 'Quilmes'
    },{
        name: 'Cabo Frío',
        owner: 'Daniel Lodeiro',
        phone: 1141641629,
        zone: 'Quilmes'
    },{
        name: 'Cabo Frío',
        owner: 'Nicolas Lodeiro',
        phone: 1141624673,
        zone: 'Quilmes Oeste'
    },{
        name: 'Vía Cosenza',
        owner: 'Lorena Berin',
        phone: 1169753034,
        zone: 'Quilmes'
    },{
        name: 'Grido (Quilmes Oeste)',
        owner: 'Andrea Vaccaro',
        phone: 1162072162,
        zone: 'Quilmes Oeste'
    },{
        name: 'Valentino',
        owner: 'Norberto Avalos',
        phone: 1168925193,
        zone: 'Quilmes Oeste'
    },{
        name: 'Heladeria Julieta',
        owner: 'Rodriguez Julieta',
        phone: 1140680318,
        zone: 'San Francisco Solano'
    }] 
},{
    category: 'Pizzas y empanadas',
    businesses: [{
        name: 'El Nuevo Candil',
        owner: 'Gonzalo Sacco',
        phone: 1121716197,
        zone: 'Bernal'
    },{
        name: 'Pizzeria De Leo',
        owner: 'Matias Iacono',
        phone: 1161880348,
        zone: 'Bernal'
    },{
        name: 'Pizzaiola',
        owner: 'Sebastián Cossalter',
        phone: 1141651613,
        zone: 'Bernal Oeste'
    },{
        name: 'Pizza Da Nobile',
        owner: 'Rubén Alberto Borre',
        phone: 1141754187,
        zone: 'Bernal Oeste'
    },{
        name: 'Casa Pueblo',
        owner: 'Ruben Gallupo',
        phone: 1130978378,
        zone: 'Quilmes'
    },{
        name: 'Pizzeria Albagua',
        owner: 'Escobar Mercedes Maria',
        phone: 1144366850,
        zone: 'Quilmes Oeste'
    },{
        name: 'Pizzas y Empanadas RM',
        owner: 'Raul Martinez',
        phone: 1154560728,
        zone: 'Quilmes Oeste'
    },{
        name: 'Pizzas y Empanadas',
        owner: 'Martin Facundo Cuello',
        phone: 1144035270,
        zone: 'San Francisco Solano'
    },{
        name: 'Pizza Duarte',
        owner: 'Maria Laura Duarte',
        phone: 1167514369,
        zone: 'San Francisco Solano'
    },{
        name: 'Pizzería Los Blancos',
        owner: 'Sebastián Blanco Leis',
        phone: 1173688518,
        zone: 'Quilmes'
    },{
        name: 'Pizza Cheff',
        owner: 'Walter Sánchez',
        phone: 1143992772,
        zone: 'Quilmes'
    },{
        name: 'Dulce Mamina',
        owner: 'Mariel Campana',
        phone: 1162070361,
        zone: 'Quilmes Oeste'
    },{
        name: 'Pizza Onas (Pizzería Italiana)',
        owner: 'Daniel Adrián Pueyo',
        phone: 1122554388,
        zone: 'San Francisco Solano'
    },{
        name: 'Pizza Luna',
        owner: 'Sergio Luna',
        phone: 1140950823,
        zone: 'Quilmes'
    },{
        name: 'Helmans Tentaciones',
        owner: 'Emiliana Helman',
        phone: 1127074908,
        zone: 'Quilmes'
    },{
        name: 'Pizza Alonso',
        owner: 'Veronica Alonzo',
        phone: 1164715313,
        zone: 'Quilmes'
    },{
        name: 'Pizza Vicente',
        owner: 'Maciel Ramón Vicente',
        phone: 1167575507,
        zone: 'Quilmes Oeste'
    },{
        name: 'Pizza Gonzalez',
        owner: 'Claudia Liliana Gonzalez',
        phone: 1126638404,
        zone: 'Quilmes'
    },{
        name: 'Faraon Pizza',
        owner: 'Marcelo Melnyk',
        phone: 1158009449,
        zone: 'Ezpeleta'
    },{
        name: 'Fratelli Pizzas y Pizzetas',
        owner: 'Lorena Susana Ferraro',
        phone: 1158950752,
        zone: 'Quilmes Oeste'
    },{
        name: 'Gabriela',
        owner: 'Gabriela Bencsecz',
        phone: 1130960642,
        zone: 'Quilmes'
    },{
        name: 'Pizza Iggy',
        owner: 'Nancy Beatriz Gantzer',
        phone: 1160567625,
        zone: 'Quilmes'
    },{
        name: 'Central de Pizzas y Empanadas',
        owner: 'Fernando Gejo',
        phone: 1131342903,
        zone: 'Quilmes'
    },{
        name: 'Todo Casero y Artesanal',
        owner: 'Dome Alejandra',
        phone: 1167675814,
        zone: 'Quilmes'
    },{
        name: 'Este Oeste Quilmes',
        owner: 'Sebastián Casen',
        phone: 1157126170,
        zone: 'Quilmes Oeste'
    },{
        name: 'Romanello Pizzas',
        owner: 'Sergio Vega Damián',
        phone: 1156026369,
        zone: 'Quilmes'
    },{
        name: 'Pizza Giro',
        owner: 'Christian De Girolamo',
        phone: 1124510250,
        zone: 'Quilmes'
    },{
        name: 'Cocina en casa',
        owner: 'Romero Marcela',
        phone: 1166875870,
        zone: 'Quilmes Oeste'
    }]
},{
    category: 'Productos ',
    subcategory: 'de Almacén',
    businesses: [{
        name: 'Almacén Carlos',
        owner: 'Carlos Jesus Pereira',
        phone: 1144010347,
        zone: 'Quilmes'
    },{
        name: 'Bonafide(Quilmes Oeste)',
        owner: 'Pablo Altvarg',
        phone: 1141714455,
        zone: 'Quilmes Oeste'
    },{
        name: 'Bonafide(Quilmes)',
        owner: 'Pablo Altvarg',
        phone: 114174455,
        zone: 'Quilmes'
    },{
        name: 'Bonafide(Bernal)',
        owner: 'Pablo Altvarg',
        phone: 1141714455,
        zone: 'Bernal'
    },{
        name: 'CIMES',
        owner: 'Leandro Javier Torazona',
        phone: 1125002340,
        zone: null
    },{
        name: 'A los Mandarines',
        owner: 'Matias Pérez',
        phone: 1159006374,
        zone: 'Bernal Oeste'
    },{
        name: 'Almacén Emiliano',
        owner: 'Emiliano Scarapuchili',
        phone: 1163717774,
        zone: 'Quilmes'
    },{
        name: 'Todo Suelto',
        owner: 'Roberto Yañez',
        phone: 1157746717,
        zone: 'Quilmes Oeste'
    },{
        name: 'Lo de Taty',
        owner: 'Tatiana Busto',
        phone: 1140288854,
        zone: 'Ezpeleta Oeste'
    },{
        name: 'Tincho´s',
        owner: 'Stella Maris',
        phone: 1140288854,
        zone: 'Ezpeleta Oeste'
    },{
        name: 'Almacén Javier',
        owner: 'Javier Fernando Mártire',
        phone: 1158511222,
        zone: 'Quilmes'
    },{
        name: 'Almacén y Kiosko San Martin',
        owner: 'Candela Diaz',
        phone: 1151356280,
        zone: 'San Francisco Solano'
    },{
        name: 'Lo de Lola',
        owner: 'Mauricio Miño',
        phone: 1131148892,
        zone: 'Bernal'
    },{
        name: 'Alma Zen',
        owner: 'Victor Hugo Stepasiuk',
        phone: 1123867554,
        zone: 'Quilmes'
    },{
        name: 'Dulzuras',
        owner: 'Agostina Ercolani',
        phone: 1150541748,
        zone: 'Quilmes'
    },{
        name: 'Boshka Almacén',
        owner: 'Agostina Ercolani',
        phone: 1168768422,
        zone: 'Quilmes'
    },{
        name: 'Almacén Norma',
        owner: 'Norma Cristobo',
        phone: 1136937663,
        zone: 'Quilmes'
    },{
        name: 'Productos Bimbo',
        owner: 'Claudio Colletti',
        phone: 1159423862,
        zone: 'Quilmes Oeste'
    },{
        name: 'Despensa San Cayetano',
        owner: 'Alejandro Sebastián Avila',
        phone: 1160570992,
        zone: 'Quilmes'
    },{
        name: 'Fresco y Batata',
        owner: 'Alejandro Marengo',
        phone: 1135583370,
        zone: 'Quilmes'
    },{
        name: 'Almacén Delia',
        owner: 'Delia',
        phone: 1156047257,
        zone: 'Quilmes Oeste'
    },{
        name: 'Almacén Verónica',
        owner: 'Verónica Loza / Héctor Loza',
        phone: 1158775598,
        zone: 'Quilmes Oeste'
    },{
        name: 'Almacén Express',
        owner: 'Christian de Hoz',
        phone: 1165687321,
        zone: 'Ezpeleta'
    },{
        name: 'Alimentos Frette',
        owner: 'Marcella Frette',
        phone: 1160572769,
        zone: 'Quilmes'
    },{
        name: 'Nima Bombonería',
        owner: 'Leonardo Fonseca',
        phone: 1155659741,
        zone: 'Quilmes'
    },{
        name: 'Fantasia Art. de Panadería y Repostería',
        owner: 'Jorge Nicolás Brzezñiakiewiz',
        phone: 1120143832,
        zone: 'Quilmes Oeste'
    },{
        name: 'Go Bar',
        owner: 'Alejo Bales',
        phone: 1141817703,
        zone: 'Quilmes'
    },{
        name: 'Galletitas Smit',
        owner: 'Elias Smit',
        phone: 1157658418,
        zone: 'Quilmes Oeste'
    },{
        name: 'Reparto Nelson',
        owner: 'Claudia Pisoni',
        phone: 1157654432,
        zone: 'Quilmes'
    },{
        name: 'Almacén Marcelo',
        owner: 'Marcelo Stamatelos',
        phone: 1154911146,
        zone: 'Quilmes Oeste'
    },{
        name: 'Despierta',
        owner: 'Yanina Diaz',
        phone: 1134991910,
        zone: 'Quilmes'
    },{
        name: 'Vino Baires',
        owner: 'Leonel Pecherski',
        phone: 1130841968,
        zone: 'Bernal'
    },{
        name: 'Mal Bicho',
        owner: 'Juan José Schiro',
        phone: 1161439734,
        zone: 'Quilmes Oeste'
    },{
        name: 'Almacén Vera',
        owner: 'Antonio Vera',
        phone: 1151537943,
        zone: 'Quilmes'
    },{
        name: 'Draft',
        owner: 'Mario Coccaro',
        phone: 1169140773,
        zone: 'Quilmes Oeste'
    },{
        name: 'Productos Mendia',
        owner: 'Sergio Pereyra',
        phone: 1126660049,
        zone: 'Quilmes Oeste'
    },{
        name: 'La Monita Supermercado',
        owner: 'Lucio Agustín Ocaña',
        phone: 1149494227,
        zone: 'Quilmes'
    },{
        name: 'Supermercado Virtual',
        owner: 'Germán De Dio',
        phone: 1162014529,
        zone: 'Quilmes'
    },{
        name: 'Doña Ángela',
        owner: 'Generoso Meluzio',
        phone: 1158337332,
        zone: 'Quilmes Oeste'
    },{
        name: 'Granja Los Nieto',
        owner: 'Pedro Moreira',
        phone: 1126869329,
        zone: 'Quilmes Oeste'
    },{
        name: 'Almacén Santa Cruz',
        owner: 'Alejandro Dario Santa Cruz',
        phone: 1162776058,
        zone: 'Quilmes O'
    }]
},{
    category:  'Productos ',
    subcategory: 'de Limpieza',
    businesses: [{
        name: 'Productos de Limpieza ZOTO',
        owner: 'Guillermo Ezequiel Zoto',
        phone: 1159819167,
        zone: 'San Francisco Solano'
    },{
        name: 'Emiliano Limpieza',
        owner: 'Emiliano Scarapuchili',
        phone: 11637774,
        zone: 'Quilmes'
    },{
        name: 'Limpieza Paniagua',
        owner: 'Hernán Paniagua',
        phone: 1163717774,
        zone: 'Quilmes'
    },{
        name: 'El Pela',
        owner: 'César Budini',
        phone: 1136715751,
        zone: 'Quilmes Oeste'
    },{
        name: 'Lucia Productos de Higiene',
        owner: 'Lucia Angélica Palacios',
        phone: 1162095653,
        zone: 'Quilmes Oeste'
    },{
        name: 'Ricardo Productos de Limpieza e Higiene',
        owner: 'Ricardo Oscar Iadner',
        phone: 1167226685,
        zone: 'Quilmes Oeste'
    },{
        name: 'Limpieza Rodriguez',
        owner: 'Mauricio Rodriguez',
        phone: 1133117959,
        zone: 'Quilmes'
    },{
        name: 'Genero Mio(Productos ecológicos de higiene personal)',
        owner: 'Julia Andrea Santos',
        phone: 1132176022,
        zone: 'Quilmes'
    },{
        name: 'Perfumería Bubujas',
        owner: 'Leonor Matilde Belloni',
        phone: 1165334176,
        zone: 'Don Bosco'
    },{
        name: 'Limpieza Ferrari',
        owner: 'Andrea Ferrari',
        phone: 1127507170,
        zone: 'San Francisco Solano'
    },{
        name: 'Glow Boutique Natural',
        owner: 'Mara Giuliana Grecco',
        phone: 1125554667,
        zone: 'Bernal Oeste'
    },{
        name: 'D y D Jabones ART',
        owner: 'David Barrionuevo',
        phone: 1166491695,
        zone: 'Quilmes'
    },{
        name: 'Limpieza Garcia',
        owner: 'Javier Garcia',
        phone: 1122696084,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Marcelo Galiano',
        phone: 1135998429,
        zone: 'Don Bosco'
    },{
        name: 'Limpieza Fernandez',
        owner: 'Silvia Fernandez',
        phone: 1139531104,
        zone: 'San Francisco Solano'
    },{
        name: 'Vassallo Limp',
        owner: 'Federico Vassallo',
        phone: 1149806455,
        zone: 'Quilmes'
    },{
        name: 'LauScoff',
        owner: 'Laura Scoffano',
        phone: 1164659180,
        zone: 'Quilmes Oeste'
    },{
        name: 'Fernando Articulos de Limpieza',
        owner: 'Fernando Trujillano',
        phone: 1135755684,
        zone: 'Quilmes Oeste'
    },{
        name: 'Farmacia Troperano',
        owner: 'Adriana Troperano',
        phone: 11647903336,
        zone: 'Quilmes'
    },{
        name: 'Le Blond Productos Profesionales Capilares',
        owner: 'Daniel Osvaldo Scheffelaar Klotz',
        phone: 1134256060,
        zone: 'Quilmes'
    },{
        name: 'Limpieza Mas',
        owner: 'Evelyn Solange Cepeda',
        phone: 1131303381,
        zone: 'Bernal Oeste'
    },{
        name: 'Limpieza Di Carlo',
        owner: 'Braian Di Carlo',
        phone: 1163516873,
        zone: 'Quilmes Oeste'
    },{
        name: 'Limpieza Orellana',
        owner: 'Camila Orellana',
        phone: 1157018882,
        zone: 'Ezpeleta'
    },{
        name: 'Ferreteria Leo',
        owner: 'Leonardo Zuñiga',
        phone: 1161967133,
        zone: 'Quilmes'
    },{
        name: 'Magnética Cosmética',
        owner: 'Vanesa Gutierrez',
        phone: 1122665786,
        zone: 'Quilmes'
    }]
},{
    category: 'Frutas y Verduras',
    subcategory: '(Feriantes)',
    businesses: [{
        name: null,
        owner: 'Juan Carlos Torrez',
        phone: 1138573651,
        zone: 'Ezpeleta'
    },{
        name: 'Miguel',
        owner: 'Angel Rodriguez',
        phone: 1139135897,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Norma Beatriz Ensinas',
        phone: 1153187667,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Alfredo Guzman Zurita',
        phone: 1150946585,
        zone: 'Quilmes Oeste'
    },{
        name: 'La Pacha',
        owner: 'Facundo Nahuel Zinna',
        phone: 1136973299,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Lucas Matias Genez',
        phone: 1165118483,
        zone: 'San Francisco Solano'
    },{
        name: null,
        owner: 'Marcelo Galiano',
        phone: 1135998429,
        zone: 'Don Bosco'
    },{
        name: 'Verdulería Pily',
        owner: 'Walter Pereyra',
        phone: 1124650848,
        zone: 'Bernal Oeste'
    },{
        name: null,
        owner: 'Veronica Severino',
        phone: 1139531104,
        zone: 'San Francisco Solano'
    },{
        name: null,
        owner: 'Roberto Gustavo Farías',
        phone: 1144921804,
        zone: 'Quilmes Oeste'
    },{
        name: null,
        owner: 'Christian de Hoz',
        phone: 1165687321,
        zone: ''
    }]
},{
    category: 'Carnes y Pescados',
    businesses: [{
        name: 'Granja Beto',
        owner: 'Alberto Pilloff',
        phone: 1120268382,
        zone: 'Quilmes'
    },{
        name: 'Pescadería Alberto',
        owner: 'Esteban Alberto Manini',
        phone: 1136977596,
        zone: 'Quilmes'
    },{
        name: 'Pescadería Laura',
        owner: 'Rafael Alejandro Martin',
        phone: 1151797910,
        zone: 'Quilmes Oeste'
    },{
        name: 'Pescadería Tornadore',
        owner: 'Angel C. Pared',
        phone: 1140988107,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Angel Sarrica',
        phone: 1140510193,
        zone: 'Quilmes'
    },{
        name: '3 Pejerreyes',
        owner: 'Paula Arbelo',
        phone: 1123820876,
        zone: 'Ezpeleta'
    },{
        name: null,
        owner: 'Christian de Hoz',
        phone: 1165687321,
        zone: 'Ezpeleta'
    },{
        name: null,
        owner: 'Jorge Nicolás Brzezñiakiewiz',
        phone: 1120143832,
        zone: 'Quilmes Oeste'
    },{
        name: null,
        owner: 'Mara Elizondo',
        phone: 1130308033,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Reinaldo Fuente',
        phone: 1168515521,
        zone: 'Quilmes Oeste'
    },{
        name: null,
        owner: 'Ferrai Silvana',
        phone: 1128232325,
        zone: 'Quilmes Oeste'
    },{
        name: null,
        owner: 'Haydee Hinojosa',
        phone: 1131408894,
        zone: 'Quilmes Oeste'
    },{
        name: null,
        owner: 'Ezequiel De Martino',
        phone: 1168889386,
        zone: 'Quilmes'
    }]
},{
    category: 'Dietéticas',
    businesses: [{
        name: 'Ali y Flavia',
        owner: 'Flavia Trejo',
        phone: 1167118806,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Marcelo Pablo Hernández',
        phone: 1166337110,
        zone: 'Quilmes Oeste'
    },{
        name: 'Todo Suelto',
        owner: 'Roberto Yañez',
        phone: 1157746717,
        zone: 'Quilmes Oeste'
    },{
        name: 'Barrio Parque Puppies',
        owner: 'Martin Lodewyckx Hardy',
        phone: 1164857588,
        zone: 'Quilmes'
    },{
        name: 'Despierta',
        owner: 'Yanina Diaz',
        phone: 1134991910,
        zone: 'Quilmes'
    },{
        name: 'Tu Reparto Pedidos',
        owner: 'Ariana Amarilla',
        phone: 1134361910,
        zone: 'Quilmes'
    },{
        name: 'Grandiet Quilmes',
        owner: 'Sebastián Valle',
        phone: 1157659685,
        zone: 'Quilmes'
    },{
        name: 'Amorina',
        owner: 'Amorina Andanese',
        phone: 1140699449,
        zone: 'Bernal'
    },{
        name: 'Dietetica, Buena Semilla',
        owner: 'Gerardo Insua',
        phone: 1164911182,
        zone: 'Quilmes'
    },{
        name: 'Nova Vita Dietética',
        owner: 'Martin Alfredo Baldivia',
        phone: 1123582710,
        zone: 'Quilmes'
    },{
        name: 'Bernuts',
        owner: 'Martin De Giacomo',
        phone: 1153238981,
        zone: 'Bernal'
    },{
        name: 'Alma Natural',
        owner: 'Mabel Sucunza',
        phone: 1135104535,
        zone: 'Quilmes Oeste'
    },{
        name: 'Natura Diet',
        owner: 'Fabian Eduardo Veloso',
        phone: 1126556008,
        zone: 'Bernal Oeste'
    },{
        name: 'Pranolatte',
        owner: 'Luciana Temas',
        phone: 1141579775,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Andrea Sosa',
        phone: 1134448338,
        zone: 'Quilmes'
    },{
        name: 'Simple & Co (Quilmes)',
        owner: 'Gonzalo Perera',
        phone: 1164252285,
        zone: 'Quilmes Oeste'
    },{
        name: null,
        owner: 'Ivana Raggi',
        phone: 1155707821,
        zone: 'Quilmes'
    },{
        name: null,
        owner: 'Román Caballero',
        phone: 1126804139,
        zone: 'Quilmes'
    },{
        name: 'Dietética Huesca',
        owner: 'Verónica Huesca',
        phone: 1153281038,
        zone: 'Quilmes Oeste'
    },{
        name: 'B F Suplementos',
        owner: 'Federico Garbarino',
        phone: 1165418659,
        zone: 'Bernal'
    },{
        name: 'Nutrisef',
        owner: 'Sebastián Farioli',
        phone: 1131862418,
        zone: 'Quilmes Oeste'
    }]
},{
    category: 'Sushi',
    image: 'sushi',
    businesses: [{
        name: 'Sushi Panda',
        owner: 'Germán Ferrando',
        phone: 1168085335,
        zone: 'Quilmes'
    },{
        name: 'Buenos Aires Sushi',
        owner: 'Rodrigo Viñaraz',
        phone: 1154020027,
        zone: 'Quilmes'
    },{
        name: '3 Dragones',
        owner: 'Diego Salustio',
        phone: 1166709766,
        zone: 'Quilmes'
    },{
        name: 'Dragon Roll',
        owner: 'Mariano Dutack',
        phone: 1155783880,
        zone: 'Bernal'
    },{
        name: 'Meishi Sushi',
        owner: 'Fernando Magrone',
        phone: 1156228116,
        zone: 'Quilmes'
    },{
        name: 'Aniceto',
        owner: 'Denise Fighera',
        phone: 1140804291,
        zone: 'Quilmes'
    },{
        name: 'Los 3 Pejerrey',
        owner: 'Paula Arbelo',
        phone: 1123820876,
        zone: 'Quilmes'
    },{
        name: 'OSUSHI',
        owner: 'Marcelo Diñeiro',
        phone: 1154282533,
        zone: 'Bernal'
    }]
}]

export default data;
