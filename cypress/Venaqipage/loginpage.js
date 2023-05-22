class login{

    connectbutton()
        {
            cy.get('.btn-connect').click();
        }
        setusername(username)
        {
            cy.get('#inputEmail').type(username)
        }
        setpassword(password)
        {
            cy.get('#mat-input-0').type(password);
        }
        loginclick()
        {
        
         cy.get('.mat-raised-button').click();
    
        }
    
}
export default login; 