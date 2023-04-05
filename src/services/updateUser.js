export const updateProfile = async (user) => {
  return async () => {
    try {
      const userAuth = auth.currentUser;
      await updateProfile(userAuth, {
        displayName: user.name,
        photoURL: user.photo,
      });
      await updatePassword(userAuth, user.password);
      localStorage.setItem("user", { name: user.name, photo: user.photo });
    } catch (error) {
      console.log(error);
    }
  };
};
