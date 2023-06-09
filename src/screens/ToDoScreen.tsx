import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
// import type { Variants } from 'framer-motion'
import type { ToDo } from '../interfaces/toDo';
import {
	useGetToDoByIdQuery,
	useGetTodosQuery,
} from '../redux/services/todo/toDoApi';

import { AnimatedButton } from '../components/Framer/AnimatedButton';
import { Timer } from '../components/Framer/Timer';
import { TapButton } from '../components/Framer/TapButton';
import { ExpandLayout } from '../components/Framer/ExpandLayout';
import { LinearAnimation } from '../components/Framer/LinearAnimation';
import { ThreePointsAnimation } from '../components/Framer/ThreePointsAnimation';

import '../App.css';
import { MUIStyledBox } from '../components/MUI/MUIStyledBox';
import { SXBox } from '../components/MUI/SXBox';

export const ToDoScreen = (): JSX.Element => {
	const [toDoId, setToDoId] = useState(1);
	const { data: toDos = [] } = useGetTodosQuery();
	const { data: toDo, isLoading: isLoadingToDo } = useGetToDoByIdQuery(toDoId);

	const [scope, animate] = useAnimate();

	const animation = async (): Promise<void> => {
		await animate(scope.current, { x: ['0%', '50%', '0%'] });
		await animate('li', { opacity: 1 });
	};

	useEffect(() => {
		animation().catch((error) => {
			console.log(error);
		});
	}, []);

	// const itemVariants: Variants = {
	//   open: {
	//     opacity: 1,
	//     y: 0,
	//     transition: { type: 'spring', stiffness: 300, damping: 24 }
	//   },
	//   closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
	// }

	const nextToDo = (): void => {
		setToDoId(toDoId + 1);
	};

	const prevToDo = (): void => {
		if (toDoId === 1) return;
		setToDoId(toDoId - 1);
	};
	return (
		<motion.div>
			<Timer />

			<motion.h1
				animate={{ x: [-200, 0] }}
				transition={{ ease: 'linear', duration: 0.5 }}
			>
				ToDo - RTK Query
			</motion.h1>
			<LinearAnimation />
			<ThreePointsAnimation />

			<div className="box-container">
				<motion.div
					className="box"
					animate={{
						scale: [1, 2, 2, 1, 1],
						rotate: [0, 0, 180, 180, 0],
						borderRadius: ['5%', '5%', '50%', '50%', '5%'],
					}}
					transition={{
						duration: 2,
						ease: 'easeInOut',
						times: [0, 0.2, 0.5, 0.8, 1],
						// repeat: Infinity,
						// repeatDelay: 1
					}}
				>
					<h4>isLoading: {isLoadingToDo.toString()}</h4>
				</motion.div>

				<motion.div
					className="box"
					whileHover={{ scale: [null, 1.5, 1.4] }}
					transition={{ duration: 0.3 }}
				>
					<h4>Hover Animation</h4>
				</motion.div>
			</div>

			{isLoadingToDo && (
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<h4>Cargando...</h4>
					</motion.div>
				</AnimatePresence>
			)}

			<pre>{JSON.stringify(toDo)}</pre>

			<ul ref={scope}>
				{toDos.map((toDo: ToDo, index: number) => {
					if (index > 10) return <></>;

					return (
						<li key={toDo.id}>
							<strong>{toDo.completed ? 'Done' : 'Pending'}: </strong>
							{toDo.title}
						</li>
					);
				})}
			</ul>

			<AnimatedButton label="Prev To Do" action={prevToDo} />

			<AnimatedButton label="Next To Do" action={nextToDo} />

			<TapButton />

			<ExpandLayout />

			<MUIStyledBox />

			<SXBox />
		</motion.div>
	);
};
