import React from 'react';
import './App.css';
import Utama from './Utama';
import Header from './Components/Header';
import Home from './Components/home';


class App extends React.Component {
    render(){
        return(
            <div>
                <Header/>
                <Utama/>
            </div>
        );
    }
}

export default App;










// import React, { Component } from 'react';
// import './App.css';
// import Media from './Components/Media';
// // import Alert from './Components/Alert';
// //import element Alert yang telah dibuat

// //pancasila 
// class App extends Component{
//   render(){
//     return (
//       <header>
//         <div className='title'> PANCASILA </div>
//         <div className='head-text'>
//           <div className='text-on-image'>
//             <strong>Sila Pertama</strong>
//             <br></br>
//             Ketuhanan Yang Maha Esa 
//           </div>
//           <Media image="sila1.png"></Media>
//         </div>

//         <div className='head-text1'>
//           <div className='text-kanan'>
//             <strong>Sila Kedua</strong>
//             <br></br>
//             Kemanusiaan Yang Adil dan Beradab
//           </div>
//           <Media image="sila2.png"></Media>
//         </div>

//         <div className='head-text'>
//           <div className='text-on-image'>
//             <strong>Sila Ketiga</strong>
//             <br></br>
//             Persatuan Indonesia
//           </div>
//           <Media image="sila3.png"></Media>
//         </div>

//         <div className='head-text1'>
//           <div className='text-kanan'>
//             <strong>Sila Keempat</strong>
//             <br></br>
//             Kerakyatan Yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan Perwakilan
//           </div>
//           <Media image="sila4.png"></Media>
//         </div>

//         <div className='head-text'>
//           <div className='text-on-image'>
//             <strong>Sila Kelima</strong>
//             <br></br>
//             Keadilan Sosial Bagi Seluruh Rakyat Indonesia
//           </div>
//           <Media image="sila5.png"></Media>
//         </div>
//         <hr></hr>

//         <div className="kotak">
//           <div className="form-daftar">
//             <p>Form daftar osis</p>
//           </div>
//         </div>
        
//         <br></br>

//         <div className='jarak'>
//              <input type="text" id="Nama" className="form-input" placeholder="Nama" />
//         </div>
  
//         <div className='jarak'>
//           {/* <input type="label" id="jenis_kelamin" className="form-input" placeholder="Jenis Kelamin" /> */}
//           <select name="gender" id="jenis-kelamin" className='form-input' placeholder='Jenis Kelamin'>  
// 		        <option value="">Jenis Kelamin</option>  
// 	        	<option value="Perempuan">Perempuan</option>  
//         		<option value="Laki-laki">Laki-laki</option>  
//           </select>
//         </div>

//         <div className='jarak'>
//           <input type="text" id="alamat" className="form-input" placeholder="Alamat" />
//         </div>

//       <div class='jarak'>
//           <button type="submit" class="buton" className='bcolor'>Submit</button>
//         </div>

//         <hr></hr>


// <div className="App Container">
       
//         <button className="mr-1 btn btn-danger">Button Merah</button> 
//         <br></br>
//         <br></br>
//         <button className="mr-2 btn btn-warning">Button Kuning</button>
//         <br></br>
//         <br></br>
//         <button className="mr-3 btn btn-success">Button Hijau</button>
//         <br></br>
//         <br></br>
//         <button className="mr-4 btn btn-light">Button Putih</button>
//         <br></br>
//         <br></br>
//         <button className="mr-4 btn btn-dark">Button Hitam</button>
//         <br></br>
//         <br></br>
//         </div>

//       </header>

    
//     );
//   }
// }
// export default App;

// //button
// // class App extends Component {
// //   render() {
// //     return (
      
// //       <div className="App container">
        
// //  <button className="mr-1 btn btn-danger">Button Merah</button> 
// //  <button className="mr-2 btn btn-warning">Button Kuning</button>
// //  <button className="mr-3 btn btn-success">Button Hijau</button>
// //  <button className="mr-4 btn btn-light">Button Putih</button>
// //  <button className="mr-4 btn btn-dark">Button Hitam</button>
// //  </div>
     
// //     );
// //   }
// // }
// // export default App;




// // { <Alert type="danger">danger</Alert>
// //         <Alert type="success">success</Alert>
// //         <Alert type="warning">warning</Alert> }


// // <div className="App container"> 
//       // <div className='alert alert-info'> 
//       // <h3 className='text-danger'>Ini Project Pertama React JS</h3> 
//       // <p>Belajar React</p> 
//       // <button className='mr-1 btn btn-success'>Success</button> 
//       // <button className='btn btn-info'>Iya</button> 
//       // </div> 
//       // </div> 
//       //col artinya kolom
      
// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

//  export default App;
