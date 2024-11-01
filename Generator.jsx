import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/data'

function Header(props) {
    const {index,title, description} = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-lime-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator() {
    //let showModal = false
    const [showModal, setShowModal] = useState(false)
    const [goal, setGoal] = useState('individual')
    const [condition, setCondition] = useState([])
    const [mood, setMood] = useState('strength_power')

    function toggleModal()
    {
        setShowModal(!showModal)
    }
    return (
        <SectionWrapper header ={"generate your workout"} title = {['It\'s', 'Yoga', 'o\'clock']}>
            <Header index= {'01'} title = {'Pick your goals'} description = {'Select the workout you wish to perform'} /> 
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>


            
            {Object.keys(WORKOUTS).map((type, typeIndex) => {
                return (
                    <button onClick={() => {
                        setCondition([])
                        setGoal(type)
                    }} className={'bg-lime-950 border  duration-200 px-4 hover:border-orange-600 py-3 rounded-lg ' + (type === goal ? ' border-orange-600' : ' border-orange-400')} key={typeIndex}>
                        <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                    </button>
                )
            })} 

            </div>

            <Header index= {'02'} title = {'Health Restrictions'} description = {'Select health conditions to get contraindications'} /> 
            <div className='bg-lime-950 border border-solid border-orange-400 rounded-lg flex flex-col'>
                <button onClick = {toggleModal} className='relative p-3 flex items-center justify-center'>
                    <p>Select conditions</p>
                    <i className='fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down'></i>
                </button>
                {showModal && (
                    <div>modal</div>

                )}
            </div>

            <Header index= {'03'} title = {'Today\'s mood'} description = {'Starting point to your ultimate objective.'} /> 
            <div className='grid grid-cols-3 gap-4'>


            
            {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                return (
                    <button onClick={() => {
                        setCondition([])
                        setMood(scheme)
                    }} className={'bg-lime-950 border  duration-200 px-4 hover:border-orange-600 py-3 rounded-lg ' + (scheme === mood ? ' border-orange-600' : ' border-orange-400')} key={schemeIndex}>
                        <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                    </button>
                )
            })} 

            </div>
        </SectionWrapper>
    )
}
