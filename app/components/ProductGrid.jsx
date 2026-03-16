import {CartForm, Image} from '@shopify/hydrogen';
import {Link} from 'react-router';

export default function ProductGrid({products}) {
  // Check if products and nodes exist to prevent crashes
  const productNodes = products?.products?.nodes || [];

  return (
    <>
      <section className="products">
        <h2>Trending Products</h2>

        <div className="product-grid">
          {productNodes.map((product) => {
            const variantId = product.variants.nodes[0]?.id;

            return (
              <div className="product-card" key={product.id}>
                <Link to={`/products/${product.handle}`}>
                  {product.featuredImage && (
                    <Image
                      data={product.featuredImage}
                      alt={product.title}
                      width={300}
                    />
                  )}
                </Link>

                <h3>{product.title}</h3>

                <p className="price">
                  {product.priceRange.minVariantPrice.amount}{" "}
                  {product.priceRange.minVariantPrice.currencyCode}
                </p>

                <CartForm
                  route="/cart"
                  action={CartForm.ACTIONS.LinesAdd}
                  inputs={{
                    lines: [
                      {
                        merchandiseId: variantId,
                        quantity: 1,
                      },
                    ],
                  }}
                >
                  {(fetcher) => (
                    <button 
                      className="cart-btn" 
                      type="submit"
                      disabled={fetcher.state !== 'idle'}
                    >
                      {fetcher.state !== "idle" ? "Adding..." : "Add to Cart"}
                    </button>
                  )}
                </CartForm>
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
        .products {
          max-width: 1200px;
          margin: 60px auto;
          text-align: center;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .product-card {
          border: 1px solid #eee;
          padding: 15px;
          border-radius: 8px;
          transition: 0.3s;
        }

        .product-card:hover {
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .product-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 6px;
        }

        .price {
          color: #e63946;
          font-weight: bold;
        }

        .cart-btn {
          display: inline-block;
          margin-top: 10px;
          padding: 10px 15px;
          background: #000;
          color: #fff;
          border: none;
          cursor: pointer;
          width: 100%;
        }

        .cart-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}