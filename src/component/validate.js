export const validate = data => {
    const error = {}


    if(!data.name.trim()) {
        error.name = "Name required"
    }
    else {
        delete error.name
    }


    if(!data.email) {
        error.email = "Email required"

    } else if(!/\S+@\S+\.\S+/.test(data.email)) {
        error.email = "Email adress is invalid"
    } else {
        delete error.email
    }


    if(!data.password) {
        error.password = "Password is required"
    } else if (!data.password.length < 6) {
        error.password = "Password need to be 6 characters or more"
    } else {
        delete error.password 
    }

    if (!data.confirmpassword) {
        error.confirmpassword = "Confirm the password"
    } else if (data.confirmpassword !== data.password){
        error.confirmpassword = "Password does not match"
    } else {
        delete error.confirmpassword
    }
    
    if(data.isAccepted) {
      delete error.isAccepted

    } else {
        error.isAccepted = "Accept our regulation"
    }

return error;
}