import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRoom } from "../../store/room/action";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function RoomFormContainer() {
  const dispatch = useDispatch();
  const [roomData, setRoomData] = useState({ roomName: "" });

  const handleSubmit = e => {
    e.preventDefault();
    if (roomData.roomName === "") {
      alert("Room name is empty, please provide some value");
    } else {
      dispatch(createRoom(roomData));
      setRoomData({ roomName: "" });
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setRoomData({ [name]: value });
  };

  return (
    <div className="roomform">
      <Form onSubmit={handleSubmit}>
        <Form.Label>ROOM NAME*</Form.Label>
        <Form.Control
          type="text"
          name="roomName"
          value={roomData.roomName}
          onChange={handleChange}
        />
        <br />
        <Button variant="warning" type="submit">
          Make a Room
        </Button>
      </Form>
    </div>
  );
}
