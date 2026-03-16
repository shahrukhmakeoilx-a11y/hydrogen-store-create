export default function TopBar() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-left">
            Hotline: 1800-123-4567
          </div>

          <div className="topbar-right">
            Free Shipping on Orders ₹999+ | EN
          </div>
        </div>
      </div>

      <style>{`
        .topbar {
          background: #0b1f3a;
          color: white;
          font-size: 14px;
        }

        .topbar-container {
          max-width: 1200px;
          margin: auto;
          padding: 8px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </>
  );
}