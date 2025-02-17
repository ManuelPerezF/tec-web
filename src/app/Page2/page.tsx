import Image from "next/image";
  import Link from "next/link";
import Rectangle from '../components/Rectangle';

export default function Page2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <Rectangle color ='green'/>
      <Link href="/" className="text-blue-700 hover:underline font-bold">
        Go to Home
      </Link>
      <Link href = "/page3" className = "text-green-700 hover:underline font-bold">
        Go to Page 3
      </Link>
    </div>
  );
}