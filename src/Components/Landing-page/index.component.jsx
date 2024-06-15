import Section1 from "./section1.component"
import Section2 from "./section2.component"
import { useSelector, useDispatch } from 'react-redux'



const LandingPage = () => {
    const user = useSelector((state) => state.users.user)
    const {editMode}= useSelector(state => state.control)
    const { section1: savedConfig } =  useSelector(state => state.webConfig.config.tab[0].homePageData)   
    const { section1: editSection1 = {} } = useSelector(state => state.webConfig.editedConfig.tab[0].homePageData)

    const data = editMode ? editSection1 : savedConfig
    

      // if( section1 ) {
      //   return (
      //       <div>
      //           No Data
      //       </div>
      //   )
      // }

    return (
        <div>
            <div className="pageContainer">
                <Section1 data={data} user={user} />
                <Section2 />
            </div> 
        </div>
    )
}

export default LandingPage