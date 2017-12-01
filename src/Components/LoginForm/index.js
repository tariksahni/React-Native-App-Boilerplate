import React, { Component } from "react";
import { Text, Image, View } from "react-native";
import { connect } from "react-redux";
import InputField from "../InputField";
import Button from "../Button";
import Spinner from "../Spinner";
import CardSection from "../CardSection";
import { emailChange, passwordChange, loginUser } from "../../Actions/Auth";
import { styles } from "./styles";

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChange(text);
  };

  onPasswordChange = text => {
    this.props.passwordChange(text);
  };

  onButtonPress = () => {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  };

  render() {
    const renderButton = this.props.loading ? (
      <Spinner size="large" />
    ) : (
      <Button onPress={this.onButtonPress}>Login</Button>
    );
    return (
      <View style={styles.mainContainer}>
        <Image
          source={require("../../assets/Images/bg.jpg")}
          style={styles.imageContainer}
        />
        <View style={styles.cardContainer}>
          <CardSection>
            <InputField
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <InputField
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange}
              value={this.props.password}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>{this.props.error}</Text>

          {renderButton}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

const mapDispatchToProps = {
  emailChange,
  passwordChange,
  loginUser
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
