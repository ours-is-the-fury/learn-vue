new Vue({
    el:".vue-app",
    data:{
        name:"",
        age: 20,
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        changeColor:false,
        changeLength:false,
        error:false,
        success:false,
        characters:["Mario","Luffy","yos"],
        users:[
            {name:"Hery",age:30},
            {name:"Bucky",age:28},
            {name:"Emily",age:18},
        ],
        health:100,
        ended:false
        },
    methods:{
        add: function(inc){
            this.age += inc;            
        },
        subt:function(dec){
            this.age -= dec;
        },
        updataXY:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;
        },
        alert:function(){
            alert("new world")
        },
        logName:function(){
            console.log("innputing")
            this.name = this.$refs.name.value;
        },
        logAge:function(){
            console.log("innputing")
            this.age = this.$refs.age.value;
        },
        // addtoa:function(){
        //     this.a+this.age;
        // },
        // addtob:function(){
        //     this.b+this.age;
        // }
        punch:function(){
            this.health -= 10;
            if(this.health <= 0){
                this.ended = true;
            }
        },
        restart:function(){
            this.health = 100;
            this.ended =false;
        }
    },
    computed:{//计算属性
        addtoa:function(){
            return this.a+this.age;
        },
        addtob:function(){
            return this.b+this.age;
        },
        compClasses:function(){
            return{
                changeColor:this.changeColor,
                changeLength:this.changeLength,
            }
        }
    }
});


var one = new Vue({
    el:"#vueappone",
    data:{
        title:"app one"
    },
    methods:{
    },
    computed:{
        greet:function(){
            return "hellow app one"
        }
    }
});



var two = new Vue({
    el:"#vueapptwo",
    data:{
        title:"app two"
    },
    methods:{
        changeTitle:function(){
            one.title="已经改名了"
        }
    },
    computed:{
        greet:function(){
            return "hellow app two"
        }
    }
});