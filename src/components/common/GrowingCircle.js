import posed from 'react-pose';

export default posed.img({
  hidden: { 
    width: 0,
    height: 0,
    opacity: 0
  },
  visible: { 
    width: '15vmax',
    height: '15vmax',
    opacity: 1,
    transition: { duration: 500 } 
  }
});

export const GrowingCircleClassNames = {
  HIDDEN: 'hidden',
  VISIBLE: 'visible'
};