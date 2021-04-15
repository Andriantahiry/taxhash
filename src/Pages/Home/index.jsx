import { React, useState } from 'react';
import './home.css';
import downBtn from '../../assets/down.png';
import Activity from '../../components/Activity';
import Skills from '../../components/Skills';
import Hero from '../../components/Hero';
import Mail from '../../components/Mail';

function Home() {
    const [ActivComponent, setActivComponent] = useState(false);
    const [skills, setSkills] = useState(false)
    const showActivity = (e) => {
        setActivComponent(!ActivComponent);
        console.log(e.target.classList.toggle('pointed'));
    }

    const showSkills = (e) => {
        setSkills(!skills);
        e.target.classList.toggle('pointed')
    }

    return (
        <>
            <div className="hom-container">
                <Hero ActivComponent={ActivComponent} skills={skills} setActivComponent={setActivComponent} setSkills={setSkills} />

                <div onClick={showActivity} className="container btnContainer">
                    <img className="downBtn" src={downBtn} alt="buttonDown" />
                </div>

                {ActivComponent && <Activity />}
                <br />
                {
                    ActivComponent && (<div onClick={showSkills} className="container btnContainer">
                        <img className="downBtn" src={downBtn} alt="buttonDown" />
                    </div>)
                }

                {
                    skills && <Skills />
                }

                <Mail />

            </div>
        </>
    )
}

export default Home
