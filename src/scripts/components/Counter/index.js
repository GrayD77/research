'use strict';

import React from 'react';

class Counter extends React.Component {
    constructor (props) {
        super(props);

        const { initial = 0 } = this.props;

        this.state = {
            count : initial
        }
    }

    increment () {
        const current = this.state.count,
            { max = Infinity, step = 1 } = this.props;
        
        this.setState({
            count: Math.min(current + step, max)
        })

        if (typeof this.props.onChange === 'function') this.props.onChange(this.state.count);
    }

    decrement () {
        const current = this.state.count,
            { min = -Infinity, step = 1 } = this.props;

        this.setState({
            count: Math.max(current - step, min)
        })

        if (typeof this.props.onChange === 'function') this.props.onChange(this.state.count);
    }

    getLabel(count) {
        if (typeof this.props.getLabel === 'function') return this.props.getLabel(count);

        return count;
    }

    render () {
        const { count } = this.state;

        return (
            <div>
                <button onClick={ () => this.decrement() }>-</button>
                <span>{ this.getLabel(count) }</span>
                <button onClick={ () => this.increment() }>+</button>
            </div>
        );
    }
}

export default Counter;