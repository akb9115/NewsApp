import { Pipe,PipeTransform } from '@angular/core';

@Pipe(
    {
        name: 'summary'
    }
)

export class SummaryPipe implements PipeTransform{
    limit:number;
    i:number
    transform(value: string)
    {   this.limit=80;
        if(!value)
            {return null;}

        if(value[this.limit]!=" ")
        {
        
            for(this.i= (this.limit-1) ; this.i>0 ; this.i--, this.limit--)
            {  
                
                if(value[this.limit]===' ')
                {  
                    this.limit=this.i;
                    break;
                }

               
            }
        }
        
        return value.substr(0,this.limit+1) +'...';

    
}}