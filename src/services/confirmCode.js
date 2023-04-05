export const codeConfirm = (code) => {
  return () => {
    console.log(window.confirmationResult);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        console.log(result);
        const user = result.user.auth.currentUser;
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
