import { configureStore } from "@reduxjs/toolkit"
import filterReducer from "./filterReducer"

export const store = configureStore({
  reducer: {
    filter: filterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
