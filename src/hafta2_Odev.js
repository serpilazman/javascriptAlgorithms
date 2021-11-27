//Asal Sayı Bulma

sendNumbers(20,13,14,17,21,23);


let isPrime;

function sendNumbers(...numbers){
    numbers.forEach(function(element){
    const isPrime= checkPrime(element);
        if(isPrime){
            console.log(element +' bir Asal Sayı');
        }
        else{
        console.log(element +' bir Asal Sayı Değil');
        }

    });

}

function checkPrime(number){
    for (let i = 0; i < number; i++) {
        
        if(number<=1){
            return false;
        }
        else{
            for(let i=2; i<number;i++){
                if(number%i==0){
                    return false;
                }                
            }
            return true;
        }
        
    }
    
}
//Arkadaş Sayı Bulma

function findFriensNums(num1,num2){
    let num1Dividers = [];
    let total1=0;

    for(let i=1;i<num1;i++)
    if(num1%i==0){
        num1Dividers.push(i);
    }

    num1Dividers.forEach((number)=>{
        total1 += number;
    });

    let num2Dividers = [];
    let total2=0;

    for(let i=1;i<num2;i++){
        if(num2%i==0){
            num2Dividers.push(i);
        }
    }

    num2Dividers.forEach((number)=>{
        total2 += number;
    });


    if(num1 == total2 && num2 == total1){
        console.log("Bu iki sayı arkadaş sayılardır.");
    }
    else{
        console.log("Bu iki sayı arkadaş sayılar değildirler.");
    }
}

findFriensNums(220,284);

//1000'e kadar ki mükemmel sayılar

function findPerfectNums(){


    for(let i=1;i<=1000;i++){
        let dividersSum=0;
            for(let k=1; k<=i; k++){
                if(i % k == 0){
                
                dividersSum += k;
                }
            }  
            if(dividersSum == i*2){
                
                console.log(i);
            }     
    }
}
findPerfectNums();

//1000'e kadar ki asal sayıları bulma

function findPrimeNumber(number){
    let primeNumbers = [];
    for(let i=2;i<=number;i++){
        for(let k=2;k<i;k++){//En son k bir kez daha artmış oluyor
            if(i%k===0){
                break;
            }
        }
        if(i===k)
        primeNumbers.push(i);
    }
    console.log(primeNumbers);
}
findPrimeNumber(1000);