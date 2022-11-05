const refs = {
    form: document.querySelector('.login-form'),
  };
  
  const inSubmit = (element) => {
    element.preventDefault();
    const emailForm = element.target.elements.email.value;
    const passwordForm = element.target.elements.password.value;
    const submitRes = {
      email: emailForm,
      password: passwordForm,
    };
  
    if (submitRes.email === "" || submitRes.password  === "") {
      alert('всі поля повинні бути заповнені!');
    }else {
      console.log(submitRes);
      refs.form.reset();
    };
  };
  
  refs.form.addEventListener('submit', inSubmit);
  
  
  