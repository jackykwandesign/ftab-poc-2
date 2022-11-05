import React, { ReactElement, ReactNode, useEffect, useMemo, useState } from 'react'

export const FAutoConvertArray = <T,>(data: T | T[] | null | undefined): T[] => {
    if (!data || data === null) {
        return []
    }
    return Array.isArray(data) ? data : [data];
};

interface TabController {
    tabKey: string
    setTabKey: (key: string) => void
}
export const useTabConroller = (props?: { initKey?: string }): TabController => {
    const { initKey } = props ?? {}
    const [tabKey, setTabKey] = useState<string>(initKey ?? "")
    const controller: TabController = {
        tabKey,
        setTabKey
    }
    return controller
}

interface FTabsProps {
    children?: ReactElement<FTabPanelProps> | ReactElement<FTabPanelProps>[]
    controller?: TabController
    disablePanelHeader?: boolean
}
export function FTabs(props: FTabsProps) {
    const { children, controller: remoteController, disablePanelHeader = false } = props
    const localTabController = useTabConroller()
    const controller = useMemo(() => {
        if (remoteController) {
            return remoteController
        }
        return localTabController
    }, [remoteController, localTabController])

    const panels = FAutoConvertArray(children)
    const panelProps = panels.map(e => e.props)

    useEffect(() => {
        if (controller.tabKey === "" && panelProps.length > 0) {
            controller.setTabKey(panelProps[0].tabKey)
        }
    }, [panelProps, controller])

    return (
        <div>
            {/* Tab Header */}
            {disablePanelHeader ? undefined : <FTabDefaultHeader controller={controller} panelProps={panelProps} />}
            {/* Tab Panel */}
            {panels.map(e => {
                const { tabKey } = e.props
                if (tabKey === controller.tabKey) {
                    return e
                }
                return undefined
            })}
        </div>
    )
}

interface FTabHeaderProps {
    controller: TabController
    panelProps: FTabPanelProps[]
}
export const FTabDefaultHeader = (props: FTabHeaderProps) => {
    const { controller, panelProps } = props
    return <div>
        {panelProps.map(e => {
            const isSelected = controller.tabKey === e.tabKey
            return (
                <button key={e.tabKey} onClick={() => controller.setTabKey(e.tabKey)} style={{
                    color: isSelected ? "red" : "black"
                }}>{e.label}</button>
            )
        })}
    </div>
}

interface FTabPanelProps {
    label: string
    tabKey: string
    children?: ReactNode
}
export function FTabPanel(props: FTabPanelProps) {
    const { children } = props
    return (
        <div>{children}</div>
    )
}
