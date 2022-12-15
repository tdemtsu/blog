import Image from "next/image"
import Link from "next/link"

export default function author() {
    return(
        <div className="author flex py-5">
            <Image alt="" src={"/images/author/author1.jpg"} className="rounded-full" width={80} height={80}></Image>
            <div className="flex flex-col justify-center px-4">
                <Link legacyBehavior href={"/"}><a className="text-md font-bold text-gray-800 hover:text-gray-600" href="">Jenny Holder</a></Link>
                <span className="text-sm text-gray-500">CEO and Founder</span>
            </div>
        </div>
    )
}