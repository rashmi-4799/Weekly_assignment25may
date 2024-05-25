const pincodeInput=document.getElementById('pin-check');
const btn=document.querySelector('#check-btn');
btn.addEventListener('click',function(event){
    event.preventDefault();
    // console.log(pincodeInput.value);
    const pincode=pincodeInput.value
    fetchData(pincode)

})
async function fetchData(pincode){
    console.log("In the function");
    try{
        let url=`https://api.postalpincode.in/pincode/${pincode}`
        console.log(url);
        const response=await fetch(url);
        const data=await response.json();
        const postOffice=data[0].PostOffice
        // console.log(postOffice)
        const post_office=document.querySelector('.post-office-details')
        const mini_post=document.querySelector('.post-office');
        const mazor=document.querySelector('.deliverypost');
        const add=document.createElement('span');
        add.textContent="Address";
        mini_post.appendChild(add);
        const deliveryP=document.createElement('span')
        deliveryP.textContent="Delivery Status";
        mazor.appendChild(deliveryP)
        for(let i=0;i<postOffice.length;i++){
            // console.log(postOffice[i].Name);
            const para=document.createElement('p');
            para.textContent=postOffice[i].Name;
            mini_post.appendChild(para)
            const deliveryStatus=document.createElement('p');
            deliveryStatus.textContent=postOffice[i].DeliveryStatus;
            mazor.appendChild(deliveryStatus)

        }
             
    }catch(error){
        console.log("Error fetching data:",error);
    }
}