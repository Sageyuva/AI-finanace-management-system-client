"use client"
import React from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchInputProps {
    onSearch?: (value: string) => void
    debounceMs?: number
}

const SearchInput = ({ onSearch, debounceMs = 500 }: SearchInputProps) => {
    const [value, setValue] = React.useState("")

    // Ref to store timeout
    const debounceTimeout = React.useRef<NodeJS.Timeout | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setValue(val)

        // Clear previous timeout
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current)

        // Set new timeout
        debounceTimeout.current = setTimeout(() => {
            onSearch?.(val)
        }, debounceMs)
    }

    // Cleanup on unmount
    React.useEffect(() => {
        return () => {
            if (debounceTimeout.current) clearTimeout(debounceTimeout.current)
        }
    }, [])

    return (
        <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search..."
                value={value}
                className="pl-9 h-9 bg-muted/50 border-muted-foreground/20 focus-visible:bg-background transition-colors"
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchInput
