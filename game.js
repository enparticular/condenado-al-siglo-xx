window['optimizely'] = window['optimizely'] || [];

// check debug mode 
let debug_mode = false;
if (window.location.href.includes('debug')) { 
    document.body.classList.add('debug');
    console.warn("####### DEBUG MODE TRUE #######")
    debug_mode = true;
}
// constants 
const load_speed = 600; // speed to load scenes
const text_speed = 80; // speed to write text

let breakpoint_counter_1 = 3; // music loop 1 starts
let breakpoint_counter_2 = 6; // night desert - music loop 2 starts 
let breakpoint_counter_3 = 7; // snake appears
let breakpoint_counter_4 = 12; // ending 
let breakpoint_counter_corrupted = 22; // CORRUPTED GAME
let breakpoint_counter_corrupted_computer = 28; // CORRUPTED GAME w ENDING

if (debug_mode) {
    breakpoint_counter_1 = 3; // music loop 1 starts
    breakpoint_counter_2 = 6; // night desert - music loop 2 starts 
    breakpoint_counter_3 = 8; // snake appears
    breakpoint_counter_4 = 11; // ending 
    breakpoint_counter_corrupted = 15; // CORRUPTED GAME
    breakpoint_counter_corrupted_computer = 18; // CORRUPTED GAME w ENDING
}
 

let counter = 0;
let stop_message = false; 
let started = false
let loop2_faded = false;

// elements 
let main_box = document.querySelector('.main-box');
let text_box = document.querySelector('.text-box');
let hover_text = document.querySelector('.hover-text');
let house_text = document.querySelector('.house-text');
let fade_in = '<div class="fade-in"></div>';
 
var f = 0;

function showScene(scene) {
    
    if (started == false) { 
        startGame(); 
    } else {
        audio.click.play();
        window['optimizely'].push({
            type: "event",
            eventName: "scene_viewed",
        });
    }
    
    
    removeAllChildNodes(main_box);
    removeAllChildNodes(text_box);
    removeAllChildNodes(hover_text);
    removeAllChildNodes(house_text);
    
    switch (true) {
        case scene.is_house:
            if (scene.is_corrupted) {
                if (!audio.loop1_corrupted.playing() ) {
                    stopAudiowithFade(false);
                    audio.loop1_corrupted.play();
                    audio.loop2_corrupted.play();
                    window['optimizely'].push({
                        type: "event",
                        eventName: "corrupted_game_viewed",
                      });
                }
            } else {
                showHouseTextandAudio();
            }
            text_box.style.display = "none;"
            house_text.style.display = "block;"

            main_box.insertAdjacentHTML('afterbegin', scene.main_html);

            let links = document.querySelectorAll('a.link');

            links.forEach(function(link) {
                let text = link.getAttribute('text-description');

                link.addEventListener('mouseover', function() {
                    hover_text.style.display = "block"
                    hover_text.innerHTML = text;
                })
                link.addEventListener('mouseout', function() { 
                    hover_text.style.display = "none";
                })
                
            })
        break;
        // COMPUTER --- final ending
        case scene.is_computer :
                        // 
                setTimeout(() => {
                    window['optimizely'].push({
                        type: "event",
                        eventName: "computer_ending",
                    });
                    fadeIn(); 
                    stopAudiowithFade(false);

                    main_box.insertAdjacentHTML('afterbegin', scene.main_html);
                    setTimeout(() => {audio.loop2.play()
                        audio.loop2.fade(0, 0.2, 43000);
                        audio.loop2_corrupted.play();
                        audio.loop2_corrupted.fade(0, 0.15, 78000);
                    }, 12000)

                    setTimeout(() => { house_text.insertAdjacentHTML('afterbegin', '<p style="text-align: center;">(fin)</p>')}, 40000
                    );
                    

                }, load_speed);
        break;
        // SNAKES
        case scene.snake: 
            showEnding(scene, true); // ending w snake
            window['optimizely'].push({
                type: "event",
                eventName: "snake_ending",
              });
        break;
        case scene.ending: 
            showEnding(scene, false); // ending without snake
            window['optimizely'].push({
                type: "event",
                eventName: "death_ending",
              });
            break;
        default: 
            // general scenes
            counter++; // increase counter 

            if (debug_mode) {
                console.warn(scene)
                console.warn("counter : " + counter);
            }
            if (!scene.is_corrupted) audio.swosh.play();

            text_box.style.display = "block;"
            house_text.style.display = "none;"
            
            // pick desert_night 
            if (counter > breakpoint_counter_2 && scene == desert && !scene.is_corrupted) scene = desert_night;

            let random_num = Math.floor(Math.random() * scene.phrases.length);
            let picked_phrase = scene.phrases[random_num]; // pick random phrase
            let phrase_length = picked_phrase.length; 
            
            if (scene.phrases.length > 1) scene.phrases.splice(random_num, 1) // remove the phrase so you don't see it again

            setTimeout(() => {
                if (!scene.is_corrupted) {  fadeIn();  }
            
                main_box.insertAdjacentHTML('afterbegin', scene.main_html);
            
                setTimeout(() => { 
                    printLetterByLetter('text-replace', picked_phrase, text_speed);

                    main_box.querySelector('.main-img').addEventListener('click', function(){
                        
                        if (document.querySelector('#text-replace').innerText.length >= (phrase_length-3)) { 
                            showNextScene();
                        } else {
                            stop_message = true;
                        }

                    });
                });
            }, load_speed);
            break;
        }
}

