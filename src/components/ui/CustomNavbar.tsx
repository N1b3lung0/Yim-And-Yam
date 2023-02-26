import React from 'react';
import { useTheme, Navbar, Text, Link, Switch, Dropdown, Avatar } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
export const CustomNavbar = () => {
    const content = ['Customers', 'Pricing', 'Company'];

    const darkMode = useDarkMode(false);
    const { type, isDark } = useTheme();
    return (
        <Navbar isBordered variant="floating">
            <Navbar.Toggle showIn="sm" />
            <Navbar.Brand
                css={{
                    '@sm': {
                        w: '12%',
                    },
                }}
            >
                <Text b color="inherit" hideIn="sm">
                    Snap Marvel
                </Text>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight activeColor="error" hideIn="sm" variant="underline">
                {content.map((option, index) => (
                    <Navbar.Link href="#" key={index}>
                        {option}
                    </Navbar.Link>
                ))}
                The current theme is: {type}
                <Switch checked={darkMode.value} onChange={() => darkMode.toggle()} />
            </Navbar.Content>
            <Navbar.Content
                css={{
                    '@sm': {
                        w: '12%',
                        jc: 'flex-end',
                    },
                }}
            >
                <Dropdown placement="bottom-right">
                    <Navbar.Item>
                        <Dropdown.Trigger>
                            <Avatar
                                bordered
                                as="button"
                                color="warning"
                                size="md"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </Dropdown.Trigger>
                    </Navbar.Item>
                    <Dropdown.Menu
                        aria-label="User menu actions"
                        color="warning"
                        onAction={actionKey => console.log({ actionKey })}
                    >
                        <Dropdown.Item key="profile" css={{ height: '$18' }}>
                            <Text b color="inherit" css={{ d: 'flex' }}>
                                Signed in as
                            </Text>
                            <Text b color="inherit" css={{ d: 'flex' }}>
                                zoey@example.com
                            </Text>
                        </Dropdown.Item>
                        <Dropdown.Item key="settings" withDivider>
                            My Settings
                        </Dropdown.Item>
                        <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                        <Dropdown.Item key="analytics" withDivider>
                            Analytics
                        </Dropdown.Item>
                        <Dropdown.Item key="system">System</Dropdown.Item>
                        <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
                        <Dropdown.Item key="help_and_feedback" withDivider>
                            Help & Feedback
                        </Dropdown.Item>
                        <Dropdown.Item key="logout" withDivider color="error">
                            Log Out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Content>
            <Navbar.Collapse disableAnimation>
                {content.map((item, index) => (
                    <Navbar.CollapseItem key={item} activeColor="warning" isActive={index === 2}>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: '100%',
                            }}
                            href="#"
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
};
