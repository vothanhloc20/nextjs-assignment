import * as Yup from 'yup';
import {
  EMAIL_CONTACT_VALIDATION_MESSAGE_INVALID,
  EMAIL_CONTACT_VALIDATION_MESSAGE_REQUIRED,
  MESSAGE_CONTACT_VALIDATION_MESSAGE_REQUIRED,
  NAME_CONTACT_VALIDATION_MESSAGE_REQUIRED,
  PHONE_NUMBER_CONTACT_VALIDATION_MESSAGE_REQUIRED,
} from '@/constants/constants';

export const initialValuesFormContact = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
};

export const validationSchemaFormContact = Yup.object().shape({
  name: Yup.string().required(NAME_CONTACT_VALIDATION_MESSAGE_REQUIRED),
  email: Yup.string()
    .email(EMAIL_CONTACT_VALIDATION_MESSAGE_INVALID)
    .required(EMAIL_CONTACT_VALIDATION_MESSAGE_REQUIRED),
  phoneNumber: Yup.string().required(
    PHONE_NUMBER_CONTACT_VALIDATION_MESSAGE_REQUIRED
  ),
  message: Yup.string().required(MESSAGE_CONTACT_VALIDATION_MESSAGE_REQUIRED),
});
