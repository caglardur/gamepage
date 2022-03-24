import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"

interface filterState {
  value: {
    year: number[]
    category: string[]
  }
}

interface filterPayload {
  year: number[]
  category: string[]
}

const thisYear = Number(new Date().getFullYear())

const initialState: filterState = {
  value: {
    year: [1981, thisYear],
    category: []
  }
}

export const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<filterPayload>) => {
      state.value = action.payload
    }
  }
})

export const { setFilter } = filterReducer.actions

export const selectFilter = (state: RootState) => state.filter.value

export default filterReducer.reducer
