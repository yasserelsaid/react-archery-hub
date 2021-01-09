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
          answer='Most people who train in Archery Hub train 3 to 4 times a week but you can train as much as 7 times a week.'
        />

        <QA
          question='Is there a group discount?'
          answer='Yes! we offer discounts for groups that consist of more than 3 people, contact us to know more.'
        />

        <QA
          question='How many locations can I train in?'
          answer='You can train in both Archery Hub locations East Town and West Town without any extra fees.'
        />

        <QA
          question='How much do you charge per session?'
          answer='We charge 200 EGP per session, for monthly and yearly prices visit the Joining Info page. '
        />
        <QA
          question='Do I have to commit to the training?'
          answer='In order to get the best results, you ideally would need to commit to training more than 5 times per week, however, it is entirely up to you how many times you train.'
        />

        <QA
          question='Do you offer physical training to compliment archery practice?'
          answer='Yes! in fact, we partnered up with engine360 to deliver physical training two times a week that is designed specifically to make you better at archery.'
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
