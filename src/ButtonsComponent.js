import React, {Component} from 'react';

class ButtonsComponent extends Component {

    render() {
        return (
            <div className="buttons">
                <div className="row1">
                    <button onClick={e => this.props.onClick(e.target.innerText)}>C</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>+/-</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>%</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>÷</button><br/>
                </div>

                <div className="row2">
                    <button onClick={e => this.props.onClick(e.target.innerText)}>7</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>8</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>9</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>x</button><br/>
                </div>

                <div className="row3">
                    <button onClick={e => this.props.onClick(e.target.innerText)}>4</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>5</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>6</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>-</button><br/>
                </div>

                <div className="row4">
                    <button onClick={e => this.props.onClick(e.target.innerText)}>1</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>2</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>3</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>+</button><br/>
                </div>

                <div className="row5">
                    <button onClick={e => this.props.onClick(e.target.innerText)}>0</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>.</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>del</button>
                    <button onClick={e => this.props.onClick(e.target.innerText)}>=</button><br/>
                </div>
            </div>
        );
    }
}


export default ButtonsComponent;
