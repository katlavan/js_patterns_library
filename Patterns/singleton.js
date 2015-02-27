// Экземпляр в статическом свойстве  Instance in a Static Property
function Universe() {
// имеется ли экземпляр, созданный ранее?
    if (typeof Universe.instance === "object") {
        return Universe.instance;
    }
// создать новый экземпляр
    this.start_time = 0;
    this.bang = "Big";
    // сохранить его
    Universe.instance = this;
// неявный возврат экземпляра:
// return this;
}
// проверка
var uni = new Universe();
var uni2 = new Universe();
uni === uni2; // true


// Экземпляр в замыкании - Instance in a Closure
function Universe() {
// сохраненный экземпляр
    var instance = this;
// создать новый экземпляр
    this.start_time = 0;
    this.bang = "Big";
// переопределить конструктор
    Universe = function () {
        return instance;
    };
}
// проверка
var uni = new Universe();
var uni2 = new Universe();
uni === uni2; // true

/*
Недостаток этого шаблона состоит
в том, что при переопределении функции (в данном случае конструк-
тора Universe()) она теряет все свойства, которые могли быть добавлены
между моментом ее определения и моментом переопределения. В дан-
ном конкретном случае все, что будет добавлено в прототип функции
Universe(), окажется недоступно экземпляру, созданному оригиналь-
ной реализацией.
 */

function Universe() {
// сохраненный экземпляр
var instance;
    // переопределить конструктор
Universe = function Universe() {
return instance;
};
// перенести свойства прототипа
Universe.prototype = this;
// создать экземпляр
instance = new Universe();
// переустановить указатель на конструктор
instance.constructor = Universe;
// добавить остальную функциональность
instance.start_time = 0;
instance.bang = "Big";
return instance;
}

//или через обертку конструктора
var Universe;
(function () {
    var instance;
Universe = function Universe() {
if (instance) {
return instance;
}
instance = this;
// добавить остальную функциональность
this.start_time = 0;
this.bang = "Big";
};
}());
