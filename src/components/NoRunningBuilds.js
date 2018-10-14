// @flow

import React from 'react';
import EmptyState from '@atlaskit/empty-state';
import exampleImage from '../images/tools.svg';

const props = {
  header: 'No Builds Are Running',
  description: `There are currently no builds running. Start a new build or search for a
    previous build.`,
  imageUrl: exampleImage,
  size: 'narrow',
  maxImageWidth: 250,
  maxImageHeight: 250,
};

export default () => <EmptyState {...props} />;