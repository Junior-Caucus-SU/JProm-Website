import Link from 'next/link';
export default function Header() {
    return (
        <div className="centered">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/details">Details</Link>
        <Link href="/tickets">Tickets</Link>
      </div>
    );
}