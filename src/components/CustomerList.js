import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCustomers } from '../actions/index';

class CustomerList extends React.Component {
  componentDidMount() {
    this.props.fetchCustomers(0);
  }

  renderCustomers() {
    return this.props.customers.map(customer => {
      return (
        <div className="item" key={customer.id}>
          <div className="right floated content">
            <div className="ui button primary">Edit</div>
            <div className="ui button negative ">Delete</div>
          </div>
          <i className="large middle aligned icon address card" />
          <div className="content">
            {customer.firstName} {customer.lastName}
            <div className="description">{customer.phoneNumber}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    //TODO Need to check if the role is admin
    return (
      <div style={{ textAlign: 'right' }}>
        <Link to="/customers/new" className="ui button primary">
          Create Customer
        </Link>
      </div>
    );
  }

  render() {
    const customerList = this.renderCustomers();
    return (
      <div>
        <h2>Customers</h2>
        <div className="ui middle aligned divided animated list">
          {customerList}
        </div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    customers: Object.values(state.customers)
  };
};

export default connect(
  mapStateToProps,
  { fetchCustomers }
)(CustomerList);
