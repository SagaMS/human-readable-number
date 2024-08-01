 module.exports = function toReadable (number) {
// function toReadable (number) {    
    const zerotoNineteen = ["zero", "one",
        "two", 'three', 'four', 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
        'eighteen', 'nineteen'];

    const dozens =[ 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
        
  if(number<=19){
    return zerotoNineteen[number];
  }else if(number<100){
    if (number%10===0){
        return dozens[(number/10)-2];
    }else{
        return  dozens[Math.floor((number/10)-2)]+ ' ' + zerotoNineteen[number%10];
    }
    }else{
        if (number%100===0){
        return zerotoNineteen[number/100] + ' hundred';
    }else if(10<=(number%100) && (number%100)<=19){
        return  zerotoNineteen[Math.floor(number/100)] + ' hundred ' + zerotoNineteen[number%100];
        
    }else if(number%10===0){
        return  zerotoNineteen[Math.floor(number/100)] + ' hundred '+ dozens[(((number/10)%10)-2)];
    }else{
        if(((Math.floor(number/10))%10) ==0){
            return zerotoNineteen[Math.floor(number/100)] + ' hundred ' + zerotoNineteen[number%100]
        }else{

            return zerotoNineteen[Math.floor(number/100)] + ' hundred '+ 
            dozens[((Math.floor(number/10)%10)-2)] + " " + zerotoNineteen[(number%100)%10];
    }
    }
    }
  }




