import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button, { ButtonGroup } from '@atlaskit/button';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
import FlagGroupExample from '../components/DemoFlag';
import DemoTable from '../components/DemoTable';

export default class BuildsPage extends Component {
  static contextTypes = {
    showModal: PropTypes.func,
    addFlag: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
  };

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Builds</PageTitle>
        <DemoTable />
      </ContentWrapper>
    );
  }
}
