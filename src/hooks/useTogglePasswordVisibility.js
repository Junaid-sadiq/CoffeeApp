import { useState } from 'react';

export default useTogglePasswordVisibility = () => {
  // password will not be initially visible
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState('eye');
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(true);

  // function that toggles password visibility on a TextInput component on a password field
  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eyeo');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eyeo') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  // function that toggles password visibility on a TextInput component on a confirm password field
  const handleConfirmPasswordVisibility = () => {
    if (confirmPasswordIcon === 'eye') {
      setConfirmPasswordIcon('eyeo');
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    } else if (confirmPasswordIcon === 'eyeo') {
      setConfirmPasswordIcon('eye');
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    }
  };

  return {
    passwordVisibility,
    handlePasswordVisibility,
    rightIcon,
    confirmPasswordVisibility,
    handleConfirmPasswordVisibility,
    confirmPasswordIcon,
  };
};
