

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

              <TouchableOpacity style={{ flexDirection: 'column' }}  onPress={() => { Actions.ptaEvents(); }} >
                <Image source={require('../../../images/sais.edu.sg/diwali.jpg')} style={styles.storyPhoto} />

              </TouchableOpacity>
            </View>

            <View style={styles.newsContentLine}>


              <TouchableOpacity style={{ flexDirection: 'row' }} >

                <View style={styles.newsContentNoLine}>
                  <Text numberOfLines={1} style={styles.newsHeader}>
                                    Halloween
                                    </Text>

                                    <Text style={styles.newsTypeText}>
                                    It is October and the Halloween Committee
                                    is brewing up some fun!
                                    </Text>
  <Text style={styles.newsTypeText}>
  </Text>



<Text style={styles.newsHeader}>Elementary and Middle School Dress Up</Text>
<Text style={styles.newsTypeText}>Tuesday - October 31 - Parents are welcome</Text>
<Text style={styles.newsTypeText}>9:00am - 10:00am - Upper Elementary Parade  </Text>
<Text style={styles.newsTypeText}>10:00am - 11:00am - Lower Elementary Parade  </Text>

<Text style={styles.newsTypeTextSmall}>A Parade for Elementary students will be held on Stamford Field on October 31. Please send your child in costume but leave masks, weapons and magic potions at home (costumes are not mandatory - please wear school uniforms if not wearing a costume).

* Please be mindful of the heat and PE classes and send a change of clothes*


</Text>
<Text style={styles.newsHeader}>Early Early Years Halloween Activities</Text>
<Text style={styles.newsTypeText}>Friday - November 3 -  Parents are welcome</Text>
<Text style={styles.newsTypeText}>9:00am - 12:00pm The Early Years will be tricked and treated with a morning of silly spookiness</Text>


<Text style={styles.newsTypeTextSmall}>Please send your child in costume but leave masks, weapons and magic potions at home (costumes are not mandatory - wear school uniforms if not wearing a costume).</Text>


<Text style={styles.newsHeader}>Middle School and Senior School </Text>
<Text style={styles.newsTypeText}>Tuesday - October 31 </Text>
<Text style={styles.newsTypeTextSmall}>Costumes to school instead of uniforms OR wear uniform.</Text>
<Text style={styles.newsTypeText}></Text>
<Text style={styles.newsTypeText}>Friday - November 3</Text>


<Text style={styles.newsTypeText}>5:00pm - 7.30pm MS Dance and Haunted House -  Stamford Arena</Text>
<Text style={styles.newsTypeText}>8:00pm – 10:00pm HS Dance and Haunted House –  Adams Cafeteria</Text>
<Text style={styles.newsTypeTextSmall}>Middle School and Senior School - Wear Uniform to school and dress up for dance.</Text>


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
