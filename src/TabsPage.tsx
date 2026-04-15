import { Link, useParams } from 'react-router-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      {/* Используем компоненты библиотеки вместо ручных <ul> */}
      <Tabs
        selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
        onSelect={() => {}}
      >
        <div className="tabs is-boxed">
          <TabList>
            {tabs.map(tab => (
              <Tab key={tab.id}>
                <Link
                  to={`/tabs/${tab.id}`}
                  className="navbar-item"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {tab.title}
                </Link>
              </Tab>
            ))}
          </TabList>
        </div>

        {/* Контент табов */}
        <div className="block" data-cy="TabContent">
          {selectedIndex !== -1 ? (
            tabs.map(tab => (
              <TabPanel key={tab.id}>
                <p>{tab.content}</p>
              </TabPanel>
            ))
          ) : (
            <p>Please select a tab</p>
          )}
        </div>
      </Tabs>
    </>
  );
};
