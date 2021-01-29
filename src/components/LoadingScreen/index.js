/* eslint-disable linebreak-style */
import React from 'react';
import Widget from '../Widget';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h1>Carregando!</h1>
      </Widget.Header>
      <Widget.Content>
        <img alt="gif loading" src="https://pa1.narvii.com/6500/badbd25038bd44dd7138223221409df6b8d36f64_hq.gif" style={{ width: '100%' }} />
      </Widget.Content>
    </Widget>
  );
}
