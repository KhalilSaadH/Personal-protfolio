import USER from '../data/user.json';
import AppHeader from '../components/organisms/AppHeader';
import AppSection from '../components/molecules/AppSection';
import AppTimeline from '../components/atomics/AppTimeline';
import AppShell from '../components/templates/AppShell';

import { ThemeProvider } from '../components/templates/ThemeContext';
import Background from '../components/templates/Background';

const Resume = () => (
<ThemeProvider>
  <Background>
    <AppShell
      title={`Khalil Saad HAROURI | ${USER.resume.title}`}
      description={USER.resume.description}
      keyword="resume, education, course, skill"
    >
      <AppHeader
        title={USER.resume.title}
        description={USER.resume.description}
      />
      {USER.resume.contents.map((item) => (
        <AppSection key={item.id} title={item.title} className="py-0">
          {item.contents.map((subItem) => (
            <AppTimeline key={subItem.id} item={subItem}>
              <a
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white text-black  font-medium"
              >
                {subItem.description}
              </a>
              {subItem.list ? (
                <ul className="mt-4">
                  {subItem.list.map((listItem) => (
                    <li key={listItem.id} className="list-disc list-inside mb-2">
                      <a
                        href={listItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:text-white text-gray hover:text-orange"
                        title={listItem.level}
                      >
                        {listItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                ''
              )}
            </AppTimeline>
          ))}
        </AppSection>
      ))}
    </AppShell>
  </Background> 
</ThemeProvider>
);

export default Resume;
