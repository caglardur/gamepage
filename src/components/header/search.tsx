import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Search: React.FC<{ searchTerm: string; setSearchTerm: React.Dispatch<React.SetStateAction<string>> }> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="position-relative" style={{ maxWidth: "250px" }}>
      <input type="text" className="form-control bg-transparent border-0 border-bottom border-secondary rounded-0 text-light p-0 m-0 searchBar ms-3" autoFocus={true} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <div className="position-absolute top-50 start-0 translate-middle">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  )
}

export default Search
