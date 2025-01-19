import { HOLIDAYS_API_BASE_URL } from "./constant";

export const fetchHolidays = async (year: number, country: string) => {
    try {
        const response = await
            fetch(`${HOLIDAYS_API_BASE_URL}/${year}/${country}`);

        if (!response.ok) {
            throw new Error(
                `Failed to fetch holidays for year ${year} and country ${country}. Status: ${response.status}`
            );
        }
        const data = await response.json();

        return data.reduce((acc: Record<string, string>, holiday: any) => {
            acc[holiday.date] = holiday.name;
            return acc;
        },
            {});

    } catch (error) {
        console.error("Error fetching holidays:", error);
        return {};
    }
}