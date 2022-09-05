import { Suspense, lazy, ComponentType } from 'react'
import { Routes, Route } from 'react-router-dom'

// 以下為 Pages Lazy Loading
// 可參考 https://reactrouter.com/docs/en/v6/examples/lazy-loading
const Home = lazy(() => import('./pages/Home'))
const MuiStyle = lazy(() => import('./pages/mui-styled'))
const MuiSX = lazy(() => import('./pages/mui-sx'))
const ReactQuery = lazy(() => import('./pages/react-query'))
const TableBasic = lazy(() => import('./pages/react-table/basic'))
const TableFetch = lazy(() => import('./pages/react-table/fetch'))
const ReactFormik = lazy(() => import('./pages/react-formik'))

const SuspenseWrapper = ({
  component: Component,
  ...rest
}: {
  component: ComponentType //代表 functional component 或 class component
}) => {
  return (
    <Suspense fallback={<>...</>}>
      <Component {...rest} />
    </Suspense>
  )
}

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<SuspenseWrapper component={Home} />} />
      <Route path="/mui-sx" element={<SuspenseWrapper component={MuiSX} />} />
      <Route
        path="/mui-styling"
        element={<SuspenseWrapper component={MuiStyle} />}
      />
      <Route
        path="/react-query"
        element={<SuspenseWrapper component={ReactQuery} />}
      />
      <Route
        path="/table-basic"
        element={<SuspenseWrapper component={TableBasic} />}
      />
      <Route
        path="/table-fetch"
        element={<SuspenseWrapper component={TableFetch} />}
      />
      <Route
        path="/react-formik"
        element={<SuspenseWrapper component={ReactFormik} />}
      />
    </Routes>
  )
}

export default Routing
