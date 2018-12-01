//@flow

import React from "react";
import styled from "styled-components";
import FileSaver from "file-saver";
import format from "date-fns/format";
import { connect } from "react-redux";

const StyledButton = styled.button`
  font-size: 0.8em;
`;

type Props = {
  bookmarks: Array<Object>
};

class ExportFile extends React.Component<Props> {
  exportData = () => {
    const { bookmarks } = this.props;
    const blob = new Blob([JSON.stringify(bookmarks)], {
      type: "application/json;charset=utf-8"
    });
    FileSaver.saveAs(
      blob,
      `better-bookmarks-export_${format(new Date(), "YYYY-MM-DD")}.json`
    );
  };
  render() {
    return (
      <StyledButton className="label" onClick={this.exportData}>
        Export to JSON
      </StyledButton>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookmarks: state.bookmarks
  };
};

export default connect(mapStateToProps)(ExportFile);