function showNextScene() {
    if (counter > breakpoint_counter_corrupted_computer) {
        showScene(house_corrupted_computer);
    } else if (counter > breakpoint_counter_corrupted) {  
        showScene(house_corrupted);
    } else if (counter > breakpoint_counter_4) { 
        showScene(house_skull);
    } else if (counter > breakpoint_counter_3)  { 
        showScene(house_snake);
    } else {
        showScene(house);
    }
}

function startGame() {
    document.querySelector('.credits-wrapper').style.display = "none";
    audio.audio_desert.play();
    audio.audio_desert.fade(0, 0.3, 6000)
    started = true;
}

function showHouseTextandAudio() {
    fadeIn();
    // define text and music changes 
    if (counter > breakpoint_counter_4) {
        house_text.innerHTML = house_text_arr[4];
    } else if (counter > breakpoint_counter_3) { 
        house_text.innerHTML = house_text_arr[3];
        if (!loop2_faded) { 
            audio.loop2.fade(0, 0.3, 15000)
            loop2_faded = true; 
        };
    } else if (counter > breakpoint_counter_2) {
        house_text.innerHTML = house_text_arr[2];
    } else if (counter > breakpoint_counter_1 ) {
        if (!audio.loop1.playing()) {
            audio.loop1.play();
            audio.loop2.play();
            audio.loop1.fade(0, 0.3, 12000);
        }
        house_text.innerHTML = house_text_arr[1];
    } else if (counter <= breakpoint_counter_1 ) {
        house_text.innerHTML = house_text_arr[0];
    } 
}

function showEnding(scene, snake) {
    let picked_phrase = snake ? "Fuiste picado por una serpiente venenosa." :  "¡FELICITACIONES! LOGRASTE SONDEAR LA ESPESURA DE LA NADA.";
    let ending_btn = snake ? "¿Seguir Explorando?" : "¿Volver a Empezar?" 
    let amount_endings = snake ? "(final 1 de 3)" : "(final 2 de 3)";
    setTimeout(() => {

        fadeIn(); 
        if (snake) { 
            stopAudiowithFade(false)
        } else {
        stopAudiowithFade(true)
        }

        main_box.insertAdjacentHTML('afterbegin', scene.main_html);
    
        setTimeout(() => { 
            printLetterByLetter('text-replace', picked_phrase, text_speed);
        }, load_speed);

        setTimeout(() => { house_text.insertAdjacentHTML('afterbegin', '<a class="end" onclick="location.reload()">'+ ending_btn +'</a><p class="ending">' + amount_endings + '</p>')}, 4000
        );

    }, load_speed);

}


function stopAudiowithFade(fade){
    if (fade) { 
        audio.audio_desert.fade(0.3, 0, 8000);
        audio.loop1.fade(0.3, 0, 5000);
        audio.loop2.fade(0.3, 0, 3000);
        audio.loop1_corrupted.fade(0.3, 0, 3000);
        audio.loop2_corrupted.fade(0.3, 0, 3000);
    } else {
        // if not fade, stop the audio completely
        audio.audio_desert.stop();
        audio.loop1.stop();
        audio.loop2.stop();
        audio.loop1_corrupted.stop();
        audio.loop2_corrupted.stop();
    }  
}

function showCredits() { 
    document.querySelector('.credits').classList.add('open');
}


if (!debug_mode) {
    showIntro(); 
} else {
    document.querySelector('.loading').style.display = "none";
    document.querySelector('.main-box').style.display = "block";
}

function showIntro() {
  if (f == 0) {
    f = 1;
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 25);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        f = 0;
        setTimeout(()=> {
            document.querySelector('.loading').style.display = "none";
            document.querySelector('.main-box').style.display = "block";
            fadeIn();
        }, 500);
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}


// utility functions 

function fadeIn() {
    main_box.insertAdjacentHTML('afterbegin', fade_in);
    setTimeout(() => main_box.querySelector('.fade-in').classList.add('open'), 10)    
}

function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        if (stop_message == true) {
            document.getElementById(destination).innerHTML = message; 
            stop_message = false; 
            clearInterval(interval);
        }  else { 
            document.getElementById(destination).innerHTML += message.charAt(i);
            i++;
            if (i > message.length){
                clearInterval(interval);
            }
        }
       
    }, speed);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
