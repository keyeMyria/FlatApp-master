import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, View, Platform,TouchableOpacity,Dimensions } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Actions, ActionConst } from 'react-native-router-flux';
import { Container,Content, Text, Switch, Item, ListItem, Input, Radio, Button, Icon, Left, Right, Body, Header } from 'native-base';

import HeaderContent from './../headerContent/';

import styles from './styles';

import * as ActionCreators  from '../../actions';

console.log("ACfromLogin=", ActionCreators);

var { skipLogin } = require('../../actions');

const deviceWidth = Dimensions.get('window').width;
const bg = require('../../../images/BG.png');
const headerLogo = require('../../../images/Header-Logo-White-0001.png');

class Login extends Component {

  static propTypes = {

    openDrawer: PropTypes.func,
    navigation: PropTypes.shape({
      key: PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);

    this.state = {
               selectedRole: 'parent',
               selectedRoleParent: true,
               selectedRoleStaff: false
             }
  }

  doLogin(user,password) {
    Actions.webportal();
  }

  setRole(role) {
    if (role == 'parent') {
      //this.state.selectedRole = 'parent'
      this.state = {
                 selectedRole: 'parent',
                 selectedRoleParent: true,
                 selectedRoleStaff: false
               }
    } else {
      //this.state.selectedRole = 'staff'
      this.state = {
                 selectedRole: 'staff',
                 selectedRoleParent: false,
                 selectedRoleStaff: true
               }
    }

  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
          <HeaderContent/>

        <Content scrollEnabled={true} bounces={false}>
            <Image source={bg} style={styles.background} >

            <View style={styles.bg}>


              <Item rounded style={styles.inputGrp}>
                <Icon name="person" />
                <Input
                  placeholder={this.props.userX.name}
                  onChangeText={(user) => this.props.setUsername(user)}
                  placeholderTextColor="#FFF"
                  style={styles.input}
                />
              </Item>

              <Item rounded style={styles.inputGrp}>
                <Icon name="unlock" />
                <Input
                  placeholder={this.props.userX.password}    //"My Stamford Password"
                  secureTextEntry
                  placeholderTextColor="#FFF"
                  onChangeText={(password) => this.props.setPassword(password)}
                  style={styles.input}
                />
              </Item>

              <ListItem>
                 <Left>
                   <Radio selected={this.state.selectedRoleParent} />
                     <TouchableOpacity  onPress={() => { this.setRole('parent') }} >
                         <Text>Parent</Text>
                 </TouchableOpacity>
   </Left>
   <Right>

                 </Right>

               </ListItem>
               <ListItem>
                 <Left>
                     <TouchableOpacity  onPress={() => { this.setRole('parent') }} >
                   <Radio selected={this.state.selectedRoleStaff} />
                 <Text>Staff</Text>
                        </TouchableOpacity>
                 </Left>
                 <Right>

               </Right>

               </ListItem>

              <Button
                rounded primary block large
                style={styles.loginBtn}
                onPress={() => this.doLogin(this.username,this.password)}
              >
                <Text style={Platform.OS === 'android' ? { fontSize: 16, textAlign: 'center', top: -5 } : { fontSize: 16, fontWeight: '900' }}>LOGIN</Text>
              </Button>

              <View style={styles.otherLinksContainer}>
                <Left>
                </Left>
                <Right>
                </Right>
              </View>
            </View>
          </Image>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators (ActionCreators, dispatch)
};

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  userX: state.user,
  passwordX: state.password
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
