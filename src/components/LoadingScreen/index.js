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
        <img alt="gif loading" src="https://static.wikia.nocookie.net/cuphead7697/images/7/72/Cuphead_befaffled.gif/revision/latest/top-crop/width/300/height/300?cb=20180520212413&path-prefix=pt-br" style={{ width: '100%' }} />
      </Widget.Content>
    </Widget>
  );
}
