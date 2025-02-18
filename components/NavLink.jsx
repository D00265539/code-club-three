"use client";
import { useRouter, usePathname } from "next/navigation";

export default function NavLink({ link, title }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <li>
      <button
        onClick={() => router.push(link)}
        className={`border-solid border-2 px-3 py-2 rounded-md mb-2 md:mr-3 border-black bg-green-600 text-gray-50`}
        aria-current="page"
      >
        {title}
      </button>
    </li>
  );
}