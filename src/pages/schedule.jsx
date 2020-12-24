import React from 'react'
import { HeadProvider, Title, Meta } from "react-head";

import useSchedule from 'hooks/useSchedule'

import { RotateSpinner } from "components/RotateSpinner";

import Header from "components/Header";
import { Select } from "components/Select"
import Wrapper from "components/Wrapper";
import List from "components/List";

function PageSchedule({ match }) {
  const { params } = match;
  const { day } = params;

  const { loading, schedule } = useSchedule({ day })

  const {
    sMonday = [],
    sTuesday = [],
    sWednesday = [],
    sThursday = [],
    sFriday = [],
    sSaturday = [],
    sSunday = [],
    sOther = [],
    sUnknown = [],
    sDay = []
  } = schedule

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
        <Select page="schedule" day={day} />

        {sMonday.length === 0 ?
          <></> :
          <>
            <header>
              <h2>Monday</h2>
            </header>
            <List data={sMonday} type="anime" />
          </>
        }
        {sTuesday.length === 0 ?
          <></> :
          <>
            <header>
              <h2>Tuesday</h2>
            </header>
            <List data={sTuesday} type="anime" />
          </>
        }
        {sWednesday.length === 0 ?
          <></> :
          <>
            <header>
              <h2>Wednesday</h2>
            </header>
            <List data={sWednesday} type="anime" />
          </>
        }
        {sThursday.length === 0 ?
          <></> :
          <>
            <header>
              <h2>Thursday</h2>
            </header>
            <List data={sThursday} type="anime" />
          </>
        }
        {sFriday.length === 0 ?
          <></> :
          <>
            <header>
              <h2>Friday</h2>
            </header>
            <List data={sFriday} type="anime" />
          </>
        }
        {sSaturday.length === 0 ?
          <></> :
          <>
            <header>
              <h2>Saturday</h2>
            </header>
            <List data={sSaturday} type="anime" />
          </>
        }
        {sSunday.length === 0 ?
          <></> :
          <>
            <header>
              <h2>Sunday</h2>
            </header>
            <List data={sSunday} type="anime" />
          </>
        }
        {sOther.length === 0 ?
          <></> :
          <>
            <header>
              <h2>Other</h2>
            </header>
            <List data={sOther} type="anime" />
          </>
        }
        {sUnknown.length === 0 ?
          <></> :
          <>
            <header>
              <h2>Unknown</h2>
            </header>
            <List data={sUnknown} type="anime" />
          </>
        }
        {sDay.length === 0 ?
          <></> :
          <>
            <header>
              <h2>{day}</h2>
            </header>
            <List data={sDay} type="anime" />
          </>
        }
      </Wrapper>
    </>
  )
}
export default PageSchedule;