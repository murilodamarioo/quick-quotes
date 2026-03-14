import AsyncStorage from '@react-native-async-storage/async-storage'

import { ServiceProps } from '@/components/ServiceModal'

import { TagStatus } from '@/types/TagStatus'
import { Ordering } from '@/types/Ordering'

const BUDGETS_STORAGE_KEY = '@quickquotes:budgets'

export type BudgetStorage = {
  id: string
  title: string
  client: string
  status: TagStatus
  discountPct: number
  createdAt: Date
  updatedAt: Date
  services: ServiceProps[]
}

async function get(): Promise<BudgetStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(BUDGETS_STORAGE_KEY)

    return storage ? JSON.parse(storage) : []
  } catch (error) {
    throw new Error('BUDGETS_GET' + error)
  }
}

async function getById(id: string): Promise<BudgetStorage | null> {
  const budgets = await get()

  const budget = budgets.find(budgets => budgets.id === id)

  return budget ? budget : null
}

async function getFiltered(
  status: TagStatus[],
  ordering?: Ordering
): Promise<BudgetStorage[]> {
  let budgets = await get()

  if (status.length > 0) {
    budgets = budgets.filter(budget => status.includes(budget.status))
  }

  if (ordering) {
    budgets = budgets.slice()

    switch (ordering) {
      case Ordering.RECENT:
        budgets.sort((a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        break
      case Ordering.OLDEST:
        budgets.sort((a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
        break
      case Ordering.HIGHEST_PRICE:
        budgets.sort((a, b) =>
          b.services.reduce((acc, s) => acc + s.price, 0) -
          a.services.reduce((acc, s) => acc + s.price, 0)
        )
        break
      case Ordering.LOWEST_PRICE:
        budgets.sort((a, b) =>
          a.services.reduce((acc, s) => acc + s.price, 0) -
          b.services.reduce((acc, s) => acc + s.price, 0)
        )
        break
      default:
        budgets.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        break
    }
  }

  return budgets
}

async function save(budgets: BudgetStorage[]): Promise<void> {
  try {
    await AsyncStorage.setItem(BUDGETS_STORAGE_KEY, JSON.stringify(budgets))
  } catch (error) {
    throw new Error('BUDGETS_SAVE' + error)
  }
}

async function add(newBudget: BudgetStorage): Promise<BudgetStorage[]> {
  const budgets = await get()
  const updateBudgets = [...budgets, newBudget]

  await save(updateBudgets)

  return updateBudgets
}

export const budgetsStorage = {
  get,
  getById,
  getFiltered,
  save,
  add
}