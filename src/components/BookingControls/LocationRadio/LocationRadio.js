import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import myClasses from './LocationRadio.module.css';

export default function RadioButtonsGroup(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className={myClasses.LocationRadio}>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Location</FormLabel>
        <RadioGroup
          aria-label='Location'
          name='gender1'
          value={props.value}
          onChange={handleChange}
          required
        >
          <FormControlLabel
            value='east'
            control={<Radio color='primary' />}
            label='SODIC EAST TOWN'
          />
          <FormControlLabel
            value='west'
            control={<Radio color='primary' />}
            label='ALSSON-NEWGIZA'
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
