import { Main } from 'components/Main/Main';
import bgWave from '../images/Desktop/Desktop Background Main Page-1x.png';

import { BgImage, BgWave, MainContainer } from './WelcomePage.styled';
import bg from '../images/Desktop/Desktop Background element Main Page-1x.png';

export default function WelcomePage() {
  return (
    <>
      <BgImage src={bg} />
      <BgWave src={bgWave} />
      <MainContainer>
        <Main />
      </MainContainer>
    </>
  );
}
