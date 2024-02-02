// audio 
let audio = {
    audio_desert : new Howl({
        src: ['audio/desert.webm'],
        loop: true,
        volume: 0.2
    }),
    click : new Howl({
        src: ['audio/click1.webm'],
        volume: 0.3
    }),
    swosh : new Howl({
        src: ['audio/swosh1.webm'],
        volume: 0.3
    }),
    loop1 : new Howl({
        src: ['audio/piano1.webm'],
        loop: true,
        volume: 0.4
    }),
    loop2 : new Howl({
        src: ['audio/piano2.webm'],
        loop: true,
        volume: 0,
    }),
    loop1_corrupted : new Howl({
        src: ['audio/piano1-glitchedA.webm'],
        loop: true,
        volume: 0.5
    }),
    loop2_corrupted : new Howl({
        src: ['audio/piano1-glitchedB.webm'],
        loop: true,
        volume: 0.3,
    })
}
