export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'sntormy'
export type Visibility = 'good' | 'poor' | 'ok' | 'excellent'

export interface DiaryEntry {
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
}

// export type NonSensitiveDiaryEntry = pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility' | 'comment'>

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>