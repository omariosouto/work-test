import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/src/Button'; 

const Section = styled.section`
  background: red;
  color: white;
`;


const Example: string = 'NextJS';

function HomePage() {
  return (
    <div>
      Check view-source to check if the relative CSS is being rendered
      <Section>
        background: red;
        color: white;
      </Section>
      <Button type="submit">
        color: purple;
      </Button>
    </div>
  );
}

export default HomePage;