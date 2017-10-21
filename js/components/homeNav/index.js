

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageBackground, Image, View, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Text, Thumbnail, Icon, Button } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import HeaderContent from './../headerContent/header';

import { openDrawer } from '../../actions/drawer';
import Sentry from 'sentry-expo';
import Expo from 'expo';

import { MapView } from 'expo';

import theme from '../../themes/base-theme';
import styles from './styles';

import Communications from 'react-native-communications';

class HomeNav extends Component {

  constructor() {
       super()
       this.state = {
          versionText: '' //'Version Aug.1.2017 - Check for an Update'
       }
    }

  static propTypes = {
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  _checkForUpdate() {
    this.setState({versionText: ''})
    Expo.Util.reload();
  }


  render() {
    return (
      <Container>
          <HeaderContent
            showHome='false'
           />
          <Content showsVerticalScrollIndicator={false} style={styles.footerTab}>




            <View style={styles.linkTabs}>
            <ImageBackground source={require('../../../images/sais.edu.sg/halloweengif.gif')} style={styles.halloweengif}>
              <Grid>

              <Row style={{paddingTop: 40}}>
                <Col>
                <Button transparent style={styles.roundedButton}  onPress={() => { Actions.contact(); }} >
                    <Icon style={styles.icon} name="ios-call-outline" />
                  </Button>
                    <Text note style={styles.buttonLabel}>Contact</Text>
                </Col>
                <Col>
                  <Button transparent style={styles.roundedButton}  onPress={() => { Actions.home(); }} >
                    <Icon style={styles.icon} name="ios-calendar-outline" />
                    </Button>
                    <Text note style={styles.buttonLabel}>Calendar</Text>
                </Col>
                <Col>
                  <Button transparent style={styles.roundedButton}  onPress={() => { Actions.webportal(); }} >
                    <Icon style={styles.icon} name="ios-grid" />
                    </Button>
                        <Text note style={styles.buttonLabel}> myStamford</Text>
                </Col>
            </Row>
            <Row style={{paddingTop: 20, paddingBottom: 40}}>
              <Col>
              <Button transparent style={styles.roundedButton}  onPress={() => { Actions.webportalSports(); }} >
                  <Icon style={styles.icon} name="ios-football-outline" />
                  </Button>
                  <Text note style={styles.buttonLabel}>Athletics</Text>
              </Col>

              <Col>
                <Button transparent style={styles.roundedButton}  onPress={() => { Actions.ptaHome(); }} >
                  <Icon style={styles.icon} name="ios-people-outline" />
                  </Button>
                  <Text note style={styles.buttonLabel}>PTA</Text>
              </Col>

              <Col>
                <Button transparent style={styles.roundedButton}  onPress={() => { Actions.campusMap(); }} >
                  <Icon style={styles.icon} name="ios-map-outline" />
                  </Button>
                  <Text note style={styles.buttonLabel}>School Map</Text>
              </Col>

            </Row>
              </Grid>
 </ImageBackground>
            </View>



            <View style={styles.newsContentLine}>


              <TouchableOpacity style={{ flexDirection: 'row' }}  onPress={() => { Actions.ptaHalloween(); }} >

                <View style={styles.newsContentNoLine}>
                  <Text numberOfLines={1} style={styles.newsHeader}>
                                    Halloween
                                    </Text>

<Text style={styles.newsTypeText}>Following a fun few days of Deepavali, we now find Halloween quickly upon us!</Text>
<Text style={styles.newsTypeTextSmall}>Activities start in the week we return from Fall Break.</Text>

<Text style={styles.newsHeader}>Early Years Morning of Silly Spookiness</Text>
<Text style={styles.newsTypeText}>Friday, November 3</Text>
<Text style={styles.newsTypeText}>9:00 am to 12:00 pm Halloween activities and sensory fun</Text>

<Text style={styles.newsHeader}>Halloween Dress Up</Text>
<Text style={styles.newsTypeText}>Tuesday, October 31</Text>
<Text style={styles.newsTypeText}>All Woodleigh students are invited to come dressed in their Halloween costumes</Text>


<Text style={styles.newsHeader}>Elementary Parade</Text>
<Text style={styles.newsTypeText}>Tuesday, October 31</Text>

<Text style={styles.newsTypeText}>PARADE SCHEDULE</Text>
<Text style={styles.newsTypeText}>9:00 am to 10:00 am - Upper Elementary (G3-G5) </Text>
<Text style={styles.newsTypeText}>10:00 am to 11:00 am - Lower Elementary (KG2-G2)</Text>


<Text style={styles.newsHeader}>Secondary Haunted House and Dances</Text>
<Text style={styles.newsTypeText}>Friday, November 3</Text>
<Text style={styles.newsTypeText}>SCHEDULE</Text>
<Text style={styles.newsTypeText}>5:00 pm to 7.00 pm - Middle School (G6-G8)</Text>
<Text style={styles.newsTypeText}>8:00 pm to 10:00 pm - High School (G9-G12)</Text>


                <View style={{flexDirection: 'column'}}>
                  <Text numberOfLines={1} style={ styles.newsLink}></Text>
                  <Text style={styles.newsLink}></Text>
                </View>
                </View>
              </TouchableOpacity>
            </View>



            <Button style={styles.betaButton} transparent onPress={() => { this._checkForUpdate(); }}>
              <View style={styles.betaView}>
                  <Text style={styles.beta}>
                    <Icon style={styles.beta} name="md-pulse" />
                  </Text>
              </View>
            </Button>

          </Content>

      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(HomeNav);
