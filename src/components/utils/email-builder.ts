/**
 * Return an email based conn phone number
 * @param phone Phone that will used to make the email
 * @returns the email based on phone number. Eg.: phone: +9xx xxx xxx will return abasteca.+9xxxxxxxx.abasteca@abasteca.co.ao
 */
export const emailBuilder = (phone: string) =>
    `abasteca.${phone.replace(' ', '')}.abasteca@abasteca.co.ao`;
