import Fade from 'react-reveal/Fade';
import DATA from '../../data/user.json';
import AppContainer from '../atomics/AppContainer';
import AppButton from '../atomics/AppButton';

const AppHero = () => (
  <header className="bg-hero-pattern bg-no-repeat bg-center px-3">
    <AppContainer>
      <Fade duration={2000}>
        <div className="h-screen flex flex-col justify-center pt-16 items-center text-center lg:items-start lg:text-left">
          <span className="dark:text-white text-xs md:text-sm text-black flex items-center">
            <span>Hi, I&apos;m</span>
            <span className="block w-6 lg:w-11 h-1 bg-orange ml-2 rounded-lg" />
          </span>
          <h1 className="dark:text-white text-5xl lg:text-7xl font-bold text-black">
            {DATA.name}
          </h1>
          <h2 className="text-xl lg:text-4xl font-bold text-orange mt-2">
            [{DATA.status}]
          </h2>
          <p className="text-xs lg:text-base text-gray max-w-md tracking-widest mt-2 lg:mt-3 md:ml-1">
            {DATA.description}
          </p>
          <AppButton title="GET IN TOUCH" href="/contact" />
        </div>
      </Fade>
    </AppContainer>
  </header>
);

export default AppHero;
