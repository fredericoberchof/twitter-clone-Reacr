import React from 'react';

// import { Container } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rockeatseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>25 de ago</time>
            <Description></Description>
          </Header>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet;