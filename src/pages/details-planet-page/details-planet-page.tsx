import { useParams } from "react-router-dom"
import { useGetPlanetByIdQuery } from "../../entities/planets/api/service"

export function DetailsPlanetPage() {
  const { id } = useParams();

  if (!id) {
    throw new Error('Planet id is undefind')
  };

  const { data } = useGetPlanetByIdQuery(id);

  return (
    <div>{data?.name}</div>
  )
}

