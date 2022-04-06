import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then((res) => {
      console.log(`${res[1].body} ${res[0].firstName} ${res[0].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
