import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const { firstName, lastName } = await Promise.all([createUser])
    const { body } = await uploadPhoto();
    console.log(body, firstName, lastName);
  } catch (_) {
    console.log('Signup system offline');
  }
}
