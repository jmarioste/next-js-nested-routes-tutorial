import { useRouter } from "next/router";
// pages/category/[category]/[subcategory].tsx
const SubCategoryPage = () => {
  const router = useRouter();
  const { category, subcategory } = router.query;
  return (
    <div>
      <pre>
        Category: {category} , Subcategory: {subcategory}
      </pre>
    </div>
  );
};
export default SubCategoryPage;
