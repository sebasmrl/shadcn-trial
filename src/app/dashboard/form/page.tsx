"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { cn } from "@/lib/utils";
import { format } from "date-fns";


const formSchema = z.object({
  username: z.string().min(2, { message: 'Debes tener minimo 2 caracteres' }).max(20, { message: 'Puedes tener maximo 20 caracteres' }),
  email: z.string().email({ message: 'El campo debe ser un email válido' }),
  gender: z.enum(['masculino', 'femenino'], { message: 'Selecciona un genero' }),
  dateOfBirth: z.date({ required_error: "la fecha de nacimiento es requerida" }),
  marketingEmails: z.boolean().default(false),
}).refine( (data)=> data.marketingEmails ===true, { 
  message: "Debes permitir el envio de correos", 
  path:["marketingEmails"]
}); //pueden haber cuanto srefine sena necesarios para refinar la validacion



export default function FormPage() {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), //siempre se deben enlazar
    defaultValues: {
      username: "",
      email: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-4 gap-2 gap-y-4">

        {/* Username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (  //renderizar 
            <FormItem className="col-span-2">
              <FormLabel>Nombre de Usuario</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Este será tu nombre ante el público
              </FormDescription>
              <FormMessage /> {/* mensaje de error */}
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Correo Electronico</FormLabel>
              <FormControl>
                <Input placeholder="sebastian@email.com" {...field} />
              </FormControl>
              <FormDescription>
                Inserta tu direccion de correo electronico
              </FormDescription>
              <FormMessage /> {/* mensaje de error */}
            </FormItem>
          )}
        />

        {/* Radio-group field  Genero*/}
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3 col-span-2">
              <FormLabel>Genero</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0 ">
                    <FormControl>
                      <RadioGroupItem value="masculino" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Masculino
                    </FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0"> {/* es el que toma el estilo */}
                    <FormControl>
                      <RadioGroupItem value="femenino" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Femenino
                    </FormLabel>
                  </FormItem>

                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem className="flex flex-colcol-span-2">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="marketingEmails"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm col-span-2">
              <div className="space-y-0.5">
                <FormLabel>Emails Promocionales</FormLabel>
                <FormDescription>
                  Recibe emails sobre productos, caractristicas y más.
                </FormDescription>
              <FormMessage />
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          className="col-span-4"
          onClick={() => {
            console.log(form.getValues())
          }}
        >Submit</Button>
      </form>
    </Form>
  )
}