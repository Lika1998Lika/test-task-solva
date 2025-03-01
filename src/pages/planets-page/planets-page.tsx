import { Alert } from "@mui/material";
import { useGetPlanetsQuery } from "../../entities/planets/api/service";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./lib/columns";

export function PlanetsPage() {
  const { data, isLoading, error } = useGetPlanetsQuery('');
  if (error) {
    return <Alert>Сетевая ошибка</Alert>
  };

  return (
    <div>
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
};