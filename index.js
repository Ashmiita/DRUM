let i;
const getButton = document.querySelectorAll('#btn');
const lengthOfBtn = getButton.length;

const functionPlaySound = (getHTML) => {
    switch (getHTML) {
        case 'a':
            var sound1 = new Audio('sounds/sound1.mp3');
            sound1.play();
            break;

        case 'b':
            var sound2 = new Audio('sounds/sound2.mp3');
            sound2.play();
            break;

        case 'c':
            var sound3 = new Audio('sounds/sound3.mp3');
            sound3.play();
            break;

        case 'd':
            var sound4 = new Audio('sounds/sound4.mp3');
            sound4.play();
            break;
        default:
            console.log(key);
    }
};

for (i = 0; i < lengthOfBtn; i++) {
    const getButton = document.querySelectorAll('#btn')[i];
    const getHTML = getButton.innerHTML;
    getButton.addEventListener('click', () => {
        functionPlaySound(getHTML);
    });
    
}
