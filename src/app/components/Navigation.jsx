import Link from "next/link";
import styles from './Navigation.module.css'

const links =[{
    label: 'Home',
    route: '/'
  },{
    label: 'Pokémon List',
    route: '/posts'
  },{
    label: 'Random Gifs',
    route: '/gifts'
  },{
    label: 'About',
    route: '/about'
  }]
  
  
  export function Navigation() {
    return (
        <header className={styles.header}>
          <nav>
            <ul className={styles.navigation}>
              {links.map(({label,route})=>(
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    )
  }
  
 