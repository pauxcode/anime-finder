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

            {/* {
                scheduleAnimesMonday.length === 0 ? console.log("Esta vacio") : console.log("No esta vacio")
            } */}
            {scheduleAnimesMonday.length === 0 ?
                <></>
                :
                <section>
                    <h2>Monday</h2>
                    <ListOfAnimes animes={scheduleAnimesMonday} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesTuesday.length === 0 ?
                <></>
                :
                <section>
                    <h2>Tuesday</h2>
                    <ListOfAnimes animes={scheduleAnimesTuesday} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesWednesday.length === 0 ?
                <></>
                :
                <section>
                    <h2>Wendesday</h2>
                    <ListOfAnimes animes={scheduleAnimesWednesday} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesThursday.length === 0 ?
                <></>
                :
                <section>
                    <h2>Thursday</h2>
                    <ListOfAnimes animes={scheduleAnimesThursday} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesFriday.length === 0 ?
                <></>
                :
                <section>
                    <h2>Friday</h2>
                    <ListOfAnimes animes={scheduleAnimesFriday} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesSaturday.length === 0 ?
                <></>
                :
                <section>
                    <h2>Saturday</h2>
                    <ListOfAnimes animes={scheduleAnimesSaturday} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesSunday.length === 0 ?
                <></>
                :
                <section>
                    <h2>Sunday</h2>
                    <ListOfAnimes animes={scheduleAnimesSunday} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesOther.length === 0 ?
                <></>
                :
                <section>
                    <h2>Other</h2>
                    <ListOfAnimes animes={scheduleAnimesOther} seccion="schedule-animes" />
                </section>
            }
            {scheduleAnimesUnknown.length === 0 ?
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
