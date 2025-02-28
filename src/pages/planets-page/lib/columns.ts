import { GridColDef } from "@mui/x-data-grid";

  export const columns: GridColDef[] = [
    { field: 'name', headerName: 'Название', flex: 1 },
    { field: 'diameter', headerName: 'Диаметр', flex: 1 },
    { field: 'climate', headerName: 'Климат', flex: 1 },
    { field: 'rotation_period', headerName: 'Период вращения', flex: 1 },
    { field: 'url', headerName: 'Ссылка', flex: 1 },
  ];