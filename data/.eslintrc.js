// This file is part of Qa11y Dashboard.
//
// Qa11y Dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Qa11y Dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Qa11y Dashboard.  If not, see <http://www.gnu.org/licenses/>.
// Developed by Guillermo Alexis Lemunao Carrasco and Pa11y Guys

'use strict';

// Clone the main config
var config = module.exports = JSON.parse(JSON.stringify(require('../.eslintrc')));

// Disable max line length/statements
config.rules['max-len'] = 'off';
config.rules['max-statements'] = 'off';
