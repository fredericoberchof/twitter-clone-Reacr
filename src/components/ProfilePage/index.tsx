import React from 'react';

import Feed from '../Feed'

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Fred Berchof </h1>
        <h2>@berchof</h2>
        <p>Developer</p>
        <ul>
          <li>
            <LocationIcon />
            Florianópolis, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 23 de abril de 1992
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>1025 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />

    </Container>
  );
};

export default ProfilePage;
