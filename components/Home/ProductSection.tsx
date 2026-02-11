"use client";

import { ALL_CATEGORIES_QUERYResult, FILTER_PRODUCTS_BY_NAME_QUERYResult } from "@/sanity.types";
import { useState } from "react";

interface ProductSectionProps {
  categories: ALL_CATEGORIES_QUERYResult;
  products: FILTER_PRODUCTS_BY_NAME_QUERYResult;
  searchQuery: string;
}

const ProductSection = ({
  categories,
  products,
  searchQuery,
}: ProductSectionProps) => {
    const [filtersOpen, setFiltersOpen] = useState(true);
    
  return (
    <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {products.length} {products.length === 1 ? "product" : "products"}{" "}
          found
          {searchQuery && (
            <span>
              {" "}
              for &quot;<span className="font-medium">{searchQuery}</span>&quot;
            </span>
          )}
        </p>

        </div>

    </div>
  )
}
export default ProductSection;