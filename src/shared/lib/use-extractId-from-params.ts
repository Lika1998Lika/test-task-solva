import { useParams } from "react-router-dom";

export const useExtractIdFromParams = () => {
  const { id } = useParams();
  if (!id) {
    throw new Error('ID is not defined')
  };

  return id;
};