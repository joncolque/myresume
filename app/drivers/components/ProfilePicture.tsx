import { useState } from 'react'
import styles from './profilePicture.module.css'


interface Props {
    src: string
}

export const ProfilePicture = ({ src }: Props) => {
    const [showPicture, setShowPicture] = useState<boolean>(true)

    return (
        <>
            {showPicture && <img
                className={styles.img_profile}
                src={src}
                alt="software engineer"
                width="500"
                height="600"
                onError={() => setShowPicture(false)}
            />}
        </>
    )
}