import React from "react";

import Card from "./Card";

function Createcard(emojipedia){
    return(
        <Card 
        key={emojipedia.id}
        emoji={emojipedia.emoji}
        name={emojipedia.name}
        meaning={emojipedia.meaning}
         />
    );
}

export default Createcard;