"use strict";

{
    let postBox = {
        bindings:{
            add : "&"
        },
        templateUrl: `postBox.html`,

        controller: function(){
            const vm = this;
        }
    }
    angular
        .module("social")
        .component("postBox", postBox);
}