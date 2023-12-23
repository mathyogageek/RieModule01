let zak ='Zak Ruvalcaba'
let sally ='Sally Smith'
let holly ='Holly Unlikely'
let rie ='Rie Wilsterman'
let amol='Amol Shookup'
let maru = 'Maru Happy'
let gal ="Galoa Effective"
let sak ="Sakura Spring"
let abc ="Abl KOKO"
let gen= "Genchan Genki"


const element = (
    <ul style={{'color': 'blue', 'fontSize': '24px'}}>
        <li>{zak}</li>
        <li>{sally}</li>
        <li>{holly}</li>
        <li>{rie}</li>
        <li>{amol.toUpperCase()}</li>
        <li>{maru}</li>
        <li>{gal}</li>
        <li>{sak}</li>
        <li>{abc}</li>
        <li>{gen}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))