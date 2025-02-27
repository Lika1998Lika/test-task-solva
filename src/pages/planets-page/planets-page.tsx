import { useGetPlanetsQuery } from "../../entities/planets/api/service"
// import { planetsApi } from "../../entities/planets/api/service"

export function PlanetsPage() {
  const { data } = useGetPlanetsQuery('planets');
  if (!data) {
    return 'error'
  }
  console.log(data)
  return (
    <>
      <ul>
        {data.results.map((planet) => {
          return (
            <li key={planet.name}>
              <p>{planet.name}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
};