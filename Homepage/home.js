const feed = document.getElementById("post-list");
const form = document.getElementById("postform");
const box = document.getElementById("floatingBox");
//appends a post to the running list
let posts = [];
function addPostToFeed(postobject){
    let link = "";

    const li = document.createElement("li");

    const article = document.createElement("article");

    // Title of the post
    const h2 = document.createElement("h2");
    const a = document.createElement("a");
    a.href = link;
    a.textContent = postobject.title;
    h2.appendChild(a);

    // Date of the post
    const time = document.createElement("time");
    //time.dateTime = new Date();
    time.textContent = postobject.date;

    //Description of the post
    const p = document.createElement("p");
    p.textContent = postobject.description;

    // Like button creation
    const button = document.createElement("button");
    button.className = "like-btn";

    //Visuals of the like button
    const heartspan = document.createElement("span");
    heartspan.className = "heart";
    heartspan.textContent = "♡";
    button.appendChild(heartspan);
    const countspan = document.createElement("span");
    countspan.className = "like-count";
    countspan.textContent = "0";
    button.appendChild(countspan);
    if (postobject.image) {
        const img = document.createElement("img");
        img.src = postobject.image;
        img.style.maxWidth = "100%";
        article.append(h2, time,img, p, button);
    }else{article.append(h2, time, p, button);}
    li.appendChild(article);
    feed.appendChild(li);
}
function PostObj(title, description, image) {
    return {
        title,
        description,
        date: new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        }),
        image,
        likes: 0
    };
}
function createPost(title, description, image){
    const newbie = new PostObj(title,description, image);
    posts.push(newbie);
    localStorage.setItem("posts", JSON.stringify(posts));
}
function createFeed(){
    feed.replaceChildren();
    posts.forEach(post => {addPostToFeed(post);});
}

document.getElementById("showBox").addEventListener("click", () => {
    box.classList.remove("hidden");
});
document.getElementById("closeBox").addEventListener("click", () => {
    box.classList.add("hidden");
});
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stops page refresh
    box.classList.add("hidden")
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("imageURL").value;
    createPost(title, description, image);
    createFeed();
});
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
        //check if the clicked button is like button

        // Get the button, count span, and heart span
        const button = e.target.closest('.like-btn');
        const countSpan = button.querySelector('.like-count');
        const heart = button.querySelector('.heart');

        // read current like count
        let count = parseInt(countSpan.textContent || "0");

        // check if the button is already liked and update count and visuals accordingly
        if (button.classList.contains('liked')) {
            heart.textContent = '♡';
            count--;
            button.classList.remove('liked');
        } else {
            heart.textContent = '♥';
            count++;
            button.classList.add('liked');
        }
        // Update the like count display
        countSpan.textContent = count;
    }
});
