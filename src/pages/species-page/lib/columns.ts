import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: 'name', headerName: 'Название', flex: 1 },
  { field: 'classification', headerName: 'Классификация', flex: 1 },
  { field: 'language', headerName: 'Язык', flex: 1 },
  { field: 'designation', headerName: 'Обозначение', flex: 1 },
  { field: 'average_height', headerName: 'Средний рост', flex: 1 },
];