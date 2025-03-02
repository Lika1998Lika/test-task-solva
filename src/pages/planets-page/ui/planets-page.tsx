import { Alert } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetPlanetsQuery } from "../../../entities/planets/api/service";
import { columns } from "../lib/columns";
import { useMemo, useRef, useState } from "react";

export function PlanetsPage() {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  const { data, isLoading, error } = useGetPlanetsQuery(paginationModel.page);

  if (error) {
    return <Alert color="error">Сетевая ошибка</Alert>
  };

  const rowCountRef = useRef(data?.count || 0);

  const rowCount = useMemo(() => {
    if (data?.count !== undefined) {
      rowCountRef.current = data.count
    }
    return rowCountRef.current
  }, [data?.count])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <DataGrid
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[10]}
        onRowCountChange={(count) => console.log(count)}
        rowCount={rowCount}

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
};