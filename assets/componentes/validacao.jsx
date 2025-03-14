

export function validarLogin(login, senha){
    if (login === "admin" && senha === "admin") {
        return true
    } 
    // else
    return false
} 