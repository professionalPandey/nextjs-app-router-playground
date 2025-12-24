import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>Server Component by default</p>

      <Link href='/products'>Go to Products</Link>
    </div>
  );
}
