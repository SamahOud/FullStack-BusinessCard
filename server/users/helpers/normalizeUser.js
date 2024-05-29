const normalizeUser = rawUser => {
    const name = { ...rawUser.name, middle: rawUser.name.middle || "" }

    const image = {
        ...rawUser.image,
        url: rawUser.image.url || "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
        alt: rawUser.image.alt || "Business card image",
    }

    const address = {
        ...rawUser.address,
        state: rawUser.address.state || "not defined",
    }

    const user = {
        ...rawUser,
        name,
        image,
        address,
    }
    return user;
}

module.exports = normalizeUser;