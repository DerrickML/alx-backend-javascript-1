import { createUser, uploadPhoto } from './utils';

const asyncUploadUser = async () => {
  try {
    const user = await createUser();
    const photo = await uploadPhoto();

    return { photo, user };
  } catch (_) {
    return {
      photo: null,
      user: null,
    };
  }
};

export default asyncUploadUser;
