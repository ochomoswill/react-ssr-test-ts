import React from 'react'
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import {Box, Group, MantineProvider, NavLink} from "@mantine/core";

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages: any = import.meta.glob('./pages/*.tsx', {eager: true})

const routes = Object.keys(pages).map((path: any) => {
    const name = path.match(/\.\/pages\/(.*)\.tsx$/)[1]
    return {
        name,
        path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
        component: pages[path].default,
    }
})

export function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (url: string) => url === location.pathname;
    return (
        <>


            <MantineProvider withGlobalStyles withNormalizeCSS>
                <Group align={'flex-start'} style={{width: '100%'}}>
                    <nav>
                        <Box w={240} component={'ul'}>
                            {routes.map(({name, path}) => {
                                return (
                                    <NavLink
                                        active={isActive(path)}
                                        key={path}
                                        label={name}
                                        onClick={() => navigate(path)}
                                    />
                                )
                            })}
                        </Box>
                    </nav>

                    <section style={{flex: 1, height: '100%', padding: 24, background: 'lightgray'}}>
                        <Routes>
                            {routes.map(({path, component: RouteComp}) => {
                                return <Route key={path} path={path} element={<RouteComp/>}></Route>
                            })}
                        </Routes>
                    </section>
                </Group>
            </MantineProvider>

        </>
    )
}