import { useRouter } from "next/router";
// pages/category/[category]/index.tsx
const CategoryIndexPage = () => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <div>
      [Category] Index Page
      <pre>Category: {category}</pre>
    </div>
  );
};
export default CategoryIndexPage;
