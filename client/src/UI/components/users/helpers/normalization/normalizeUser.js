const normalizeUser = (user) => ({
    name: {
        first: user.first,
        last: user.last,
        middle: user.middle
    },
    phone: user.phone,
    email: user.email,
    password: user.password,
    address: {
        state: user.state,
        country: user.country,
        city: user.city,
        street: user.street,
        zip: user.zip,
        houseNumber: user.houseNumber,
    },
    image: {
        url: user.url,
        alt: user.alt
    },
    isBusiness: user.isBusiness
});

export default normalizeUser;