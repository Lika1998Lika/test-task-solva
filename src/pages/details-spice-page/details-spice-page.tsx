import { useParams } from "react-router-dom"
import { useGetSpiceByIdQuery } from "../../entities/species/api/service";

export function DetailsSpicePage() {
  const { id } = useParams();

  if (!id) {
    throw new Error('Planet id is undefind')
  };

  const { data } = useGetSpiceByIdQuery(id);

  return (
    <div>{data?.name}</div>
  )
}