const PRODUCTS = [
  { id: '1', name: 'Helmet', price: 500 },
  { id: '2', name: 'Gloves', price: 300 },
];

export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>

      <ul>
        {PRODUCTS.map((p) => (
          <li key={p.id}>
            <a href={`/products/${p.id}`}>{p.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
