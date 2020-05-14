import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Auxiliary/Auxiliary';

import classes from './FAQs.module.css';

import NavBar from '../../components/NavBar/NavBar';
import QA from './QA/QA';
import Footer from '../../components/Footer/Footer';

const faqs = props => (
  <Aux>
    <NavBar />
    <section className={classes.FAQs}>
      <div className='container'>
        <h2 className='l-heading-2 py-1'>
          {' '}
          FREQUENTLY ASKED <span className='primary-text-dark'>
            QUESTIONS
          </span>{' '}
        </h2>

        <QA
          question='How many times do I have to train per week?'
          answer='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, cupiditate excepturi fugiat quas facilis totam dolor in illum maiores voluptate!'
        />

        <QA
          question='Is there a group discount?'
          answer='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, cupiditate excepturi fugiat quas facilis totam dolor in illum maiores voluptate!'
        />

        <QA
          question='How many locations can I train in?'
          answer='     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, cupiditate excepturi fugiat quas facilis totam dolor in illum maiores voluptate!'
        />
        <QA
          question='What can I expect?'
          answer='     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, cupiditate excepturi fugiat quas facilis totam dolor in illum maiores voluptate!'
        />
        <QA
          question='How much do you charge per session?'
          answer='     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, cupiditate excepturi fugiat quas facilis totam dolor in illum maiores voluptate!'
        />
        <QA
          question='Do I have to commit to the training?'
          answer='     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, cupiditate excepturi fugiat quas facilis totam dolor in illum maiores voluptate!'
        />
        <QA
          question='Can I train at two or more locations?'
          answer='         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, cupiditate excepturi fugiat quas facilis totam dolor in illum maiores voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo officiis excepturi inventore neque quae nam rem reprehenderit asperiores, debitis ab quidem omnis at totam.'
        />
        <QA
          question='How many times do I have to train per week?'
          answer='     Lorem, ipsum dolor sit amet consectetur lorem adipisicing elit. Odit, cupiditate excepturi fugiat quas facilis totam dolor in illum maiores voluptate!'
        />

        <p className={classes.MoreQuestions}>Still Have a Question?</p>
        <p className={classes.Answer}>
          Connect with us through the{' '}
          <Link to='/contact' className='primary-text-dark'>
            {' '}
            Contact Page
          </Link>
          .{' '}
        </p>
      </div>
    </section>

    <Footer />
  </Aux>
);

export default faqs;
