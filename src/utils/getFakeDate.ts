import { faker } from "@faker-js/faker"
import format from "date-fns/format"

export const getFakeDate = () => {
    const pattern = 'MMM dd kk:mm a'
    const startDate = faker.date.between({from: '2023-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z'})
    const endDate = faker.date.between({from: startDate, to: '2030-01-01T00:00:00.000Z'})

    return {
        startDate: format(new Date(startDate), pattern),
        endDate: format(new Date(endDate), pattern)
    }
}