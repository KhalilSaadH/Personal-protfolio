import USER from '../data/user.json';
import AppHeader from '../components/organisms/AppHeader';
import AppShell from '../components/templates/AppShell';
import AppSection from '../components/molecules/AppSection';
import AppProject from '../components/atomics/AppProject';

import { ThemeProvider } from '../components/templates/ThemeContext';
import Background from '../components/templates/Background';

const Project = () => (
  <ThemeProvider>
   <Background>
    <AppShell
      title={`Khalil Saad HAROURI | ${USER.project.title}`}
      description={USER.project.desctiption}
      keyword="project, projects, portfolio project, web development project, skill"
    >
      <AppHeader
        title={USER.project.title}
        description={USER.project.desctiption}
      />
      <AppSection title="Personal Projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {USER.project.contents.map((item) => (
            <AppProject key={item.id} project={item} />
          ))}
        </div>
      </AppSection>
    </AppShell>
  </Background>
</ThemeProvider>
  );

export default Project;
