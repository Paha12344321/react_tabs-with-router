import { useNavigate, useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const navigate = useNavigate();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  const handleSelect = (index: number) => {
    navigate(`/tabs/${tabs[index].id}`);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <Tabs
          selectedIndex={selectedIndex === -1 ? undefined : selectedIndex}
          onSelect={handleSelect}
        >
          <TabList>
            {tabs.map(tab => (
              <Tab key={tab.id} selectedClassName="is-active">
                <span className="navbar-item" style={{ cursor: 'pointer' }}>
                  {tab.title}
                </span>
              </Tab>
            ))}
          </TabList>

          <div className="block" data-cy="TabContent">
            {tabs.map(tab => (
              <TabPanel key={tab.id}>
                <p>{tab.content}</p>
              </TabPanel>
            ))}

            {selectedIndex === -1 && <p>Please select a tab</p>}
          </div>
        </Tabs>
      </div>
    </>
  );
};
