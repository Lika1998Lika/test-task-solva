import { FC } from "react"
import { PlanetsType } from "../../../entities/planets"

type PropsListPlanets = {
  planet: PlanetsType[]
}
export const ListPlanets: FC<PropsListPlanets> = ({ planet }) => {
  return (
    <li>
      {planet.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <p>{item.terrain}</p>
          </div>
        )
      })}
    </li>
  )
}