import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={className}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-para">{description}</p>
      <img src={imgUrl} className="card-img" alt={title} />
    </li>
  )
}

export default CardItem
