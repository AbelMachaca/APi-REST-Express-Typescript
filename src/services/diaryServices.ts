import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types'
import diaryData from './diaries.json'

// es lo mismo---- Array<DiaryEntry> que DiaryEntry[]
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfdiary } = entry
    return restOfdiary
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    // id: diaries.length +1
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
/* const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
diariesWithoutSensitiveInfo[0].comment */
