import React from "react";

function line() {
  return <div style={styles.line}></div>;
}

const styles = {
    line: {
        width: '100%',
        height: '1px',
        backgroundColor: '#BBC1C8',
        borderRadius: '5px',
        margin: '5px 0px',
        marginBottom: '10px',
    }
};

export default line;