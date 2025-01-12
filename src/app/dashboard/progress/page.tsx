'use client';
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react"


export default function ProgressPage() {
  const [progress, setProgress] = useState(0)
 

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress( (prev)=>{
        if( prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev+1;
      });
      
    }, 100);
  
    return () => {
      clearInterval(interval);
    }
  }, [])
  
/*   useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, []) */
 
  return <div className="flex justify-center h-[300px] items-center">
      <Progress 
        value={progress} 
        className="w-[60%]"  
        indicatorColor={cn({
          'bg-red-500': progress<50,
          'bg-yellow-500':progress >=50 && progress <80,
          'bg-green-500':progress >=80 && progress <=100,
        })}
        //indicatorColor="bg-red-500" 
      />
    </div>
}