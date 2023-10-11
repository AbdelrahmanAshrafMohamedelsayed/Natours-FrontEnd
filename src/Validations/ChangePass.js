import * as Yup from "yup";
const ChangePassValidate = Yup.object({
  Currentpassword: Yup.string()
    .min(8, "Current Password must be at least 8 charaters")
    .required("Current Password is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 charaters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Confirm Password must match New Password"
    )
    .required("Confirm password is required"),
});
export default ChangePassValidate;
