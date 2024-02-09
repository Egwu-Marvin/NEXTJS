
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { MdLabelImportantOutline } from "react-icons/md";

export default function MailIcons() {
  return (
    <aside className='flex items-center space-x-3 '>        
            <MdCheckBoxOutlineBlank />
            <CiStar />
            <MdLabelImportantOutline />
    </aside>
  )
}
