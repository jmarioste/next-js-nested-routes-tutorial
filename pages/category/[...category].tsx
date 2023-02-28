import { useRouter } from "next/router";
// pages/category/[...category].tsx
const CategoryPage = () => {
  const router = useRouter();
  // category is an array of strings
  const { category } = router.query;
  return (
    <div>
      <pre>Categories: {JSON.stringify(category, null, 4)}</pre>
    </div>
  );
};
export default CategoryPage;
