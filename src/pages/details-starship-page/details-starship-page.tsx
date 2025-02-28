import { useParams } from "react-router-dom"
import { useGetStarshipByIdQuery } from "../../entities/starships/api/service";

export function DetailsStarshipPage() {
  const { id } = useParams();

  if (!id) {
    throw new Error('Planet id is undefind')
  };

  const { data } = useGetStarshipByIdQuery(id);

  return (
    <div>{data?.name}</div>
  )
}