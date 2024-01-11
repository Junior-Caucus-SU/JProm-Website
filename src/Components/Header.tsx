import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-between items-center m-6">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/tickets">Tickets</Link>
            <Link href="/details">Details</Link>
        </div>
    );
}