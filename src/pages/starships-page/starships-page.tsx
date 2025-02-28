import { Alert } from "@mui/material";
import { useGetStarshipsQuery } from "../../entities/starships/api/service"
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./lib/columns";

export function StarshipsPage() {
  const { data, error, isLoading } = useGetStarshipsQuery('');

  if (error) {
    return <Alert>Сетевая ошибка</Alert>
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <DataGrid
        rows={data?.results}
        columns={columns}
        loading={isLoading}
        slotProps={{
          loadingOverlay: {
            variant: 'skeleton',
            noRowsVariant: 'skeleton',
          },
        }}
      />
    </div>
  )
}