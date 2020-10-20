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
        validate(){
            var x = document.forms["myForm"]["fname"].value;
                if (x == "") {
                    alert("Name must be filled out");
                return false;
                }
        },  
        salvar() { 
            if(this.title == '' && this.desc == '' && this.date == '' ){
                alert("Todos os campos devem estar preenchidos");

            } else if(this.title == '' && this.desc == ''){
                alert("O Título e a Descrição devem estar preenchidos");

            }else if(this.desc == '' && this.date == ''){
                alert("Descrição e Data devem estar preenchidos");

            }else if(this.title == '' && this.date == ''){
                alert("O Título e a Data devem estar preenchidos");

            }else if(this.title == ''){
                alert("O Título deve estar preenchido");

            }else if(this.date == '' ){
                alert("A Data deve estar preenchida");

            }else if(this.desc == ''){
                alert("A Descrição deve estar preenchida");

            }else if (this.index == -1) {

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