import React from "react";
import styled from "styled-components";
import TrelloButton from "./TrelloButton";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";


const BoardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const DeleteButtonBoard = styled(Icon)`
  position: absolute;
  display: none;
  right: 25px;
  bottom: 50px;
  opacity: 0.5;
  ${BoardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const Thumbnail = styled.div`
  height: 100px auto;
  width: 300px;
  background: #DFE3E6;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 33px;
  box-shadow: 0 2px 4px grey;
`;


const Title = styled.h4`
  color: black;
  text-decoration: none;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    
    <BoardContainer>
      <Thumbnail>
        <Title>{title}
          <DeleteButtonBoard>
            delete
          </DeleteButtonBoard>
        </Title>
      </Thumbnail>
    </BoardContainer>
  );
};

export default BoardThumbnail;
