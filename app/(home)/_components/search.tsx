import { Button } from '@/app/components/ui/button';
import {Input} from '@/app/components/ui/input';
import { SearchIcon } from 'lucide-react';

const Search = () => {
    return ( 
       <div className="flex items-center gap-4">
        <Input placeholder='busque por uma barbearia' />
        <Button variant='default' size='icon'>
            <SearchIcon size={20} />
        </Button>

       </div>
     );
}
 
export default Search;