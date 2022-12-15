import Link from 'next/link'

export default function header() {
    return (
        <header className="bg-slate-200"> 
        <div className = 'xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:flex-row sm:justify-between text-center py-3'>
        {/* Login */}
          <div className = 'md:flex-none w-96 order-3 sm:order-3 flex justify-center py-4 sm:py-0'>
            <input type="text" className = "input-text" placeholder="Search..."/>
          </div>
          {/* Center */}
          <div className="shrink w-80 sm:order-2">
            <Link legacyBehavior href={"/"}><a className ="font-serif hover:font-mono font-black uppercase text-4xl"> Aloe Vera</a></Link>
          </div>
          <div className = "w-96 order-1 flex justify-center">
          </div>
        </div>
      </header>
    )
}