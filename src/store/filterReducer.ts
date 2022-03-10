import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"

interface filterState {
  value: string[]
}

const initialState: filterState = {
  value: []
}

export const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string[]>) => {
      state.value = action.payload
    }
  }
})

export const { setFilter } = filterReducer.actions

export const selectFilter = (state: RootState) => state.filter.value

export default filterReducer.reducer
