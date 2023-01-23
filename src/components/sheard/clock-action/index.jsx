import React, { useState } from "react";
import Clock__Form from "../../Clock-Form";

const Clock__action = ({
  local = false,
  createClock,
  updatedClock,
  deleteClock,
  clock,
}) => {
  const [IsEdit, setIsEdit] = useState(false);
  const [IsCreate, setIsCreate] = useState(false);
  const hendelClock = (values) => {
    createClock(values);
  };
  return (
    <>
      <button onClick={() => setIsEdit(!IsEdit)} className="edit">
        edit
      </button>
      {local ? (
        <button onClick={() => setIsCreate(!IsCreate)} className="create">
          create
        </button>
      ) : (
        <button onClick={() => deleteClock(clock.id)} className="delete">
          delete
        </button>
      )}

      {IsEdit && (
        <Clock__Form
          hendelClock={updatedClock}
          formName={"Edit form"}
          values={clock}
        />
      )}
      {IsCreate && (
        <Clock__Form formName={"Create form"} hendelClock={hendelClock} />
      )}
    </>
  );
};

export default Clock__action;
