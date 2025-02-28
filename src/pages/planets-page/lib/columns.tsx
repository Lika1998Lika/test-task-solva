import { GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export const columns: GridColDef[] = [
  {
    field: 'name', headerName: 'Название', flex: 1, renderCell(params) {
      return <Link to={params.row.id}>{params.row.name}</Link>
    },
  },
  { field: 'diameter', headerName: 'Диаметр', flex: 1 },
  { field: 'climate', headerName: 'Климат', flex: 1 },
  { field: 'rotation_period', headerName: 'Период вращения', flex: 1 },
  { field: 'url', headerName: 'Ссылка', flex: 1 },
];