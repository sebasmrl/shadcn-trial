'use client';

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { es } from "date-fns/locale/es";

export default function HomePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([])


  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday:'short',
    day:'numeric',
    month:'short'
  });


  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-start  gap-4 ">
      <Calendar
        locale={es}
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={ (date)=> date.getDay() ===0 || date.getDay()===6}
      />
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border"
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />

      <div>
        <h1 className="text-3xl">Información seleccinada </h1>
        <div className="border-b">
          <p>{smallDate}</p>
          <p>{multipleDates?.map((date)=> date.toLocaleDateString()).join(', ')}</p>
        </div>
      </div>
    </div>
  )
}