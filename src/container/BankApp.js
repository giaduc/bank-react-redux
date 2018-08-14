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
    // TODO NaN handle
    this.props.onDeposit(this.refs.amount.value);
    this.refs.amount.value = "";
  }

  handleWithdraw() {
    // TODO NaN handle
    this.props.onWithdraw(this.refs.amount.value);
    this.refs.amount.value = "";
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
        <h1>your balance is ₨{balance.toFixed(2)}</h1>
        <div className="atm">
          <input type="text" placeholder="enter amount" ref="amount" />
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
