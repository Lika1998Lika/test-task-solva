import { Alert } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetStarshipsQuery } from "../../../entities/starships/api/service";
import { columns } from "../lib/columns";
import { useState } from "react";

export function StarshipsPage() {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  const { data, error, isLoading } = useGetStarshipsQuery(paginationModel.page);

  if (error) {
    return <Alert color="error">Сетевая ошибка</Alert>
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <DataGrid
        rows={data?.results}
        rowCount={data?.count}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
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