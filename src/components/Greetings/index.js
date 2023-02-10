import {Component} from 'react'
import Language from '../Language/index'
import {
  AppContainer,
  Heading,
  ButtonContainer,
  EachButton,
  UnorderedList,
} from './styledComponents'

class Greetings extends Component {
  state = {selected: 'English'}

  onClickButton = event => {
    this.setState({selected: event.target.value})
  }

  render() {
    const {language} = this.props
    const {selected} = this.state
    const filteredLanguage = language.filter(
      each => each.buttonText === selected,
    )
    return (
      <AppContainer>
        <Heading>Multilingual Greetings</Heading>
        <ButtonContainer>
          <EachButton
            type="button"
            value="English"
            onClick={this.onClickButton}
          >
            English
          </EachButton>
          <EachButton type="button" value="Tamil" onClick={this.onClickButton}>
            Tamil
          </EachButton>
          <EachButton type="button" value="Telugu" onClick={this.onClickButton}>
            Telugu
          </EachButton>
        </ButtonContainer>
        <UnorderedList>
          {filteredLanguage.map(each => (
            <Language key={each.id} selectedLanguage={each} />
          ))}
        </UnorderedList>
      </AppContainer>
    )
  }
}

export default Greetings
