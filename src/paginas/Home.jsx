import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../componentes';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./1710studio.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                1710 <br className="xl:block hidden" /> Studios
              </h1>
            </motion.div>
            <motion.div
            {...headContentAnimation}
            className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-base'>
              Crea tu unica y exclusica camiseta en el diseñador virtual de <strong>1710 Studios</strong>{''}
              </p>
              <CustomButton
                type='filled'
                tittle='Editala'
                handleClick={() => state.intro = false}
                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
