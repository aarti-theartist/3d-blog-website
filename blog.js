const posts = [
  {
    title: "CodeCraft: Mastering JavaScript",
    content: "Your journey starts here.",
    description: "JavaScript powers modern web apps.",
    category: "tech",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  },
  {
    title: "Trip to Goa",
    content: "Beautiful beaches.",
    description: "Explore Goa’s beauty.",
    category: "travel",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    title: "Art of Homemade Pizza",
    content: "Delicious pizza.",
    description: "Make tasty pizza at home.",
    category: "food",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
  }
];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const post = posts[id];

if (post) {
  document.getElementById("title").innerText = post.title;
  document.getElementById("content").innerText = post.content;
  document.getElementById("description").innerText = post.description;
  document.getElementById("category").innerText = post.category;
  document.getElementById("image").src = post.image;
}