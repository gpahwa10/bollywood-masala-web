export const categories = [
    {
        id: 1,
        image: "/images/categories/category-1.png",
        title: "Behind the Scenes"
    },
    {
        id: 2,
        image: "/images/categories/category-2.png",
        title: "Masala on Location"
    },
    {
        id: 3,
        image: "/images/categories/category-3.png",
        title: "Masala Buzz"
    },
    {
        id: 4,
        image: "/images/categories/category-4.png",
        title: "BollywoodMasala Exclusive"
    },
    {
        id: 5,
        image: "/images/categories/category-5.png",
        title: "Movie Reviews"
    },
    {
        id: 6,
        image: "/images/categories/category-6.png",
        title: "BollywoodMasala Top 10"
    },
    {
        id: 7,
        image: "/images/categories/category-7.png",
        title: "Business News"
    },
    {
        id: 8,
        image: "/images/categories/category-8.png",
        title: "Bitchy chats"
    },
];

export function getCategoryById(id: string | string[]) {
    const numId = typeof id === "string" ? parseInt(id, 10) : parseInt(id?.[0] ?? "", 10);
    return categories.find((c) => c.id === numId);
}
