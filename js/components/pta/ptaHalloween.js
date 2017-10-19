import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Linking, Image, View, TouchableOpacity,  Dimensions,  Platform, Slider  } from 'react-native';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';
import { Grid, Col, Row, Container, Header, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';

import Modal from 'react-native-simple-modal';
import Swiper from 'react-native-swiper';
import { openDrawer } from '../../actions/drawer';

import HeaderContent from './../headerContent/header/';


import styles from './styles';

const primary = require('../../themes/variable').brandPrimary;
const deviceWidth = Dimensions.get('window').width;

class ptaHalloween extends Component {

  static propTypes = {
    navigation: PropTypes.shape({key: PropTypes.string}),
      username: PropTypes.string
  }

  constructor(props) {
    super(props);


    this.state = {
      animationType: 'slideInDown',
      open: false,
    };

  }

  _handleOpenWithLinking = (sURL) => {
     Linking.openURL(sURL);
  }

  render() {
    return (

      <Container style={{ backgroundColor: '#fff' }}>
          <HeaderContent />

              <Content showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
                  <View >
                      <Image source={require('../../../images/sais.edu.sg/halloweentop.jpg')} style={styles.halloweentop}>
                    </Image>
                  </View>
                  <View style={{ backgroundColor: '#fff' }}>
                    <View style={styles.newsContent}>
                          <Grid style={{ paddingBottom: 20 }}>
                            <Col style={{ flexDirection: 'row' }}>

                              <Icon name="ios-time-outline" style={styles.timeIcon} />
                              <Text style={styles.newsLink}>Activities start in the week we return from Fall Break.</Text>
                            </Col>

                          </Grid>

              <Text style={styles.headerTextIcon}>
              Halloween
            </Text>

                    <Text style={styles.newsTypeText}>Following a fun few days of Deepavali, we now find Halloween quickly upon us!</Text>
                      <Text style={styles.newsTypeTextSmall}>Activities start in the week we return from Fall Break.</Text>

                    <Text style={styles.headerTextIcon}>Early Years Morning of Silly Spookiness</Text>
                    <Text style={styles.newsTypeText}>Friday, November 3</Text>
                      <Text style={styles.newsTypeText}></Text>
    <View style={styles.newsCommentContainer}>
                    <Text style={styles.newsComment}>Pre-Nursery to Kindergarten 1 students will celebrate Halloween at the Early Learning Village. Students will participate in various Halloween activities and sensory fun from 9:00 am to 12:00 pm!  Children may come dressed in their Halloween costumes, but please leave your spooky masks, weapons and magic potions at home. Costumes are not mandatory. Students choosing not to dress up should wear school uniforms to school on the day. </Text>
                    <Text style={styles.newsComment}>Parents are welcome to help out - please contact pta.elv@sais.edu.sg to volunteer.</Text>
    </View>
                    <Text style={styles.headerTextIcon}>Halloween Dress Up</Text>
                    <Text style={styles.newsTypeText}>Tuesday, October 31</Text>
  <Text style={styles.newsTypeText}></Text>
    <View style={styles.newsCommentContainer}>

                    <Text style={styles.newsComment}>All Woodleigh students are invited to come dressed in their Halloween costumes on Tuesday, October 31, but please be reminded to leave your spooky masks, weapons and magic potions at home. We ask parents and students to please be mindful of the heat when choosing Halloween costumes. Students with PE on that day should remember to bring in their PE uniforms.  Costumes are not mandatory. Students choosing not to dress up should wear school uniforms to school on the day. </Text>

    </View>
                    <Text style={styles.headerTextIcon}>Elementary Parade</Text>
                    <Text style={styles.newsTypeText}>Tuesday, October 31</Text>
                    <Text style={styles.newsTypeText}>PARADE SCHEDULE</Text>
                    <Text style={styles.newsTypeText}>9:00 am to 10:00 am - Upper Elementary (G3-G5)</Text>
                    <Text style={styles.newsTypeText}>10:00 am to 11:00 am - Lower Elementary (KG2-G2)</Text>
  <Text style={styles.newsTypeText}></Text>
    <View style={styles.newsCommentContainer}>
<Text style={styles.newsComment}>A parade for Elementary (KG2 to Grade 5) students will be held in the Jefferson Arena on Tuesday, October 31. Parents are invited to watch the parade in the Arena. </Text>
    </View>




                    <Text style={styles.headerTextIcon}>Secondary Haunted House and Dances</Text>
                    <Text style={styles.newsTypeText}>Friday, November 3</Text>

                    <Text style={styles.newsTypeText}>5:00 pm to 7.30 pm - Middle School (G6-G8)</Text>
                    <Text style={styles.newsTypeText}>8:00 pm to 10:00 pm - High SChool (G9-G12)</Text>
                      <Text style={styles.newsTypeText}></Text>
    <View style={styles.newsCommentContainer}>
                    <Text style={styles.newsComment}>Middle School and High School students are in for a special treat. Stamford PTA and Student Council are organizing a spooktacular evening for our Grade 6 to Grade 12 students on Friday, November 3.  Students are to wear their uniforms to school during the day and are invited to dress up for the evening festivities.  </Text>
    </View>







  </View>



                  </View>
                </View>
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
  username: state.username
});

export default connect(mapStateToProps, bindAction)(ptaHalloween);
