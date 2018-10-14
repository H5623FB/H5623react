import React, { Component } from "react";
import fire from "../../../fbase";
import "../../styles.css";

class PrintClosingForm extends Component {
  printTrue = () => {
    const printIsTrue = "true";
    fire
      .database()
      .ref("ILEC/Pub/Print/ClosingForm/Print")
      .set(printIsTrue);

    function printIsFalse(fire) {
      const printIsFalse = "false";
      fire
        .database()
        .ref("ILEC/Pub/Print/ClosingForm/Print")
        .set(printIsFalse);
    }
    setTimeout(printIsFalse, 1000, fire);
  };

  render() {
    return (
      <div>
        <button
          submitstyle="submit"
          className="btn btn-danger btn-sm"
          onClick={this.printTrue}
          print="print"
        >
          PrintClosingForm
        </button>
      </div>
    );
  }
}
export default PrintClosingForm;
