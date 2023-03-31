import Image from 'next/image'
import CompFeaturesCard from './CompFeaturesCard'



export default function SectionFeatures() {


  return(
    <section className='flex flex-col '>
      <h2 className='text-3xl mb-2 text-center mt-[172px]'>O que vou encontrar na <span className='text-[#C39711]'>Nutrição de Resultados</span>?</h2>
      <p className='text-center max-w-2xl m-auto text-lg mb-[44px]'>Tá afim de dar aquela acelerada com o objetivo do corpo dos sonhos? Pra isso, você precisa estar bem consciente e informada de cada movimento necessário para alcançar seu objetivo.</p>
    
      <ul className='flex justify-center gap-[1rem] mb-[260px]'>
        <CompFeaturesCard 
          imgSrc={"/icons/Features/modules.svg"}
          cardTitle={'Módulos'}
          cardText={'Um módulo inteiro para te ensinar a construir a sua própria dieta.'}
        />
        <CompFeaturesCard 
          imgSrc={"/icons/Features/classes.svg"}
          cardTitle={'Nossas Aulas'}
          cardText={'Aulas de mentalidade para identificar suas dificuldades e aprender a superá-las.'}
        />
        <CompFeaturesCard 
          imgSrc={"/icons/Features/training.svg"}
          cardTitle={'Treinos'}
          cardText={'Como treinar corretamente, e como extrair o máximo de cada exercícios.'}
        />
        <CompFeaturesCard 
          imgSrc={"/icons/Features/health.svg"}
          cardTitle={'Saúde'}
          cardText={'Problemas Intestinais, diabetes, hipertensão e como superar ou nunca sofrer com esse  problema.'}
        />
      </ul>
    </section>
  )
}