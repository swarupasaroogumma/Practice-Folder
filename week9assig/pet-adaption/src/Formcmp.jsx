// // import { useState } from "react";

// // function Formcmp(){
// // const[formvalues,setformvalues]=useState({
// //     Petname:"",
// //     Pettype:"",
// //     Breed:"",
// //     Yourname:"",
// //     Email:"",
// //     Phnno:""
// // })


// // function handledata(event){
// //     //SETTING VALUES FROM the input
// //     const{name,value}=event.target;

// //     setformvalues( (c)=>({...c,[name]:value}))

// // }
// // return(
// //     <>
// //     <form>
// //         <label  htmlFor="PetNM">Pet Name</label><br></br>
// //         <input type="text"  id="" name="Petname" value={formvalues.Petname} onChange={handledata} />
// //         <br></br>


// //         <label  htmlFor="Pettype">Pet Type</label><br></br>
// //         <input type="text"  id="Pettype" name="Pettype" value={formvalues.Pettype} onChange={handledata} />
// //         <br></br>

// //         <label  htmlFor="Breed">Breed</label><br></br>
// //         <input type="text"  id="Breed" name="Breed" value={formvalues.Breed} onChange={handledata} />
// //         <br></br>

// //         <label  htmlFor="Yourname">Your Name</label><br></br>
// //         <input type="text"  id="Yourname" name="Yourname" value={formvalues.Yourname} onChange={handledata} />
// //         <br></br>

// //         <label  htmlFor="Email">Email</label><br></br>
// //         <input type="text"  id="Email" name="Email" value={formvalues.Email} onChange={handledata} />
// //         <br></br>
// //         <label  htmlFor="Phnno">Phone Number</label><br></br>
// //         <input type="text"  id="Phnno" name="Phnno" value={formvalues.Email} onChange={handledata} />
// //         <br></br>
        
// //     </form>




// //     </>
// // )

// // }

// // export default Formcmp;

// import { useState } from "react";
// import "./Formcmp.css"; // Import the CSS file

// function Formcmp() {
//   const [formvalues, setformvalues] = useState({
//     Petname: "",
//     Pettype: "",
//     Breed: "",
//     Yourname: "",
//     Email: "",
//     Phnno: ""
//   });
  
// const [selectedOption, setSelectedOption] = useState("option1");

//   function handledata(event) {
//     const { name, value } = event.target;
//     setformvalues((c) => ({ ...c, [name]: value }));
//   }

//   function handleoption(e){
//     setSelectedOption(e.target)
//   }

//   return (
//     <div className="form-container">
//       <h2>Adopt a Pet</h2>
//       <form>
//         <div className="form-group">
//           <label htmlFor="PetNM">Pet Name</label>
//           <input type="text" name="Petname" value={formvalues.Petname} onChange={handledata} />
//         </div>

//         {/* <div className="form-group">
//           <label htmlFor="Pettype">Pet Type</label>
//           <input type="text" name="Pettype" value={formvalues.Pettype} onChange={handledata} />
//         </div> */}




//          <div className="form-group">
//          <label htmlFor="Pettype">
//              <select  value={selectedOption} onChange={handleoption}>
//               <option  value="option1">Option 1</option>
//                 <option  value="option2">Option 2</option>
//                 <option  value="option3">Option 3</option>

//             </select>
           

//           </label>
//           <input type="text" name="Pettype" value={formvalues.Pettype} onChange={handledata} />
          
          
//         </div>



//         <div className="form-group">
//           <label htmlFor="Breed">Breed</label>
//           <input type="text" name="Breed" value={formvalues.Breed} onChange={handledata} />
//         </div>

//         <div className="form-group">
//           <label htmlFor="Yourname">Your Name</label>
//           <input type="text" name="Yourname" value={formvalues.Yourname} onChange={handledata} />
//         </div>

//         <div className="form-group">
//           <label htmlFor="Email">Email</label>
//           <input type="email" name="Email" value={formvalues.Email} onChange={handledata} />
//         </div>

//         <div className="form-group">
//           <label htmlFor="Phnno">Phone Number</label>
//           <input type="tel" name="Phnno" value={formvalues.Phnno} onChange={handledata} />
//         </div>

//         <button type="submit" className="submit-btn">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Formcmp;


import { useState } from "react";
import "./Formcmp.css"; // Import the CSS file

function Formcmp() {
  const [formvalues, setformvalues] = useState({
    Petname: "",
    Pettype: "option1", // Default value for select dropdown
    Breed: "",
    Yourname: "",
    Email: "",
    Phnno: ""
  });

  function handledata(event) {
    const { name, value } = event.target;
    setformvalues((c) => ({ ...c, [name]: value }));
  }

  function handleoption(event) {
    setformvalues((c) => ({ ...c, Pettype: event.target.value })); // Update Pettype state
  }

  return (
    <div className="form-container">
      <h2>Adopt a Pet</h2>
      <form>
        <div className="form-group">
          <label htmlFor="PetNM">Pet Name</label>
          <input type="text" name="Petname" value={formvalues.Petname} onChange={handledata} />
        </div>
        <div className="form-group">
          <label htmlFor="Pettype">Pet Type</label>

          {/* Input box with dropdown options inside */}
          <input 
            type="text" 
            name="Pettype" 
            value={formvalues.Pettype} 
            onChange={handleoption} 
            list="pet-options"
            placeholder="Select or type a pet type"
          />

          {/* Datalist for dropdown options */}
          <datalist id="pet-options">
          <select name="Pettype" value={formvalues.Pettype} onChange={handleoption}>
            <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
           <option value="Rabbit">Rabbit</option>
          </select>
          </datalist>
        </div>



        <div className="form-group">
          <label htmlFor="Breed">Breed</label>
          <input type="text" name="Breed" value={formvalues.Breed} onChange={handledata} />
        </div>

        <div className="form-group">
          <label htmlFor="Yourname">Your Name</label>
          <input type="text" name="Yourname" value={formvalues.Yourname} onChange={handledata} />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input type="email" name="Email" value={formvalues.Email} onChange={handledata} />
        </div>

        <div className="form-group">
          <label htmlFor="Phnno">Phone Number</label>
          <input type="tel" name="Phnno" value={formvalues.Phnno} onChange={handledata} />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Formcmp;
