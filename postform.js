"use strict";

{
    let post = {
        bindings: {
            title: "<",
            body: "<",
        },
        template: `
        <h2>{{$ctrl.title}}</h2>
        <p> {{$ctrl.body}} </p>
        `,
        controller: function(){
            const vm = this;
        }
    }
    angular
        .module("social")
        .component("post", post);
}