export default function useUtils() {
  const PHONE_NUMBER = "+61 410 038 554"; // replace with your actual number

  const COMPANY_EMAIL = "info@standardinsurance.com.au"

  const ADDRESS = "80 Ann Street Brisbane QLD4000"

 
  const checkValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return { PHONE_NUMBER, COMPANY_EMAIL, ADDRESS, checkValidEmail };
}