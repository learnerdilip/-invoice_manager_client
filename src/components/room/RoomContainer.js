import React, { useEffect, useState } from "react";
import RoomFormContainer from "./RoomFormContainer";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../store/room/action";
import { updateRoomProduct } from "../../store/product/action";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { CardBody } from "react-bootstrap/Card";
import ExpiringProducts from "./Dashboard/ExpiringProducts";
import ReactSnackBar from "react-js-snackbar";

export default function RoomContainer(props) {
  const dispatch = useDispatch();

  const state = useSelector((reduxState) => {
    return {
      rooms: reduxState.room.rooms,
      user: reduxState.user.token,
    };
  });

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  const loadRoomProducts = (roomId, room) => {
    dispatch(updateRoomProduct(roomId));
    dispatch({
      type: "UPDATE_CURRENT_ROOM",
      payload: room,
    });
  };

  return (
    <div>
      {!state.user && (
        <ReactSnackBar Icon={<span>✋🏽</span>} Show="true">
          Please login to use this app!
        </ReactSnackBar>
      )}
      <h2>Welcome to your Home!</h2>
      <ExpiringProducts />
      {state.user && !state.rooms.length && (
        <ReactSnackBar Icon={<span>🏡</span>} Show="true">
          Make own room with 'make a room'!
        </ReactSnackBar>
      )}
      <RoomFormContainer />
      <div className="theroomslist">
        {state.rooms.length > 0 &&
          state.rooms.map((room) => (
            <Card className="roomcards">
              <Card.Body>
                <Link
                  onClick={() => loadRoomProducts(room.id, room)}
                  to={`/room/${room.room_name}`}
                >
                  {" "}
                  <Card.Text>{room.room_name}</Card.Text>
                </Link>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}
