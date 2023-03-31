import Image from 'next/image'
export default function SectionSubscribe() {


  return (
    <section className="relative bg-[#171717] text-white h-[412px] flex flex-col items-center justify-center">
      <h1 className="text-4xl max-w-[425px] text-center">Obtenha suas <br />primeiras dicas hoje</h1>
      <p className="text-lg max-w-[425px] text-[#D4D4D4] text-center mt-[20px] mb-[36px]">
        Leva 30 segundos para se inscrever. Acesse a
        pagina e crie uma conta hoje, e de o primeiro passo
        para ter uma vida saudável
      </p>
      <button className="bg-white text-black text-base  w-[7.5rem] h-10 rounded-lg font-bold ">VEJA MAIS!</button>
      <div className='absolute'>
        <Image
          src="/Vector.svg"
          height={500}
          width={500}
          alt={""}
        />
      </div>
    </section>
  )
}