import React, { useEffect, useState } from "react";
import "../About/Nstory.css";
import {  animated, useSpring } from 'react-spring';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import man from "./manw.png"
import starts from "./beautiful-shining-stars-night-sky.jpg"
import { Md3DRotation } from "react-icons/md";

export default function NStory(){
   

    return(
        <section class="section about" aria-labelledby="about-label">
        <div class="container">

          <figure class="about-banner" data-reveal="left">
            <img src={man} width="380" height="100%" loading="lazy" alt="about banner"
              class="w-100 img-1" />
{/* 
            <img src={starts} width="347" height="349" loading="lazy" alt="about banner"
              class="w-100 img-2" /> */}
          </figure>

          <div class="about-content" data-reveal="right">

            <p class="section-subtitle has-before" id="about-label">What We Do!</p>

            <h2 class="h2  section-text">
              Our mission is to put an electric vehicle charge
            </h2>
{/* 
            <p class="section-title">
              Charge your electric vehicle at home using one of our smart home char ge solutions or gain access to over
              3,000 public charging.
            </p> */}

            <div class="about-wrapper">

              <div class="about-card">

                <div class="title-wrapper">
                  <Md3DRotation className="icon"/>

                  <h3 class="card-title">Zero contact travel</h3>
                </div>

                <p class="card-text">
                  We love our customers and we love the way they come.
                </p>

              </div>

              <div class="about-card">

                <div class="title-wrapper">
                    
                <Md3DRotation className="icon"/>

                  <h3 class="card-title">No Driving License</h3>
                </div>

                <p class="card-text">
                  We love our customers and we love the way they come.
                </p>

              </div>

            </div>

            <ul class="about-list">

              <li class="about-item">
              <Md3DRotation className="icon"/>

                <span class="span">Detachable battery, take home and charge in 3 hours.</span>
              </li>

              <li class="about-item">
              <Md3DRotation className="icon"/>
                <span class="span">Enjoy a hassle-free ride by charging just for 3 hours.</span>
              </li>

            </ul>

            <a href="#" class="btn btn-primary">
              <span class="span">Read More</span>

              <Md3DRotation className="icon"/>
            </a>

          </div>

        </div>
      </section>
    )
}