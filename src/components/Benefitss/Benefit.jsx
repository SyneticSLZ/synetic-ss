import React, { useEffect, useState} from "react";
// import TeamBox from "../TeamBox/TeamBox"
import "../Benefitss/Benefit.css"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Benefit(){


    return(
//       <>
//       <div id="demo-para">
  
//   <Parallax pages={4} style={{ width: '100%', height: '100%'}}>

//   <ParallaxLayer
//     offset={1}
//     speed={0.5}
//      >
// <div className="text-body">
//             <h1>Meet The Team</h1>
//                 <div className="straplines">
//                 <p> Join Us. </p>
//                 <p> Let's disrupt together.</p> 
//                 </div>
//             </div>
//       <div className="team-container">
//                 <TeamBox title="Creator Lex0" text="Into retro gaming,sushi and racing dolphins"/>
//                 </div>
//   </ParallaxLayer>

//   <ParallaxLayer
//     offset={1.9}
//     speed={0.6}
//     style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}>
//     <div className="team-container">
//                 <TeamBox title="Creator Ruyu" text="American Muscle car mad and the Art of War"/>
//                 </div>
//   </ParallaxLayer>

//   <ParallaxLayer
//     offset={2.2}
//     speed={0.7}
//     style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
      
//     }}>
//     <div className="team-container">
//     <TeamBox title="Builder Panthera" text="Fav character: Yoshimitsu, deconstructed apple pies" />
//                 </div>
//   </ParallaxLayer>

// </Parallax>
// </div>
        
<div id="team">    

            <div className="team-container reveal">
                {/* <TeamBox title="Creator Lex0" text="Lead writer of Dr Szink. SciFi junkie. Blockchain Dev since 2017"/> */}
                {/* <TeamBox title="Creator Ruyu" text="American Muscle car mad. Film officiando. Student of human behavourial science"/> */}
                {/* <TeamBox title="Builder Panthera" text="Fav character: Yoshimitsu, deconstructed apple pies and building on the blockcahin" /> */}

        <div className="team__box1">

            
                <div className="team-discord">
                <a className="social-list__link" href="https://twitter.com/_sinister_souls">
                            <i className="fab fa-discord"></i>
                            {/* <i className="fa-light fa-flux-capacitor" style="color: #e900b3;"></i> */}
                        </a>
                <div className="team__title">
                <p>THIS IS THE FUTURE</p></div>
                
                </div>
            <div className="team__text">
                <p>Join and get a head start and become a more innovative brand</p>
                
        </div>
        </div>
        <div className="team__box1">

            
<div className="team-discord">
<a className="social-list__link" href="https://twitter.com/_sinister_souls">
                            <i className="fab fa-discord"></i>
                            {/* <i className="fa-light fa-flux-capacitor" style="color: #e900b3;"></i> */}
                        </a>
<div className="team__title">
<p>NO LIMITS</p></div>
</div>
<div className="team__text">
<p>Untapped market of billions around the globe</p>

</div>
</div>


<div className="team__box1">

            
<div className="team-discord">

<a className="social-list__link" href="https://twitter.com/_sinister_souls">
            <i className="fab fa-discord"></i>
            {/* <i className="fa-light fa-flux-capacitor" style="color: #e900b3;"></i> */}
        </a>
        <div className="team__title">
<p>BENEFIT #3</p></div>
</div>
<div className="team__text">
<p>Join and get a head start and become a more innovative brand</p>

</div>
</div>
        </div> 

</div>       
      
    )
}