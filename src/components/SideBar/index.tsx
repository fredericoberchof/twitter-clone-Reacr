import React from 'react';

import { Container, SearchWrapper, SearchInput, Body, SearchIcon } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <p>{'Lorem isum dolor sis amet'.repeat(90)}</p>
      </Body>
    </Container>
  );
};

export default SideBar;
