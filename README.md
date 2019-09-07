# fibo-collab-drawing

Progress indicator and Avatars components for React Native using ReactART

## Installation

`$ npm install @fibo-collab-drawing --save`

### ReactART based components

#### For CocoaPod users:

Add the `ART` subspec like so:
```ruby
pod 'React', path: '../node_modules/react-native', subspecs: [
  'ART',
]
```

#### Or manually:

Add the `ART.xcodeproj` (found in `node_modules/react-native/Libraries/ART`) to the **Libraries** group and add `libART.a` to **Link Binary With Libraries** under **Build Phases**. [More info and screenshots about how to do this is available in the React Native documentation](http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content).

## Deploy to npmjs

```
$ npm run build
$ npm publish
```

## Usage

```js
import {
	CircularProgressBar, ChatRoomAvatar
} from '@fibo-app/fibo-collab-drawing'

<CircularProgressBar
	borderColor={'#9b9b9b'}
	color={'#efad27'}
	thickness={6}
	strokeCap={'round'}
	borderWidth={0.7}
	progress={50)}
	size={200}
	showText={true}
	formatText={'Sample Text'} />
```

```js
<ChatRoomAvatar
	containerStyle={{ marginRight: 16 }}
	size={40}
	info={[ { color: '', name: '' }, ... ]}/>
```
