import PropTypes from 'prop-types';
import AppContainer from '../atomics/AppContainer';
import AppDecoration from '../atomics/AppDecoration';
import AppHead from '../atomics/AppHead';
import AppNav from '../molecules/AppNav';
import AppSide from '../atomics/AppSide';
import AppSignature from '../organisms/AppSignature';
import AppCtaSection from '../molecules/AppCtaSection';
import AppHero from '../molecules/AppHero';
import AppFooter from '../atomics/AppFooter';


import { ThemeProvider } from './ThemeContext';
import Background from './Background';



const AppShell = ({ title, keyword, description, hero, cta, children }) => (
  <>
  <ThemeProvider>
    <Background>
      <AppHead title={title} description={description} keyword={keyword} />
      <AppNav />
      <AppDecoration />
      <AppSide />
      {hero && <AppHero />}
      <AppContainer>
        {children}
        {/* <AppSignature /> */}
        {cta && <AppCtaSection />}
        <AppFooter />
      </AppContainer>
    </Background>
  </ThemeProvider>
  </>
);

AppShell.propTypes = {
  title: PropTypes.string,
  keyword: PropTypes.string,
  description: PropTypes.string,
  hero: PropTypes.bool,
  cta: PropTypes.bool,
};

AppShell.defaultProps = {
  title: 'Khalil Saad HAROURI',
  description:
    'I am a student from Indonesia, who focuses on web development, especially frontend web development.',
  keyword: '',
  hero: false,
  cta: true,
};

export default AppShell;
