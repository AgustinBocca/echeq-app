
import { defineDb, defineTable, column } from 'astro:db';

const Client = defineTable({
  columns: {
    id: column.number({primaryKey:true}),
    name: column.text(),
    subname: column.text(),
    cuit: column.number({unique:true}),
    location: column.text(),
    phone: column.number()
  }
})

const Echeq = defineTable({
  columns: {
    id: column.number({primaryKey:true}),
    datetime: column.date(),
    client_id: column.number({references: () => Client.columns.id}),
    number: column.number(),
    bank: column.text(),
    importe: column.number(),
    dateEcheq: column.date(),
    days: column.number(),
    tasa: column.number(),
    interest: column.number(),
    importClient: column.number(),
  }
})

export default defineDb({
  tables: { Client, Echeq },
  
})
