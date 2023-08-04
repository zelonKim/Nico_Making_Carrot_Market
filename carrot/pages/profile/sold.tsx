import { Product } from "@prisma/client";
import type { NextPage } from "next";
import { ProductWithCount } from "pages";
import Item from "../../components/item";
import Layout from "../../components/layout";
import useSWR from "swr";
import ProductList from "@components/product_list";

interface Record {
  id: number;
  product: ProductWithCount;
}

interface ProductListResponse {
  [key: string]: Record[];
}

const Sold: NextPage = () => {
  return (
    <Layout title="판매내역" canGoBack>
      <div className="flex flex-col space-y-5 pb-10  divide-y">
        <ProductList kind="sales" />
      </div>
    </Layout>
  );
};

export default Sold;
