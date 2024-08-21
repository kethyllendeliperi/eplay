import { Image, Prices, Title } from './styles'
import Tag from '../Tag'
import Button from '../Button'

import { formatPrice } from '../ProductsList'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{formatPrice(game.prices?.old)}</span> <br />
            por apenas {formatPrice(game.prices?.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique para aproveitar a oferta!"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
