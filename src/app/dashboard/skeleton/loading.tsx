import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {

    const data = Array.from({ length: 9 });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                data.map((_, i) => (
                    <Card className="flex flex-col items-start gap-1 " key={`card_${i}`}>
                        <CardHeader className="flex flex-row w-full">
                            <Skeleton className="rounded-full mr-2 w-10 h-10 " /> {/* simulacion de la imagen */}

                            <div className="flex flex-col flex-grow">
                                <Skeleton className="h-4 w-1/2 mb-2" />
                                <Skeleton className="h-3 w-full" />
                            </div>
                        </CardHeader>

                        <CardFooter className="self-stretch flex justify-end">
                            <Skeleton className="h-8 w-20" />
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
    //<Skeleton className="w-52 h-5"/>
}