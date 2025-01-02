export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'sntormy'
export type Visibility = 'good' | 'poor' | 'ok' | 'excellent'

export interface DiaryEntry {
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
}