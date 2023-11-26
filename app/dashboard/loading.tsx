import styles from '@/app/ui/loading.module.css'

export default function Loading() {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
        </div>

    );
}