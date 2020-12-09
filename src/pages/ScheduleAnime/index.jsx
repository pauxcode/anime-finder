import React from 'react'
import { HeadProvider, Title, Meta } from "react-head";

import useScheduleAnimes from 'hooks/useScheduleAnimes'
import Header from "components/Header";
import Wrapper from "components/Wrapper";
import { RotateSpinner } from "components/RotateSpinner";
import ListOfAnimes from "components/List-Of-Animes";

// import { PagesStyled } from '../styles'

import SelectDay from "components/Select/Day";

function ScheduleAnime({ match }) {
  const { params } = match;
  const { day } = params;

  const { loading, scheduleAnimes } = useScheduleAnimes({ day })

  const {
    sAMonday = [],
    sATuesday = [],
    sAWednesday = [],
    sAThursday = [],
    sAFriday = [],
    sASaturday = [],
    sASunday = [],
    sAOther = [],
    sAUnknown = [],
    sADay = []
  } = scheduleAnimes

  if (loading) {
    return (
      <>
        <HeadProvider>
          <Title>Cargando...</Title>
        </HeadProvider>
        <RotateSpinner loading={loading} />
      </>
    );
  }

  return (
    <>
      <HeadProvider>
        <Title>Schedule Animes || Anime Finder</Title>
        <Meta name="description" content="Schedule Animes" />
      </HeadProvider>
      <Header />
      <Wrapper>
        <nav className="select-day">
          <SelectDay day={day} />
        </nav>
        {sAMonday.length === 0 ?
          <></> :
          <>
            <header className="day">
              <h2>Monday</h2>
            </header>
            <ListOfAnimes animes={sAMonday} seccion="schedule-animes" />
          </>
        }
        {sATuesday.length === 0 ?
          <></> :
          <>
            <header className="day">
              <h2>Tuesday</h2>
            </header>
            <ListOfAnimes animes={sATuesday} seccion="schedule-animes" />
          </>
        }
        {sAWednesday.length === 0 ?
          <></> :
          <>
            <header className="day">
              <h2>Wednesday</h2>
            </header>
            <ListOfAnimes animes={sAWednesday} seccion="schedule-animes" />
          </>
        }
        {sAThursday.length === 0 ?
          <></> :
          <>
            <header className="day">
              <h2>Thursday</h2>
            </header>
            <ListOfAnimes animes={sAThursday} seccion="schedule-animes" />
          </>
        }
        {sAFriday.length === 0 ?
          <></> :
          <>
            <header className="day">
              <h2>Friday</h2>
            </header>
            <ListOfAnimes animes={sAFriday} seccion="schedule-animes" />
          </>
        }
        {sASaturday.length === 0 ?
          <></> :
          <>
            <header className="day">
              <h2>Saturday</h2>
            </header>
            <ListOfAnimes animes={sASaturday} seccion="schedule-animes" />
          </>
        }
        {sASunday.length === 0 ?
          <></> :
          <>
            <header className="day">
              <h2>Sunday</h2>
            </header>
            <ListOfAnimes animes={sASunday} seccion="schedule-animes" />
          </>
        }
        {sAOther.length === 0 ?
          <></> :
          <>
            <header className="day">
              <h2>Other</h2>
            </header>
            <ListOfAnimes animes={sAOther} seccion="schedule-animes" />
          </>
        }
        {sAUnknown.length === 0 ?
          <></> :
          <>
            <header className="day">
              <h2>Unknown</h2>
            </header>
            <ListOfAnimes animes={sAUnknown} seccion="schedule-animes" />
          </>
        }
        {sADay.length === 0 ?
          <></> :
          <>
            <header className="day">
              <h2>{day}</h2>
            </header>
            <ListOfAnimes animes={sADay} seccion="schedule-animes" />
          </>
        }
      </Wrapper>
    </>
  )
}

export default ScheduleAnime
