import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCompass, faFilter, faAngleLeft, faAngleRight, faFastBackward, faFastForward } from "@fortawesome/free-solid-svg-icons"

import { Game } from "../../../Interfaces"

const List: React.FC<{ games: Game[] }> = ({ games }) => {
  const [page, setPage] = React.useState(0)
  const [totalPage, setTotalPage] = React.useState(0)
  const [shortList, setShortList] = React.useState<Game[]>([])

  React.useEffect(() => {
    setTotalPage(Math.ceil(games.length / 10))
  }, [games])

  React.useEffect(() => {
    setShortList(games.slice(page * 10, page * 10 + 10))
  }, [games, page])

  return (
    <div className="container-fluid my-3">
      <div className="row fw-bold border-bottom pb-2 border-secondary">
        <div className="col-md-12 col-lg-8">
          <FontAwesomeIcon icon={faCompass} style={{ marginRight: "8px" }} />
          Discover games
        </div>
        <div className="d-md-none d-lg-block col-md-12 col-lg-4">
          <FontAwesomeIcon icon={faFilter} style={{ marginRight: "8px" }} />
          Filter
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="col mt-2">
            <div className="list-group rounded-0 shadow-sm">
              {shortList &&
                shortList.map((game, index) => (
                  <button type="button" className="list-group-item list-group-item-action p-0 list-group-item-secondary" key={index}>
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <img src={game.thumbnail} alt={game.title} style={{ maxHeight: "80px" }} />
                      </div>
                      <div className="col">
                        <div className="col fw-bold mb-3">{game.title}</div>
                        <div className="col" style={{ fontSize: "11px" }}>
                          {game.genre}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
            </div>
          </div>
          <div className="col mt-2 d-flex justify-content-center">
            <ul className="pagination pagination-sm">
              <li role="button" className={page === 0 ? "page-item disabled p-1" : "page-item p-1"} onClick={() => (page === 0 ? null : setPage(0))}>
                <div className="page-link">
                  <FontAwesomeIcon icon={faFastBackward} />
                </div>
              </li>
              <li role="button" className={page === 0 ? "page-item disabled p-1" : "page-item p-1"} onClick={() => (page === 0 ? null : setPage(page - 1))}>
                <div className="page-link">
                  <FontAwesomeIcon icon={faAngleLeft} />
                </div>
              </li>

              <li className="page-item p-1">
                <div className="page-link">{page + 1}</div>
              </li>

              <li role="button" className={page === totalPage - 1 ? "page-item disabled p-1" : "page-item p-1"} onClick={() => (page === totalPage - 1 ? null : setPage(page + 1))}>
                <div className="page-link">
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </li>
              <li role="button" className={page === totalPage - 1 ? "page-item disabled p-1" : "page-item p-1"} onClick={() => (page === totalPage - 1 ? null : setPage(totalPage - 1))}>
                <div className="page-link">
                  <FontAwesomeIcon icon={faFastForward} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-md-none d-lg-block col-lg-4">filter</div>
      </div>
    </div>
  )
}

export default List
