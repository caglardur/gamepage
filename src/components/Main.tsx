import React from "react"

import { Game } from "../Interfaces"

import Highlights from "./main/hightlights.tsx/highlights"
import List from "./main/list/list"

const Main: React.FC<{ games: Game[] }> = ({ games }) => {
  return (
    <div className="container" style={{ maxWidth: "1096px" }}>
      <Highlights games={games} />

      <List games={games} />
    </div>
  )
}

export default Main
