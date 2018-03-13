import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey, url } from './src/config';

import User, { createUrl, gravatar } from './src/user';

const nick = new User('Nick Sonner', 'nicksonner@gmail.com', 'nicksonner.io')

const profile = createUrl(nick.name)
const avatar = gravatar(nick.email)