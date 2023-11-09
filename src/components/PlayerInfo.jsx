import { useState } from "react";

export default function PlayerInfo({initialName, symbol, isActive}) {
    const [name, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function edit() {
        setIsEditing(true);
    }

    function save() {
        setIsEditing(false);
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <li className={(isActive == symbol) ? "active" : undefined}>
            <span className="player">
              {!isEditing && <span className="player-name">{name}</span>}
              {isEditing && <input type="text" required value={name} onChange={handleChange}></input>}
              <span className="player-symbol">{symbol}</span>
            </span>
            {!isEditing && <button onClick={edit}>Edit</button>}
            {isEditing && <button onClick={save}>Save</button>}
        </li>
    );
}