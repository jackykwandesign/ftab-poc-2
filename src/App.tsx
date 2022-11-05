import React from 'react';
import { FTabDefaultHeader, FTabPanel, FTabs, useTabConroller } from './components/FTab';


function App() {
  const tabController = useTabConroller({ initKey: "hello1" })
  return (
    <>
      asd
      <FTabDefaultHeader controller={tabController} panelProps={[{
        label: "hello",
        tabKey: "hello"
      }]} />
      <div>
        <FTabs
          disablePanelHeader
          controller={tabController}
        >
          <FTabPanel label={'hello'} tabKey={'hello'}>asdasdasdasdasdasdasdasdasd</FTabPanel>
          <FTabPanel label={'hello1'} tabKey={'hello1'}>111111111111111111111111111</FTabPanel>
          <FTabPanel label={'hello2'} tabKey={'hello2'}>0000000000000000000000000</FTabPanel>
        </FTabs>
        {/* <FTabs controller={tabController}></FTabs> */}
        {/* <FTabPanel label={'hello'} tabKey={'hello'}>asdsad</FTabPanel> */}
      </div>

      <button onClick={() => tabController.setTabKey('hello2')}>asd</button>
    </>
  );
}

export default App;
