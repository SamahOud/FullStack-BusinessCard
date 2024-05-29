export const mapUserToModel = (user) => {
    const ret = {
        ...{...user.name},
        phone: user.phone,
        ...{...user.address},
        ...{...user.image},
    }
    delete ret._id
    return ret
}

export const mapUserProfileToModel = (user) => {
    const ret = {
        ...{...user.name},
        phone: user.phone,
        email: user.email,
        password: user.password,
        ...{...user.address},
        ...{...user.image},
        isBusiness: user.isBusiness
    }
    delete ret._id
    return ret
}