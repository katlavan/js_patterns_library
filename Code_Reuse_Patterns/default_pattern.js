// Классический шаблон

// родительский конструктор
function Parent(name) {
    this.name = name || "Adam";
}
// добавление дополнительной функциональности в прототип
Parent.prototype.say = function () {
    return this.name;
};
// пустой дочерний конструктор
function Child(name) {
}
// здесь происходит магия наследования
inherit(Child, Parent);

// реализация функции
function inherit(C, P) {
    C.prototype = new P();
}
