import React from "react"

import { Highlight } from "../../../Interfaces"

interface Props {
  game: Highlight
}

const SingleCarouse = ({ game }: Props) => {
  return (
    <div className="shadoww" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(255,0,0,0))" }}>
      <img src={game.screenshots[0].image} className="d-block w-100" alt={game.title} style={{ position: "relative", zIndex: "-2" }} />
      <div className="carousel-caption d-none d-md-block fw-bold">
        <div className="row">
          <div className="col">
            <div className="col fw-bold fs-2">{game.title}</div>
            <p className="mb-0" style={{ fontSize: "16px" }}>
              {game.short_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCarouse
