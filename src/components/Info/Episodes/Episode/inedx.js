import React from "react";
import {
  Container,
  ImageContainer,
  InfoContainer,
  SubTitle,
  Title,
} from "./Episode.styles";

const Episode = (props) => {
  let { id, title, episode, image, number, backupImage, href, active } = props;

  return (
    <Container href={href} active={active}>
      <ImageContainer src={!image ? backupImage : image} />
      <InfoContainer>
        <Title>
          {!title ? `Episode ${number}` : `${title} - Episode ${episode}`}
        </Title>
        <SubTitle>{`Episode ${number}`}</SubTitle>
      </InfoContainer>
    </Container>
  );
};

export default Episode;