import Tag from '../Tag'

import { Card, Description, Infos, Title } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 90) + '...'
    }
    return description
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((infos) => (
          <Tag key={infos}>{infos}</Tag>
        ))}
      </Infos>
      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{getDescription(description)}</Description>
    </Card>
  )
}

export default Product
