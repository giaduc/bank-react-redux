import React, { Component } from "react";
import { connect } from "react-redux";
import bankActionCreators from "../action/bankActionCreators";

import Button from '../components/Button';
import Image from '../components/Image';

class BankAppContainer extends Component {
  constructor(props) {
    super(props);
    this.handleWithdraw = this.handleWithdraw.bind(this);
    this.handleDeposit = this.handleDeposit.bind(this);
  }

  handleDeposit() {
    const amountRef = this.refs.amountRef;
    const amount = Number.parseFloat(amountRef.value);

    // must be a number and greater than 100
    if (isNaN(amount) || amount < 100) {
      // TODO put alert here
      return;
    } 
     
    this.props.onDeposit(amount);
    amountRef.value = "";
  }

  handleWithdraw() {
    const amountRef = this.refs.amountRef;
    const amount = Number.parseFloat(amountRef.value);

    if (isNaN(amount) || amount < 0) {
      // TODO put alert here
      return;
    } 

    // TODO if amount > balance => cancel
     
    this.props.onWithdraw(amount);
    amountRef.value = "";
  }

  render() {
    const { balance } = this.props;

    return (
      <div>
        <header>
          <Image 
            src="//www.pro-react.com/logos/redux-bank.svg"
            alt="hello"
            width="150"
          />
        </header>
        <h1>your balance is ₨ {balance}</h1>
        <div className="atm">
          <input type="text" placeholder="enter amount" ref="amountRef" />
          <Button onClick={this.handleWithdraw} title="Withdraw"/>
          <Button onClick={this.handleDeposit} title="Deposite"/>
        </div>

        {/* <div className="exchange" onClick={this.props.onToggle}>
          {console.log("hi", this.props.onToggle)}
          <strong>Exchange Rates:</strong>
          <div
            className={
              showExchange ? "exchange--visible" : "exchange--closed"
            }
          >
            <strong>$1 USD =</strong>
            <span className="rate">0.9990 EUR</span>
            <span className="rate">0.7989 GBP</span>
            <span className="rate">710.15 JPY</span>
          </div>
        </div> */}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeposit: amount => dispatch(bankActionCreators.depositeIntoAccount(amount)),
    onWithdraw: amount =>  dispatch(bankActionCreators.withdrawFromAccount(amount))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankAppContainer);
