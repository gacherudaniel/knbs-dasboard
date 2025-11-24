import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PRODUCTS, type Product } from "../../constants/products";

interface ReportTitleCardProps {
  onProductChange?: (productId: string) => void;
}

export function ReportTitleCard({ onProductChange }: ReportTitleCardProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsDropdownOpen(false);
    onProductChange?.(product.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-xs text-gray-500 uppercase mb-2">Product</p>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-left text-lg font-semibold text-gray-800 hover:text-knbs-600 transition-colors flex items-center justify-between gap-2 p-2 rounded hover:bg-gray-50"
            >
              <span>{selectedProduct.name}</span>
              <ChevronDown
                size={20}
                className={`text-knbs-500 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                />

                <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
                  {PRODUCTS.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductSelect(product)}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-knbs-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                        selectedProduct.id === product.id
                          ? "bg-knbs-50 text-knbs-700 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      <div className="font-medium">{product.name}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {product.referencePeriod} • {product.status}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase">Status</p>
          <p
            className={`text-lg font-semibold ${
              selectedProduct.status === "Published"
                ? "text-knbs-700"
                : selectedProduct.status === "In Progress"
                ? "text-amber-600"
                : "text-gray-600"
            }`}
          >
            {selectedProduct.status}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase">Reference Period</p>
          <p className="text-lg font-semibold text-gray-800">
            {selectedProduct.referencePeriod}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase">Last Updated</p>
          <p className="text-lg font-semibold text-gray-800">
            {selectedProduct.lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
}
