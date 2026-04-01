const posts = [
  {
    title: "CodeCraft: Mastering JavaScript",
    content: "Your journey from beginner to confident developer starts here.",
    description: "JavaScript is the heart of modern web development. Learn variables, functions, loops, and DOM manipulation.",
    category: "tech",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  },
  {
    title: "Trip to Goa",
    content: "Amazing beaches and sunsets.",
    description: "Explore Goa’s beaches, nightlife, and peaceful vibes.",
    category: "travel",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    title: "Art of Homemade Pizza",
    content: "Create restaurant-style pizza at home.",
    description: "Learn to make crispy, cheesy pizza with rich flavors.",
    category: "food",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
  }
];

const container = document.getElementById("postsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

/* Display */
function displayPosts(data) {
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No posts found</p>";
    return;
  }
   
  data.forEach((post, index) => {
    const div = document.createElement("div");
    div.classList.add("post");

    div.innerHTML = `
      <a href="blog.html?id=${index}" class="post-link">
        <img src="${post.image}">
        <div class="post-content">
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <p class="description">${post.description}</p>
          <span class="category">${post.category}</span>
        </div>
      </a>
    `;

    container.appendChild(div);
  });

  apply3DEffect();
}

/* 3D Effect */
function apply3DEffect() {
  const cards = document.querySelectorAll(".post");

  cards.forEach(card => {

    card.onmousemove = (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = -(y - rect.height / 2) / 10;
      const rotateY = (x - rect.width / 2) / 10;

      card.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
      `;
    };

    card.onmouseleave = () => {
      card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    };

  });
}

/* Filter */
function filterPosts() {
  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = posts.filter(post =>
    (post.title.toLowerCase().includes(search) ||
     post.content.toLowerCase().includes(search)) &&
    (category === "all" || post.category === category)
  );

  displayPosts(filtered);
}

searchInput.addEventListener("input", filterPosts);
categoryFilter.addEventListener("change", filterPosts);

displayPosts(posts);

