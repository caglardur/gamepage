import React from "react"
import { Carousel as Carousel1 } from "react-bootstrap"

import SingleCarouse from "./singleCarousel"

import { Highlight } from "../../../Interfaces"

const DUMMYH: Highlight[] = [
  {
    id: 295,
    title: "Florensia",
    thumbnail: "https://www.freetogame.com/g/295/thumbnail.jpg",
    status: "Live",
    short_description: "A free to play fantasy MMORPG with legendary worlds ashore and at \r\nsea.",
    description: "Florensia is a free to play fantasy MMORPG developed by NETTS. Journey out into the high seas and experience the beautiful environment while defeating monsters in the water and on land. Take on tons of quests and customize your ship and character as you gain experience in the game.\r\n\r\nStart off the game by choosing one of the multiple different classes the game offers, 12 playable classes: 4 Basic classes (Mercenary, Explorer, Noble and Saint). After you have chosen a class you get to build your ship that you will be sailing the open sea with. Choose from five different pre-built ships that you can choose to customize later on as you level up.\r\n\r\nAs you are exploring the ocean you will uncover secret locations and strange creatures that you can defeat to earn valuable treasures and experience. Keep an eye out for other players on the sea as you go, some may be friendly and help you find some of the secret areas, while others may be enemies and attempt to sink your ship and make off with your booty.\r\n\r\nFlorensia is a free to play fantasy MMORPG that you explore the ocean and islands in. Journey alone or find friends to complete quests with and find massive amounts of treasure and secrets to continuously level up your character and your ship.",
    game_url: "https://www.freetogame.com/open/florensia",
    genre: "MMORPG",
    platform: "Windows",
    publisher: "Netts Corporation",
    developer: "Netts Corporation",
    release_date: "2008-10-15",
    freetogame_profile_url: "https://www.freetogame.com/florensia",
    minimum_system_requirements: {
      os: "Windows 2000/XP",
      processor: "Pentium3 1.3GHz",
      memory: "512 MB",
      graphics: "DirectX 9+",
      storage: "4GB"
    },
    screenshots: [
      {
        id: 776,
        image: "https://www.freetogame.com/g/295/florensia-1.jpg"
      },
      {
        id: 777,
        image: "https://www.freetogame.com/g/295/florensia-2.jpg"
      },
      {
        id: 778,
        image: "https://www.freetogame.com/g/295/florensia-3.jpg"
      }
    ]
  },
  {
    id: 235,
    title: "Star Conflict",
    thumbnail: "https://www.freetogame.com/g/235/thumbnail.jpg",
    status: "Live",
    short_description: "A free to play action-packed MMO space simulation game.",
    description: "Gaijin Entertainment, the company behind War Thunder, takes the combat into space in its free-to-play space MMO game Star Conflict. Choose from multiple space craft units and man your battle stations as you fly around in nicely detailed space environments and try to take down your opponents using a variety of special abilities and weaponry.\r\n\r\nFollowing a similar progression tree as War Thunder, Star Conflict focuses on tactical based third person shooting and PvP. After each match, players are awarded credits and experience and can use both to upgrade and research every aspect of their fleet from weapons to actual space craft. After researching and upgrading, players can swap out parts on their spacecraft adding more armor to lighter attack ships, more firepower to smaller ships, or generally customize their favorite ship to be a freak of space nature on the battlefield.\r\n\r\nWhile Star Conflict is primarily a team based PvP game, players do have the option of taking on quests (also available in PvP play as secondary objectives) and some PvE content geared towards both group and solo play. Since players will be joining one of three factions at the start of their space career, each faction has different objectives based on their faction’s needs. Certain spacecraft are even faction specific.\r\n\r\nWith detailed environments, a deep progression system, a multitude of spacecraft to choose from, and a cash shop similar to War Thunder’s, Star Conflict provides players with a top notch space combat simulator and encourages players to form up into alliances and create corporations that can control sections of the galaxy through combat domination.\r\n\r\nStar Conflict is available for PC, Mac, and Linux platforms.",
    game_url: "https://www.freetogame.com/open/star-conflict",
    genre: "Shooter",
    platform: "Windows",
    publisher: "Gaijin Entertainment",
    developer: "Star Gem Inc.",
    release_date: "2013-02-28",
    freetogame_profile_url: "https://www.freetogame.com/star-conflict",
    minimum_system_requirements: {
      os: "Windows XP ",
      processor: "2.0 GHz, Intel Pentium 4 / AMD Athlon II",
      memory: "1 GB RAM ",
      graphics: "512 MB, NVidia / AMD Radeon / Intel (HD 3000, HD 4000) with support for Pixel Shader 3.0 (AMD Radeon X1000 not supported)",
      storage: "5 GB free space"
    },
    screenshots: [
      {
        id: 608,
        image: "https://www.freetogame.com/g/235/Star-Conflict-1.jpg"
      },
      {
        id: 609,
        image: "https://www.freetogame.com/g/235/Star-Conflict-2.jpg"
      },
      {
        id: 610,
        image: "https://www.freetogame.com/g/235/Star-Conflict-3.jpg"
      },
      {
        id: 611,
        image: "https://www.freetogame.com/g/235/Star-Conflict-4.jpg"
      }
    ]
  },
  {
    id: 452,
    title: "Call Of Duty: Warzone",
    thumbnail: "https://www.freetogame.com/g/452/thumbnail.jpg",
    status: "Live",
    short_description: "A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.",
    description: "Call of Duty: Warzone is both a standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare. Warzone features two modes — the general 150-player battle royle, and “Plunder”. The latter mode is described as a “race to deposit the most Cash”. In both modes players can both earn and loot cash to be used when purchasing in-match equipment, field upgrades, and more. Both cash and XP are earned in a variety of ways, including completing contracts.\r\n\r\nAn interesting feature of the game is one that allows players who have been killed in a match to rejoin it by winning a 1v1 match against other felled players in the Gulag.\r\n\r\nOf course, being a battle royale, the game does offer a battle pass. The pass offers players new weapons, playable characters, Call of Duty points, blueprints, and more. Players can also earn plenty of new items by completing objectives offered with the pass.",
    game_url: "https://www.freetogame.com/open/call-of-duty-warzone",
    genre: "Shooter",
    platform: "Windows",
    publisher: "Activision",
    developer: "Infinity Ward",
    release_date: "2020-03-10",
    freetogame_profile_url: "https://www.freetogame.com/call-of-duty-warzone",
    minimum_system_requirements: {
      os: "Windows 7 64-Bit (SP1) or Windows 10 64-Bit",
      processor: "Intel Core i3-4340 or AMD FX-6300",
      memory: "8GB RAM",
      graphics: "NVIDIA GeForce GTX 670 / GeForce GTX 1650 or Radeon HD 7950",
      storage: "175GB HD space"
    },
    screenshots: [
      {
        id: 1124,
        image: "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-1.jpg"
      },
      {
        id: 1125,
        image: "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-2.jpg"
      },
      {
        id: 1126,
        image: "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-3.jpg"
      },
      {
        id: 1127,
        image: "https://www.freetogame.com/g/452/Call-of-Duty-Warzone-4.jpg"
      }
    ]
  }
]

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
