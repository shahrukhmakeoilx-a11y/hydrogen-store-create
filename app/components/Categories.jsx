export default function Categories() {

  const categories = [
    { name: "Men", color: "#1e3a8a" },
    { name: "Women", color: "#be185d" },
    { name: "Kids", color: "#047857" },
    { name: "Shoes", color: "#7c2d12" }
  ];

  return (
    <>
      <section className="categories">

        <h2>Shop by Category</h2>

        <div className="category-grid">
          {categories.map((cat, index) => (
            <div
              className="category-card"
              key={index}
              style={{background: cat.color}}
            >
              <div className="category-overlay">
                <h3>{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </section>

      <style>{`
        .categories{
          max-width:1200px;
          margin:60px auto;
          text-align:center;
        }

        .categories h2{
          margin-bottom:30px;
          font-size:28px;
        }

        .category-grid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:20px;
        }

        .category-card{
          height:200px;
          border-radius:10px;
          position:relative;
          overflow:hidden;
          cursor:pointer;
          transition:0.3s;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .category-card:hover{
          transform:scale(1.05);
        }

        .category-overlay{
          color:#fff;
          font-size:20px;
          font-weight:bold;
        }
      `}</style>
    </>
  );
}