import React from 'react'
import HeroCard from '../HeroCard'
import BackToTopButton from '../BackToTopButton'
import AboutUsCard from '../AboutUsCard'

function MainPage() {
  return (
    <div className='m-8 px-8 mt-32'>
        <HeroCard />
        <BackToTopButton />
        <AboutUsCard />
    </div>
  )
}

export default MainPage