import { Main } from 'components/Main/Main';
import bgWave from '../images/Desktop/Desktop-Background-Main-Page-1x.png';

import { BgWave } from 'components/Main/WelcomePage.styled';

export default function WelcomePage() {
  return (
    <>
      <BgWave src={bgWave} />
      <Main />
    </>
  );
}
