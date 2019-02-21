import React from 'react';
import { connect } from 'react-redux';
import Root from '../components/Root';
import { auth } from '../actions/auth';
const RootContainer = props => <Root {...props}/>

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    auth
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)