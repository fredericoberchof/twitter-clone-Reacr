import React from 'react';
import { Profile } from 'styled-icons/icomoon';

import { Container, Header, BackIcon, ProfileInfo  } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Fred Berchof</strong>
          <span>600 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage /> */}

      {/* <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}
    </Container>
  );
};

export default Main;
