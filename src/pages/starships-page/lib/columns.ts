import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: 'name', headerName: 'Название', flex: 1 },
  { field: 'model', headerName: 'Модель', flex: 1 },
  { field: 'manufacturer', headerName: 'Производитель', flex: 1 },
  { field: 'crew', headerName: 'Экипаж', flex: 1 },
  { field: 'length', headerName: 'Длина', flex: 1 },
];