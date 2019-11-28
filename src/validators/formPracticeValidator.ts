import { FormErrors } from "redux-form";
import { FormProps, OwnProps } from "../components/formPracticeComponent";

const formPracticeValidator = (
  values: OwnProps,
  props: FormProps
): FormErrors<OwnProps> => {
  const { firstName, lastName, email, favoriteColor } = values;
  const errors: FormErrors<OwnProps> = {};
  if (!lastName) {
    errors.lastName = "姓欄は必須です。";
  }
  if (!firstName) {
    errors.firstName = "名欄は必須です。";
  }
  if (!email) {
    errors.email = "メールアドレス欄は必須です。";
  }
  if (!favoriteColor) {
    errors.favoriteColor = "好きな色欄は必須です。";
  }
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "メールアドレスの形式が不正です。";
  }
  return errors;
};

export default formPracticeValidator;
