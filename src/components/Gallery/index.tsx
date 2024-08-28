import { useState } from 'react'

import Section from '../Section'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'

import * as S from './styles'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img src={getMediaIcon(media)} alt="Clique para maxizimar" />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Ícone de fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} />
          )}
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </S.Modal>
    </>
  )
}

export default Gallery
