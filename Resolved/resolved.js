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
    // Comment container
    p.textContent = post.description;
    const commentSection = document.createElement("div");
    commentSection.className = "comment-section hidden";
    // Single comment display
    const singleComment = document.createElement("div");
    singleComment.className = "single-comment";

// Load saved comment
    if (post.comment) {
        singleComment.textContent = post.comment;
        commentSection.className = "comment-section"
    }

    commentSection.append(singleComment);
    if (post.image) {
        const img = document.createElement("img");
        img.src = post.image;
        article.append(h2, time,img, p,commentSection);
    }else{article.append(h2, time, p,commentSection);}
    li.appendChild(article);
    resolvedList.appendChild(li);
});