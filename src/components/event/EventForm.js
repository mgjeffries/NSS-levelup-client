import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "../game/GameProvider";

export const EventForm = (props) => {
  const { games, getGames } = useContext(GameContext);
  const [currentEvent, setEvent] = useState({
    game_id: 0,
    day: "",
  });
  //   {
  //   description: "Welcome To at lunch",

  //   gamer: {
  //     user: { first_name: "Steve", last_name: "Brownlee", email: "me@me.com" },
  //   },
  //   time: "12:00:00",
  //   url: "http://localhost:8000/events/1",
  // }

  useEffect(() => {
    getGames();
  }, []);

  const handleControlledInputChange = (changeEvent) => {
    const newEventState = Object.assign({}, currentEvent);
    newEventState[changeEvent.target.name] = changeEvent.target.value;
    console.log(newEventState);
    setEvent(newEventState);
  };

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Schedule New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="game_id">Game: </label>
          <select
            name="game_id"
            className="form-control"
            value={currentEvent.game_id}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a game...</option>
            {games.map((game) => (
              <option value={game.id} key={game.id}>
                {game.title}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="day">Day of Event: </label>
          <input
            type="date"
            name="day"
            className="form-control"
            value={currentEvent.day}
            onChange={handleControlledInputChange}
          ></input>
        </div>
      </fieldset>

      {/* Create the rest of the input fields */}

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          // Create the event
        }}
        className="btn btn-primary"
      >
        Create Event
      </button>
    </form>
  );
};
