import React from 'react'
import { HeadProvider, Title, Meta } from "react-head";

import useScheduleAnimes from 'hooks/useScheduleAnimes'
import Header from "components/Header";
import Wrapper from "components/Wrapper";
import { RotateSpinner } from "components/RotateSpinner";
import ListOfAnimes from "components/List-Of-Animes";

import SelectDay from "components/Select/Day";

function ScheduleAnime({ match }) {
    const { params } = match;
    const { day } = params;

    const { loading, scheduleAnimes } = useScheduleAnimes({ day })

    const {
        scheduleAnimesMonday = [],
        scheduleAnimesTuesday = [],
        scheduleAnimesWednesday = [],
        scheduleAnimesThursday = [],
        scheduleAnimesFriday = [],
        scheduleAnimesSaturday = [],
        scheduleAnimesSunday = [],
        scheduleAnimesOther = [],
        scheduleAnimesUnknown = []
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
        <Wrapper>
            <HeadProvider>
                <Title>Schedule Animes || Anime Finder</Title>
                <Meta name="description" content="Schedule Animes" />
            </HeadProvider>
            <div className="header">
                <Header />
            </div>
            <SelectDay day={day} />
            {console.log(scheduleAnimesMonday)}
            {scheduleAnimesMonday === [] ?
                <></>
                :
                <section>
                    <h2>Monday</h2>
                    <ListOfAnimes animes={scheduleAnimesMonday} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesTuesday === [] ?
                <></>
                :
                <section>
                    <h2>Tuesday</h2>
                    <ListOfAnimes animes={scheduleAnimesTuesday} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesWednesday === [] ?
                <></>
                :
                <section>
                    <h2>Wendesday</h2>
                    <ListOfAnimes animes={scheduleAnimesWednesday} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesThursday === [] ?
                <></>
                :
                <section>
                    <h2>Thursday</h2>
                    <ListOfAnimes animes={scheduleAnimesThursday} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesFriday === [] ?
                <></>
                :
                <section>
                    <h2>Friday</h2>
                    <ListOfAnimes animes={scheduleAnimesFriday} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesSaturday === [] ?
                <></>
                :
                <section>
                    <h2>Saturday</h2>
                    <ListOfAnimes animes={scheduleAnimesSaturday} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesSunday === [] ?
                <></>
                :
                <section>
                    <h2>Sunday</h2>
                    <ListOfAnimes animes={scheduleAnimesSunday} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesOther === [] ?
                <></>
                :
                <section>
                    <h2>Other</h2>
                    <ListOfAnimes animes={scheduleAnimesOther} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesUnknown === [] ?
                <></>
                :
                <section>
                    <h2>Unknown</h2>
                    <ListOfAnimes animes={scheduleAnimesUnknown} seccion="schedule-animes" />
                </section>
            }
        </Wrapper>
    )
}

export default ScheduleAnime
