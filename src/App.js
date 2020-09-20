import React, {useState, useEffect} from "react";
import Number from "./components/Number";
import CountButton from "./components/CountButton";
import styled from "styled-components";
import {connect} from 'react-redux';
import * as counterActions from './store/reducer';
import {bindActionCreators} from 'redux';

const Wrapper = styled.div`
  margin : 0 auto;
  display : flex;
  flex-direction : column;
  align-items : center;
  width : 100px;
  margin-top : 100px;
`;

const ButtonWrapper = styled.div`
  width : 100%;
  display : flex;
  justify-content : space-between;
  margin-bottom : 50px;
`;

class App extends React.Component{
  state = {
    phone : []
  };

  async componentDidMount(){
    try{
      const res = await fetch('http://127.0.0.1:8000/api/');
      const phone = await res.json();
      this.setState({
        phone
      });
    } catch(e){
      console.log(e);
    }
  }

  render() {
    return(
      <div>
        <h2>HEllo</h2>
        {this.state.phone.map(item=>(
          <div>
            <h1>{item.name}</h1>
            <h1>{item.phone}</h1>
          </div>
        ))}
      </div>
    )
  }

}

export default App;
// const App = ({number, counterActions}) => {
    
//     const [phonebook, setPhonebook] = useState(0)

 

//     return (
// 			<Wrapper>
//         <ButtonWrapper>
//           <CountButton onClick={()=>counterActions.increase(number+1)} text="+"/>
//           <CountButton onClick={()=>counterActions.decrease(number-1)} text="-"/>
//         </ButtonWrapper>
//         <Number number={number} />
//       </Wrapper>
//     );
//   }

// const mapStateToProps = state => ({
//   number : state.number
// })

// const mapDispatchToProps = dispatch => ({
//   counterActions : bindActionCreators(counterActions, dispatch)
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);