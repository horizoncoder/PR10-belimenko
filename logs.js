import random from "./utils.js"

const $logs = document.querySelector('#logs');

const generateLog = (firstPerson, secondPerson, dmg) => {
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${dmg} : [${secondPerson.hp.current}/${secondPerson.hp.total}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${dmg} : [${secondPerson.hp.current}/${secondPerson.hp.total}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${dmg} : [${secondPerson.hp.current}/${secondPerson.hp.total}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${dmg} : [${secondPerson.hp.current}/${secondPerson.hp.total}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${dmg} : [${secondPerson.hp.current}/${secondPerson.hp.total}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${dmg} : [${secondPerson.hp.current}/${secondPerson.hp.total}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${dmg} : [${secondPerson.hp.current}/${secondPerson.hp.total}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника -${dmg} : [${secondPerson.hp.current}/${secondPerson.hp.total}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${dmg} : [${secondPerson.hp.current}/${secondPerson.hp.total}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${dmg} : [${secondPerson.hp.current}/${secondPerson.hp.total}]`
    ];

    const log =  logs[random(logs.length) - 1]
    const $p = document.createElement('p');
    $p.innerText = log;
    $logs.insertBefore($p, $logs.children[0]);
    console.log(log);
}

export default generateLog;      