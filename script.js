// Присваивание дефолтного значения до ES6
function nihao(name){
	var name = name || 'Jack';
	return `Приветствую, ${name}!`;
};
console.log(nihao());

// Присваивание дефолтного значения c ES6
function hi(who = 'Poul'){
	return `Приветствую, ${who}!`;
};
console.log(hi());


// Стрелочная запись - присвоение в переменную
const FUNC = () => {};

// Стрелочная запись - дефолтный синтаксис
(a, b) => {
	let sum = a + b;
	return sum;
};

// Стрелочная запись - с одним аргументом
a => {
	return a;
};

// Стрелочная запись - без аргументов
_ => {
	return 'Привет!';
};

// Стрелочная запись - если тело вункции записано в одну строку (в этом случае не нужен return и фигурные скобки)
a => a * 2;
(a,b) => a * b;

// Стрелочная запись - если из функции нужно вернуть литерал объекта (актуально если тело функции занимает одну строку)
() => ({name: 'man'});

// Стрелочная запись - анонимная самовызывающаяся функция
(() => {5-7})();


// Приколы с this
let person = {
	login: 'Jack',
	hi: function(){
		window.setTimeout(() => {
			console.log(this.login, this)
		}, 2500)	
	}
}
person.hi();