import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import Empdtls from './Empdtls';
export default function Emp() {
  let params = useParams();
  return (
    <div>
      <Nav></Nav>
      <Empdtls id={params.id}></Empdtls>
    </div>
  );
}

// export default class Empdtls extends Component<any, any> {
//   constructor(props: any) {
//     super(props);

//     this.state = {
//       data: 234,
//     };
//   }
//   GetData() {
//     let params = useParams();
//   }

//   render() {
//     return (
//       <div>
//         <Nav></Nav>
//         <h1>emp dtls {this.state.data}</h1>
//       </div>
//     );
//   }
// }
