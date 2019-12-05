import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ExperiencePage from '../pages/ExperiencePage';
import ProjectsPage from '../pages/ProjectsPage';
import DesignsPage from '../pages/DesignsPage';
import { Navigation } from '../components/common/Navigation';
import Project from '../components/projects/Project';
import * as routes from '../constants/routes';
import { USESAFER_PROJECT_INFO, HS_GMB_PROJECT_INFO, CSC_VANCOUVER_PROJECT_INFO, ESS_UVIC_PROJECT_INFO } from '../constants/projects';

export class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Switch>
          {/* Main Routes */}
          <Route exact path={routes.HOME} component={HomePage} />
          <Route exact path={routes.EXPERIENCE} component={ExperiencePage} />
          <Route exact path={routes.DESIGNS} component={DesignsPage} />
          <Route exact path={routes.PROJECTS} component={ProjectsPage} />
          {/* Project Subroutes */}
          <Route exact path={routes.PROJECT_CSC} render={() => <Project project={CSC_VANCOUVER_PROJECT_INFO} />} />
          <Route exact path={routes.PROJECT_USESAFER} render={() => <Project project={USESAFER_PROJECT_INFO} />} />
          <Route exact path={routes.PROJECT_HS_GMB} render={() => <Project project={HS_GMB_PROJECT_INFO} />} />
          <Route exact path={routes.PROJECT_ESS} render={() => <Project project={ESS_UVIC_PROJECT_INFO} />} />
        </Switch>
      </Fragment>
    );
  }
}

export default Routes;
