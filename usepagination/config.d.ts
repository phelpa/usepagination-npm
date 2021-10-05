import { ChangeEvent } from 'react'

export default function usePagination(initialPerPage?: number): {
  page: number
  changePageEvent: (e: ChangeEvent<unknown> | null, number: number) => void
  perPage: number
  changePerPageEvent: (e: ChangeEvent<HTMLInputElement>) => void
  changePage: (page: number) => void
  arrayPage: number
  changePerPage: (perPage: number) => void
}
