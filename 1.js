const cels = Number.parseFloat(prompt("Введите значение градусов в цельсий"));
const faren = (9 / 5) * cels + 32;
alert(`В цельсиях = ${cels} в фаренгейтах = ${faren.toFixed(1)}`)