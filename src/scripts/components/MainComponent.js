'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { changeFirstName, changeSecondName } from '../store/actions'
import { bindActionCreators } from 'redux';

import Counter from './Counter';

class MainComponent extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            roomsCount    : this.props.roomsCount  || 1,
            adultsCount   : this.props.adultsCount || 1,
            childrenCount : this.props.childrenCount || 1
        }
    }

    updateChildrenCount (count) {
        console.log('update children count');
        this.setState({
            childrenCount: count
        });
    }

    getChildren () {
        const { childrenCount } = this.state;
        const children = [];

        for (let i = 0; i < childrenCount; i++) {
            children.push(<Counter key={i} />)
        }

        return children;
    }


    render () {
        const { 
            firstName,
            secondName,
            changeFirstName,
            changeSecondName
        } = this.props;

        return (
            
            <div>
                Номеров:  <Counter min={0} max={10} />
                Взрослых: <Counter min={0} max={10} />
                Детей {this.state.childrenCount}:    <Counter initial={this.state.childrenCount} min={0} max={10} onChange={count => this.updateChildrenCount(count)}/>


                <hr />

                { this.getChildren() }
            </div>
        );   
    };
}

const putStateToProps = (state) => {
    return {
        firstName: state.firstName,
        secondName: state.secondName
    }
}

const putActionsToProps = (dispatch) => {
    return {
        changeFirstName: bindActionCreators(changeFirstName, dispatch),
        changeSecondName: bindActionCreators(changeSecondName, dispatch)
    }
}

export default connect(putStateToProps, putActionsToProps)(MainComponent)
