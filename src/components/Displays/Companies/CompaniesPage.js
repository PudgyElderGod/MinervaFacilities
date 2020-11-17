import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../../Session';
import { CompanyList, CompanyDetails } from './index';
import * as ROUTES from '../../../constants/routes';

const CompaniesPage = () => (
  <div>
    <div className="jumbotron paral paralsec">
      <h1 className="display-8 text-center mb-3">Companies</h1>
    </div>
    <p>The Companies Page is accessible by every signed in user.</p>
    <div className="container">
    <Switch>
      <Route exact path={ROUTES.COMPANIES} component={CompanyList} />
      <Route exact path={ROUTES.COMPANY_DETAILS} component={CompanyDetails} />
    </Switch>
    </div>
  </div>
);

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(CompaniesPage);
