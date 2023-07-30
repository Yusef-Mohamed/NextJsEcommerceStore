import { Product } from "@/types";
import Currency from "./ui/Currency";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";

interface InforProps {
  data: Product;
}
const Info: React.FC<InforProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 items-end justify-between flex">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Size:</h3>
        <div>{data?.size.name}</div>
      </div>
      <div className="flex items-center gap-x-4 mt-6">
        <h3 className="font-semibold text-black">Color:</h3>
        <div
          className={`w-8 h-8 rounded-full`}
          style={{ backgroundColor: data?.color.value }}
        ></div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2 p-4">
          Add To Cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
