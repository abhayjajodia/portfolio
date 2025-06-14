import { useState, useEffect } from 'react';
import ProfilePic from '/profile.jpg'
import fileSaver from 'file-saver';
import cv from '../../../assets/ABHAY_JAJODIA-RESUME.pdf';
import data from '../../../assets/about.txt';

export default function About() {

const [aboutText, setAboutText] = useState('');

const education = [
    {institiute: "Coventry University, UK", degree: "BSC HONS in Computing" , year: "2022"},
    {institiute: "Metropolia University of Applied Sciences, Finland", degree: "Masters in ICT", year: "Currently Pursuing"}
]

const experience = [
    {company: "Mhangsa Creations", role: "Web Developer", duration: "1+ Years", projects: "5+ Projects Completed"},
    {company: "Lotus Industries", role: "Marketing Head", duration: "8 months"}

]

const saveFile = ()=> {
    fileSaver.saveAs(cv, 'cv.pdf');
};

useEffect(() => {
let fetchData = async () => {
    const response = await fetch(data);
    const final = await response.text();
    setAboutText(final);
}
    fetchData()} ,[]);

  return (

    <section id="about" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4 section-title">About Me</h2>
                <p className="text-slate-300 max-w-2xl mx-auto">
                    Passionate web developer and UI designer with expertise in multiple engines and programming languages.
                </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/3 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-emerald-300 animate-pulse rounded-full opacity-30 blur-lg"></div>
                        <img src={ProfilePic} 
                             alt="About Me" 
                             className="relative w-full h-full object-cover rounded-full border-4 border-indigo-500"/>
                    </div>
                </div>
                
                <div className="lg:w-2/3">
                    <h3 className="text-2xl font-semibold text-white mb-6">Web Developer</h3>
                    <p className="text-slate-300 mb-6">
                       {aboutText ? aboutText : "Loading about text..."}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 card-hover">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-indigo-500 bg-opacity-20 rounded-lg flex items-center justify-center text-indigo-400 mr-4">
                                    <i className="fas fa-trophy text-xl"></i>
                                </div>
                                <h4 className="text-lg font-semibold text-white">Experience</h4>
                            </div>
                            <p className="text-slate-300">
                                {experience.map((exp, index) => (
                                    <span key={index} className="block">    
                                        <span className="font-medium">{exp.role}</span> at {exp.company} <br/>
                                        {exp.projects ? <span className="text-sm text-slate-400">{exp.duration} - {exp.projects}</span> : <span className="text-sm text-slate-400">{exp.duration} </span>}
                                        
                                    </span>
                                ))}
                            </p>
                        </div>
                        
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 card-hover">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-emerald-500 bg-opacity-20 rounded-lg flex items-center justify-center text-emerald-400 mr-4">
                                    <i className="fas fa-medal text-xl"></i>
                                </div>
                                <h4 className="text-lg font-semibold text-white">Education</h4>
                            </div>
                            <p className="text-slate-300">
                                {education.map((edu, index) => (
                                    <span key={index} className="block">
                                        <span className="font-medium">{edu.degree}</span> at {edu.institiute} <br/>
                                        <span className="text-sm text-slate-400">{edu.year}</span>
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                        <button onClick={saveFile} className="btn-primary text-white px-6 py-3 rounded-lg font-medium flex items-center">
                            <i className="fas fa-download mr-2"></i> Download CV
                        </button>
                        <a href="#contact" className="btn-outline text-white px-6 py-3 rounded-lg font-medium flex items-center">
                            <i className="fas fa-envelope mr-2"></i> Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
