import React from "react";
import { Textarea } from "react-materialize";
import M from "materialize-css";

function DataInput(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      {/* <div class="input-field col s12">
        <label for="textarea1">Enter data in json</label>
        <textarea
          id="textarea1"
          class="materialize-textarea"
          value={props.inputData}
          onChange={props.handleChange}
        ></textarea>
      </div> */}
      <label>
        Enter Data in JSON:
        <Textarea
          id="Textarea-42"
          l={12}
          m={12}
          s={12}
          xl={12}
          value={props.inputData}
          onChange={props.handleChange}
        />
        {/* <textarea
          id="enter-data-textarea"
          className="materialize-textarea"
          type="text"
          value={props.inputData}
          onChange={props.handleChange}
        /> */}
      </label>
    </form>
  );
}

export { DataInput };
