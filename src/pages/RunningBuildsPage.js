import React, { Component } from 'react';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';

export default class RunningBuildsPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <PageTitle>Running Builds</PageTitle>
        <MainSection />
      </ContentWrapper>
    );
  }
}
