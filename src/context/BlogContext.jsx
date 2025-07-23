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
          "Rolled Spinach Omelette",
          "Baked Salmon",
          "Greek Yogurt Parfait",
        ];

        const descriptions = [
          "Toast bread, mash avocado with salt and lemon. Spread it on toast, top with a fried or poached egg. Sprinkle pepper or chili flakes and serve warm.",
          "Cook quinoa, then mix with chopped cucumber, tomato, chickpeas, and parsley. Drizzle with lemon-tahini dressing and serve chilled or warm.",
          "Blend mixed berries, banana, Greek yogurt, and almond milk until smooth. Pour into a glass and enjoy immediately for a refreshing start.",
          "Grill chicken breast until fully cooked. Serve over fresh greens with cherry tomatoes, cucumber, and a light vinaigrette dressing.",
          "In a pot, sauté onion, garlic, carrot, and celery. Add lentils, water, cumin, and turmeric. Simmer for 30–40 mins until thick and soft.",
          "Cook oats in milk or water until creamy. Top with banana slices, chia seeds, and a drizzle of honey or maple syrup.",
          "Tear kale into pieces, toss in olive oil and salt. Bake at 350°F (175°C) for 12–15 mins until crispy. Cool and enjoy.",
          "Heat oil in a wok, add chopped vegetables (carrot, broccoli, bell pepper). Stir-fry with garlic and soy sauce. Serve with rice.",
          "Cook quinoa and steam tofu. In a bowl, add spinach, avocado, tofu, and quinoa. Drizzle with sesame dressing and serve.",
          "Mix chia seeds with coconut milk and diced mango. Let sit in the fridge overnight until it thickens into a pudding. Serve chilled.",
          "Spiralize zucchini, sauté lightly with olive oil. Top with warm marinara sauce and Parmesan cheese. Serve immediately.",
          "Roast sweet potatoes with spices. Warm tortillas, fill with sweet potatoes, black beans, and drizzle with avocado crema.",
          "Beat eggs with spinach and herbs, pour into a pan, cook thin. Roll the cooked omelette into a log. Slice and serve warm.",
          "Season salmon with lemon and herbs. Bake at 375°F (190°C) for 15–20 mins. Serve with steamed vegetables or rice.",
          "In a glass, layer Greek yogurt, granola, and fresh berries. Repeat the layers and top with a drizzle of honey if desired.",
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
