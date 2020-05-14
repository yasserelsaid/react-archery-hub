import React from 'react';
import classes from './VVM.module.css';

import Vision from '../../assets/images/vision.jpg';
import Values from '../../assets/images/values.jpg';
import Mission from '../../assets/images/mission.jpg';

const vvm = () => (
  <section className={classes.VVM}>
    <div className={classes.Container}>
      <div>
        <img src={Vision} alt='vision' />
      </div>
      <div>
        <img src={Values} alt='values' />
      </div>
      <div>
        <img src={Mission} alt='mission' />
      </div>
    </div>
  </section>
);

export default vvm;
