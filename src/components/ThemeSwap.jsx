import { Moon,Sun} from 'lucide-react'
import React, { useEffect, useState } from 'react'

function ThemeSwap() {
    const [isDark, setIsDark] = useState(false)

    const handleThemSwap = () => {
        setIsDark(!isDark)
    }

     useEffect(() => {
        document.documentElement.dataset.theme = isDark ? 'pastel' : 'luxury'
     }, [isDark])

    if(isDark){
     return (<button className='' onClick={handleThemSwap}>
            <Sun/>
     </button>)
    }

    return (
    <div>
      <button className='btn btn-circle' onClick={handleThemSwap}>
        <Moon/>
      </button>
    </div>
  )
}

export default ThemeSwap
