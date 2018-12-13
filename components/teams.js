import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import {
  List,
  ListItem
} from 'react-native-elements';

export class Teams extends Component {
  render() {
    return (
      <List>
      {
        this.props.equipos.map(equipo => (
          <ListItem
            roundAvatar
            avatar={{ uri: equipo.logo }}
            key={equipo.id}
            title={equipo.nombre}
            subtitle={String(equipo.estado)}
            onPress={() => this.props.onSelectTeam()}
          />
        ))
      }
      </List>
    )
  }
}
