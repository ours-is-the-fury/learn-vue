new Vue({
    el:"#vue-app",
    data:{
        age: 30,
        x: 0,
        y: 0,        
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
        },
        logAge:function(){
            console.log("innputing")
        },
    }
})