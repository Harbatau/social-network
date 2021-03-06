import React from "react";
import Friend from "./Friend";
import styled from "styled-components";

const ContentWrapper = styled.div`
  background-color: aqua;
  grid-area: content;
`;


const Friendslist = (props) => {
    let friendlistElements = props.friends.map( friend => <Friend name={friend.name} id={friend.id} />);

    return (
        <ContentWrapper>
            {friendlistElements}
        </ContentWrapper>
    )
};

export default Friendslist;