import React from 'react';

import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  ProfileIcon,
  HashIcon,
  BookmarksIcon,
  ListIcon,
  MoreIcon,
  FeatherIcon,
  ExitIcon,
  ProfileData,
  Botside,
  Avatar
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>

        <MenuButton>
          <HashIcon />
          <span>Explore</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <BookmarksIcon />
          <span>Bookmarks</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>List</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <MenuButton>
          <MoreIcon />
          <span>More</span>
        </MenuButton>

        <Button>
          <FeatherIcon />
          <span>Tweet</span>
        </Button>
      </Topside>

        <Botside>
          <Avatar />
          <ProfileData>
            <strong>Fred Berchof</strong>
            <span>@berchof</span>
          </ProfileData>
          <ExitIcon />
        </Botside>
    </Container>
  );
};

export default MenuBar;
