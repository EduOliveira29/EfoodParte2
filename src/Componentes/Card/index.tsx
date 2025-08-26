import { JSX } from 'react'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default Card
