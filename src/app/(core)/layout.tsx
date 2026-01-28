import Link from 'next/link'

export default function Layout({children}: {children: React.ReactNode}){
    return(
       
        <div className="flex h-screen *:h-full">
            
            {/* side bar */}
            <nav className="w-70 bg-orange-300 text-white flex flex-col gap-5">
                <Link href="/tableau-de-bord">Tableau de bord</Link>
                <Link href="/employees">Employées</Link>
                <Link href="/tache">tâche</Link>
            </nav>
             {/* side bar */}
            <main className='w-full h-screen flex flex-col'>
                <div className='w-full bg-white'>header</div>
            <div className="bg-green-300 flex-1">{children}</div>
            </main>
        </div>
    )
}