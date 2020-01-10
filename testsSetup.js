import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Stolen from https://github.com/formatjs/react-intl/issues/1477#issuecomment-538431978
// jest.mock('react-intl', () => {
// 	const reactIntl = require.requireActual('react-intl');
// 	const messages = {};

// 	const intlProvider = new reactIntl.IntlProvider(
// 		{
// 			locale: 'en',
// 			messages,
// 		},
// 		{}
// 	);

// 	return {
// 		...reactIntl,
// 		useIntl: () => intlProvider.state.intl,
// 	};
// });
