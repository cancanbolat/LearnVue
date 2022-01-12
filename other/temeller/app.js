const app = Vue.createApp({
    template: `
        <button v-bind:style="bindStyle" v-on:click="changeColor()">Bind 1</button>
        <br/><br/>
        <button :style ="bindStyle2" @click="changeColor2()">Bind 2</button>
    `,
    data() {
        return {
           bindStyle: 'color: red', 
           bindStyle2: 'color: green' 
        }
    },
    methods: {
        changeColor(){
            this.bindStyle = 'color: yellow'
        },
        changeColor2(){
            this.bindStyle2 = 'color: blue'
        }
    },
});

app.mount('#uygulama');

/* 
template: `
     <div v-if="goster">v if</div>
     <div v-show="goster">v show</div>
     <button @click="toggle()">
        <span v-if="goster">Gizle</span>
        <span v-else>Göster</span>
     </button>
    `,
    data() {
        return {
            goster: true
        }
    },
    methods: {
        toggle(){
            this.goster = !this.goster
        }
    }
*/

/* 
template: `
        <ul>
            <li v-for="data in datas">{{data.isim}}: {{data.is}}</li>
        </ul>
    `,
    data() {
        return {
            datas: [
                {isim: 'can', is: 'test developer'},
                {isim: 'nejdet', is: 'full-stack developer'},
                {isim: 'botan', is: 'frontend developer'}
            ]
        }
    }
*/