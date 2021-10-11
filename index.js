//ohno
const { Plugin } = require('powercord/entities');
const { inject, uninject } = require('powercord/injector');
const { getModule } = require('powercord/webpack');

module.exports=class shitware extends Plugin{
    async startPlugin(){
        this.loadStylesheet(style.scss)
    }
}