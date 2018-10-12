'use strict';

import React from 'react';
import Counter from '../Counter';

import { EMITTER } from './../../emitter';

class ResearchForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            children: 1
        }
    }

    settingChange (name, value) {
        console.log('name, value :', name, value);
        this.setState({
            [name] : value
        })
    }

    submit () {
        EMITTER.emit('researchFormSubmit', this.state);
    }

    children () {
        const childrenCount = this.state.children;
        const children = [];

        for (let i = 0; i < childrenCount; i++) {
            children.push(
                <div className="setting" key={i}>
                    <span>Ребенок {i + 1}</span>
                    <Counter name={`child-${i}`} min={0} onChange={ (name, value) => this.settingChange(name, value) }/>
                </div>
            );
        }

        return children;
    }

    render () {
        return (
            <div className="Research">
                <div className="date">
                    <input type="date" defaultValue="DATE" onChange={(e) => { this.setState({dateTo: e.target.value})} } />
                    <input type="date" defaultValue="DATE" onChange={(e) => { this.setState({dateFrom: e.target.value})} } />
                </div>

                <div className="other">
                    <input type="text" defaultValue="Other" onChange={(e) => { this.setState({other: e.target.value})} } />

                    <div className="other-settings">
                        <div className="setting">
                            <span>Взрослые</span>
                            <Counter name="adults" min={0} initial={2} onChange={ (name, value) => this.settingChange(name, value) }/>
                        </div>

                        <div className="setting">
                            <span>Дети</span>
                            <Counter name="children" min={0} initial={this.state.children} onChange={ (name, value) => this.settingChange(name, value) }/>
                        </div>

                        { this.state.children ? <hr /> : '' }

                        { this.children() }


                    </div>
                </div>

                <div>
                    <button onClick={() => this.submit()}>НАЙТИ</button>
                </div>
            </div>
        );
    }
}

export default ResearchForm;