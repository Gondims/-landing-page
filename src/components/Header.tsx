import Link from "next/link";

export function Header() {
    return (
      <header className="flex top-0 left-120 right-120 px-8 py-3 backdrop-blur flex items-center justify-between">
       
        <div className="flex items-center">
          <nav className="text-sm flex items-center gap-6">
            <Link className="text-zinc-400 hover:text-zinc-100 transition-colors" href="">Inicio</Link>
            <Link className="text-zinc-400 hover:text-zinc-100 transition-colors" href="">Pricing</Link>
            <Link className="text-zinc-400 hover:text-zinc-100 transition-colors" href="">Avaliações</Link>
            <Link className="text-zinc-400 hover:text-zinc-100 transition-colors" href="">FAQs</Link>
          </nav>
        </div>
        <div className="flex items-center border-l border-white/10 ">
            <div>LOGO</div>
        </div>
        <div className="flex items-center border-l border-white/10 ">
        <button className="rounded-md text-white h-10 bg-[#262626] w-[7.5rem]">VEJA MAIS!</button>
        </div>
      </header>
    )
  }