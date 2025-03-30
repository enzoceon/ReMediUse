
// Stable medicine images from Unsplash that won't crash
const RELIABLE_IMAGES = [
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1550572017-67e2deb2bfca?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1603825109725-49b471cc0b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1584307579504-6bcdbc5d284d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1583912268183-46bf1e1e900f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
];

// Function to get a random image from the reliable set
export const getReliableImage = () => {
  return RELIABLE_IMAGES[Math.floor(Math.random() * RELIABLE_IMAGES.length)];
};
