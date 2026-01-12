import React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const PaginationFooter = () => {
    return (
        <div className="w-full px-6 py-3 flex items-center justify-between">
            <div className="text-xs text-muted-foreground font-medium">
                Showing <span className="text-foreground">1-10</span> of <span className="text-foreground">100</span> transactions
            </div>

            <div className="flex items-center gap-6">
                <span className="text-xs font-semibold tracking-wide text-muted-foreground">
                    PAGE 2 / 10
                </span>
                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous Page</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted">
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next Page</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PaginationFooter