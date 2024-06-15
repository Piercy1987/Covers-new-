
import { useState } from 'react';
import Button from '../Lib/Button/Button.component';
import { db, setLandingPageConfig } from '../../Firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setParagraph } from '../../Redux/Slices/config.slice';


const Section1 = ({ data, user }) => {

    const dispatch = useDispatch()

    const { previewMode, editMode } = useSelector(state => state.control)
    const { title, paragraph } = useSelector(state => state.webConfig.editedConfig.tab[0].homePageData.section1)

    const dispatchTitle = (value) => {
        dispatch(setTitle(value))
    }
    const dispatchParagraph = (value) => {
        dispatch(setParagraph(value))
    }

    return (
        <div class="section1">
            {(editMode && !previewMode) ?
                <>
                    <textarea
                        className="textArea"
                        value={title}
                        onChange={e => dispatchTitle(e.target.value)}
                        style={{
                            width: '50%',
                            textAlign: 'center',
                            marginBottom: '10px'
                        }}
                        rows='4'
                    />
                    <textarea
                        className='textArea'
                        value={paragraph}
                        onChange={e => dispatchParagraph(e.target.value)}
                        style={{
                            width: '50%',
                            textAlign: 'center',
                            marginBottom: '10px'
                        }}
                        rows='12'
                    />
                </>
                :
                <div class="section1">
                    <div class="section1--title">{data.title}</div>
                    <div class="section1--paragraph">{data.paragraph}</div>
                </div>}
            <div className="pull-quote">
                <blockquote>
                    "the Covers Brothers play electric & acoustic Rock & Pop from the 50s & 60s era to the present day"
                </blockquote>
            </div>
        </div>
    )
}

export default Section1