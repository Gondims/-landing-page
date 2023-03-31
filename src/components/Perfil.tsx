import Image from "next/image";

export default function SectionPerfil() {
    return (
      <div className="flex h-[43rem] items-center ml-[32px] lg:container lg:mx-auto">
        <div className="flex-col w-[36rem] ml-[30px]">
          <div>
            <h1 className="text-[40px] mb-2">
              Invista em sua saúde <br/> começando pelo que<br/> você come
            </h1>
          </div>
          <p className="text-[18px] leading-8 text-justify">
            Não há dúvida de que a nutrição é fundamental para uma boa
            saúde. Com nosso aplicativo de contagem de calorias e nutrição,
            você pode controlar o que come, monitorar sua ingestão diária de
            nutrientes e aprender mais sobre como fazer escolhas
            alimentares saudáveis.
          </p>
          <button className="rounded-md text-white h-10 bg-[#262626] w-[7.5rem] font-bold mt-6">VEJA MAIS!</button>
        </div>
        <div className="absolute right-0 top-[84px]">
          <Image 
          src="/mask-group-home.svg"  
           height={900}
            width={900} 
            alt={""}
          />
        </div>
        <div className="absolute right-[30px] top-[12px]">
            <Image 
             src="/pedro2mask-group.svg"  
             height={950}
              width={950} 
              alt={""}
            />
        </div>
      </div>
    );
  }
  