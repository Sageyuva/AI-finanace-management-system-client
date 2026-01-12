import React from 'react'
import { Card } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownLeft, MoreHorizontal } from "lucide-react"
import { format } from "date-fns"

// Map categories to colors
const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
        case 'food': return "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400";
        case 'salary': return "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400";
        case 'transport': return "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400";
        case 'entertainment': return "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400";
        case 'rent': return "bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400";
        default: return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
    }
}

const sampleTransactions = [
    {
        "_id": "6960add99c4f6db2e9188f47",
        "amount": 200,
        "type": "debit",
        "category": "food",
        "description": "Lunch at Bistro",
        "date": "2026-01-09T07:27:21.633Z",
        "__v": 0
    },
    {
        "_id": "6960add99c4f6db2e9188f48",
        "amount": 4500,
        "type": "credit",
        "category": "salary",
        "description": "Monthly Salary",
        "date": "2026-01-05T09:00:00.000Z",
        "__v": 0
    },
    {
        "_id": "6960add99c4f6db2e9188f49",
        "amount": 50,
        "type": "debit",
        "category": "transport",
        "description": "Uber Ride",
        "date": "2026-01-08T18:30:00.000Z",
        "__v": 0
    },
    {
        "_id": "6960add99c4f6db2e9188f50",
        "amount": 120,
        "type": "debit",
        "category": "entertainment",
        "description": "Movie Night",
        "date": "2026-01-07T20:15:00.000Z",
        "__v": 0
    },
    {
        "_id": "6960add99c4f6db2e9188f51",
        "amount": 3200,
        "type": "debit",
        "category": "rent",
        "description": "January Rent",
        "date": "2026-01-01T10:00:00.000Z",
        "__v": 0
    }
]

const TransactionCards = () => {
    return (
        <div className="flex flex-col space-y-3 pb-4">
            {sampleTransactions.map((transaction) => {
                const isCredit = transaction.type === 'credit';

                return (
                    <Card key={transaction._id} className="group flex items-center p-4 hover:bg-muted/30 transition-colors border-l-4 border-l-transparent hover:border-l-primary shadow-sm hover:shadow-md cursor-pointer">
                        {/* 1. Main Icon: Arrow (Replaces Category Icon) */}
                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${isCredit ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400' : 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400'}`}>
                            {isCredit ? <ArrowUpRight className="h-6 w-6" /> : <ArrowDownLeft className="h-6 w-6" />}
                        </div>

                        {/* 2. Main content: Description & Category */}
                        <div className="ml-4 flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <h3 className="text-base font-semibold text-foreground truncate">
                                    {transaction.description || transaction.category}
                                </h3>
                                {/* Keeping category pill for context */}
                                <div className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold ${getCategoryColor(transaction.category)}`}>
                                    {transaction.category}
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                                {format(new Date(transaction.date), "EEE d MMM, HH:mm")}
                            </p>
                        </div>

                        {/* 3. Amount (Arrow removed from here) */}
                        <div className="ml-4 text-right flex items-center gap-3">
                            <div className="flex flex-col items-end">
                                <span className={`text-lg font-bold tracking-tight ${isCredit ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                                    {isCredit ? '+' : '-'} ${transaction.amount.toLocaleString()}
                                </span>
                                <span className="text-[10px] text-muted-foreground uppercase font-medium">
                                    {transaction.type}
                                </span>
                            </div>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

export default TransactionCards