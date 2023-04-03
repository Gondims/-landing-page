import Image from 'next/image'
import classNames from 'classnames'

type Props = {
  imgSrc: string
  cardTitle: string
  cardText: string
  size: string
  color: string
}

export default function CompCard ({imgSrc, cardTitle, cardText,  size, color,}: Props ) {
  const classes = classNames(
    'flex flex-col rounded-2xl p-[33px] w-[27vw] min-h-[202px] text-white hover:bg-[#262626]',
    {
      'bg-blueGray-700 active:bg-blueGray-600 bg-blue-500': color === 'primaryy',
      'bg-gray-500 text-white hover:bg-[#262626]': color === 'secondary',
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
      <p className='text-[#A3A3A3]'>{cardText}</p>
    </li>
  )
}