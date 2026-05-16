export default function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <h2>StockFlow</h2>
        <ul>
          <li>Dashboard</li>
          <li>Products</li>
          <li>Categories</li>
        </ul>
      </aside>

      <main className="content">
        <h1>Inventory Dashboard</h1>

        <div className="cards">
          <div className="card">
            <h3>Total Products</h3>
            <p>120</p>
          </div>

          <div className="card">
            <h3>Low Stock</h3>
            <p>8</p>
          </div>

          <div className="card">
            <h3>Categories</h3>
            <p>14</p>
          </div>
        </div>
      </main>
    </div>
  )
}
