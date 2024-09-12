import Menulist from './Menulist';

export default function TreeView({menus=[]}){
    return(
        <div className='min-h-screen max-w-sm bg-blue-900'>
          <Menulist list={menus}/>
        </div>
    );
}