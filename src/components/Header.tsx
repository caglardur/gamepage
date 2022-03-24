import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBullseye, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons"

import Search from "./header/search"

const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="container p-3" style={{ color: "#CCCCCC", maxWidth: "1096px" }}>
      <div className="row align-items-center d-flex justify-content-between">
        <div role="button" className="col-auto text-light">
          <FontAwesomeIcon icon={faBullseye} style={{ fontSize: "26px" }} />
        </div>
        <div className="col">
          {showSearch ? (
            <div className="row align-items-center d-flex justify-content-center">
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
          ) : (
            <div className="row align-items-center d-flex justify-content-center">
              <div role="button" className="col-auto px-2 hoverable">
                STORE
              </div>
              <div role="button" className="col-auto px-2 hoverable">
                ABOUT
              </div>
              <div role="button" className="col-auto px-2 hoverable">
                COMMUNITY
              </div>
              <div role="button" className="col-auto px-2 hoverable">
                SUPPORT
              </div>
            </div>
          )}
        </div>
        <div role="button" className="col-auto hoverable" onClick={() => setShowSearch(!showSearch)}>
          <FontAwesomeIcon icon={showSearch ? faXmark : faMagnifyingGlass} />
        </div>
      </div>
    </div>
  )
}

export default Header
