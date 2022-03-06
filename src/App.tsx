import React from "react"

import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

import { Game } from "./Interfaces"

import { DUMMY } from "./DUMMY"

const App: React.FC = () => {
  const [games, setGames] = React.useState<Game[]>([])
  const [categories, setCategories] = React.useState<string[]>([])

  React.useEffect(() => {
    setGames(DUMMY)
    let categoryFilter: string[] = []
    for (let i of DUMMY) {
      if (!categoryFilter.includes(i.genre)) {
        categoryFilter.push(i.genre)
      }
    }

    setCategories(categoryFilter)
  }, [])

  return (
    <div className="container-fluid px-0">
      <div className="header sticky-top">
        <Header />
      </div>
      <div className="main">
        <Main games={games} categories={categories} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
