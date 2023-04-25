import { SignUpCard } from '../Components/Auth/SignUpCard';
import { onSubmitHandler } from '../Services/firebase';
import { initialTypes } from '../types/types';
import { validationSchema } from '../Services/validationSchema';

export const SignUpPage = () => {
  const initialValues: initialTypes = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  //TODO: add auto lgged in after singin up

  return (
    <SignUpCard
      onSubmitHandler={onSubmitHandler}
      initialValues={initialValues}
      validationSchema={validationSchema}
    />
  );
};

// JEST test

// export default PrivateRoute(SignUpPage);
