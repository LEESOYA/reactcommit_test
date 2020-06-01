import React, {Component} from 'react';

export default class extends Component{
    //이벤트 핸들러
    handleClick = () => {
        /**ref 특성은 컴포넌트가 마운팅될때 검포넌트에 대한 참조를 this.ref에 추가된다. */
        this.ref.txtInput1.values="React Study Ref!!";
        this.ref.txtInput1.focus();
    }
    render() {
        return(
            <div>
                <h1>Test Input Tag</h1>
                <input type="text" className="form-control" 
                style={{width:'200px'}} ref="txtInput1">
                </input>
                <button type="button" className="btn btn-success btn-md"
                onClick={this.handleClick.bind(this)}>focus</button>
            </div>
        )
    }
}