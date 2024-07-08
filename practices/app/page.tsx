
import Link from "next/link";
import { Button } from "./_components/buttons/button";
import { ETheme } from "./enum/enumdata";

export default function Home() {
  return (
    <div className="flex">
      <Button colorTheme={ETheme.TEXT_DARK} className="my-2"><Link href={'/inputs'}>Go to inputs page<br/>(Finished)</Link></Button>
      <br/>
      <Button colorTheme={ETheme.TEXT_DARK} className="my-2"><Link href={'/buttons'}>Go to buttons page<br/>(Finished)</Link></Button>
      <br/>
      <Button colorTheme={ETheme.TEXT_DARK} className="my-2"><Link href={'/dropDown'}>Go to dropdown search page<br/>(Finished)</Link></Button>
      <br/>
      <Button colorTheme={ETheme.TEXT_DARK} className="my-2"><Link href={'/rangeAmount'}>Go to range picker page<br/>(Finished)</Link></Button>
      
    </div>
    
    
  );
}
