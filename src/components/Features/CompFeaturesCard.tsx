import Image from 'next/image'
import classNames from 'classnames'

type Props = {
  imgSrc: string
  cardTitle: string
  cardText: string
  size: string
  color: string
}

export default function CompFeaturesCard ({imgSrc, cardTitle, cardText,  size, color,}: Props ) {
  const classes = classNames(
    'flex flex-col border border-solid border-stone-300 rounded-2xl p-[33px] w-[20vw] min-h-[202px] transition duration-500 ease-in-out hover:shadow-md',
    {
      'bg-blueGray-700 active:bg-blueGray-600 bg-blue-500': color === 'primaryy',
      'bg-gray-500 text-white hover:bg-gray-600': color === 'secondary',
      'bg-green-500 text-white hover:bg-green-600': color === 'success',
      'bg-red-500 text-white hover:bg-red-600': color === 'danger',
      'text-sm': size === 'sm',
      'text-lg': size === 'lg',
      'text-xs': size === 'xs'
    }
  )

  return(
    <li className={classes} >
      <Image src={imgSrc}
        height={35}
        width={35} 
        alt={""}
      />
      <strong className='mb-[8px] mt-[24px]'>{cardTitle}</strong>
      <p>{cardText}</p>
    </li>
  )
}


