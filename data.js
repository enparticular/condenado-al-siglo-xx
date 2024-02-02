// house text
let house_text_arr = ["estás solo en tu habitación.",
"ESTÁS SOLO EN TU HABITACIÓN. TODA TU ROPA ES BLANCA Y ESTÁ MANCHADA.",
"ESTÁS SOLO EN TU HABITACIÓN, BATIENDO RÉCORDS DE SOLEDAD.",
"ESTÁS EN TU HABITACIÓN EN COMPAÑÍA DE UNA SERPIENTE VENENOSA",
"ESTÁS SOLO EN TU HABITACIÓN, ESPERANDO EL FINAL"]

// scenes 
let clock = {
    main_html: "<img src='img/clock.gif'>",
    phrases: ["El tiempo es un recipiente en el que entran muy pocas cosas.", "Creí que había tiempo pero nunca hay tiempo.", "Hace rato que los fantasmas se jubilaron.", "Ya no hay tiempo para leyendas ni lo habrá.", "Empecemos un nuevo mundo.", "Siempre flotando como un barco a salvo.", "Antes era un rey, ahora soy basura del ocaso.", "La vida se pone cada vez más misteriosa.", "Tu memoria es basura. Tus lágrimas son de oro.", "Tu nombre se perdió en el tiempo.", "el no hacer nada es el trabajo más difícil del mundo, te quitará todas las energías.", "Aunque pienses que este es el final, solo es el fragmento de un capítulo diminuto."],
}
let apple = {
    main_html: "<img src='img/apple.gif'>",
    phrases: ["Estás condenado al siglo XX como un gusano dentro de una manzana envenenada.", "Pude ir adónde quisiera pero elegí quedarme.", "Si no sabés adónde ir, no importa qué camino hay que tomar.", "Emergiendo de las profundidades para vos.", "El día que los débiles heredemos la tierra.", "Lamento decepcionarte pero tu trébol no tiene 4 hojas.", "Para el budismo el universo es una flor que crece continuamente.", "Yo sé lo que es una estrella.", "Cantarina y fantasiosa es tu sangre.", "Te doy una rama por 99 esmeraldas.", "Las ideas son más bonitas que los proyectos."],
}
let desert = {
    main_html: "<img src='img/desert.gif'>",
    phrases: ["A tu alrededor hay un desierto.", "El desierto es el lugar más limpio de la tierra.", "Tu ejército de esqueletos se voló con el viento.", "En la ciudad hay tres mil toneladas de polvo y arena proveniente de los desiertos.", "Los alacranes te cuidarán de todo. No estás tan solo.", "El sol se está gastando pero no tan rápido como vos.", "Es la hora del solazo.", "El sol está siempre de tu lado.", "La blanca nada del paisaje arenoso."],
}
let desert_night = {
    main_html: "<img src='img/desert-night.gif'>",
    phrases: ["20 millones de años para que se forme una montaña.", "Apuesto a que hay sol mañana.", "La ciudad es una mentira.", "Dicen que si mirás por mucho tiempo este desierto podés limpiar tu alma.", "Te regalo un hormiguero y un arbusto estepario.", "Mientras tanto un águila cruza el desierto.", "El desierto es una página en blanco, en el cual pueden inscribirse los sueños de la humanidad."],
}
let spider = {
    main_html: "<img src='img/spider.gif'>",
    phrases: ["Si mirás mi telaraña por un rato, te hipnotizás y viajás a otra dimensión.", "Soy testigo de tu vida.", "Podés llorar por 2 días seguidos. Un chico tuvo hipo por 63 años.", "Soy amiga de los fantasmas.", "Voy a escribir tu biografía.", "Me gusta el café. Soy cafetereana.", "Me dicen “la sin calma”.", "Una mosca dio una fiesta.", "Te voy a contar una historia de cucarachas.", "Mi problema es la soledad y que no tomo sol.", "Dios ama a las moscas, por eso hizo tantas.", "Los fantasmas toman Coca-Cola."],
}
let book = {
    main_html: "<img src='img/book.gif'>",
    phrases: ["“Estoy parado al borde de un precipicio y es la visión más maravillosa que existe”. Lord Byron", "“El mundo es una fotocopia sucia de una vieja fotocopia. Todo es una copia de lo que nadie sabe, ni supo, ni sabrá.”  Enrique Symns", "“No conviene aferrarse a nada. Siempre habrá que soportar la impermanencia, el vacío, lo incierto y la seguridad de no tener final feliz”. Néstor Sanchez", "“En el universo del erizo de mar hay solo cosas de erizo de mar.” Von Uexcüll (biólogo)", "“Mi vida tiene sentido porque sé que voy a morir un día”. Eileen Myles", "“Cuanta belleza hay en el mundo. Telaraña, cucarachas y puchos”. Sergio De Loof", "“La verdadera vida está ausente. No estamos en el mundo”. Arthur Rimbaud.", "“No necesito otra cosa que encontrar la llave para pasar de un día a otro. Hacer el ¡trac!”  Juan Manuel Inchauspe", "“Una mirada desde la alcantarilla puede ser una visión del mundo” Alejandra Pizarnik", "“Todo lo que podemos hacer es andar por ahí diciendo la verdad” Carson McCullers", "“Si mirás el abismo, el abismo te mira a vos, te hace sufrir”. Enrique Symns"],
}
let key = {
    main_html: "<img src='img/key.gif'>",
    phrases: ["Cuidado con “la morada de las almas”.", "Oro de plástico.", "¿Quién es culpable de mi prisión de cristal?", "Vivo en la práctica del abandono, como un anacoreta.", "No te asustes de mi palacio.", "Ya me van a venir a buscar y yo voy a ser un espectro  espeluznante.", "Sentirse solitario es la condición indispensable para un encuentro genuino con los otros y con la realidad.", "La misión de desterrarse y destratarse a uno mismo.", "La ciudad quiere vivir sola.", "¿Cómo medir la pureza de una casa?", "Alguien destruyó la salida.", "Bienvenido al Reducto de la Soledad."],
}
let knife = {
    main_html: "<img src='img/knife.gif'>",
    phrases: ["Dejá que las cosas se deslicen sobre esos filos y se pulirán nuevamente.", "Solo hay una fuente de sabiduría: el dolor.", "Detrás de las personas no hay nada. Eso es lo que más me asusta.", "Siento mis músculos romperse por dentro y no puedo hacer nada.", "Futuros años dorados, no vuelvan más por acá.", "Hay que vivir para ser mordido y hay que vivir para morder.", "El futuro está en mis heridas.", "Quiero verte llorar por lo que no vendrá.", "Tengo para cien años de convalecencia.", "Mostrame el dinero que llevás."],
}
let house = {
    is_house: true, 
    main_html: '<a  onclick="showScene(key)" text-description="ver llave" class="link key"></a><a  onclick="showScene(knife)" text-description="ver daga" class="link knife"></a><a  onclick="showScene(apple)" text-description="ver manzana envenenada" class="link apple"></a> <a text-description="leer libro autoayuda" onclick="showScene(book)"  class="link book"></a> <a onclick="showScene(desert)" text-description="mirar por la ventana" class="link desert"></a> <a text-description="ver reloj" onclick="showScene(clock)" class="link clock"></a> <a text-description="hablar con la araña" onclick="showScene(spider)" class="link spider"></a> <img class="no-pointer" src="img/home.gif"/>'
}
let house_snake = {
    is_house: true, 
    main_html: '<a  onclick="showScene(snake)" text-description="ver serpiente" class="link snake"><a  onclick="showScene(key)" text-description="ver llave" class="link key"></a><a  onclick="showScene(knife)" text-description="ver daga" class="link knife"></a></a> <a  onclick="showScene(apple)" text-description="ver manzana envenenada" class="link apple"></a> <a text-description="leer libro autoayuda" onclick="showScene(book)"  class="link book"></a> <a onclick="showScene(desert)" text-description="mirar por la ventana" class="link desert"></a> <a text-description="ver reloj" onclick="showScene(clock)" class="link clock"></a> <a text-description="hablar con la araña" onclick="showScene(spider)" class="link spider"></a> <img class="no-pointer" src="img/home-snake.gif"/>'
}

let house_skull = {
    is_house: true, 
    main_html: '<a  onclick="showScene(snake)" text-description="ver serpiente" class="link snake"><a  onclick="showScene(key)" text-description="ver llave" class="link key"></a><a  onclick="showScene(knife)" text-description="ver daga" class="link knife"><a  onclick="showScene(ending)" text-description="esperar el final" class="link skull"></a> <a  onclick="showScene(apple)" text-description="ver manzana envenenada" class="link apple"></a> <a text-description="leer libro autoayuda" onclick="showScene(book)"  class="link book"></a> <a onclick="showScene(desert)" text-description="mirar por la ventana" class="link desert"></a> <a text-description="ver reloj" onclick="showScene(clock)" class="link clock"></a> <a text-description="hablar con la araña" onclick="showScene(spider)" class="link spider"></a> <img class="no-pointer" src="img/home-skull.gif"/>'
}
let ending = {
    ending: true, 
    main_html:  '<img class="no-pointer" src="img/ending.gif"/>'
}
let snake = {
    snake: true, 
    main_html:  '<img class="no-pointer" src="img/snake.gif"/>'
}

