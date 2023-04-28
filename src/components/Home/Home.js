import Slideshow from '../Slide/Slideshow'
import React from 'react'
import Welcome from '../Welcome/Welcome'
import Programme from '../Programme/Programme'
import ChurchPartenerTitle from '../ChurchPartenerTitle'
import ChurchParteners from '../ChurchParteners'
import ProgrammeTitle from '../ProgrammeTitle'
import Title from '../Title'
import Template from '../Template/Template'
import TitleResp from '../TitleResp'
import MotPasteur from '../MotPasteur/MotPasteur'
import CitationTemplate from '../Citation/CitationTemplate'


function Home() {
  return (
    <div>
      <Slideshow />
      <Welcome />
      <CitationTemplate />
      <ProgrammeTitle/>
      <Programme />
      <Title/>
      <Template />
      <TitleResp />
      <MotPasteur />
      <ChurchPartenerTitle />
      <ChurchParteners />
    </div>
  )
}


export default Home