import { useRouter } from "next/router";
// catgory/[category]/subcategory/[subcategory].tsx
const SubcategoryDynamicPage = () => {
  const router = useRouter();
  const { category, subcategory } = router.query;
  return (
    <div>
      <pre>
        Category : {category} <br></br>
        Subcategory {subcategory}
      </pre>
    </div>
  );
};
export default SubcategoryDynamicPage;
