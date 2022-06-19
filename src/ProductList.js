import tshirtside1 from './Tshirt/side1.webp'
import tshirtside2 from './Tshirt/side2.webp'
import tshirtside3 from './Tshirt/side3.webp'
import tshirtside4 from './Tshirt/side4.webp'

import clrBlckside1 from './colorblockedTop/side1.webp'
import clrBlckside2 from './colorblockedTop/side2.webp'
import clrBlckside3 from './colorblockedTop/side3.webp'
import clrBlckside4 from './colorblockedTop/side4.webp'

const productList=[
    {
        id:'product1', 
        url:tshirtside1, 
        price:'Rs.543', 
        brand:'Tokyou Talkies', 
        desc:'Floral Printed Tie Up Crop Top', 
        side1:tshirtside1, 
        side2:tshirtside2, 
        side3:tshirtside3, 
        side4:tshirtside4, 
        Description:{
            Color:"Blue",
            Style:"Casual",
            PatternType:"Colorblock",
            Neckline:"Round Neck",
            Details:"Lettuce Trim, Rib-Knit", 
            SleeveLength:"Long Sleeve",
            SleeveType:"Regular Sleeve",
            Length:"Crop",
            PlacketType:"Pullovers",
            FitType:"Slim Fit",
            Fabric:	"Slight Stretch",
            Material:"Polyester",
            Composition:"97% Polyester, 3% Elastane",
            CareInstructions:"Machine wash or professional dry clean",
            Body:"Unlined",
            Sheer:"No"
        }
    },
    {
        id:'product2', 
        url:clrBlckside1, 
        price:'Rs.670', 
        brand:'Shein', 
        desc:'Mushroom And Butterfly Printed Sleeve Tee' , 
        side1:clrBlckside1 , 
        side2:clrBlckside2 , 
        side3:clrBlckside3 , 
        side4:clrBlckside4,
        Description:{
            Color:"Khaki",
            Style:"Casual",
            PatternType:"Animal, Plants",
            Neckline:"Round Neck",
            SleeveLength:"Short Sleeve",
            SleeveType:"Regular Sleeve",
            Length:	"Regular",
            PlacketType:"Pullovers",
            FitType:"Regular Fit",
            Fabric:"Slight Stretch",
            Material:"Polyester",
            Composition:"97% Polyester, 3% Spandex",
            CareInstructions:"Machine wash or professional dry clean",
            Body:"No",
            Sheer:"No"    
        }
    }
]
export default productList;