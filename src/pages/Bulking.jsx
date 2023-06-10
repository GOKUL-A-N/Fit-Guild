import React,{useState} from 'react'

const Bulking = () => {
  var [weight,setWeight]=useState();
  var [mc,setCal] = useState();
  var [bc,setBc] = useState();
  var [pi,setPi]= useState();
  function handleWeight(event){
    setWeight(event.target.value);
  }

  function calculate(event){
    let s=weight*2.2*14;
    let k=s+500;
    let p=weight*2;
    setCal(Math.floor(s));
    setBc(Math.floor(k));
    setPi(Math.floor(p));
    event.preventDefault();
  }
  return (
    <div className='flex p-10 flex-col'>
      <h1 className='heading1 font-extrabold p-3 text-[32px] flex justify-center'>Fit Guild Bulking</h1>
      <h2 className='heading3 text-[20px] font-bold pb-4 pt-4'>What is bulking</h2>
      <p>Bulking refers to the muscle-building phase of a traditional bodybuilding routine. It involves creating a calorie surplus to support muscle growth.

        There are two main phases of the bodybuilding cycle: bulking and cutting.

        During a bulking phase, bodybuilders typically consume additional carbohydrates and protein to maintain a calorie surplus.

        The goal is to use these additional calories to build muscle. A person must strength train during a bulking phase to stimulate muscle growth. Bulking increases muscle mass and body fat.</p>

        <h2 className='pt-4 pb-4 font-bold text-[30px] font-bold heading3'>Calculate your  Calories</h2>
        
        <form onSubmit={calculate} className="flex  flex-col p-0 m-0">
          <label className='pb-2 text-[19px] left-0'>Enter Your Weight</label>
          <input className='p-3 text-black w-full sm:w-[20%] h-10' type='text' placeholder='weight' onChange={handleWeight} value={weight} />
          <button type='submit' className='p-5 m-5 left-0 ml-0 w-full sm:w-[20%] btn third'>Calculate Calories</button>
          <h2 className='text-[20px] font-bold flex '>Your Maintanence Calories  : {mc}</h2>
          <br /> 
          <h2 className='text-[20px] font-bold flex '>Your Bulking Calories  : {bc}</h2>
          <br />
          <h2 className='text-[20px] font-bold flex '>Your  Protien Intake Must be  : {pi}g</h2>
          <h3 className='heading1 text-[18px] pt-4'>*Tip : Increase Your calorie intake according to your exercise</h3>
          <h3 className='heading1 text-[18px] pt-4'>*Tip : Do exercise atleast 4 times a week</h3>
        </form>
        
    </div>
  )
}

export default Bulking