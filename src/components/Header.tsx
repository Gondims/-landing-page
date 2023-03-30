import Link from "next/link";

export function Header() {
    return (
      <header className="flex top-0 left-80 right-80 px-8 py-3 backdrop-blur flex items-center justify-around">
       
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
            <button className="border border-cyan-800 bg-cyan-400/10 text-cyan-400 px-3 py-0.5 rounded-full text-sm font-medium hover:border-cyan-400 transition-colors">
              VEJA MAIS!
            </button>
        </div>
      </header>
    )
  }