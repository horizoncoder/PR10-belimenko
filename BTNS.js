import random from "./utils.js"
import log from "./logs.js"

const $btn = document.getElementById('btn-kick');
const $btn1 = document.getElementById('btn-shot');

const start = (character, enemy) => {
    const btnCount = countBtn(3, $btn);
    const btn1Count = countBtn(1, $btn1);

    function countBtn(count, el){
        const innerText = el.innerText;
        el.innerText = `${innerText} (${count})`;
        return function () {
            count--;
            if(count == 0){
                el.disabled = true;
            }
            if(character.hp.current == 0){
                el.disabled = true;
                return true;
            }
            if(enemy.hp.current == 0){
                el.disabled = true;
                return true;
            }
            el.innerText = `${innerText} (${count})`;
            return false;
        }
    }

    $btn.addEventListener('click', function() {
        console.log('Kick');
        character.changeHP(random(100, 20), function(count) {
            log(enemy, character, count);
        });
        enemy.changeHP(random(100, 20), function(count) {
            log(character, enemy, count);
        });
        
        if(btnCount() === true){
            $btn1.disabled = true
        }
    });
    $btn1.addEventListener('click', function() {
        console.log('Ulta');
        character.changeHP(random(400, 100), function(count) {
            log(enemy, character, count);
        });
        enemy.changeHP(random(400, 100), function(count) {
            log(character, enemy, count);
        });
        
        if(btn1Count() === true){
            $btn.disabled = true
        }
    });
}

export default start; 