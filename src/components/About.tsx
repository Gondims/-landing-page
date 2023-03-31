
import Image from "next/image";
import ThreeButtons from "./micro-components/ThreeButtons ";


export default function SectionAbout() {

  return (
    <div className="relative bg-[#171717] flex h-[64rem]">
      <div className="flex-col h-[] ml-[16px] my-[128px] ">
        <div>
          <h1 className="text-[40px] text-white mb-2 whitespace-nowrap">
            As ferramentas que você precisa para alcançar suas metas de nutrição
          </h1>
          <p className="text-[18px] text-[#A3A3A3] leading-8 text-justify w-[90%]">
            Quando se trata de nutrição, estabelecer metas realistas e alcançá-las pode ser um desafio. Mas com nosso aplicativo
            de contagem de calorias e nutrição, você tem as ferramentas necessárias para ajudá-lo(a) a alcançar suas metas de
            saúde e bem-estar
          </p>
        </div>
        <div className="flex justify-center leticia items-center leticia justify-around mt-[80px]">
          <ThreeButtons 
            contents={[
              { imageUrl: "/pedro2mask-group.svg" },
              { imageUrl: "/mask-group-home.svg" },
              { imageUrl: "/pedro2mask-group.svg" },
            ]}
          />
        </div>



        {/* 
        <div className="flex justify-center items-center justify-around mt-[80px]">
          <div>
          <Image 
             src="/circulo-svg.svg"  
             height={550}
              width={550} 
              alt={""}
            />
          </div>
          <div>
            <div>
              card 1
            </div>
            <div>
              card 2
            </div>
            <div>
              card3
            </div>
          </div>
        </div> */}

      </div>
    </div>
  )
}