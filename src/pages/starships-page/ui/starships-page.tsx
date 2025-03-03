import { Alert } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetStarshipsQuery } from "../../../entities/starships/api/service";
import { columns } from "../lib/columns";
import { useState } from "react";
import { useRowCount } from "../../../shared/lib/use-row-count";

export function StarshipsPage() {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  const { data, error, isLoading, isFetching } = useGetStarshipsQuery(paginationModel.page);

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
        pageSizeOptions={[10]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
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