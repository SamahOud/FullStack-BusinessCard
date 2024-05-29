export const mapCardToModel = card => ({
    title: card?.title,
    subtitle: card?.subtitle,
    description: card?.description,
    phone: card?.phone,
    email: card?.email,
    webUrl: card?.web,
    imageUrl: card?.image.url,
    imageAlt: card?.image.alt,

    // state: card.address.state,
    // country: card.address.country,
    // city: card.address.city,
    // street: card.address.street,
    // houseNumber: card.address.houseNumber,
    // zip: card.address.zip,
    ...{...card?.address}
})