import { useRouter } from "next/router";

const CategoryPage = () => {
  const router = useRouter();
  // categorySlug matches the filename [categorySlug].tsx
  const { categorySlug } = router.query;
  // For the path /category/react. categorySlug => react
  console.log(categorySlug);

  return (
    <div>
      <pre>{categorySlug}</pre>
    </div>
  );
};
export default CategoryPage;
