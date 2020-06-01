import React, {Component} from 'react';
import img3 from './알밥.jpg';
export default class extends Component{
    render() {
        //스타일을 변수로 지정 할 경우 
        const bStyle = {
            border: '2px dotted red',
            fontSize: '20pt',
            backgroundColor: '#ffffcc'
        };
        const imgStyle = {
            width: '100px',
            height: '100px',
            border: '2px solid orange'
        };
        return (
            <div>
                <b style={bStyle} class="alert alert-success">This is B Tag!!!!</b>
                <img src={img3} alt="" style={imgStyle}></img>
                <br></br>
                {/* 부트스트랩의 클래스명도 사용 가능  index.html에 cdn을 넣었을 경우 */}
                <img src={img3} className="img-circle" alt=""></img>
            </div>
        )
    }
}