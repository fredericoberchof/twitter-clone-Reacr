import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import {
  Container,
  SearchWrapper,
  SearchInput,
  Body,
  SearchIcon,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Gustavo Lata" nickname="@gustavolata" />,
              <FollowSuggestion name="Gustavo Maia" nickname="@gustavomaia" />,
              <FollowSuggestion name="Pike João" nickname="@demolido" />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[<News news="Imagine Dragons no Brasil"/>]}
          />
          <List
            title="Talvez você curta"
            elements={[<News news="Twenny On Pilots no Brasil"/>]}
          />
          <List
            title="Talvez você curta"
            elements={[<News news="Lady Gaga: Brazil, I'm devasted..."/>]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
