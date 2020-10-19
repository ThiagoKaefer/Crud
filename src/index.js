var app = new Vue({
    el: '#app',
    data: {
        title: '',
        desc: '',
        date: '',
        agenda: [],
    },
    methods: {
        salvar() {
            this.agenda.push({
                title: this.title,
                desc: this.desc,
                date: this.date,
            })
        },
        apagar(item) {
            let select_usuario = this.agenda.indexOf(item)
            this.agenda.splice(select_usuario, 1)
        },
        editar() {

        }
    }
})