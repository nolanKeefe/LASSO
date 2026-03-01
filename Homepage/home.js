const list = document.getElementById("post-list");
const add_post_button = document.getElementById("add-post");


//appends a post to the running list
function addPost(){
    // Placeholder data for the post
    let title = "Test";
    let link = "";
    let summary = "LUrasdf, ASfd Ipsum MOrebaginsd."
    let resolved = false; // all posts intialize as unresolved
    const ul = document.getElementById("post-list");

    const li = document.createElement("li");

    const article = document.createElement("article");

    // Title of the post
    const h2 = document.createElement("h2");
    const a = document.createElement("a");
    a.href = link;
    a.textContent = title;
    h2.appendChild(a);

    // Date of the post
    const time = document.createElement("time");
    time.textContent = new Date().toLocaleDateString();

    //Summary of the post
    const p = document.createElement("p");
    p.textContent = summary;

    // Like button creation
    const likebutton = document.createElement("button");
    likebutton.className = "like-btn";

    //Visuals of the like button
    const heartspan = document.createElement("span");
    heartspan.className = "heart";
    heartspan.textContent = "♡";
    likebutton.appendChild(heartspan);
    const countspan = document.createElement("span");
    countspan.className = "like-count";
    countspan.textContent = "0";
    likebutton.appendChild(countspan);

    //Visuals of resolve button
    const resolvebutton = document.createElement("button");
    resolvebutton.className = "resolve-btn";

    const resolvespan = document.createElement("span");
    resolvespan.className = "resolve";
    resolvespan.textContent = "Resolve ✓";
    resolvebutton.appendChild(resolvespan);


    article.append(h2, time, p, likebutton, resolvebutton);
    li.appendChild(article);
    ul.appendChild(li);

}
// Smooth scroll for nav links we aren't using it though so I commented it out
/*document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});*/

//obtains the accountType from local storage to determine which features show on homepage
const accountType = localStorage.getItem("account-type"); 
if (accountType === "government") {
    // Show government-specific features
    document.querySelectorAll('.resolve-btn').forEach(button => {
        button.style.display = 'inline-block';
    }); 
} else {
    // Hide government-specific features
    document.querySelectorAll('.resolve-btn').forEach(button => {
        button.style.display = 'none';
    });
    }

document.addEventListener('click', function (e) {
    // Like button interaction
    if (e.target.closest('.like-btn')) {
        //check if the clicked button is like button

        // Get the button, count span, and heart span
        const button = e.target.closest('.like-btn');
        const countSpan = button.querySelector('.like-count');
        const heart = button.querySelector('.heart');

        // read current like count
        let count = parseInt(countSpan.textContent);

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

    // Resolve button interaction
    if (e.target.closest('.resolve-btn')) {
        //check if the clicked button is a resolve button

        // Get which button it is
        const button = e.target.closest('.resolve-btn');

        // check if the button is already liked and update count and visuals accordingly
        if (button.classList.contains('resolved')) {
            button.classList.remove('resolved');
        } else {
            button.classList.add('resolved');
        }
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
add_post_button.addEventListener("click", function () {
    addPost();
})