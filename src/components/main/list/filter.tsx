import React from "react"
import { Range } from "react-range"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

const Filter: React.FC<{ categories: string[] }> = ({ categories }) => {
  const [values, setValues] = React.useState<number[]>([1981, 2022])
  const [favCat, setFavCat] = React.useState<string[]>([])

  const favCatHandler = (cat: string) => {
    if (!favCat.includes(cat)) {
      setFavCat([...favCat, cat])
    } else {
      let newFavCat: string[] = []
      favCat.map(item => {
        if (item !== cat) {
          return newFavCat.push(item)
        } else {
          return null
        }
      })
      setFavCat(newFavCat)
    }
  }
  return (
    <div className="col">
      <div className="col mt-2">
        <div className="col">Release Date</div>
        <div className="col py-3">
          <Range
            step={1}
            min={1981}
            max={2022}
            values={values}
            onChange={e => setValues(e)}
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
              <input className="form-control shadow-sm" value={values[0]} onChange={e => setValues([Number(e.target.value), values[1]])} style={{ textAlign: "center" }} />
            </div>
            <div className="col-auto">-</div>
            <div className="col">
              <input className="form-control shadow-sm" value={values[1]} onChange={e => setValues([values[0], Number(e.target.value)])} style={{ textAlign: "center" }} />
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
              <div role="button" className="col-auto px-2 py-1 border rounded m-1 shadow-sm bg-danger text-light" onClick={() => setFavCat([])}>
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
