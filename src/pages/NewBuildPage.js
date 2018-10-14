import React, { Component } from 'react';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
import LayoutExample from '../components/NewBuildForm';

export default class NewBuildPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <PageTitle>New Build</PageTitle>
        <LayoutExample />
      </ContentWrapper>
    );
  }
}
