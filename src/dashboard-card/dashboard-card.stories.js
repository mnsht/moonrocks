import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';

import DashboardCard from './';

import Dialog from '../dialog';

const stories = storiesOf('3. Complex|Dashboard Card', module);

const store = new Store({
  isOpen: false
});

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const avatar = text(
    'Avatar',
    'http://www.ghostofaflea.com/archives/RaptorJesus.jpg',
    'Main'
  );
  const name = text('Name', 'Sam Wilkes', 'Main');
  const hashId = text('Hash ID', 'od8fgd8i', 'Main');

  const financials = {
    balance: '3875.2',
    principal: '3040',
    interest: '835.2',
    withdrawals: '0'
  };

  const toggleDialog = () => store.set({ isOpen: !store.get('isOpen') });

  return (
    <React.Fragment>
      <State store={store}>
        {({ isOpen }) => (
          <Dialog
            heading="Deposit"
            hasBackground
            isOpen={isOpen}
            close={toggleDialog}
          >
            You're making a deposit to {name}
          </Dialog>
        )}
      </State>
      <DashboardCard
        avatar={avatar}
        name={name}
        hashId={hashId}
        financials={financials}
        openDepositDialog={toggleDialog}
        openFacebook={link => console.log('DO FACEBOOK SHARE', link)}
        openTwitter={link => console.log('DO TWITTER SHARE', link)}
        onCopyProfile={link => console.log('DO COPY PROFILE', link)}
      />
    </React.Fragment>
  );
});
