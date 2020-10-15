import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../../Session';
import { FloorList, FloorDetails } from './index';
import * as ROUTES from '../../../constants/routes';

const FloorsPage = () => (
  <div>
    <h1>Floors Page</h1>
    <p>The Floors Page is accessible by every signed in user.</p>

    <Switch>
      <Route exact path={ROUTES.FLOORS} component={FloorList} />
      <Route exact path={ROUTES.FLOOR_DETAILS} component={FloorDetails} />
    </Switch>
  </div>
);

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(FloorsPage);