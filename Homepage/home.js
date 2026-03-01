const list = document.getElementById("post-list");
const feed = document.getElementById("post-list");
const add_post_button = document.getElementById("add-post");
const form = document.getElementById("postform");
const box = document.getElementById("floatingBox");

function PostObj(title, description) {
    return {
        title,
        description,
        date: new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        }),
        likes: 0
    };
}
let posts = [];

document.getElementById("showBox").addEventListener("click", () => {
    box.classList.remove("hidden");
});
document.getElementById("closeBox").addEventListener("click", () => {
    box.classList.add("hidden");
});
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stops page refresh

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    createPost(title, description);
    createFeed();
});
//appends a post to the running list
function createPost(title, description){
    const newbie = new PostObj(title,description);
    posts.push(newbie);
    localStorage.setItem("posts", JSON.stringify(posts));
}

function addPost(postobject){
    let link = "";

    const li = document.createElement("li");

    const article = document.createElement("article");

    const h2 = document.createElement("h2");
    const a = document.createElement("a");
    a.href = link;
    a.textContent = postobject.title;
    h2.appendChild(a);

    const time = document.createElement("time");
    //time.dateTime = new Date();
    time.textContent = postobject.date;

    const p = document.createElement("p");
    p.textContent = postobject.description;

    const button = document.createElement("button");
    button.className = "like-btn";

    const heartspan = document.createElement("span");
    heartspan.className = "heart";
    heartspan.textContent = "♡";
    button.appendChild(heartspan);
    const countspan = document.createElement("span");
    countspan.className = "like-count";
    countspan.textContent = "0";
    button.appendChild(countspan);

    article.append(h2, time, p, button);
    li.appendChild(article);
    feed.appendChild(li);

}
// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});
document.addEventListener('click', function (e) {
    if (e.target.closest('.like-btn')) {

        const button = e.target.closest('.like-btn');
        const countSpan = button.querySelector('.like-count');
        const heart = button.querySelector('.heart');

        let count = parseInt(countSpan.textContent);

        if (button.classList.contains('liked')) {
            heart.textContent = '♡';
            count--;
            button.classList.remove('liked');
        } else {
            heart.textContent = '♥';
            count++;
            button.classList.add('liked');
        }

        countSpan.textContent = count;
    }
});
// Button interaction
/*document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function () {
        const countSpan = this.querySelector('.like-count');
        let count = parseInt(countSpan.textContent);

        if (this.classList.contains('liked')) {
        // Unlike
            countSpan.textContent = count - 1;
            this.innerHTML = `♡ <span class="like-count">${count - 1}</span>`;
            this.classList.remove('liked');
        } else {
            // Like
            countSpan.textContent = count + 1;
            this.innerHTML = `♥ <span class="like-count">${count + 1}</span>`;
            this.classList.add('liked');
        }
    });
});*/
function createFeed(){
    feed.replaceChildren();
    posts.forEach(post => {addPost(post);});
}