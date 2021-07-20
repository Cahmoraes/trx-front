import styles from './styles.module.scss'

export function SectionTitle ({children}) {
  return (
    <h2 className={`${styles.sectionTitle} mb-3`}>{children}</h2>
  )
}
