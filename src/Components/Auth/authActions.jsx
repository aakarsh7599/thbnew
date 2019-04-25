export const socialLogin = (selectedProvider) =>
  async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    /*const firestore = getFirestore();*/
    try {
      dispatch(window.reload())
      let user = await firebase.login({
        provider: selectedProvider,
        type: 'popup'
      })
      console.log(user)
      
    } catch (error) {
      console.log(error)
    }
  }