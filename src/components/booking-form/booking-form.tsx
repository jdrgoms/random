import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Calendar as CalendarIcon } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { Calendar } from '@/components/ui/calendar'

import { FormSchema, places } from '@/utils'
import { cn } from '@/lib/utils'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@radix-ui/react-popover'
import { format, isBefore, isEqual } from 'date-fns'
import { useState } from 'react'
import {
  setBooking,
  setCurrentBooking,
  updateBooking,
  useBooking,
  useCurrentBooking,
} from '@/store/reducers/booking.reducer'
import { useToast } from '@/components/ui/use-toast'

export default function BookingForm() {
  const { toast } = useToast()
  const booking = useBooking()
  const currentBooking = useCurrentBooking()

  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  console.log('currentBooking', currentBooking)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: currentBooking as any
  })

  

  const isOverlappingBooking = (newBooking: any, existingBookings: any) => {
    for (let item of existingBookings) {
      if (
        isEqual(new Date(item.startDate), newBooking.startDate) ||
        isEqual(new Date(item.endDate), newBooking.endDate)
      ) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Invalid booking dates.',
          description: 'The date are equal',
        })

        throw new Error('Booking overlaps with existing booking')
      }
    }
  }

  const onSubmit = (data: any) => {
    console.log(data)
    const isCheckoutBefore = isBefore(data.endDate, data.startDate)

    isOverlappingBooking(data, booking)

    if (isCheckoutBefore) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Invalid booking dates.',
        description: 'The check-out date cannot precede the check-in date.',
      })
      return
    } else {
      const payload = {
        id: Math.floor(Math.random() * 1000000),
        destination: data.destination,
        startDate: data.startDate.toISOString(),
        endDate: data.endDate.toISOString(),
      }

      setBooking(payload)
    }
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-12"
      >
        <div className="col-span-full md:col-span-6 lg:col-span-4">
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <div className="mt-2">
                <FormItem>
                  <Label>Destination</Label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
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
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
        </div>
        <div className="col-span-full md:col-span-3">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <div className="mt-2">
                <FormItem>
                  <Label>Check-In</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PP')
                          ) : (
                            <span>check-in date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white border"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(e) => {
                          field.onChange(e)
                          setIsCalendarOpen(false)
                        }}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
        </div>
        <div className="col-span-full md:col-span-3">
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <div className="mt-2">
                <FormItem>
                  <Label>Check-Out</Label>
                  <Popover
                    open={isCalendarOpen}
                    onOpenChange={setIsCalendarOpen}
                  >
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PP')
                          ) : (
                            <span>check-out date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white border"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(e) => {
                          field.onChange(e)
                          setIsCalendarOpen(false)
                        }}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
        </div>
        <div className="col-span-full flex md:justify-center lg:col-span-2">
          <Button className="w-full md:w-60 lg:mt-10 bg-indigo-600 hover:bg-indigo-900">
            Booking
          </Button>
        </div>
      </form>
    </Form>
  )
}
