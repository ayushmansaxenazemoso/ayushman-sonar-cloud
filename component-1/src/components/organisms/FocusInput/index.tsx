


import React, { useEffect, useRef } from 'react';

// const FocusNow=({text})=>{
    
//     let firstLetter=text[0];
//     let restString=text.slice(1);

//     return (
//         <p><b>{firstLetter}</b>{restString}</p>
        
//     )

// }






interface FocusProps{
    text:string
}

const Focus:React.FC<FocusProps>=({text})=>{

    let firstLetter=text[0];
    let restString=text.slice(1);
   
    const htmlContent = `
    <p><b>${firstLetter}</b>${restString}</p>
    <input id="myInput" onload="document.getElementById('myInput').focus()" />
  `;

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;


}






// const Focus: React.FC<FocusProps> = ({ text }) => {

//     const inputRef = useRef<HTMLInputElement>(null);
  
//     const firstLetter = text[0];
//     const restString = text.slice(1);
  
//     useEffect(() => {
//       if (inputRef.current) {
//         inputRef.current.focus();
//       }
//     }, []);
  
//     return (
//       <div>
//         <p><b>{firstLetter}</b>{restString}</p>
//         <input ref={inputRef} />
//       </div>
//     );
//   };
  


  export default Focus;
