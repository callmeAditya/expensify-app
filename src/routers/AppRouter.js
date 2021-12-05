
import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
    NavLink
} from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import CreateDashboardPage from '../components/CreateDashboardPage'
import EditPage from '../components/EditPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
// import HeaderP from '../components/HeaderP'
// import HomeP from '../components/HomeP'
// import Portfolio from '../components/Portfolio'
// import ContactP from '../components/ContactP'


const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={CreateDashboardPage} exact={true} />
                <Route path={"/edit/:id"} component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
)

/*
const AppPortfolio = () => (
    <BrowserRouter>
        <div>

            <Switch>
                <Route path="/" component={HomeP} exact={true} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={ContactP} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

*/

export default AppRouter
// export default AppPortfolio
