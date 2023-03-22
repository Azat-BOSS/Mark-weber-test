import 'nouislider/dist/nouislider.css';
import { hoverData } from "./utils/data/data"
import HoverContent from "./modules/HoverContent"
import Sliding from "./modules/Sliding.d"
import AreaSlider from './modules/AreaSlider';
import CostSlider from './modules/CostSlider';
import Select from './modules/Select.d';
import { 
  contentButtons, 
  contentInfo, 
  videoOverlay,  
  filterAreaSpan, 
  firstFilterBlock, 
  secondFilterBlock,
  filterCostSpan,
  firstCostBlock,
  secondCostBlock,
  filterSelect
} from "./utils/constants/constants"

new HoverContent(hoverData, contentButtons, contentInfo, videoOverlay)
new Sliding()
new AreaSlider(
  [32, 186],
  { min: 32, max: 186 },
  filterAreaSpan,
  firstFilterBlock,
  secondFilterBlock
)
new CostSlider(
  [1.5, 17.5],
  { min: 1.5, max: 17.5 },
  filterCostSpan,
  firstCostBlock,
  secondCostBlock
)

new Select(filterSelect, "Северный парк")





