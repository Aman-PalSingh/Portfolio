import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className={styles.experiences}>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Education
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
				Masai School  | Full Stack Web Developer{' '}
					<a href=''>Full Stack Web Developement</a>
				</div>
	
			</div>

			<br/>

			<div className={styles.container}>
				<div className={styles.position}>
				Government Engineering College | B.Tech{' '}
					<a href='/'>  Electronics And Telecommunication Engineering. </a>
				</div>
				<div className={styles.date}>August 2015 - April 2020</div>
			
			</div>

		</div>
	);
};

export default Experiences;
