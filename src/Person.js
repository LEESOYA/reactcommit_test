import React, {Component} from 'react';

export default class extends Component{
    state = {
        name : '강호동',
        age : '30',
        addr : '서울'
    }
    render() {
        return (
            <div>
                <div className="">
                    이름 : {this.state.name}<br></br>
                    나이 : {this.state.age}<br></br>
                    주소 : {this.state.addr}
                </div>
                <div>
                    이름 : <input type="text" className="form-control" id="name"></input>
                    나이 : <input type="text" className="form-control" id="age"></input>
                    주소 : <input type="text" className="form-control" id="addr"></input>
                    <button type="button" className="btn btn-danger"  onClick={
                    () => {
                        this.setState = {
                            name:this.value(),
                            age: this.value(),
                            addr:this.value()
                        }
                    }
                }>변경</button>
                </div>
            </div>
        )
    }
}