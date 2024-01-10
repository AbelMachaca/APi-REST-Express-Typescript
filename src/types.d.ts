import { Weather, Visibility } from './enums'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
// Esto es un error muy tipico que cometen muchos
/*
export interface NonSensitiveInfoDiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
} */
/*
interface SpecialDiaryEntry extends DiaryEntry {
    flightNumber: number
} */

/* Las interfaces esta pensada para ser extendida
Con type se podría hacer

type SpecialDiaryEntry2 = DiaryEntry & {
    flightNumber: number
}

pero es mejor hacerlo con interface. Si es una interfaz que tengas que extender es mejor con interface y si es algo que se va a quedar como más fija o como composición es mejor con type

------- No se puede repetir porque se iria sobreescribiendo o dando algun error ---------------
export type Visibility = 'great'

------- En cambio en las interfaces se puede tener más de una vez y se irian añadiendo --------------
*/

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
