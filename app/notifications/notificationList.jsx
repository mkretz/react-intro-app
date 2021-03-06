import React from 'react';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import NotificationElement from './notificationElement.jsx';

const notificationListStyle = {
  margin: '10 10 10 0',
  height: '70%',
  width: '100%'
};

const NotificationList = ({notifications, onDismiss}) => (
    <Paper style={notificationListStyle} zDepth={1}>
      <List>
        {notifications.map(notification => <NotificationElement onDismiss={onDismiss} key={notification.id} notification={notification} />)}
      </List>
    </Paper>
)

NotificationList.propTypes = {
  notifications: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      text: React.PropTypes.string,
      visible: React.PropTypes.bool
    })
  ).isRequired,
  onDismiss: React.PropTypes.func.isRequired
};

export default NotificationList;
