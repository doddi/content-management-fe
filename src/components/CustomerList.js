import React from 'react';
import { connect } from 'react-redux';

import { fetchCustomers } from '../actions/index';

class CustomerList extends React.Component {
  componentDidMount() {
    this.props.fetchCustomers(0);
  }

  render() {
    const customerList = this.props.customers.map(customer => {
      return (
        <div key={customer.id}>
          {customer.firstName} {customer.lastName}
        </div>
      );
    });
    return <div>{customerList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    customers:
      Object.entries(state.customers).length === 0
        ? []
        : state.customers.content
  };
};

export default connect(
  mapStateToProps,
  { fetchCustomers }
)(CustomerList);
