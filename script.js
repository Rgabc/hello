async function login() {
    const email = document.getElementById('email').value;
    
     console.log(email)
    // Check if the username and password match a stored user
  
    // const user = await storedUsers.find(
        
    //     (row) => {return row.email === email && row.password === password});
    // console.log(user)
   
    if (email === "afsheen") {
      alert(`welcome ${email} angel`);
     
      // You can redirect to another page or perform other actions after successful login
     // window.location.href="./reservation/index.html"; // Replace with the actual path of your profile
     const url="./log/index.html"
     window.open(url);
    
    } else { 
      alert('unknown person and please write name in lower case');
    }
  }