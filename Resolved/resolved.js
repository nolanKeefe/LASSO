const resolvedList = document.getElementById("resolved-list");

// Load resolved posts
let resolvedPosts = JSON.parse(localStorage.getItem("resolvedPosts")) || [];

// Display them
resolvedPosts.forEach(post => {

    const li = document.createElement("li");
    const article = document.createElement("article");

    const h2 = document.createElement("h2");
    h2.textContent = post.title;

    const time = document.createElement("time");
    time.textContent = post.date;

    const p = document.createElement("p");
    p.textContent = post.description;
    if (post.image) {
        const img = document.createElement("img");
        img.src = post.image;
        article.append(h2, time,img, p);
    }else{article.append(h2, time, p);}
    li.appendChild(article);
    resolvedList.appendChild(li);
});