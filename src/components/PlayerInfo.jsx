import { useState } from "react";

export default function PlayerInfo({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function edit() {
        setIsEditing(true);
    }

    function save() {
        setIsEditing(false);
    }

    return (
        <li>
            <span className="player">
              {!isEditing && <span className="player-name">{name}</span>}
              {isEditing && <input type="text" required></input>}
              <span className="player-symbol">{symbol}</span>
            </span>
            {!isEditing && <button onClick={edit}>Edit</button>}
            {isEditing && <button onClick={save}>Save</button>}
        </li>
    );
}