# compoland

> component for reactjs

[![NPM](https://img.shields.io/npm/v/compoland.svg)](https://www.npmjs.com/package/compoland) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save compoland
```

## Usage

```jsx
// exemple of use

import { MultipurposeButton } from 'compoland';

<MultipurposeButton
    variant="contained"
    label="Contactez-nous"
    disabled={false}
    size="large"
    uppercase={true}
    bold={true}
    icon="send"
    iconPosition="right"
    backgroundColor="#3f51b5"
    textColor="#fff"
    iconColor="#fff"
    type='submit'
    fullWidth={false}
    onClick={() => console.log('clicked')}
    />
```

## License

MIT © [enzoran1](https://github.com/enzoran1)
