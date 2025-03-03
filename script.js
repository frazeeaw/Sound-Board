// create array of sounds
const sounds = ['amongus', 'pluh', 'yeahboi', 'ninjafortnite', 'pedro', 'anotherone', 'scoobydoonooo', 'evilhehe', 'brothereww', 'scaryroar', 'minecraftsheep', 'canwegetmuchhigher', 'franklinringtone'];

// for loop
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSounds();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSounds() {
    sounds.forEach((sound) => {
        const snd = document.getElementById(sound);

        snd.pause();
        snd.currentTime = 0;
    });
}