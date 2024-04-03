import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'
import packageJson from '../package.json' assert { type: 'json' }

const theme = create({
	base: 'light',
	brandTitle: packageJson.name,
	brandImage: process.env.PUBLIC_URL ? `/${process.env.PUBLIC_URL}/banner.png` : '/banner.png',
})

addons.setConfig({ theme })
