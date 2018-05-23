'use strict';
{
    let socialPosts = {
        templateUrl: `post.html`,

        controller: function(){
            let vm = this;
            vm.posts = [{
                title: "Look at this egg",
                body: "Wow it's really nice"
            },
            {
                title: "Look at this egg too",
                body: "wasn't messing around this time either"
            },
            {
                title: "Another egg",
                body: "Dang, this never gets old"
            },
            {
                title: "Last Egg",
                body: "My grandma had one of these"
            }];
            
            vm.addPost = function (t, b) {
                console.log("Hey");
                let post = {
                    title: t,
                    body: b
                }
                vm.posts.push(post);
                console.log(vm.posts);
            }
        }

    }

    angular
        .module("social")
        .component("socialPosts", socialPosts);
}