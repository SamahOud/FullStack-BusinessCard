// from flat card to card with nested objects
export const normalizeCard = card => ({
    title: card.title,
    subtitle: card.subtitle,
    description: card.description,
    phone: card.phone,
    email: card.email,
    web: card.webUrl,
    image: {
        url: card.imageUrl,
        alt: card.imageAlt
    },
    address: {
        state: card.state,
        country: card.country,
        city: card.city,
        street: card.street,
        houseNumber: card.houseNumber,
        zip: card.zip,
    }
})