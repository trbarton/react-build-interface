import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import Nav, {
  AkContainerTitle,
  AkNavigationItem,
  presetThemes,
  createGlobalTheme
} from '@atlaskit/navigation';
import { colors } from '@atlaskit/theme';

import BitbucketPipelinesIcon from '@atlaskit/icon/glyph/bitbucket/pipelines';
import BitbucketBuildsIcon from '@atlaskit/icon/glyph/bitbucket/builds';
import SearchIcon from '@atlaskit/icon/glyph/search';
import CreateIcon from '@atlaskit/icon/glyph/add';
import Icon from '@atlaskit/icon';
import ShipIcon from '@atlaskit/icon/glyph/ship';
import ArrowleftIcon from '@atlaskit/icon/glyph/arrow-left';

import CreateDrawer from '../components/CreateDrawer';
import SearchDrawer from '../components/SearchDrawer';
import HelpDropdownMenu from '../components/HelpDropdownMenu';
import AccountDropdownMenu from '../components/AccountDropdownMenu';
import atlaskitLogo from '../images/atlaskit.png';
import PageTitle from './PageTitle';
import { L3Glyph } from './L3Glyph';

const createThemeDiffActive = function () {
  let theme = createGlobalTheme(colors.T50, colors.T400);
  theme.item.selected.background = '#0282a0';
  console.log(theme);
  return theme;
}

const themes = {
  global: {
    globalTheme: presetThemes.global,
    containerTheme: presetThemes.global,
  },
  container: {
    globalTheme: presetThemes.global,
    containerTheme: presetThemes.container,
  },
  settings: {
    globalTheme: presetThemes.settings,
    containerTheme: presetThemes.settings,
  },
  custom: {
    globalTheme: {
      ...presetThemes.global,
      ...createGlobalTheme(colors.N0, colors.T500),
    },
    containerTheme: {
      ...presetThemes.global,
      ...createThemeDiffActive(),
      // ...createGlobalTheme(colors.T50, colors.T400),
    }
  },
};

export default class StarterNavigation extends React.Component {
  state = {
    navLinks: [
      ['/builds', 'Builds', BitbucketBuildsIcon],
      ['/runningbuilds', 'Running Builds', BitbucketPipelinesIcon],
      ['/newbuild', 'New Build', CreateIcon],
    ]
  };

  static contextTypes = {
    navOpenState: PropTypes.object,
    router: PropTypes.object,
  };

  openDrawer = (openDrawer) => {
    this.setState({ openDrawer });
  };

  shouldComponentUpdate(nextProps, nextContext) {
    return true;
  };

  render() {
    console.log(themes);
    const backIcon = <ArrowleftIcon label="Back icon" size="medium" />;
    // const globalPrimaryIcon = <AddonIcon label="L3 ASV icon" size="xlarge" />;
    const globalPrimaryIcon = <Icon glyph={L3Glyph} label="L3 ASV icon" size="xlarge" />;
    themes.custom.containerTheme.item.active.background = '#0282a0'

    return (
      <Nav
        isOpen={this.context.navOpenState.isOpen}
        width={this.context.navOpenState.width}
        onResize={this.props.onNavResize}
        containerHeaderComponent={() => (
          <AkContainerTitle
            icon={<ShipIcon label="L3 ASV"/>}
            text="L3 ASV"
          />
        )}
        globalPrimaryIcon={globalPrimaryIcon}
        globalPrimaryItemHref="/"
        hasBlanket
        globalTheme={themes.custom.globalTheme}
        containerTheme={themes.custom.containerTheme}
        globalAccountItem={AccountDropdownMenu}
        globalCreateIcon={<CreateIcon label="Create icon" />}
        globalHelpItem={HelpDropdownMenu}
      >
        {
          this.state.navLinks.map(link => {
            const [url, title, Icon] = link;
            return (
              <Link key={url} to={url} style={{ textDecoration: 'none' }}>
                <AkNavigationItem
                  icon={<Icon label={title} size="medium" />}
                  text={title}
                  isSelected={this.context.router.isActive(url, true)}
                />
              </Link>
            );
          }, this)
        }
      </Nav>
    );
  }
}
