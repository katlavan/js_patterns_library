//Rent-a-Constructor заимствование конструктора

function Child(a, c, b, d) {
    Parent.apply(this, arguments);
}

// родительский конструктор
function Article() {
this.tags = ["js", "css"];
}
var article = new Article();
// объект сообщения в блоге наследует свойства объекта article
// через классический шаб­лон No1
function BlogPost() {}

BlogPost.prototype = article;
var blog = new BlogPost();
// обратите внимание, что выше нет необходимости
// использовать выражение `new Article()`,
// потому что уже имеется доступный экземпляр
// статическая страница наследует свойства объекта article
// через шаб­лон заимствования конструктора
function StaticPage() {
    Article.call(this);
}
var page = new StaticPage();
alert(article.hasOwnProperty("tags")); // true
alert(blog.hasOwnProperty("tags"));
// false
alert(page.hasOwnProperty("tags"));
// true