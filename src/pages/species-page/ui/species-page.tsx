import { Alert } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetSpeciesQuery } from "../../../entities/species/api/service";
import { columns } from "../lib/columns";
import { useState } from "react";
import { useRowCount } from "../../../shared/lib/use-row-count";

export function SpeciesPage() {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  const { data, isLoading, error, isFetching } = useGetSpeciesQuery(paginationModel.page);

  const rowCount = useRowCount(data?.count);

  if (error) {
    return <Alert color="error">Сетевая ошибка</Alert>
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: "80%" }}>
      <DataGrid
        rows={data?.results}
        rowCount={rowCount}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[10]}
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
}