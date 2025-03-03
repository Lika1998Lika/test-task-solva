import { Alert } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetPlanetsQuery } from "../../../entities/planets/api/service";
import { columns } from "../lib/columns";
import { useState } from "react";
import { useRowCount } from "../../../shared/lib/use-row-count";

export function PlanetsPage() {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  const { data, isLoading, error, isFetching } = useGetPlanetsQuery(paginationModel.page);

  const rowCount = useRowCount(data?.count);

  if (error) {
    return <Alert color="error">Сетевая ошибка</Alert>
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: "80%" }}>
      <DataGrid
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[10]}
        onRowCountChange={(count) => console.log(count)}
        rowCount={rowCount}

        rows={data?.results}
        columns={columns}
        loading={isLoading || isFetching}
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