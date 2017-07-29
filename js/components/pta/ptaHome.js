import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Linking, Image, View, TouchableOpacity,  Dimensions,  Platform, Slider  } from 'react-native';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';
import { Grid, Col, Row, Container, Header, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';

import Modal from 'react-native-simple-modal';
import Swiper from 'react-native-swiper';
import { openDrawer } from '../../actions/drawer';

import HeaderContent from './../headerContent/';

import styles from './styles';

const primary = require('../../themes/variable').brandPrimary;
const deviceWidth = Dimensions.get('window').width;


class ptaHome extends Component {

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
                      <Image source={require('../../../images/sais.edu.sg/pta_page_logo.jpg')} style={styles.ptaLogo}>
                    </Image>
                  </View>
                  <View style={{ backgroundColor: '#fff' }}>
                    <View style={styles.newsContent}>
                          <Grid style={{ paddingBottom: 20 }}>
                            <Col style={{ flexDirection: 'row' }}>
                              <TouchableOpacity>
                                <Text style={styles.newsLink}>PTA</Text>
                              </TouchableOpacity>
                              <Icon name="ios-time-outline" style={styles.timeIcon} />
                              <Text style={styles.newsLink}></Text>
                            </Col>
                            <Col>
                              <TouchableOpacity style={styles.newsTypeView}>
                                <Text style={styles.newsTypeText}></Text>
                              </TouchableOpacity>
                            </Col>
                          </Grid>
                      <Text style={styles.newsHeader}>
                          STAMFORD PTA organises many exciting free events and activities throughout the year such as our famous International Fiesta, Halloween and Christmas celebrations. We support and co-ordinate charity events including student led charities and we manage the Lions Den store, PTA Parent Connection social groups and PTA Country Ambassadors.
                      </Text>


                    <View style={{ padding: 20 }}>
                      <View style={styles.newsCommentContainer}>
                        <Text style={styles.newsComment}>
                          This is your STAMFORD PTA so make the most of it and have fun!!!
                          </Text>

                      </View>
                    </View>


                    <Text style={styles.newsHeader}>
                    Here are some connection groups to get you started
                    </Text>



                  <TouchableOpacity onPress={() => { this._handleOpenWithLinking('fb://profile/1502279483424893'); }}>
                     <View style={{ padding: 20 }}>
                       <View style={styles.connectionCommentContainer}>
                         <Text style={styles.connectionComment}>
                           IDEAS @Stamford
                           </Text>
                       </View>
                     </View>
                  </TouchableOpacity>

                   <View style={{ padding: 20 }}>
                     <View style={styles.connectionCommentContainer}>
                       <Text style={styles.connectionComment}>
                         Get Fit - SAIS
                         </Text>
                     </View>
                   </View>



                   <View style={{ padding: 20 }}>
                     <View style={styles.connectionCommentContainer}>
                       <Text style={styles.connectionComment}>
                         SAIS Book Club
                         </Text>

                     </View>
                   </View>

  </View>

                    <Button
                            title="Open URL with ReactNative.Linking"
                            onPress={this._handleOpenWithLinking}
                            style={styles.button}
                          />


                    <View style={styles.wrapper}>
                      <Swiper
                        height={230}
                        width={deviceWidth + 5}
                        loop
                        dot={<View style={styles.swiperDot} />}
                        activeDot={<View
                          style={styles.swiperActiveDot}
                          showsButtons
                        />}
                      >
                        <View style={styles.slide}>
                          <Image style={styles.newsPoster} source={require('../../../images/sais.edu.sg/lionsDen_product1.jpg')} />
                        </View>
                        <View style={styles.slide}>
                          <Image style={styles.newsPoster} source={require('../../../images/sais.edu.sg/lionsDen_product2.jpg')} />
                        </View>
                        <View style={styles.slide}>
                          <Image style={styles.newsPoster} source={require('../../../images/sais.edu.sg/lionsDen_product3.jpg')} />
                        </View>
                        <View style={styles.slide}>
                          <Image style={styles.newsPoster} source={require('../../../images/sais.edu.sg/lionsDen_product4.jpg')} />
                        </View>
                      </Swiper>
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

export default connect(mapStateToProps, bindAction)(ptaHome);
