import AsyncStorage from '@react-native-async-storage/async-storage'

import { ServiceProps } from '@/components/ServiceModal'

import { TagStatus } from '@/types/TagStatus'

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
  save,
  add
}