import { DiaryEntry, NonSensitiveDiaryEntry } from "../types"
import diaryData from "./diaries.json"

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>
export const getEntries = () => diaries

export const findbyId = (id: number): DiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    return entry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => {
        return{
        id, 
        date, 
        weather, 
        visibility
        }
    })
}

export const addEntry = () => undefined
