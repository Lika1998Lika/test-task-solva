import { Alert } from "@mui/material";
import { useGetSpeciesQuery } from "../../entities/species/api/service"
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./lib/columns";

export function SpeciesPage() {
  const { data, isLoading, error } = useGetSpeciesQuery('');

  if (error) {
    return <Alert>Сетевая ошибка</Alert>
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <DataGrid
        rows={data?.results}
        onRowClick={(row) => { console.log(row.id) }}

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