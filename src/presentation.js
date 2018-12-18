import styled from 'react-emotion'
import React from 'react'
import RunGif from './run.gif'
import SppJpg from './spp.jpg'
import Svg0 from './8min-0.png'
import Svg1 from './8min-1.png'
import Svg2 from './8min-2.png'
import Svg3 from './8min-3.png'
import Svg4 from './8min-4.png'
import Svg5 from './8min-5.png'
import Svg6 from './8min-6.png'
import Svg7 from './8min-7.png'
import MateIco from './icons/mate-ico.png'
import OsxIco from './icons/osx-ico.jpeg'
import ReactIco from './icons/react-ico.png'
import VimIco from './icons/vim-ico.png'
import PrismIco from './icons/prism-ico.png'
import SpectacleIco from './icons/spectacle-ico.png'

import ReactHooksJpg from './react-hooks.jpg'
import CodeSlide from 'spectacle-code-slide'

import CustomeStoreTxt from './CustomerStore.js.txt'
import FuncGreetingsTxt from './FuncGreetings.js.txt'
import PureGreetingsTxt from './PureGreetings.js.txt'
import { Deck, Heading, Image, Link, Slide, Text } from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'
require('normalize.css')

const CustomHeading = styled(Heading)`
  margin-bottom: 70px;
`
const CustomText = styled(Text)`
  margin-top: 70px;
`
const theme = createTheme(
  {
    primary: 'white',
    secondary: 'tomato',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)
const renderSlide = (title, text, img) => {
  return (
    <Slide>
      <CustomHeading size={4} textColor="secondary">
        {title}
      </CustomHeading>
      <Image src={img} />
      <Text>{text}</Text>
    </Slide>
  )
}

const renderIcon = (url) => {
  return <Image src={url} height="70px" />
}
const Links = styled('div')`
  display: flex;
  flex-direction: column;
`
const IconList = styled('div')`
  display: flex;
`
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        backgroundImage={ReactHooksJpg}
        theme={theme}
      >
        <Slide>
          <CustomHeading size={4} textColor="secondary">
            React Context
          </CustomHeading>
          <Image src={SppJpg} width="30%" />
          <CustomText>Sebastian</CustomText>
        </Slide>
        {renderSlide('Why React?', '', Svg0)}
        {renderSlide('Component Types', '', Svg1)}
        {renderSlide('State Sharing', '', Svg2)}
        {renderSlide('State Lifting', '', Svg3)}
        {renderSlide('Redux = Simple', '', Svg4)}
        {renderSlide('React + Redux = Complex', '', Svg5)}
        {renderSlide('More Complex', '', Svg6)}
        {renderSlide('React Context', '', Svg7)}
        <CodeSlide
          showLineNumbers={false}
          transition={[]}
          lang="js"
          code={CustomeStoreTxt}
          ranges={[
            { loc: [0, 0], title: 'Store Component' },
            { loc: [1, 6], note: 'Context Type' },
            { loc: [7, 8], note: 'Stateful Component' },
            { loc: [10, 19], note: 'Store / Reducer' },
            { loc: [20, 27], note: 'Context Provider' }
          ]}
        />
        <CodeSlide
          showLineNumbers={false}
          transition={[]}
          lang="js"
          code={PureGreetingsTxt}
          ranges={[
            { loc: [0, 0], title: 'Pure Consumer' },
            { loc: [1, 2], note: 'Get Context Type' },
            { loc: [3, 6], note: 'Set Context Type' },
            { loc: [7, 20], note: 'Use Context' }
          ]}
        />
        <CodeSlide
          showLineNumbers={false}
          transition={[]}
          lang="js"
          code={FuncGreetingsTxt}
          ranges={[
            { loc: [0, 0], title: 'Func Component' },
            { loc: [1, 2], note: 'Obtain Context Type' },
            { loc: [3, 15], note: 'Consume Context' },
            { loc: [16, 17], note: 'Memoize' }
          ]}
        />
        {renderSlide('Wait...', 'What about React Hooks?')}
        <Slide bgImage={ReactHooksJpg}>
          <CustomHeading size={6} textColor="secondary">
            Hooks
          </CustomHeading>
          <Image src={RunGif} width="80%" />
        </Slide>
        <Slide>
          <CustomHeading size={6} textColor="secondary">
            Thank you!
          </CustomHeading>
          <Image src={SppJpg} height="200px" />
          <Link
            textColor="tomato"
            textSize="24px"
            href="https://github.com/sppiotrowski/green-react"
          >
            <b>app</b>: https://github.com/sppiotrowski/green-react
          </Link>
          <Links>
            <Link
              textColor="tomato"
              textSize="24px"
              href="https://github.com/sppiotrowski/pres-react-context"
            >
              <b>pres</b>: https://github.com/sppiotrowski/pres-react-context
            </Link>
          </Links>
          <CustomText />
          <Text textSize="24px">Powered by</Text>
          <IconList>
            {renderIcon(MateIco)}
            {renderIcon(VimIco)}
            {renderIcon(OsxIco)}
            {renderIcon(ReactIco)}
            {renderIcon(SpectacleIco)}
            {renderIcon(PrismIco)}
          </IconList>
        </Slide>
      </Deck>
    )
  }
}
