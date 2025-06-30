import type  { ProductsAndServices } from "../types/company.types";

interface ProductsAndServicesProps {
    productsAndServices: ProductsAndServices;
}

const ProductsAndServices = ({ productsAndServices }: ProductsAndServicesProps) => {
  return (
    <>
        <h1>Products & Services</h1>
        <div className="grid grid-col-1 gap-4">
            <div>
            <h1>Business Model</h1>
            <p>{productsAndServices.businessModel}</p>
            </div>
            <div>
            <h1>Core Products</h1>
            {productsAndServices.coreProducts.map((p: string) => (
                <p key={p}>
                - {p}
                </p>
            ))}
            </div>
            <div>
            <h1>Tech Stack</h1>
            {productsAndServices.techStack.length > 0 ? productsAndServices.techStack.map((t: string) => (
                <p key={t}>
                - {t}
                </p>
            )) : 
                "Not Available"
            }
            </div>
        </div>
    </>
  )
}

export default ProductsAndServices;