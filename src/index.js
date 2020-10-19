var app = new Vue({
    el: '#app',
    data: {
        title: '',
        desc: '',
        date: '',
        agenda: [],
        index: -1,
    },
    methods: {
        salvar() {
            if (this.index == -1) {

                this.agenda.push({
                    title: this.title,
                    desc: this.desc,
                    date: this.date,
                })
            } else {
                Object.assign(this.agenda[this.index], {
                    title: this.title,
                    desc: this.desc,
                    date: this.date,
                })
                this.index = -1
            }
            this.title = ''
            this.desc = ''
            this.date = ''
        },
        apagar(item) {
            let select_usuario = this.agenda.indexOf(item)
            this.agenda.splice(select_usuario, 1)
        },
        editar(item) {
            this.index = this.agenda.indexOf(item)
            this.title = item.title
            this.desc = item.desc
            this.date = item.date

        }
    }
})