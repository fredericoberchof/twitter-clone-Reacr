import React from 'react';

import { Container } from './styles';

interface Props {
  news: string;
}

const News: React.FC<Props> = ({
  news
}) => {
  return (
    <Container>
     <span>Assuntos do momento no Brasil</span>
     <strong>{news}</strong>
    </Container>
  );
};

export default News;
