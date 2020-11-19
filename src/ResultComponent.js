import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        let {total} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
                <p>{total}</p>
            </div>
        );
    }
}


export default ResultComponent;

