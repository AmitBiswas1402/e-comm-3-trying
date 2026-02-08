import { type SchemaTypeDefinition } from 'sanity'
import { customerType } from './customerTypes'
import { productType } from './productTypes'
import { orderType } from './orderTypes'
import { categoryType } from './categoryTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [customerType, productType, orderType, categoryType],
}
