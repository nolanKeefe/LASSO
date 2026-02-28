const list = document.getElementById("post-list");
//appends a post to the running list
function addpost(){

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
// Button interaction
document.querySelectorAll('.like-btn').forEach(button => {
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
});