import Link from "next/link";
import Gato from '../components/Gato';

export default function page3() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Gato />
            <Link href="/" className="text-blue-700 hover:underline font-bold">
                Go to Home
            </Link>
            <Link href="/Page2" className="text-green-700 hover:underline font-bold">
                Go to Page 2
            </Link>
        </div>
    );
}