import React from "react";

import { ListStyled } from "./styles";

import CardList from "components/CardList";

function List({ data, type, subType }) {
  return (
    <ListStyled>
      {data.map((data) => {
        return (
          <CardList
            key={data.mal_id}
            typeG={type}
            id={data.mal_id}
            image={data.image_url}
            title={data.title}
            rank={data.rank}
            airing_start={data.airing_start}
            type={data.type}
            episodes={data.episodes}
            volumes={data.volumes}
            members={data.members}
            score={data.score}
            rated={data.rated}
            r18={data.r18}
          />
        );
      })}
    </ListStyled>
  )
}

export default List;