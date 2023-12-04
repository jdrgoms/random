import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { FormControl } from '@/components/ui/form'

const places = [
  'Paris, France',
  'Rome, Italy',
  'Barcelona, Spain',
  'Salvador, Brazil',
  'Amsterdam, Netherlands',
  'Prague, Czech Republic',
  'Athens, Greece',
  'Budapest, Hungary',
  'Rio de Janeiro, Brazil',
]

export default function InputSelect(field: any) {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="Where are you going?" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Places</SelectLabel>
          {places.map((place) => (
            <SelectItem key={place} value={place}>
              {place}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
