let signUpButton = document.getElementById('sign_up_button')
document.addEventListener("DOMContentLoaded", function(){
    signUpButton.addEventListener("click", createUser)
})



function createUser(event) {
    event.preventDefault()
    console.log('here')
    panelContainer = document.getElementsByClassName('card')[0]
    panelContainer.style.height="300px";
    document.getElementById('login_header').innerText ="Create Account"
    
    panelContainer.innerHTML = 
    `<div class="card-header">
        <h3>Create Account</h3>
    </div>
    <div class="card-body">
    <form>
        <div class="input-group form-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div>
            <input type="text" class="form-control" placeholder="username">
        </div>
        <div class="input-group form-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="phone number">
            </div>
            <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="email">
                </div>
        
        <div class="form-group">
            <input type="submit" value="Login" class="btn float-right login_btn">
        </div>
    </form>
</div>`
}