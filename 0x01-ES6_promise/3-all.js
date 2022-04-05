import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [res1, res2] = await Promise.all([createUser(), uploadPhoto()]);
    console.log(res2.body, res1.firstName, res1.lastName);
  } catch (_) {
    console.log('Signup system offline');
  }
}
