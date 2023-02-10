import {ListedItems, Image} from './styledComponents'

const Language = props => {
  const {selectedLanguage} = props
  const {imageUrl, imageAltText} = selectedLanguage

  return (
    <>
      <ListedItems>
        <Image src={imageUrl} alt={imageAltText} />
      </ListedItems>
      <li />
      <li />
    </>
  )
}

export default Language
