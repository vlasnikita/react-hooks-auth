export const authUser = async (data: any) => {
    return new Promise((resolve, reject) => {     
        setTimeout(() => {
            let error = null
            if(data.login !== "steve.jobs@example.com") error = `Пользователя ${data.login} не существует`   
            else if(data.password !== "password") error = "Неправильный пароль"   

            if(!error) resolve(new Response(null, {status: 200}))
            else {
                const obj = {message: error};
                const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});
                resolve(new Response(blob, {status: 404}))
            }
        }, 2000)
    })
  }