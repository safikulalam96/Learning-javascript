
const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');

    if(height<0  || isNaN(height)){
        result.innerHTML=`Enter the Correct height to Display BMI`;
    }
    else if(weight<0 || isNaN(weight)){
        result.innerHTML=`Enter the Correct weight to Display BMI`;
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>${bmi}</span>`
        if(bmi<18.6){
            result.innerHTML=`Your BMI is ${bmi} which is Underweight`
        }
        else if(bmi>=18.6 && bmi<=29.8){
            result.innerHTML=`Your BMI is ${bmi} which is Normal`
        }
        if(bmi>=29.9){
            result.innerHTML=`Your BMI is ${bmi} which is Overweight`
        }
    }


})

