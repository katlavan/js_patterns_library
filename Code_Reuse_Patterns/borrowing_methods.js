function f() {
    var args = [].slice.call(arguments, 1, 3);
    return args;
}
// пример
f(1, 2, 3, 4, 5, 6); // вернет [2,3]


//Заимствование и связывание
var one = {
    name: "object",
    say: function (greet) {
        return greet + ", " + this.name;
    }
};
// проверка
one.say("hi"); // "hi, object"

var two = {
    name: "another object"
};
one.say.apply(two, ["hello"]); // "hello, another object"

// в случае присваивания функции переменной
// ссылка `this` будет указывать на глобальный объект
var say = one.say;
say("hoho");
// "hoho, undefined"
// передача в виде функции обратного вызова
var yetanother = {
    name: "Yet another object",
    method: function (callback) {
        return callback("Hola");
    }
};
yetanother.method(one.say); // "Hola, undefined"

