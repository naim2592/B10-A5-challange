const noakhaliBtn=document.getElementById('noakhali-btn')
const feniBtn=document.getElementById('feni-btn')
const quotaBtn=document.getElementById('quota-btn')
const  historyPart=document.getElementById('history')
const  donationPart=document.getElementById('donation-part')
const  donationBtn=document.getElementById('donation-btn')
const historyBtn=document.getElementById('history-btn')
const blogBtn=document.getElementById('blog-btn')




function inputValue(id){
 const value=document.getElementById(id)
 const nValue=parseFloat(value.value)
 return nValue
}
function textValue(id){
    const value=document.getElementById(id).innerText
    const nValue=parseFloat(value)
    return nValue

}
// 3 donation till
let feniDonation   =textValue('f-amount')
let quotaDonation   =textValue('q-amount')
let noakhaliDonation=textValue('n-amount')
// universal amount that will reduce
let remainAmount=textValue('remain-amount')



// first card
noakhaliBtn.addEventListener('click',function(){

    const donationAmount=inputValue('noakhali-input')
    
    
    if ( typeof donationAmount !== 'number' || isNaN(donationAmount) || donationAmount <= 0) {
        alert('Invalid Donation Amount');
        
        return;
    }

       
     noakhaliDonation=donationAmount+noakhaliDonation
    document.getElementById('n-amount').innerText=noakhaliDonation
    remainAmount=remainAmount-donationAmount
    document.getElementById('remain-amount').innerText=remainAmount
   const div=document.createElement('div')
   div.innerHTML=`
         <div class="p-8 border rounded-xl shadow-sm mt-5 space-y-3">
                <p class="font-bold text-[20px]">${donationAmount} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</p>
                <p class="text-[#111111B3] font-light">Date : ${new Date()} </p>
             </div>
   `
    historyPart.insertBefore(div,historyPart.firstChild)


})
// second card
feniBtn.addEventListener('click',function(){

    const donationAmount=inputValue('feni-input')
    
    if ( typeof donationAmount !== 'number' || isNaN(donationAmount) || donationAmount <= 0) {
        alert('Invalid Donation Amount');
        
        return;
    }
     feniDonation=donationAmount+feniDonation
    document.getElementById('f-amount').innerText=feniDonation
    remainAmount=remainAmount-donationAmount
    document.getElementById('remain-amount').innerText=remainAmount
   const div=document.createElement('div')
   div.innerHTML=`
         <div class="p-8 border rounded-xl shadow-sm mt-5 space-y-3">
                <p class="font-bold text-[20px]">${donationAmount} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh</p>
                <p class="text-[#111111B3] font-light">Date : ${new Date()} </p>
             </div>
   `
    historyPart.insertBefore(div,historyPart.firstChild)

})
// third card


// document.getElementById('quota-input').addEventListener('input',function(event){
//     let inputMan=event.target.value
    
//     let numbers='0123456789'
// for(const number of numbers){

//     if(inputMan.includes(number)==false){
//         noakhaliBtn.removeAttribute("onclick")
//         console.log("hi");
        
//    }}
// })
quotaBtn.addEventListener('click',function(){

    const donationAmount=inputValue('quota-input')
    
    if ( typeof donationAmount !== 'number' || isNaN(donationAmount) || donationAmount <= 0) {
        alert('Invalid Donation Amount');
        
        return;
    }
     quotaDonation=donationAmount+quotaDonation
    document.getElementById('q-amount').innerText=quotaDonation
    remainAmount=remainAmount-donationAmount
    document.getElementById('remain-amount').innerText=remainAmount
   const div=document.createElement('div')
   div.innerHTML=`
         <div class="p-8 border rounded-xl shadow-sm mt-5 space-y-3">
                <p class="font-bold text-[20px]">${donationAmount} Taka is Donated for Aid for Injured in the Quota Movement</p>
                <p class="text-[#111111B3] font-light">Date : ${new Date()} </p>
             </div>
   `
    historyPart.insertBefore(div,historyPart.firstChild)

})
// donate and history

donationBtn.addEventListener('click',function(){
    donationPart.classList.remove('hidden')
    historyPart.classList.add("hidden")
    donationBtn.classList.add('bg-[#B4F461]')
    historyBtn.classList.remove('bg-[#B4F461]')
    historyBtn.classList.add('btn-outline')
    donationBtn.classList.remove('btn-outline')
})

historyBtn.addEventListener('click',function(){
    historyPart.classList.remove("hidden")
    
    donationPart.classList.add('hidden')
    historyBtn.classList.add('bg-[#B4F461]')
    donationBtn.classList.remove('bg-[#B4F461]')
    historyBtn.classList.remove('btn-outline')
    donationBtn.classList.add('btn-outline')
})

// blog
blogBtn.addEventListener('click',function(){
     window.location.href='faq.html'
})
