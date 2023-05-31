
const SkinTypeTag = ({skinType}) =>
{
    return (
        <p className="skinTypeTag" style={{backgroundColor: getSkinTypeColor(skinType === null? '' : skinType)}}>
        {skinType === null? "Hauttyp" : getSkinTypeName(skinType)}</p>
    );
}

function getSkinTypeColor(skinType) {
    switch(skinType) {
        case 'dry':
            return '#FBEAD1';
        case 'oily':
            return '#DFD7F2';
        case 'combination':
            return '#F3D1D2';
        case 'normal':
            return '#AAC8D6';
        case 'sensitive':
            return '#C6E5E7';
        default:
            return '#B6C7B9';
    }
}

function getSkinTypeName(skinType) {
    switch(skinType) {
        case 'dry':
            return 'trocken';
        case 'oily':
            return 'ölig';
        case 'combination':
            return 'Mischhaut';
        case 'normal':
            return 'normal';
        case 'sensitive':
            return 'sensibel';
        default:
            return 'alle';
    }
}

export default SkinTypeTag;