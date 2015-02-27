var proxy = {
    ids: [],
    delay: 50,
    timeout: null,
    callback: null,
    context: null,
    makeRequest: function (id, callback, context) {
// добавить в очередь
        this.ids.push(id);
        this.callback = callback;
        this.context = context;
// установить предельное время ожидания
        if (!this.timeout) {
            this.timeout = setTimeout(function () {
                proxy.flush();
            }, this.delay);
        }
    },
    flush: function () {
        http.makeRequest(this.ids, "proxy.handler");
// сбросить таймер и очистить очередь
        this.timeout = null;
        this.ids = [];
    },
    handler: function (data) {
        var i, max;
// единственный видеофильм
        if (parseInt(data.query.count, 10) === 1) {
            proxy.callback.call(proxy.context, data.query.results.Video);
            return;
        }
// несколько видеофильмов
        for (i = 0, max = data.query.results.Video.length; i < max; i += 1) {
            proxy.callback.call(proxy.context, data.query.results.Video[i]);
        }
    }
};