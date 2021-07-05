export const isValidPhone = (phone: string, handleError?: any) => {
    const p = phone.replace(/ /g, '');

    if (p.length === 9 && p.match(/[^\d]/g) === null) {
        if (handleError) handleError(undefined);

        return true;
    }
    if (handleError) handleError('shared.errors.invalid-phone');
    return false;
};

export const maskPhoneNumber = (p: string) => {
    p = p.replace(/D+/g, '');
    const phone = p.replace(/ /g, '').substring(0, 11);
    let maskedPhone = '';

    if (p.length === 4 && p.charAt(3) !== ' ') {
        p = `${p.substr(0, 3)} ${p.substr(3)}`;
    } else if (p.length === 8 && p.charAt(7) !== ' ') {
        p = `${p.substr(0, 7)} ${p.substr(7)}`;
    }

    maskedPhone = p.substring(0, 11);

    return { phone: `+244${phone}`, maskedPhone };
};

export const formatPhone = (phone: string) => {
    const newPhone =
        phone.substring(0, 4) === '+244'
            ? `${phone.substr(0, 4)} ${phone.substr(4, 3)} ${phone.substr(
                  7,
                  3,
              )} ${phone.substr(10, 3)}`
            : `${phone.substr(0, 3)} ${phone.substr(3, 3)} ${phone.substr(
                  6,
                  3,
              )}`;
    return newPhone;
};
