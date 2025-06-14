import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/HomePageSections/Header/Header'
import About from '../../components/HomePageSections/About/About'
import ProjectCardView from '../../components/ProjectCardView/ProjectCardView';


export default function HomePage() {
  return (
    <>
    <Header/>
    <About/>
    <ProjectCardView/>
   
    </>
  )
}
