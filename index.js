//ohno
const { Plugin } = require('powercord/entities');
const { inject, uninject } = require('powercord/injector');
const { getModule } = require('powercord/webpack');

module.exports=class shitware extends Plugin{
    async startPlugin(){
        function randomInt(max){
            Math.floor(Math.random*max);
        }
        if(randomInt(20)===1){ //crash uwu
            (async ()=>{
                (await require('powercord/webpack').getModule(['process'])).remoteApp.relaunch()
            })()
        }
        if(randomInt(100)===1){//message logger prank broh
            //message logger icon code here
            pass;

        }
        if(randomInt(10)===1){
            document.addEventListener("click",function play() {
                const audio = new Audio('https://raw.githubusercontent.com/SomeAspy/PowerCroissant/main/croissant%20sound.mp3');
                audio.play();
            })
        }
        if(randomInt(20)===1){
            const porno=new Audio
        }
    }
}