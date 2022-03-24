import React from "react"
import { Range } from "react-range"
import { useAppSelector, useAppDispatch } from "../../../store/hook"

import { setFilter } from "../../../store/filterReducer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

const Filter: React.FC<{ categories: string[] }> = ({ categories }) => {
  const favCat = useAppSelector(state => state.filter.value.category)
  const selectYear = useAppSelector(state => state.filter.value.year)
  const dispatch = useAppDispatch()

  const favCatHandler = (cat: string) => {
    if (!favCat.includes(cat)) {
      dispatch(setFilter({ year: selectYear, category: [...favCat, cat] }))
    } else {
      let newFavCat: string[] = []
      favCat.map(item => {
        if (item !== cat) {
          return newFavCat.push(item)
        } else {
          return null
        }
      })
      dispatch(setFilter({ year: selectYear, category: newFavCat }))
    }
  }

  const thisYear = Number(new Date().getFullYear())

  return (
    <div className="col">
      <div className="col mt-2">
        <div className="col">Release Date</div>
        <div className="col py-3">
          <Range
            step={1}
            min={1981}
            max={thisYear}
            values={selectYear}
            onChange={e => dispatch(setFilter({ year: [...e], category: favCat }))}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "100%",
                  backgroundColor: "#aaa",
                  borderRadius: "3px"
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "16px",
                  width: "16px",
                  backgroundColor: "#333",
                  borderRadius: "8px"
                }}
              />
            )}
          />
        </div>
        <div className="col">
          <div className="row align-items-center">
            <div className="col">
              <input className="form-control shadow-sm" value={selectYear[0]} onChange={e => dispatch(setFilter({ year: [Number(e.target.value), selectYear[1]], category: favCat }))} style={{ textAlign: "center" }} />
            </div>
            <div className="col-auto">-</div>
            <div className="col">
              <input className="form-control shadow-sm" value={selectYear[1]} onChange={e => dispatch(setFilter({ year: [selectYear[0], Number(e.target.value)], category: favCat }))} style={{ textAlign: "center" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="col mt-2">
        <div className="col">Genre</div>
        <div className="col px-2">
          <div className="row">
            {categories.map((cat, index) => (
              <div role="button" className={favCat.includes(cat) ? "col-auto px-2 py-1 border rounded m-1 shadow-sm bg-success border-success text-light" : "col-auto px-2 py-1 border rounded m-1 shadow-sm bg-light"} key={index} onClick={() => favCatHandler(cat)}>
                {cat}
              </div>
            ))}
            {favCat.length > 1 && (
              <div role="button" className="col-auto px-2 py-1 border rounded m-1 shadow-sm bg-danger border-danger text-light" onClick={() => dispatch(setFilter({ year: selectYear, category: [] }))}>
                <FontAwesomeIcon icon={faCircleXmark} style={{ marginRight: "4px" }} /> Clear All
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
