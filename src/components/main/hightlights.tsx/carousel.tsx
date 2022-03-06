import React from "react"
import { Carousel as Carousel1 } from "react-bootstrap"

import SingleCarouse from "./singleCarousel"

import { DUMMYH } from "../../../DUMMY"

const Carousel = () => {
  return (
    <Carousel1>
      {DUMMYH.map((game, index) => {
        return (
          <Carousel1.Item className="carousel-item" key={index}>
            <SingleCarouse game={game} />
          </Carousel1.Item>
        )
      })}
    </Carousel1>
  )
}

export default Carousel
