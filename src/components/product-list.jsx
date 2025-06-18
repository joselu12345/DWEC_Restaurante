import { useShoppingCart } from "../hooks";
import dataProducts from "../data.json";
import Button from "../layouts/Button";

export default function ProductList() {
  const { products, addProduct } = useShoppingCart();

  const checkAvailableToAddCart = (productId) => {
    return Boolean(products.find((product) => product.id === productId));
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Nuestros Platos
      </h1>
      <div className=" flex flex-wrap gap-8 justify-center">
        {/* <div className="w-full max-w-6xl px-4 mx-auto mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
        {dataProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border bg-gray-400/10 flex flex-col h-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain bg-white mx-auto"
            />
            <div className="flex flex-col flex-grow gap-y-4 px-4 py-6">
              <h1 className="font-medium">{product.name}</h1>
              <p className="text-sm line-clamp-3">{product.description}</p>
              <span className="font-medium">$ {product.price}</span>
              <div>
                <Button
                  title="Añadir plato"
                  className="bg-indigo-600 hover:bg-indigo-800 text-slate-200 mt-auto font-medium border rounded-lg px-4 py-2 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-200"
                  onClick={() => addProduct(product)}
                  // onClick={() => console.log(product.name)}
                  disabled={checkAvailableToAddCart(product.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
