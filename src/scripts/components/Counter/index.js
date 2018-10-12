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
    
    onChangeCallback (count) {
        if (typeof this.props.onChange === 'function') this.props.onChange(this.props.name, count);
    }

    increment () {
        const { max = Infinity, step = 1 } = this.props;
        const current = this.state.count;
        const next = Math.min(current + step, max);
       
        this.setState({
            count: next
        })

        this.onChangeCallback(next);
    }

    decrement () {
        const { min = -Infinity, step = 1 } = this.props;
        const current = this.state.count;
        const next = Math.max(current - step, min);

        this.setState({
            count: next
        })

        this.onChangeCallback(next);
    }

    getLabel(count) {
        if (typeof this.props.getLabel === 'function') return this.props.getLabel(count);
        return count;
    }

    render () {
        const { count } = this.state;

        return (
            <div className="Counter">
                <button onClick={ () => this.decrement() }>-</button>
                <span className="Counter-label">{ this.getLabel(count) }</span>
                <button onClick={ () => this.increment() }>+</button>
            </div>
        );
    }
}

export default Counter;