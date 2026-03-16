export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Our Latest Collection</h1>
          <p>Shop the newest trends with the best prices.</p>
          <button className="hero-btn">Shop Now</button>
        </div>
      </section>

      <style>{`
        .hero{
  height:500px;
  background:
  linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
  url("https://cdn.pixabay.com/photo/2019/10/26/11/01/evening-4579176_1280.jpg")
  center/cover no-repeat;
  display:flex;
  align-items:center;
}

        .hero-content{
          max-width:1200px;
          margin:auto;
          padding:40px;
          color:#fff;
        }

        .hero-content h1{
          font-size:48px;
          margin-bottom:10px;
        }

        .hero-content p{
          font-size:18px;
          margin-bottom:20px;
        }

        .hero-btn{
          padding:12px 25px;
          background:#000;
          color:#fff;
          border:none;
          cursor:pointer;
          font-size:16px;
        }

        .hero-btn:hover{
          background:#333;
        }
      `}</style>
    </>
  );
}