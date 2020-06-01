import React from 'react';
import './App.css'

//요소를 변수로 생성 후 추가해도 된다.
let helloElement = <div class="test2">Div 태그</div>
class MyShop extends React.Component {
    render() {
        return(
            <div>
                {helloElement}
                {helloElement}
            </div>
        )
    }

}
export default MyShop;