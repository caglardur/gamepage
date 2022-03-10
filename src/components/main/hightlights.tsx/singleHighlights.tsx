import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"

import { Game } from "../../../Interfaces"

const SingleHighlights: React.FC<{ game: Game }> = ({ game }) => {
  return (
    <div className="col">
      {game ? (
        <div role="button" className="card rounded-0 bg-light p-0">
          <img src={game.thumbnail} className="card-img-top rounded-0" alt={game.title} />
          <div className="card-body">
            <div className="card-title overflow-hidden" style={{ fontSize: "14px" }}>
              {game.title}
            </div>
            <div className="row align-items-center">
              <div className="col" style={{ fontSize: "12px" }}>
                {game.genre}
              </div>
              <div className="col-auto">
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  )
}

export default SingleHighlights
