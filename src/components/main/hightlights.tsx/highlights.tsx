import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHighlighter } from "@fortawesome/free-solid-svg-icons"

import Carousel from "./carousel"
import SingleHighlights from "./singleHighlights"

import { Game } from "../../../Interfaces"

const Highlights: React.FC<{ games: Game[] }> = ({ games }) => {

  return (
    <div className="container-fluid my-3">
      <div className="col fw-bold border-bottom pb-2 border-secondary">
        <FontAwesomeIcon icon={faHighlighter} style={{ marginRight: "8px" }} />
        Highlights
      </div>

      <div className="col mt-2">
        <Carousel />
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3 mt-2">
          <SingleHighlights game={games[Math.floor(Math.random() * games.length)]} />
        </div>
        <div className="col-md-6 col-lg-3 mt-2">
          <SingleHighlights game={games[Math.floor(Math.random() * games.length)]} />
        </div>
        <div className="col-md-6 col-lg-3 mt-2">
          <SingleHighlights game={games[Math.floor(Math.random() * games.length)]} />
        </div>
        <div className="col-md-6 col-lg-3 mt-2">
          <SingleHighlights game={games[Math.floor(Math.random() * games.length)]} />
        </div>
      </div>
    </div>
  )
}

export default Highlights
