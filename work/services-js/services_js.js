"use strict";

let posts = [];
let getcomments = [];
let postId = [];
let pre_postId = 0;
let operator = 0;
let comments = [];

// fetch posts
const list = document.querySelector('.posts');
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then( response => response.json() )
    .then( rawPosts => {
        posts = rawPosts;
render();
requestComment();
});

// function render(): render the page using post information
function render() {
    const html = posts.map( post =>{
        return `
        <li class ="eachpost" id="post_${post.id}">
            <a href="" class="post_title" id="${post.id}">${post.title}</a>
            <div class="post_body">
                ${post.body}
            </div>
            <ul class="comment_content" id="comment_content_${post.id}"></ul>
        </li>`;
    }).join('');
list.innerHTML = html;
}

// function requestComment(): request comment
function requestComment() {
    let getcomments =  document.querySelectorAll('.post_title');
    
    // Listen if something is clicked
    for(let i = 0; i < posts.length; i++) {
        getcomments[i].addEventListener('click', function (e) {
            e.preventDefault();
            pre_postId = postId;
            postId = e.target.getAttribute('id')
            operator = postId^operator;     // use operator variable to judge whether to open / close a page
            if(operator == 0) {             // operator == 0 :  click the same title twice, and it should be closed
                const comments_content = document.querySelector(`#comment_content_${postId}`);
                comments_content.innerHTML = "";
            } else {        // operator != 0 :  use pullComments() to fetch new comments of the clicked title
                if(pre_postId!=0) {     // pre_postId!=0 :  click another title (one comments is opened) , close the previous one 
                    const comments_content = document.querySelector(`#comment_content_${pre_postId}`);
                    comments_content.innerHTML = "";
                }
                pullComments();     // and then use pullComments() to fetch new 
                operator = postId;
            }
        });
    }
}

// function pullComments(): pull comment by fetch()
function pullComments() {
    // console.log(postId);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then( response => response.json() )
    .then( commentsPosts => {
        comments = commentsPosts;
    })
    .then(function(){
        return showComments();
    });
}

// function showComments(): show comments
function showComments() {
    const comments_content = document.querySelector(`#comment_content_${postId}`);
    const content_html = comments.map( comments => {
        return `
        <li class ="eachcomment">
            <div class = "comment_info">
                <div class = "comments_name">
                    name: ${comments.name}
                </div>
                <div class = "comments_email">
                    email: ${comments.email}
                </div>
            </div>
            <div class="comment_body">
                ${comments.body}
            </div>
        </li>`;
    }).join('');
    comments_content.innerHTML = content_html;
}