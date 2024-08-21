import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'
import { useEffect, useState } from 'react'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGeRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGeRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="black"
          id="rpg"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
