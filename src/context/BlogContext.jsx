import React, { createContext, useState, useEffect } from "react";
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const titles = [
          "Avocado Toast with Egg",
          "Quinoa Veggie Bowl",
          "Berry Smoothie",
          "Grilled Chicken Salad",
          "Lentil Soup",
          "Oats with Banana",
          "Kale Chips",
          "Veggie Stir Fry",
          "Tofu Buddha Bowl",
          "Mango Chia Pudding",
          "Zucchini Noodles",
          "Sweet Potato Tacos",
          "Rolled Spinach omelette",
          "Baked Salmon",
          "Greek Yogurt Parfait",
        ];

        const descriptions = [
          "Smashed avocado on toasted whole grain bread topped with a poached egg, perfect for a protein-packed breakfast.",
          "Colorful bowl of quinoa, cherry tomatoes, cucumber, chickpeas, and a tangy lemon-tahini dressing.",
          "Refreshing blend of berries, banana, Greek yogurt, and a splash of almond milk.",
          "Crisp greens, grilled chicken breast, cherry tomatoes, cucumbers, and vinaigrette.",
          "Hearty lentil soup with carrots, celery, and warming spices like cumin and turmeric.",
          "Warm oats topped with fresh banana slices, chia seeds, and a drizzle of honey.",
          "Crunchy kale baked with olive oil and sea salt, a healthy snack alternative.",
          "Mixed vegetables stir-fried with garlic and soy sauce served with brown rice.",
          "A nourishing bowl with tofu, quinoa, avocado, spinach, and sesame dressing.",
          "Sweet mango blended with chia seeds and coconut milk, refrigerated until set.",
          "Zucchini spiralized into noodles, served with marinara and grated Parmesan.",
          "Tacos filled with roasted sweet potatoes, black beans, and avocado crema.",
          "Rolled omelette fillet with lemon, herbs, and spinach wrapped in foil and baked.",
          "Oven-baked salmon filet with herbs, lemon, and a side of steamed broccoli.",
          "Layers of Greek yogurt, granola, and mixed berries in a glass jar.",
        ];

        const imageFilenames = [
          "Avocado.png",
          "quinoa.png",
          "berry.png",
          "grilled.png",
          "lentil.png",
          "oats.png",
          "kalechips.png",
          "veggie.png",
          "tofubuddha.png",
          "mango.png",
          "zucchini.png",
          "sweet.png",
          "rolled.png",
          "salmon.png",
          "greekyogurt.png",
        ];

        const images = imageFilenames.map((filename) =>
          new URL(`../assets/${filename}`, import.meta.url).href
        );

        const healthyRecipes = data.slice(0, 15).map((item, index) => ({
          ...item,
          title: titles[index],
          body: descriptions[index],
          image: images[index],
        }));

        setPosts(healthyRecipes);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch blog posts.");
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <BlogContext.Provider
      value={{ posts: filteredPosts, loading, error, setSearch }}
    >
      {children}
    </BlogContext.Provider>
  );
};
