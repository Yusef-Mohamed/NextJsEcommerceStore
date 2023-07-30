import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-color";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/contianer";
import Filter from "./components/Filter";
import NoResults from "@/components/ui/no.results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/MobileFilters";

export const revalidate = 0;
interface CategoryPageProps {
  params: {
    categoryid: string;
  };
  searchParams: {
    colorid: string;
    sizeid: string;
  };
}
const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryid: params?.categoryid,
    colorid: searchParams.colorid,
    sizeid: searchParams.sizeid,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryid);
  console.log(category);
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category?.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeid" name="Sizes" data={sizes} />
              <Filter valueKey="colorid" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 ? (
                <NoResults />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} data={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
