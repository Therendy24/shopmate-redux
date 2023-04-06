
import { ProductCard } from "../components";
import { useTitle } from "../hooks/useTitle";
export const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "fantom-08", "price": 1499, "image": "/assets/images/fantom-08.jpeg"},
    {"id": 2, "name": "Kronos", "price": 1349, "image": "/assets/images/kronos.jpeg"},
    {"id": 3, "name": "Modx", "price": 1799, "image": "/assets/images/modx7.jpeg"},
    {"id": 4, "name": "Montage", "price": 3999, "image": "/assets/images/montage.jpeg"},
    {"id": 5, "name": "nord", "price": 3999, "image": "/assets/images/nord.jpeg"},
    {"id": 6, "name": "motif", "price": 1299, "image": "/assets/images/motif.jpeg"}
  ]

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}