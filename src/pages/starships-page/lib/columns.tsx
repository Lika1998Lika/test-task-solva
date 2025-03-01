import { GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

// name: string;
// consumables: string;
// length: number | null;
// manufacturer: string;
// model: string;
// passengers: number | null;

export const columns: GridColDef[] = [
  {
    field:
      'name',
    headerName: 'Название',
    flex: 1,
    renderCell(params) {
      return <Link to={params.row.id}>{params.row.name}</Link>
    },
  },
  { field: 'model', headerName: 'Модель', flex: 1 },
  { field: 'consumables', headerName: 'Pасходные материалы', flex: 1 },
  { field: 'crew', headerName: 'Экипаж', flex: 1 },
  { field: 'length', headerName: 'Длина', flex: 1 },
];