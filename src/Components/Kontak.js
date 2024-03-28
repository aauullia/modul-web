import React from 'react'

class Kontak extends React.Component {
    render(){
        return(
          
          <div>
            <div className="kotak2">
                    <div className="daftar">
                     <p style={{  color: '#f3f1f1'}}>Contact Me</p>
                     </div>
                    </div>
                    
                    <br></br>
            
                    <div className='jarak'>
                         <input type="text" id="Namalengkap" className="form-input2" placeholder="Nama Lengkap" />
                    </div>

                    <div className='jarak'>
                      {/* <input type="label" id="jenis_kelamin" className="form-input" placeholder="Jenis Kelamin" /> */}
                      <select name="umur" id="umur" className='form-input2' placeholder='Umur'>  
            		        <option value="">Umur</option>  
            	        	<option value="15">15</option>  
                        <option value="16">16</option>
                        <option value="17">17</option>  
                        <option value="18">18</option>  
                        <option value="19">19</option>  
                        <option value="20">20</option>  
                        <option value="21">21</option>  
                        <option value="22">22</option>  
                        <option value="23">23</option>  
                        <option value="24">24</option>  
                        <option value="25">25</option>    
                      </select>
                    </div>
              
                    <div className='jarak'>
                      {/* <input type="label" id="jenis_kelamin" className="form-input" placeholder="Jenis Kelamin" /> */}
                      <select name="gender" id="jenis-kelamin" className='form-input2' placeholder='Jenis Kelamin'>  
            		        <option value="">Contact Me In?</option>  
            	        	<option value="Perempuan">WA (081335847007)</option>  
                    		<option value="Laki-laki">Email (aauulia.rahmah@gmail.com)</option>  
                      </select>
                    </div>
            
                    <div className='jarak'>
                      <input type="text" id="message" className="form-input2" placeholder="Message" />
                    </div>
            
                  <div class='jarak2'>
                      <button type="submit" class="buton" className='bcolor'>Submit</button>
                    </div>
                    </div>
                   
        )
    }
}

export default Kontak;