import React, { Component } from 'react';

import './MeetCoaches.css';

import Fawzy from '../../assets/images/coachfawzy.jpg';
import Garf from '../../assets/images/coachgarf.jpg';
import Khairat from '../../assets/images/coachkhairat.jpg';
import Fakhry from '../../assets/images/coachfakhry.jpg';
import Nemr from '../../assets/images/coachnemr.jpg';
import Hariry from '../../assets/images/coachhariry.jpg';

class meetCoaches extends Component {
  componentDidMount() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    // buttons
    const prevbtn = document.querySelector('#prevbtn');
    const nextbtn = document.querySelector('#nextbtn');

    //counter
    let counter = 1;

    // calculate size
    let size;

    window.onload = function (event) {
      size = carouselImages[0].clientWidth;
      carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    };

    window.onresize = function (event) {
      size = carouselImages[0].clientWidth;
      carouselSlide.style.transition = 'none';
      carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    };

    // button listeners

    nextbtn.addEventListener('click', () => {
      if (counter >= carouselImages.length - 3) return;
      carouselSlide.style.transition = 'transform 0.6s ease-in-out';
      counter++;
      carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    });

    prevbtn.addEventListener('click', () => {
      if (counter <= 0) return;
      carouselSlide.style.transition = 'transform 0.6s ease-in-out';
      counter--;
      carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    });

    carouselSlide.addEventListener('transitionend', () => {
      if (carouselImages[counter].id === 'last-clone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 4;
        carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
      }
      if (carouselImages[counter].id === 'first-clone') {
        carouselSlide.style.transition = 'none';
        counter = 1;
        carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
      }
    });
  }
  render() {
    return (
      <section id='coaches' className='black-bg'>
        <h2 className='l-heading-2 py-3 center-txt' data-aos='fade-up'>
          Meet Our World Class
          <span className='primary-text-dark'> Coaches</span>
        </h2>

        <div className='arrows'>
          <i className='fas fa-arrow-left' id='prevbtn'></i>
          <i className='fas fa-arrow-right' id='nextbtn'></i>
          <div className='carousel-container'>
            <div className='carousel-slide'>
              <img src={Fawzy} id='last-clone' alt='C.Fawzy' />
              <img data-aos='fade-in' src={Garf} alt='C.Garf' />
              <img
                data-aos='fade-in'
                data-aos-delay='250'
                src={Khairat}
                alt='C.Khairat'
              />
              <img
                data-aos='fade-in'
                data-aos-delay='500'
                src={Fakhry}
                alt='C.Fakhry'
              />
              <img src={Nemr} alt='C.Nemr' />
              <img src={Hariry} alt='C.Hariry' />
              <img src={Fawzy} alt='C.Fawzy' />
              <img src={Garf} id='first-clone' alt='C.Garf' />
              <img src={Khairat} alt='C.Khairat' />
              <img src={Fakhry} alt='C.Fakhry' />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default meetCoaches;
