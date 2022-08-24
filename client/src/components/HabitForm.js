import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_HABIT } from '../../utils/mutations';
import { QUERY_HABITS } from '../../utils/queries';

import Auth from '../../utils/auth';

const HabitForm = () => {
  const [habitText, setHabitText] = useState('');


  const [addHabit, { error }] = useMutation(ADD_HABIT, {
    update(cache, { data: { addHabit } }) {
      try {
        const { habits } = cache.readQuery({ query: QUERY_HABITS });

        cache.writeQuery({
          query: QUERY_HABITS,
          data: { habits: [addHabits, ...habits] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addHabit({
        variables: {
          habitName,
          habitDescriptions,
          habitUser: Auth.getProfile().data.username,
        },
      });

      setHabitText('');
    } catch (err) {
      console.error(err);
    }
  };
  
  const handleChange = (event) => {
    const { name } = event.target;

    if (name === 'habitText') {
      setHabitText(value);
    }
  };
}

export default HabitForm;