import React from 'react'
import { useHistory } from 'react-router-dom'

import useForm from 'hooks/updateParams'

const DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "other", "unknown"];

function SelectDay({ day }) {
  const history = useHistory();

  const { updateDay } = useForm({
    initialDay: day,
  });

  const handleChangeDay = (e) => {
    updateDay(e.target.value);
    if (e.target.value === "All") {
      history.push(`/schedule`);
    } else {
      history.push(`/schedule/${e.target.value}`);
    }
  };

  return (
    <select onChange={handleChangeDay} value={day}>
      <option>All</option>
      {DAYS.map((day) => (
        <option key={day}>{day}</option>
      ))}
    </select>
  )
}

export default SelectDay
