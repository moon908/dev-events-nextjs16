"use client";

import Image from "next/image"

const ExploreBtn = () => {
  return (
    <button className="absolute flex items-center" type="button" id="explore-btn" onClick={() => console.log("click")}>
        <a href="#events">
            Explore Events
            <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24}/>
        </a>
    </button>
  )
}

export default ExploreBtn