
import './Sugesstion.scss'
import SugesstionCard from './SugesstionCard/SugesstionCard'
const Sugesstion = () => {
  return (
    
    <div className="result">
      <h3>Latest Trends</h3>


        <SugesstionCard/>
      <div className="comming_trends">
        <h3>Popular trends</h3>
        <ul>
          <li><p>Striped shirt dress</p></li>
          <li><p>Satin shirts </p>
          </li>
          <li><p>Denim Jumpsuit</p>
          </li>
          <li><p>Leather Dresses</p>
          </li>
          <li><p>Solid tShirt</p>
          </li>
        </ul>

      </div>
    </div>

  )
}

export default Sugesstion
