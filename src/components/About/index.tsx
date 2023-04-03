
import Image from "next/image";
import ThreeButtons from "./ThreeButtons ";
import CompCard from "./cards";


export default function SectionAbout() {

  return (
    <div className="relative bg-[#171717]">
      <div className="lg:container lg:mx-auto py-[128px]">
      <div className="flex-col">
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
        <div className="flex justify-center items-center justify-around mt-[80px]">
          <div className="flex-col">
         <CompCard 
            imgSrc={"/icons/Features/modules.svg"}
            cardTitle={'Aprenda. Acompanhe. Melhore.'}
            cardText={'Com nossos cursos exclusivos ministrados por um nutricionista especializado, você pode aprender sobre nutrição e entender melhor como fazer escolhas alimentares saudáveis e personalizadas'} 
            size={"secondary"}
            color={""}        
            />
          <CompCard 
            imgSrc={"/icons/Features/classes.svg"}
            cardTitle={'Registros simplificados.'}
            cardText={'Com nosso aplicativo de contagem de calorias, você pode registrar suas refeições e obter informações nutricionais detalhadas sobre os alimentos que você consome, tudo em um só lugar. É fácil e simples acompanhar seus registros de alimentos para ajudar a alcançar suas metas de nutrição'} 
            size={"secondary"}
            color={""}        
            />
            <CompCard 
            imgSrc={"/icons/About/dieta-svg.svg"}
            cardTitle={'Personalize sua dieta.'}
            cardText={'Descubra como personalizar sua dieta de acordo com suas necessidades e objetivos de saúde. Nosso aplicativo oferece aconselhamento nutricional e cursos de dieta personalizados para ajudá-lo a atingir suas metas de saúde e nutrição.'} 
            size={"secondary"}
            color={""}        
            />
            </div>
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
    </div>
  )
}