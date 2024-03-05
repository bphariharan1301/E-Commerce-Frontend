import React from "react";
import PropTypes from "prop-types";
import PaginationDot from "./PaginationDot";

const styles = {
    root: {
        position: "absolute",
        bottom: 8,
        right: 8,
        display: "flex",
        flexDirection: "row",
    },
};

function Pagination(props) {
    const handleClick = (event, index) => {
        props.onChangeIndex(index);
    };
    const { index, dots } = props;

    const children = [];

    for (let i = 0; i < dots; i += 1) {
        children.push(
            <PaginationDot
                key={i}
                index={i}
                active={i === index}
                onClick={handleClick}
            />
        );
    }

    return <div style={styles.root}>{children}</div>;
}

Pagination.propTypes = {
    dots: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    onChangeIndex: PropTypes.func.isRequired,
};

export default Pagination;
