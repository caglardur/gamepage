import React from "react"

import { Game } from "../Interfaces"

import Highlights from "./main/hightlights.tsx/highlights"
import List from "./main/list/list"

const Main: React.FC<{ games: Game[]; categories: string[] }> = ({ games, categories }) => {
  return (
    <div className="container" style={{ maxWidth: "1096px" }}>
      <Highlights games={games} />
      <List games={games} categories={categories} />
    </div>
  )
}

export default Main
