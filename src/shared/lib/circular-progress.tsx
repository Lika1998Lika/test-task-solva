import { Stack, CircularProgress } from "@mui/material"

export function CircularProgressLoading() {
  return (
    <Stack alignItems="center" justifyContent="center" height="100%">
      <CircularProgress
        size="lg"
        value={25}
        color="primary"
        sx={{ width: '50px' }}
      />
    </Stack>
  )
}