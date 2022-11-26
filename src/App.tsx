import React from 'react'
import FListView from './components/FListView'
import {
    FTabDefaultHeader,
    FTabPanel,
    FTabs,
    useTabConroller,
} from './components/FTab'

function App() {
    const tabController = useTabConroller({ initKey: 'hello1' })

    const peopleList = [
        {
            product: 'Live JSON generator',
            version: 3.1,
            releaseDate: '2014-06-25T00:00:00.000Z',
            demo: true,
            person: {
                id: 12345,
                name: 'John Doe',
                phones: {
                    home: '800-123-4567',
                    mobile: '877-123-1234',
                },
                email: ['jd@example.com', 'jd@example.org'],
                dateOfBirth: '1980-01-02T00:00:00.000Z',
                registered: true,
                emergencyContacts: [
                    {
                        name: 'Jane Doe',
                        phone: '888-555-1212',
                        relationship: 'spouse',
                    },
                    {
                        name: 'Justin Doe',
                        phone: '877-123-1212',
                        relationship: 'parent',
                    },
                ],
            },
        },
        {
            product: 'Live JSON generator',
            version: 3.1,
            releaseDate: '2014-06-25T00:00:00.000Z',
            demo: true,
            person: {
                id: 22222,
                name: 'John Doe',
                phones: {
                    home: '800-123-4567',
                    mobile: '877-123-1234',
                },
                email: ['jd@example.com', 'jd@example.org'],
                dateOfBirth: '1980-01-02T00:00:00.000Z',
                registered: true,
                emergencyContacts: [
                    {
                        name: 'Jane Doe',
                        phone: '888-555-1212',
                        relationship: 'spouse',
                    },
                    {
                        name: 'Justin Doe',
                        phone: '877-123-1212',
                        relationship: 'parent',
                    },
                ],
            },
        },
        {
            product: 'Live JSON generator',
            version: 3.1,
            releaseDate: '2014-06-25T00:00:00.000Z',
            demo: true,
            person: {
                id: 33333,
                name: 'John Doe',
                phones: {
                    home: '800-123-4567',
                    mobile: '877-123-1234',
                },
                email: ['jd@example.com', 'jd@example.org'],
                dateOfBirth: '1980-01-02T00:00:00.000Z',
                registered: true,
                emergencyContacts: [
                    {
                        name: 'Jane Doe',
                        phone: '888-555-1212',
                        relationship: 'spouse',
                    },
                    {
                        name: 'Justin Doe',
                        phone: '877-123-1212',
                        relationship: 'parent',
                    },
                ],
            },
        },
        {
            product: 'Live JSON generator',
            version: 3.1,
            releaseDate: '2014-06-25T00:00:00.000Z',
            demo: true,
            person: {
                id: 44444,
                name: 'John Doe',
                phones: {
                    home: '800-123-4567',
                    mobile: '877-123-1234',
                },
                email: ['jd@example.com', 'jd@example.org'],
                dateOfBirth: '1980-01-02T00:00:00.000Z',
                registered: true,
                emergencyContacts: [
                    {
                        name: 'Jane Doe',
                        phone: '888-555-1212',
                        relationship: 'spouse',
                    },
                    {
                        name: 'Justin Doe',
                        phone: '877-123-1212',
                        relationship: 'parent',
                    },
                ],
            },
        },
    ]
    return (
        <>
            <FTabDefaultHeader
                controller={tabController}
                panelProps={[
                    {
                        label: 'hello',
                        tabKey: 'hello',
                    },
                ]}
            />
            <div>
                <FTabs disablePanelHeader controller={tabController}>
                    <FTabPanel label={'hello'} tabKey={'hello'}>
                        asdasdasdasdasdasdasdasdasd
                    </FTabPanel>
                    <FTabPanel label={'hello1'} tabKey={'hello1'}>
                        111111111111111111111111111
                    </FTabPanel>
                    <FTabPanel label={'hello2'} tabKey={'hello2'}>
                        0000000000000000000000000
                    </FTabPanel>
                </FTabs>
                {/* <FTabs controller={tabController}></FTabs> */}
                {/* <FTabPanel label={'hello'} tabKey={'hello'}>asdsad</FTabPanel> */}
            </div>

            <button onClick={() => tabController.setTabKey('hello2')}>
                asd
            </button>

            <FListView
                datas={peopleList}
                onRenderCard={(data) => {
                    return <div>{data.person.email}</div>
                }}
                mode={'loadMore'}
            ></FListView>
        </>
    )
}

export default App
