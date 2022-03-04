import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBullseye, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Header: React.FC = () => {
  return (
    <div className="container-fluid p-3" style={{ color: "#CCCCCC", maxWidth: "1096px" }}>
      <div className="row align-items-center d-flex justify-content-between">
        <div className="col-auto text-light">
          <FontAwesomeIcon icon={faBullseye} style={{ fontSize: "26px" }} />
        </div>
        <div className="col-auto">
          <div className="row align-items-center">
            <div className="col-auto px-2">STORE</div>
            <div className="col-auto px-2">ABOUT</div>
            <div className="col-auto px-2">COMMUNITY</div>
            <div className="col-auto px-2">SUPPORT</div>
          </div>
        </div>
        <div className="col-auto">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
  )
}

export default Header
