webpackJsonp([0],{

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageContent = __webpack_require__(659);

var _pageContent2 = _interopRequireDefault(_pageContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageContent = function PageContent(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: _pageContent2.default.pageContent },
    children
  );
};

PageContent.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = PageContent;

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable no-console */

var defaultErrorMessages = {
  email: 'Email must contain an \'@\' and a \'.\' to be valid',
  required: 'This input is required'
};

var RULES = {
  email: /.+@.+\..+/i,
  required: function required(value) {
    return value !== undefined && value !== null && (typeof value !== 'boolean' || value === true) && (typeof value !== 'string' || value.length > 0) && (!Array.isArray(value) || value.length > 0) && ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || Object.keys(value).length > 0);
  }
};

var getMatcher = function getMatcher(name) {
  var errorMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultErrorMessages[name];

  var rule = RULES[name];

  if (!rule) {
    console.error('No rule for name "' + name + '" defined');
  }

  var test = typeof rule === 'function' ? rule : function (value) {
    return rule.test(value);
  };

  return { name: name, test: test, errorMessage: errorMessage };
};

var createValidate = function createValidate(matchers) {
  return function (value) {
    var invalidMatcher = matchers.find(function (matcher) {
      return !matcher.test(value);
    });

    if (!invalidMatcher) {
      return undefined;
    }

    return invalidMatcher.errorMessage || true;
  };
};

exports.default = function (_ref) {
  var _ref$validations = _ref.validations,
      validations = _ref$validations === undefined ? [] : _ref$validations,
      required = _ref.required;

  var matchers = [];

  if (required) {
    matchers = matchers.concat(getMatcher('required'));
  }

  validations.forEach(function (validation) {
    if (validation && typeof validation === 'string') {
      var validationMatchers = getMatcher(validation);

      matchers = matchers.concat(validationMatchers);
    } else if (validation && (typeof validation === 'undefined' ? 'undefined' : _typeof(validation)) === 'object') {
      var _validationMatchers = Object.keys(validation).map(function (ruleName) {
        return getMatcher(ruleName, validation[ruleName]);
      });

      matchers = matchers.concat(_validationMatchers);
    } else if (validations) {
      console.error('validations needs to be an array of type [\'rule\'] or [{ ruleName: \'errorMessage\' }]');
    }
  });

  return createValidate(matchers);
};

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(290);

var _classnames2 = _interopRequireDefault(_classnames);

var _validationErrors = __webpack_require__(690);

var _validationErrors2 = _interopRequireDefault(_validationErrors);

var _validationField = __webpack_require__(694);

var _validationField2 = _interopRequireDefault(_validationField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValidationField = function ValidationField(_ref) {
  var children = _ref.children,
      error = _ref.error,
      touched = _ref.touched,
      showError = _ref.showError,
      className = _ref.className;

  var errors = error;

  if (!Array.isArray(error)) {
    errors = [error];
  }

  var hasError = errors.length > 0;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(className, touched && hasError && _validationField2.default.hasError) },
    _react2.default.createElement(
      'div',
      { className: _validationField2.default.validationField },
      children
    ),
    touched && showError ? _react2.default.createElement(_validationErrors2.default, { errors: errors }) : null
  );
};

ValidationField.defaultProps = {
  error: null,
  className: null,
  showError: true
};

ValidationField.propTypes = {
  showError: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired,
  touched: _propTypes2.default.bool.isRequired,
  error: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired)]),
  className: _propTypes2.default.string
};

exports.default = ValidationField;

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(290);

var _classnames2 = _interopRequireDefault(_classnames);

var _button = __webpack_require__(700);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      styleName = _ref.styleName,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'styleName', 'className']);

  return _react2.default.createElement(
    'button',
    _extends({}, props, {
      className: (0, _classnames2.default)(_button2.default.button, _button2.default[styleName], className)
    }),
    children
  );
};

Button.defaultProps = {
  styleName: 'primary',
  className: null
};

Button.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  styleName: _propTypes2.default.string
};

exports.default = Button;

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(305);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(318);

var _app = __webpack_require__(320);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(756);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(23);

var _foundRelay = __webpack_require__(336);

var _router = __webpack_require__(454);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(467);

var _store2 = _interopRequireDefault(_store);

var _environment = __webpack_require__(704);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolver = new _foundRelay.Resolver(_environment2.default);

var App = function App() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_router2.default, { matchContext: { store: _store2.default }, resolver: resolver })
  );
};

exports.default = App;

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createConnectedRouter = __webpack_require__(140);

var _createConnectedRouter2 = _interopRequireDefault(_createConnectedRouter);

var _createRender = __webpack_require__(145);

var _createRender2 = _interopRequireDefault(_createRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderError = function RenderError(_ref) {
  var error = _ref.error,
      router = _ref.router;

  router.replace({
    pathname: '/error/' + error.status,
    state: {
      error: error.data
    }
  });
};

RenderError.propTypes = {
  error: _propTypes2.default.shape({
    status: _propTypes2.default.number.isRequired
  }).isRequired,
  router: _propTypes2.default.object.isRequired
};

exports.default = (0, _createConnectedRouter2.default)({
  render: (0, _createRender2.default)({
    renderError: RenderError
  })
});

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _reduxThunk = __webpack_require__(468);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxForm = __webpack_require__(94);

var _foundReducer = __webpack_require__(158);

var _foundReducer2 = _interopRequireDefault(_foundReducer);

var _Actions = __webpack_require__(68);

var _Actions2 = _interopRequireDefault(_Actions);

var _BrowserProtocol = __webpack_require__(159);

var _BrowserProtocol2 = _interopRequireDefault(_BrowserProtocol);

var _createHistoryEnhancer = __webpack_require__(274);

var _createHistoryEnhancer2 = _interopRequireDefault(_createHistoryEnhancer);

var _queryMiddleware = __webpack_require__(275);

var _queryMiddleware2 = _interopRequireDefault(_queryMiddleware);

var _createMatchEnhancer = __webpack_require__(160);

var _createMatchEnhancer2 = _interopRequireDefault(_createMatchEnhancer);

var _Matcher = __webpack_require__(161);

var _Matcher2 = _interopRequireDefault(_Matcher);

var _routeConfig = __webpack_require__(646);

var _routeConfig2 = _interopRequireDefault(_routeConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var historyEnhancer = (0, _createHistoryEnhancer2.default)({
  protocol: new _BrowserProtocol2.default(),
  middlewares: [_queryMiddleware2.default]
});

var matcherEnhancer = (0, _createMatchEnhancer2.default)(new _Matcher2.default(_routeConfig2.default));

// eslint-disable-next-line no-underscore-dangle
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

var middleWare = composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default), historyEnhancer, matcherEnhancer);

var reducers = (0, _redux.combineReducers)({
  found: _foundReducer2.default,
  form: _reduxForm.reducer
});

var store = (0, _redux.createStore)(reducers, {}, middleWare);

store.dispatch(_Actions2.default.init());

exports.default = store;

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _makeRouteConfig = __webpack_require__(276);

var _makeRouteConfig2 = _interopRequireDefault(_makeRouteConfig);

var _Route = __webpack_require__(277);

var _Route2 = _interopRequireDefault(_Route);

var _termsAndConditionsContainer = __webpack_require__(650);

var _privacyPolicyContainer = __webpack_require__(661);

var _imprintContainer = __webpack_require__(663);

var _errorPageContainer = __webpack_require__(666);

var _primaryLayoutContainer = __webpack_require__(670);

var _landingPageContainer = __webpack_require__(683);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _makeRouteConfig2.default)(_react2.default.createElement(
  _Route2.default,
  _extends({ path: '/' }, _primaryLayoutContainer.routeConfig),
  _react2.default.createElement(_Route2.default, _landingPageContainer.routeConfig),
  _react2.default.createElement(_Route2.default, _extends({ path: 'error/:status' }, _errorPageContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'termsAndConditions' }, _termsAndConditionsContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'privacyPolicy' }, _privacyPolicyContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'imprint' }, _imprintContainer.routeConfig))
));

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _termsAndConditions = __webpack_require__(651);

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditionsContainer = _termsAndConditions2.default;

var routeConfig = exports.routeConfig = {
  Component: TermsAndConditionsContainer
};

exports.default = TermsAndConditionsContainer;

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(107);

var _pageContent = __webpack_require__(162);

var _pageContent2 = _interopRequireDefault(_pageContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditions = function TermsAndConditions() {
  return _react2.default.createElement(
    _pageContent2.default,
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Terms and Conditions'
      ),
      _react2.default.createElement('meta', { name: 'description', content: 'Our terms and conditions that you agree to when using our site.' })
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Terms and Conditions'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Last Updated: June 11th 2018'
    ),
    _react2.default.createElement(
      'p',
      null,
      '"You" and "your" refer to you, as a user of the Site. A "user" is someone who accesses,browses, crawls, scrapes, or in any way uses the Site. "We," "us," and "our" refer to onboardor. "Content" means text, images, photos, audio, video, location data, and all other forms of data or communication. "Your Content" means Content that you submit or transmit to, through, or in connection with the Site, such as ratings, reviews, compliments, invitations, check-ins, messages, and information that you publicly display or displayed in your account profile. "User Content" means Content that users submit or transmit to, through, or in connection with the Site. "onboardor Content" means Content that we create and make available in connection with the Site. "Third Party Content" means Content that originates from parties other than onboardor or its users, which is made available in connection with the Site. "Site Content" means all of the Content that is made available in connection with the Site, including Your Content, User Content, Third Party Content, and onboardor Content.'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Terms'
        ),
        _react2.default.createElement(
          'p',
          null,
          'By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trade mark law.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Disclaimer'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The materials on the onboardor website are provided "as shown". onboardor makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, onboardor does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its internet website or otherwise relating to such materials or on any sites linked to this site.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Limitations'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In no event shall onboardor or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our internet site or offered services, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Revisions and Errors'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The materials appearing on our website could include technical, typographical, or photographic errors. onboardor does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Links'
        ),
        _react2.default.createElement(
          'p',
          null,
          'onboardor has not reviewed all of the sites linked to its internet website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user"s own risk.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Governing Law'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Any claim relating to the onboardor website shall be governed by the laws of the country of note without regard to its conflict of law provisions.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'English Language'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In the event of a conflict between these Terms and a foreign language version of our Terms of Use, the English language version of these Terms governs. All disputes, claims and causes of action (and related proceedings) will be communicated in English.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Copyright policy, notice and claim information'
        ),
        _react2.default.createElement(
          'p',
          null,
          'All materials on this site, whether separate or compiled, including, but not limited to, text, graphics, audio clips, logos, buttons, images, digital downloads, data compilations, software, icons, html code and xml code, as well as all copyright, patent, trademark, trade dress, and other rights therein, are owned or licensed by onboardor and its third-party information providers, and are protected by international intellectual property laws.'
        )
      )
    )
  );
};

exports.default = TermsAndConditions;

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pageContent":"Components-shared-pageContent__pageContent"};

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _privacyPolicy = __webpack_require__(662);

var _privacyPolicy2 = _interopRequireDefault(_privacyPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicyContainer = _privacyPolicy2.default;

var routeConfig = exports.routeConfig = {
  Component: PrivacyPolicyContainer
};

exports.default = PrivacyPolicyContainer;

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(107);

var _pageContent = __webpack_require__(162);

var _pageContent2 = _interopRequireDefault(_pageContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicy = function PrivacyPolicy() {
  return _react2.default.createElement(
    _pageContent2.default,
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Privacy Policy'
      ),
      _react2.default.createElement('meta', { name: 'description', content: 'Our privacy policy explaining what data we collect.' })
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Privacy Policy'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Last Updated: June 11th 2018'
    ),
    _react2.default.createElement(
      'p',
      null,
      'This privacy policy has been compiled to better serve those who are concerned with how their \'Personally Identifiable Information\' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'What personal information do we collect?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'When registering for our newsletter, you will be asked to enter your email address. This is to help us indentify you and keep you updated. We will not send you any emails that you do not request.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'When do we collect information?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We collect certain information from you when you register for our newsletter.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'How do we protect your information?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We do not use vulnerability scanning and/or scanning to PCI standards. We never ask for credit card numbers. We use regular Malware Scanning. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive information you supply is encrypted via Secure Socket Layer (SSL) technology. We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Do we use \'cookies\'?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Yes. Cookies are small files that a site or its service provider transfers to your computer\'s hard drive through your Web browser that enables the site\'s or service provider\'s systems to recognize your browser and capture and remember certain information. They are used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'We use cookies to:'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Understand and save user\'s preferences for future visits.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'Cookies are an important part of our website and the website will not work without having them enabled. By using our site you allow us to use cookies.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Third-party disclosure'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Third-party links'
        ),
        _react2.default.createElement(
          'p',
          null,
          'There may be third-party links to radio station websites throughout our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites. Any link on our site to a third part website that is not relevant or if we deem it inappropriate, may be removed.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Google'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Google\'s advertising requirements can be summed up by Google\'s Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en We have not enabled Google AdSense on our site.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'California Online Privacy Protection Act'
        ),
        _react2.default.createElement(
          'p',
          null,
          'CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law\'s reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'According to CalOPPA, we agree to the following:'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Users can visit our site anonymously. This privacy policy has a link to it from our home page in the header. Our Privacy Policy link includes the word \'Privacy\' and can easily be found on the page specified above. You will be notified of any Privacy Policy changes: \u2022 On our Privacy Policy Page Can change your personal information: \u2022 Through our website'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Does our site allow third-party behavioral tracking?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'It\'s important to note that we allow third-party behavioral tracking'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'COPPA (Children Online Privacy Protection Act)'
        ),
        _react2.default.createElement(
          'p',
          null,
          'When it comes to the collection of personal information from children under the age of 13 years old, the Children\'s Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States\' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children\'s privacy and safety online. We do not specifically market to children under the age of 13 years old.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Fair Information Practices'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information. In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur: We will notify you via email within 7 business days. We will also notify users via an in-site notification on the home page within 7 business days. We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.'
        )
      )
    )
  );
};

exports.default = PrivacyPolicy;

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _imprint = __webpack_require__(664);

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImprintContainer = _imprint2.default;

var routeConfig = exports.routeConfig = {
  Component: ImprintContainer
};

exports.default = ImprintContainer;

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(107);

var _pageContent = __webpack_require__(162);

var _pageContent2 = _interopRequireDefault(_pageContent);

var _imprint = __webpack_require__(665);

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Imprint = function Imprint() {
  return _react2.default.createElement(
    _pageContent2.default,
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Imprint'
      ),
      _react2.default.createElement('meta', { name: 'description', content: 'Contact information for onboardor.com.' })
    ),
    _react2.default.createElement(
      'div',
      { className: _imprint2.default.imprintContent },
      _react2.default.createElement(
        'h1',
        null,
        'Imprint'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Company Name: VAST NETWORK LTD'
      ),
      _react2.default.createElement(
        'div',
        null,
        'CEO: Martin Dawson'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Address: 26 CalderView, Rastrick, Brighouse, HD63DQ United Kingdom'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Telephone: +(44)7473591097'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Email address: u1356770@gmail.com'
      )
    )
  );
};

exports.default = Imprint;

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"imprintContent":"Components-footer-imprint__imprintContent"};

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(44);

var _errorPage = __webpack_require__(668);

var _errorPage2 = _interopRequireDefault(_errorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProps = function createProps(_ref) {
  var status = _ref.status,
      error = _ref.error;

  switch (status) {
    case 404:
      return { error: 'The page could not be found.' };
    default:
      return { error: error };
  }
};

var enhance = (0, _recompose.compose)((0, _recompose.withProps)(createProps));

var ErrorPageContainer = enhance(_errorPage2.default);

var routeConfig = exports.routeConfig = {
  render: function render(_ref2) {
    var props = _ref2.props;
    return props && _react2.default.createElement(ErrorPageContainer, {
      status: parseInt(props.params.status, 10),
      error: props.location.state.error
    });
  }
};

exports.default = ErrorPageContainer;

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(107);

var _errorPage = __webpack_require__(669);

var _errorPage2 = _interopRequireDefault(_errorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorPage = function ErrorPage(_ref) {
  var status = _ref.status,
      error = _ref.error;
  return _react2.default.createElement(
    'div',
    { className: _errorPage2.default.errorPage },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Error ',
        status
      ),
      _react2.default.createElement('meta', { name: 'robots', content: 'noindex' })
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Error ',
      status
    ),
    _react2.default.createElement(
      'div',
      { className: _errorPage2.default.error },
      _react2.default.createElement(
        'div',
        null,
        error
      ),
      'We have been notified of the error \xAF\\_(\u30C4)_/\xAF. Please try again later.'
    )
  );
};

ErrorPage.defaultProps = {
  error: 'An unknown error has occured.'
};

ErrorPage.propTypes = {
  status: _propTypes2.default.number.isRequired,
  error: _propTypes2.default.string
};

exports.default = ErrorPage;

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errorPage":"Components-errorPage-errorPage__errorPage","error":"Components-errorPage-errorPage__error"};

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _primaryLayout = __webpack_require__(671);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayoutContainer = _primaryLayout2.default;

var routeConfig = exports.routeConfig = {
  Component: PrimaryLayoutContainer
};

exports.default = PrimaryLayoutContainer;

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _primaryLayout = __webpack_require__(672);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

var _primaryLayoutErrorBoundary = __webpack_require__(673);

var _primaryLayoutErrorBoundary2 = _interopRequireDefault(_primaryLayoutErrorBoundary);

var _footer = __webpack_require__(681);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayout = function PrimaryLayout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _primaryLayoutErrorBoundary2.default,
    { className: _primaryLayout2.default.primaryLayout },
    _react2.default.createElement(
      'div',
      { className: _primaryLayout2.default.wrap },
      _react2.default.createElement(
        'div',
        { className: _primaryLayout2.default.main },
        children
      )
    ),
    _react2.default.createElement(_footer2.default, null)
  );
};

PrimaryLayout.defaultProps = {
  children: null
};

PrimaryLayout.propTypes = {
  children: _propTypes2.default.node
};

exports.default = PrimaryLayout;

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primaryLayout":"Components-layouts-primaryLayout-primaryLayout__primaryLayout","wrap":"Components-layouts-primaryLayout-primaryLayout__wrap","main":"Components-layouts-primaryLayout-primaryLayout__main"};

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(44);

var _found = __webpack_require__(279);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prefer-stateless-function */
var PrimaryLayoutErrorBoundary = function (_React$Component) {
  _inherits(PrimaryLayoutErrorBoundary, _React$Component);

  function PrimaryLayoutErrorBoundary() {
    _classCallCheck(this, PrimaryLayoutErrorBoundary);

    return _possibleConstructorReturn(this, (PrimaryLayoutErrorBoundary.__proto__ || Object.getPrototypeOf(PrimaryLayoutErrorBoundary)).apply(this, arguments));
  }

  _createClass(PrimaryLayoutErrorBoundary, [{
    key: 'render',

    // componentDidCatch() {
    //   this.props.router.push('/error/500');
    // }
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        this.props.children
      );
    }
  }]);

  return PrimaryLayoutErrorBoundary;
}(_react2.default.Component);

PrimaryLayoutErrorBoundary.defaultProps = {
  className: null
};

PrimaryLayoutErrorBoundary.propTypes = {
  // router: PropTypes.object.isRequired,
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string
};

exports.default = (0, _recompose.compose)(_found.withRouter)(PrimaryLayoutErrorBoundary);

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _found = __webpack_require__(279);

var _footer = __webpack_require__(682);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'div',
    { className: _footer2.default.footer },
    _react2.default.createElement(
      _found.Link,
      { to: '/termsAndConditions' },
      'terms and conditions'
    ),
    _react2.default.createElement(
      _found.Link,
      { to: '/privacyPolicy' },
      'privacy policy'
    ),
    _react2.default.createElement(
      _found.Link,
      { to: '/imprint' },
      'imprint'
    )
  );
};

exports.default = Footer;

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"Components-footer-footer__footer"};

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _landingPage = __webpack_require__(684);

var _landingPage2 = _interopRequireDefault(_landingPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LandingPageContainer = _landingPage2.default;

var routeConfig = exports.routeConfig = {
  Component: LandingPageContainer
};

exports.default = LandingPageContainer;

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _subscribeMailingListContainer = __webpack_require__(685);

var _subscribeMailingListContainer2 = _interopRequireDefault(_subscribeMailingListContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LandingPage = function LandingPage() {
  return _react2.default.createElement(
    'div',
    null,
    'Make the process of onboarding your new developers easy. Join our early sign up list and we\'ll give your company a free sixth month subscription. Coming this August.',
    _react2.default.createElement(_subscribeMailingListContainer2.default, null)
  );
};

exports.default = LandingPage;

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(44);

var _reduxForm = __webpack_require__(94);

var _subscribeMailingList = __webpack_require__(686);

var _subscribeMailingList2 = _interopRequireDefault(_subscribeMailingList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  onSubmit: function onSubmit() {
    return function (input) {
      return (0, _subscribeMailingList2.default)(input).catch(function (error) {
        throw new _reduxForm.SubmissionError(error);
      });
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recompose.withHandlers)(handlers), (0, _reduxForm.reduxForm)({
  form: 'subscribeMailingList'
}))(_subscribeMailingList2.default);

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invisibleRecaptchaContainer = __webpack_require__(687);

var _invisibleRecaptchaContainer2 = _interopRequireDefault(_invisibleRecaptchaContainer);

var _fieldInputContainer = __webpack_require__(695);

var _fieldInputContainer2 = _interopRequireDefault(_fieldInputContainer);

var _formSpinnerButtonContainer = __webpack_require__(698);

var _formSpinnerButtonContainer2 = _interopRequireDefault(_formSpinnerButtonContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubscribeMailingList = function SubscribeMailingList(_ref) {
  var handleSubmit = _ref.handleSubmit,
      form = _ref.form;
  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit, action: '' },
    _react2.default.createElement(_fieldInputContainer2.default, {
      name: 'email',
      id: 'email',
      placeholder: 'email address',
      type: 'email',
      validations: ['email'],
      required: true
    }),
    _react2.default.createElement(_invisibleRecaptchaContainer2.default, {
      name: 'recaptcha',
      sitekey: "6LdV3F4UAAAAAAHstIWHTY1fZER_DgFAmqWqzgky"
    }),
    _react2.default.createElement(
      _formSpinnerButtonContainer2.default,
      { formName: form },
      'Join list'
    )
  );
};

SubscribeMailingList.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  form: _propTypes2.default.string.isRequired
};

exports.default = SubscribeMailingList;

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(44);

var _reduxForm = __webpack_require__(94);

var _createFieldValidator = __webpack_require__(288);

var _createFieldValidator2 = _interopRequireDefault(_createFieldValidator);

var _invisibleRecaptcha = __webpack_require__(688);

var _invisibleRecaptcha2 = _interopRequireDefault(_invisibleRecaptcha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _recompose.withProps)(function () {
  return { component: _invisibleRecaptcha2.default };
}), (0, _recompose.withHandlers)({ validate: _createFieldValidator2.default }))(_reduxForm.Field);

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRecaptcha = __webpack_require__(689);

var _reactRecaptcha2 = _interopRequireDefault(_reactRecaptcha);

var _validationField = __webpack_require__(289);

var _validationField2 = _interopRequireDefault(_validationField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvisibleRecaptcha = function (_React$Component) {
  _inherits(InvisibleRecaptcha, _React$Component);

  function InvisibleRecaptcha(props) {
    _classCallCheck(this, InvisibleRecaptcha);

    var _this = _possibleConstructorReturn(this, (InvisibleRecaptcha.__proto__ || Object.getPrototypeOf(InvisibleRecaptcha)).call(this, props));

    _this.setRecaptcha = function (e) {
      _this.recaptcha = e;
    };

    _this.state = {};
    return _this;
  }

  _createClass(InvisibleRecaptcha, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.recaptcha.execute();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _validationField2.default,
        {
          touched: this.props.meta.touched,
          error: this.props.meta.error
        },
        _react2.default.createElement(_reactRecaptcha2.default, {
          ref: this.setRecaptcha,
          size: 'invisible',
          sitekey: "6LdV3F4UAAAAAAHstIWHTY1fZER_DgFAmqWqzgky",
          verifyCallback: function verifyCallback(response) {
            return _this2.props.input.onChange(response);
          }
        })
      );
    }
  }]);

  return InvisibleRecaptcha;
}(_react2.default.Component);

InvisibleRecaptcha.propTypes = {
  input: _propTypes2.default.shape({
    onChange: _propTypes2.default.func.isRequired
  }).isRequired,
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool.isRequired,
    error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)])
  }).isRequired
};

exports.default = InvisibleRecaptcha;

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationError = __webpack_require__(691);

var _validationError2 = _interopRequireDefault(_validationError);

var _validationErrors = __webpack_require__(693);

var _validationErrors2 = _interopRequireDefault(_validationErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Errors = function Errors(_ref) {
  var errors = _ref.errors;
  return errors.length ? _react2.default.createElement(
    'div',
    { className: _validationErrors2.default.errors },
    errors.map(function (error) {
      return _react2.default.createElement(_validationError2.default, { key: error, error: error });
    })
  ) : null;
};

Errors.defaultProps = {
  errors: []
};

Errors.propTypes = {
  errors: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired)
};

exports.default = Errors;

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationError = __webpack_require__(692);

var _validationError2 = _interopRequireDefault(_validationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function Error(_ref) {
  var error = _ref.error;
  return error && _react2.default.createElement(
    'span',
    { className: _validationError2.default.error },
    error
  );
};

Error.defaultProps = {
  error: null
};

Error.propTypes = {
  error: _propTypes2.default.string
};

exports.default = Error;

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"error":"Components-shared-Validation-validationError__error"};

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errors":"Components-shared-Validation-validationErrors__errors"};

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hasError":"Components-shared-inputs-validationField__hasError","validationField":"Components-shared-inputs-validationField__validationField"};

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(44);

var _reduxForm = __webpack_require__(94);

var _createFieldValidator = __webpack_require__(288);

var _createFieldValidator2 = _interopRequireDefault(_createFieldValidator);

var _fieldInput = __webpack_require__(696);

var _fieldInput2 = _interopRequireDefault(_fieldInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _recompose.withHandlers)({ validate: _createFieldValidator2.default }), (0, _recompose.withProps)(function () {
  return { component: _fieldInput2.default };
}))(_reduxForm.Field);

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationField = __webpack_require__(289);

var _validationField2 = _interopRequireDefault(_validationField);

var _fieldInput = __webpack_require__(697);

var _fieldInput2 = _interopRequireDefault(_fieldInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FieldInput = function FieldInput(_ref) {
  var input = _ref.input,
      _ref$meta = _ref.meta,
      form = _ref$meta.form,
      touched = _ref$meta.touched,
      _ref$meta$error = _ref$meta.error,
      error = _ref$meta$error === undefined ? [] : _ref$meta$error,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ['input', 'meta', 'id']);

  return _react2.default.createElement(
    _validationField2.default,
    { touched: touched, error: error },
    _react2.default.createElement('input', _extends({}, input, props, {
      className: _fieldInput2.default.input,
      id: form + '_' + id
    }))
  );
};

FieldInput.propTypes = {
  input: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  }).isRequired,
  meta: _propTypes2.default.shape({
    form: _propTypes2.default.string.isRequired,
    touched: _propTypes2.default.bool.isRequired,
    error: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired)])
  }).isRequired,
  id: _propTypes2.default.string.isRequired
};

exports.default = FieldInput;

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(23);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(44);

var _spinnerButtonContainer = __webpack_require__(699);

var _spinnerButtonContainer2 = _interopRequireDefault(_spinnerButtonContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var form = _ref.form;
  var formName = _ref2.formName;
  return {
    isLoading: form[formName].submitting
  };
};

var propTypes = {
  formName: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

var propsMapper = function propsMapper(props) {
  var formName = props.formName,
      dispatch = props.dispatch,
      newProps = _objectWithoutProperties(props, ['formName', 'dispatch']);

  return newProps;
};

exports.default = (0, _recompose.compose)((0, _recompose.setPropTypes)(propTypes), (0, _reactRedux.connect)(mapStateToProps), (0, _recompose.mapProps)(propsMapper))(_spinnerButtonContainer2.default);

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(44);

var _button = __webpack_require__(291);

var _button2 = _interopRequireDefault(_button);

var _spinnerButton = __webpack_require__(701);

var _spinnerButton2 = _interopRequireDefault(_spinnerButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  isLoading: _propTypes2.default.bool
};

var propsMapper = function propsMapper(props) {
  var isLoading = props.isLoading,
      newProps = _objectWithoutProperties(props, ['isLoading']);

  return newProps;
};

var enhance = (0, _recompose.compose)((0, _recompose.setPropTypes)(propTypes), (0, _recompose.mapProps)(propsMapper), (0, _recompose.branch)(function (props) {
  return !props.isLoading;
}, (0, _recompose.renderComponent)(_button2.default)));

exports.default = enhance(_spinnerButton2.default);

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _spinnerButton = __webpack_require__(702);

var _spinnerButton2 = _interopRequireDefault(_spinnerButton);

var _button = __webpack_require__(291);

var _button2 = _interopRequireDefault(_button);

var _spinner = __webpack_require__(703);

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SpinnerButton = function SpinnerButton(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    _button2.default,
    props,
    _react2.default.createElement(_spinner2.default, { className: _spinnerButton2.default.spinnerIcon })
  );
};

exports.default = SpinnerButton;

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"spinnerIcon":"Components-shared-button-spinnerButton__spinnerIcon"};

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SpinnerIcon = function SpinnerIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { width: '80px', height: '80px', viewBox: '0 0 100 100' }),
    _react2.default.createElement(
      'circle',
      { cx: '84', cy: '50', r: '1.43464', fill: '#55acee' },
      _react2.default.createElement('animate', { attributeName: 'r', values: '8;0;0;0;0', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '0s' }),
      _react2.default.createElement('animate', { attributeName: 'cx', values: '84;84;84;84;84', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '0s' })
    ),
    _react2.default.createElement(
      'circle',
      { cx: '77.9028', cy: '50', r: '8', fill: '#157bf8' },
      _react2.default.createElement('animate', { attributeName: 'r', values: '0;8;8;8;0', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '-0.85s' }),
      _react2.default.createElement('animate', { attributeName: 'cx', values: '16;16;50;84;84', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '-0.85s' })
    ),
    _react2.default.createElement(
      'circle',
      { cx: '43.9028', cy: '50', r: '8', fill: '#55acee' },
      _react2.default.createElement('animate', { attributeName: 'r', values: '0;8;8;8;0', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '-0.425s' }),
      _react2.default.createElement('animate', { attributeName: 'cx', values: '16;16;50;84;84', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '-0.425s' })
    ),
    _react2.default.createElement(
      'circle',
      { cx: '16', cy: '50', r: '6.56536', fill: '#157bf8' },
      _react2.default.createElement('animate', { attributeName: 'r', values: '0;8;8;8;0', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '0s' }),
      _react2.default.createElement('animate', { attributeName: 'cx', values: '16;16;50;84;84', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '0s' })
    ),
    _react2.default.createElement(
      'circle',
      { cx: '16', cy: '50', r: '0', fill: '#55acee' },
      _react2.default.createElement('animate', { attributeName: 'r', values: '0;0;8;8;8', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '0s' }),
      _react2.default.createElement('animate', { attributeName: 'cx', values: '16;16;16;50;84', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '0s' })
    )
  );
};

SpinnerIcon.defaultProps = {
  className: null
};

SpinnerIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = SpinnerIcon;

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _relayRuntime = __webpack_require__(14);

var _relayCompose = __webpack_require__(746);

var fetchQuery = function fetchQuery(operation, variables) {
  return fetch('/graphql', {
    method: 'post',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables: variables
    })
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    // https://github.com/facebook/relay/issues/1816
    if (json.errors) {
      return Promise.reject(json.errors);
    }

    return Promise.resolve(json);
  });
};

var network = _relayRuntime.Network.create(fetchQuery);
var source = new _relayRuntime.RecordSource();
var store = new _relayRuntime.Store(source);
var environment = new _relayRuntime.Environment({
  network: network,
  store: store
});

(0, _relayCompose.setEnviroment)(environment);

exports.default = environment;

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[303]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvY3JlYXRlRmllbGRWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL3ZhbGlkYXRpb25GaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9idXR0b24vYnV0dG9uLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dC5zY3NzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xhbmRpbmdQYWdlL2xhbmRpbmdQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGFuZGluZ1BhZ2UvbGFuZGluZ1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvZm9ybS9zdWJzY3JpYmVNYWlsaW5nTGlzdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9mb3JtL3N1YnNjcmliZU1haWxpbmdMaXN0LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL2lucHV0cy9pbnZpc2libGVSZWNhcHRjaGFDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL2ludmlzaWJsZVJlY2FwdGNoYS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9WYWxpZGF0aW9uL3ZhbGlkYXRpb25FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvVmFsaWRhdGlvbi92YWxpZGF0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvVmFsaWRhdGlvbi92YWxpZGF0aW9uRXJyb3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9WYWxpZGF0aW9uL3ZhbGlkYXRpb25FcnJvcnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvdmFsaWRhdGlvbkZpZWxkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL2ZpZWxkSW5wdXRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL2ZpZWxkSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL2ZpZWxkSW5wdXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9idXR0b24vZm9ybVNwaW5uZXJCdXR0b25Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL3NwaW5uZXJCdXR0b25Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL2J1dHRvbi5zY3NzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL2J1dHRvbi9zcGlubmVyQnV0dG9uLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL2J1dHRvbi9zcGlubmVyQnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9pY29ucy9zcGlubmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2FwcC5zY3NzIl0sIm5hbWVzIjpbIlBhZ2VDb250ZW50IiwiY2hpbGRyZW4iLCJwYWdlQ29udGVudCIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdEVycm9yTWVzc2FnZXMiLCJlbWFpbCIsInJlcXVpcmVkIiwiUlVMRVMiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImxlbmd0aCIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsImtleXMiLCJnZXRNYXRjaGVyIiwibmFtZSIsImVycm9yTWVzc2FnZSIsInJ1bGUiLCJjb25zb2xlIiwiZXJyb3IiLCJ0ZXN0IiwiY3JlYXRlVmFsaWRhdGUiLCJpbnZhbGlkTWF0Y2hlciIsIm1hdGNoZXJzIiwiZmluZCIsIm1hdGNoZXIiLCJ2YWxpZGF0aW9ucyIsImNvbmNhdCIsImZvckVhY2giLCJ2YWxpZGF0aW9uIiwidmFsaWRhdGlvbk1hdGNoZXJzIiwibWFwIiwicnVsZU5hbWUiLCJWYWxpZGF0aW9uRmllbGQiLCJ0b3VjaGVkIiwic2hvd0Vycm9yIiwiY2xhc3NOYW1lIiwiZXJyb3JzIiwiaGFzRXJyb3IiLCJ2YWxpZGF0aW9uRmllbGQiLCJkZWZhdWx0UHJvcHMiLCJib29sIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiYXJyYXlPZiIsIkJ1dHRvbiIsInN0eWxlTmFtZSIsInByb3BzIiwiYnV0dG9uIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlc29sdmVyIiwiQXBwIiwic3RvcmUiLCJSZW5kZXJFcnJvciIsInJvdXRlciIsInJlcGxhY2UiLCJwYXRobmFtZSIsInN0YXR1cyIsInN0YXRlIiwiZGF0YSIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0IiwicmVuZGVyRXJyb3IiLCJoaXN0b3J5RW5oYW5jZXIiLCJwcm90b2NvbCIsIm1pZGRsZXdhcmVzIiwibWF0Y2hlckVuaGFuY2VyIiwiY29tcG9zZUVuaGFuY2VycyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsIm1pZGRsZVdhcmUiLCJyZWR1Y2VycyIsImZvdW5kIiwiZm9ybSIsImRpc3BhdGNoIiwiaW5pdCIsIlRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lciIsInJvdXRlQ29uZmlnIiwiQ29tcG9uZW50IiwiVGVybXNBbmRDb25kaXRpb25zIiwiUHJpdmFjeVBvbGljeUNvbnRhaW5lciIsIlByaXZhY3lQb2xpY3kiLCJJbXByaW50Q29udGFpbmVyIiwiSW1wcmludCIsImltcHJpbnRDb250ZW50IiwiY3JlYXRlUHJvcHMiLCJlbmhhbmNlIiwiRXJyb3JQYWdlQ29udGFpbmVyIiwicGFyc2VJbnQiLCJwYXJhbXMiLCJsb2NhdGlvbiIsIkVycm9yUGFnZSIsImVycm9yUGFnZSIsIlByaW1hcnlMYXlvdXRDb250YWluZXIiLCJQcmltYXJ5TGF5b3V0IiwicHJpbWFyeUxheW91dCIsIndyYXAiLCJtYWluIiwiUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkiLCJGb290ZXIiLCJmb290ZXIiLCJMYW5kaW5nUGFnZUNvbnRhaW5lciIsIkxhbmRpbmdQYWdlIiwiaGFuZGxlcnMiLCJvblN1Ym1pdCIsImlucHV0IiwiY2F0Y2giLCJTdWJzY3JpYmVNYWlsaW5nTGlzdCIsImhhbmRsZVN1Ym1pdCIsIlJFQ0FQVENIQV9TSVRFX0tFWSIsImZ1bmMiLCJjb21wb25lbnQiLCJ2YWxpZGF0ZSIsIkludmlzaWJsZVJlY2FwdGNoYSIsInNldFJlY2FwdGNoYSIsImUiLCJyZWNhcHRjaGEiLCJleGVjdXRlIiwibWV0YSIsIm9uQ2hhbmdlIiwicmVzcG9uc2UiLCJFcnJvcnMiLCJFcnJvciIsIkZpZWxkSW5wdXQiLCJpZCIsIm1hcFN0YXRlVG9Qcm9wcyIsImZvcm1OYW1lIiwiaXNMb2FkaW5nIiwic3VibWl0dGluZyIsInByb3BzTWFwcGVyIiwibmV3UHJvcHMiLCJTcGlubmVyQnV0dG9uIiwic3Bpbm5lckljb24iLCJTcGlubmVySWNvbiIsImZldGNoUXVlcnkiLCJvcGVyYXRpb24iLCJ2YXJpYWJsZXMiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ0ZXh0IiwidGhlbiIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0IiwicmVzb2x2ZSIsIm5ldHdvcmsiLCJjcmVhdGUiLCJzb3VyY2UiLCJlbnZpcm9ubWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxjQUFjLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxTQUNsQjtBQUFBO0FBQUEsTUFBSyxXQUFXLHNCQUFPQyxXQUF2QjtBQUNHRDtBQURILEdBRGtCO0FBQUEsQ0FBcEI7O0FBTUFELFlBQVlHLFNBQVosR0FBd0I7QUFDdEJGLFlBQVUsb0JBQVVHLElBQVYsQ0FBZUM7QUFESCxDQUF4Qjs7a0JBSWVMLFc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZjs7QUFFQSxJQUFNTSx1QkFBdUI7QUFDM0JDLFNBQU8scURBRG9CO0FBRTNCQyxZQUFVO0FBRmlCLENBQTdCOztBQUtBLElBQU1DLFFBQVE7QUFDWkYsU0FBTyxZQURLO0FBRVpDLFlBQVU7QUFBQSxXQUNSRSxVQUFVQyxTQUFWLElBQ0FELFVBQVUsSUFEVixLQUVDLE9BQU9BLEtBQVAsS0FBaUIsU0FBakIsSUFBOEJBLFVBQVUsSUFGekMsTUFHQyxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLElBQTZCQSxNQUFNRSxNQUFOLEdBQWUsQ0FIN0MsTUFJQyxDQUFDQyxNQUFNQyxPQUFOLENBQWNKLEtBQWQsQ0FBRCxJQUF5QkEsTUFBTUUsTUFBTixHQUFlLENBSnpDLE1BS0MsUUFBT0YsS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUFqQixJQUE2QkssT0FBT0MsSUFBUCxDQUFZTixLQUFaLEVBQW1CRSxNQUFuQixHQUE0QixDQUwxRCxDQURRO0FBQUE7QUFGRSxDQUFkOztBQVlBLElB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QUNsQ0gsa0JBRGtDO0FBRWxDckc7QUFGa0MsQ0FBaEIsQ0FBcEI7O0FBS0EsaUNBQWN3RyxXQUFkOztrQkFFZUEsVzs7Ozs7OztBQ3hDZix5QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlQ29udGVudC5zY3NzJztcblxuY29uc3QgUGFnZUNvbnRlbnQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUNvbnRlbnR9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5QYWdlQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvbnRlbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuY29uc3QgZGVmYXVsdEVycm9yTWVzc2FnZXMgPSB7XG4gIGVtYWlsOiAnRW1haWwgbXVzdCBjb250YWluIGFuIFxcJ0BcXCcgYW5kIGEgXFwnLlxcJyB0byBiZSB2YWxpZCcsXG4gIHJlcXVpcmVkOiAnVGhpcyBpbnB1dCBpcyByZXF1aXJlZCcsXG59O1xuXG5jb25zdCBSVUxFUyA9IHtcbiAgZW1haWw6IC8uK0AuK1xcLi4rL2ksXG4gIHJlcXVpcmVkOiB2YWx1ZSA9PiAoXG4gICAgdmFsdWUgIT09IHVuZGVmaW5lZCAmJlxuICAgIHZhbHVlICE9PSBudWxsICYmXG4gICAgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nIHx8IHZhbHVlID09PSB0cnVlKSAmJlxuICAgICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IHZhbHVlLmxlbmd0aCA+IDApICYmXG4gICAgKCFBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPiAwKSAmJlxuICAgICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAwKVxuICApLFxufTtcblxuY29uc3QgZ2V0TWF0Y2hlciA9IChuYW1lLCBlcnJvck1lc3NhZ2UgPSBkZWZhdWx0RXJyb3JNZXNzYWdlc1tuYW1lXSkgPT4ge1xuICBjb25zdCBydWxlID0gUlVMRVNbbmFtZV07XG5cbiAgaWYgKCFydWxlKSB7XG4gICAgY29uc29sZS5lcnJvcihgTm8gcnVsZSBmb3IgbmFtZSBcIiR7bmFtZX1cIiBkZWZpbmVkYCk7XG4gIH1cblxuICBjb25zdCB0ZXN0ID0gdHlwZW9mIHJ1bGUgPT09ICdmdW5jdGlvbicgPyBydWxlIDogdmFsdWUgPT4gcnVsZS50ZXN0KHZhbHVlKTtcblxuICByZXR1cm4geyBuYW1lLCB0ZXN0LCBlcnJvck1lc3NhZ2UgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVZhbGlkYXRlID0gbWF0Y2hlcnMgPT4gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IGludmFsaWRNYXRjaGVyID0gbWF0Y2hlcnMuZmluZChtYXRjaGVyID0+ICFtYXRjaGVyLnRlc3QodmFsdWUpKTtcblxuICBpZiAoIWludmFsaWRNYXRjaGVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBpbnZhbGlkTWF0Y2hlci5lcnJvck1lc3NhZ2UgfHwgdHJ1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHZhbGlkYXRpb25zID0gW10sIHJlcXVpcmVkIH0pID0+IHtcbiAgbGV0IG1hdGNoZXJzID0gW107XG5cbiAgaWYgKHJlcXVpcmVkKSB7XG4gICAgbWF0Y2hlcnMgPSBtYXRjaGVycy5jb25jYXQoZ2V0TWF0Y2hlcigncmVxdWlyZWQnKSk7XG4gIH1cblxuICB2YWxpZGF0aW9ucy5mb3JFYWNoKCh2YWxpZGF0aW9uKSA9PiB7XG4gICAgaWYgKHZhbGlkYXRpb24gJiYgdHlwZW9mIHZhbGlkYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCB2YWxpZGF0aW9uTWF0Y2hlcnMgPSBnZXRNYXRjaGVyKHZhbGlkYXRpb24pO1xuXG4gICAgICBtYXRjaGVycyA9IG1hdGNoZXJzLmNvbmNhdCh2YWxpZGF0aW9uTWF0Y2hlcnMpO1xuICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvbiAmJiB0eXBlb2YgdmFsaWRhdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRpb25NYXRjaGVycyA9IE9iamVjdC5rZXlzKHZhbGlkYXRpb24pLm1hcChcbiAgICAgICAgcnVsZU5hbWUgPT4gZ2V0TWF0Y2hlcihydWxlTmFtZSwgdmFsaWRhdGlvbltydWxlTmFtZV0pLFxuICAgICAgKTtcblxuICAgICAgbWF0Y2hlcnMgPSBtYXRjaGVycy5jb25jYXQodmFsaWRhdGlvbk1hdGNoZXJzKTtcbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRpb25zKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCd2YWxpZGF0aW9ucyBuZWVkcyB0byBiZSBhbiBhcnJheSBvZiB0eXBlIFtcXCdydWxlXFwnXSBvciBbeyBydWxlTmFtZTogXFwnZXJyb3JNZXNzYWdlXFwnIH1dJyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY3JlYXRlVmFsaWRhdGUobWF0Y2hlcnMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2lucHV0cy9jcmVhdGVGaWVsZFZhbGlkYXRvci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBWYWxpZGF0aW9uRXJyb3JzIGZyb20gJy4uL1ZhbGlkYXRpb24vdmFsaWRhdGlvbkVycm9ycyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdmFsaWRhdGlvbkZpZWxkLnNjc3MnO1xuXG5jb25zdCBWYWxpZGF0aW9uRmllbGQgPSAoe1xuICBjaGlsZHJlbixcbiAgZXJyb3IsXG4gIHRvdWNoZWQsXG4gIHNob3dFcnJvcixcbiAgY2xhc3NOYW1lLFxufSkgPT4ge1xuICBsZXQgZXJyb3JzID0gZXJyb3I7XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGVycm9yKSkge1xuICAgIGVycm9ycyA9IFtlcnJvcl07XG4gIH1cblxuICBjb25zdCBoYXNFcnJvciA9IGVycm9ycy5sZW5ndGggPiAwO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NOYW1lLCAodG91Y2hlZCAmJiBoYXNFcnJvcikgJiYgc3R5bGVzLmhhc0Vycm9yKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZhbGlkYXRpb25GaWVsZH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAge3RvdWNoZWQgJiYgc2hvd0Vycm9yID8gPFZhbGlkYXRpb25FcnJvcnMgZXJyb3JzPXtlcnJvcnN9IC8+IDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblZhbGlkYXRpb25GaWVsZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGVycm9yOiBudWxsLFxuICBjbGFzc05hbWU6IG51bGwsXG4gIHNob3dFcnJvcjogdHJ1ZSxcbn07XG5cblZhbGlkYXRpb25GaWVsZC5wcm9wVHlwZXMgPSB7XG4gIHNob3dFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICB0b3VjaGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCksXG4gIF0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0aW9uRmllbGQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvdmFsaWRhdGlvbkZpZWxkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5zY3NzJztcblxuY29uc3QgQnV0dG9uID0gKHtcbiAgY2hpbGRyZW4sIHN0eWxlTmFtZSwgY2xhc3NOYW1lLCAuLi5wcm9wc1xufSkgPT4gKFxuICA8YnV0dG9uXG4gICAgey4uLnByb3BzfVxuICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuYnV0dG9uLCBzdHlsZXNbc3R5bGVOYW1lXSwgY2xhc3NOYW1lKX1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9idXR0b24+XG4pO1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZU5hbWU6ICdwcmltYXJ5JyxcbiAgY2xhc3NOYW1lOiBudWxsLFxufTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL2J1dHRvbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0ICcuL2FwcC5zY3NzJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJ2ZvdW5kLXJlbGF5JztcblxuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRpbmcvcm91dGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcblxuY29uc3QgcmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoZW52aXJvbm1lbnQpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgbWF0Y2hDb250ZXh0PXt7IHN0b3JlIH19IHJlc29sdmVyPXtyZXNvbHZlcn0gLz5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlQ29ubmVjdGVkUm91dGVyIGZyb20gJ2ZvdW5kL2xpYi9jcmVhdGVDb25uZWN0ZWRSb3V0ZXInO1xuaW1wb3J0IGNyZWF0ZVJlbmRlciBmcm9tICdmb3VuZC9saWIvY3JlYXRlUmVuZGVyJztcblxuY29uc3QgUmVuZGVyRXJyb3IgPSAoeyBlcnJvciwgcm91dGVyIH0pID0+IHtcbiAgcm91dGVyLnJlcGxhY2Uoe1xuICAgIHBhdGhuYW1lOiBgL2Vycm9yLyR7ZXJyb3Iuc3RhdHVzfWAsXG4gICAgc3RhdGU6IHtcbiAgICAgIGVycm9yOiBlcnJvci5kYXRhLFxuICAgIH0sXG4gIH0pO1xufTtcblxuUmVuZGVyRXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzdGF0dXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIoe1xuICByZW5kZXI6IGNyZWF0ZVJlbmRlcih7XG4gICAgcmVuZGVyRXJyb3I6IFJlbmRlckVycm9yLFxuICB9KSxcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlci5qcyIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBmb3VuZCBmcm9tICdmb3VuZC9saWIvZm91bmRSZWR1Y2VyJztcbmltcG9ydCBGYXJjZUFjdGlvbnMgZnJvbSAnZmFyY2UvbGliL0FjdGlvbnMnO1xuaW1wb3J0IEJyb3dzZXJQcm90b2NvbCBmcm9tICdmYXJjZS9saWIvQnJvd3NlclByb3RvY29sJztcbmltcG9ydCBjcmVhdGVIaXN0b3J5RW5oYW5jZXIgZnJvbSAnZmFyY2UvbGliL2NyZWF0ZUhpc3RvcnlFbmhhbmNlcic7XG5pbXBvcnQgcXVlcnlNaWRkbGV3YXJlIGZyb20gJ2ZhcmNlL2xpYi9xdWVyeU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZU1hdGNoRW5oYW5jZXIgZnJvbSAnZm91bmQvbGliL2NyZWF0ZU1hdGNoRW5oYW5jZXInO1xuaW1wb3J0IE1hdGNoZXIgZnJvbSAnZm91bmQvbGliL01hdGNoZXInO1xuXG5pbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi4vcm91dGluZy9yb3V0ZUNvbmZpZyc7XG5cbmNvbnN0IGhpc3RvcnlFbmhhbmNlciA9IGNyZWF0ZUhpc3RvcnlFbmhhbmNlcih7XG4gIHByb3RvY29sOiBuZXcgQnJvd3NlclByb3RvY29sKCksXG4gIG1pZGRsZXdhcmVzOiBbcXVlcnlNaWRkbGV3YXJlXSxcbn0pO1xuXG5jb25zdCBtYXRjaGVyRW5oYW5jZXIgPSBjcmVhdGVNYXRjaEVuaGFuY2VyKFxuICBuZXcgTWF0Y2hlcihyb3V0ZUNvbmZpZyksXG4pO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XG5cbmNvbnN0IG1pZGRsZVdhcmUgPSBjb21wb3NlRW5oYW5jZXJzKFxuICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxuICBoaXN0b3J5RW5oYW5jZXIsXG4gIG1hdGNoZXJFbmhhbmNlcixcbik7XG5cbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgZm91bmQsXG4gIGZvcm0sXG59KTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywge30sIG1pZGRsZVdhcmUpO1xuXG5zdG9yZS5kaXNwYXRjaChGYXJjZUFjdGlvbnMuaW5pdCgpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9zdG9yZS9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFrZVJvdXRlQ29uZmlnIGZyb20gJ2ZvdW5kL2xpYi9tYWtlUm91dGVDb25maWcnO1xuaW1wb3J0IFJvdXRlIGZyb20gJ2ZvdW5kL2xpYi9Sb3V0ZSc7XG5cbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHRlcm1zQW5kQ29uZGl0aW9uc1JvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBwcml2YWN5UG9saWN5Um91dGVDb25maWcgfSBmcm9tICcuLi8uLi9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBpbXByaW50Um91dGVDb25maWcgfSBmcm9tICcuLi8uLi9mb290ZXIvaW1wcmludENvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBlcnJvclBhZ2VSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2Vycm9yUGFnZS9lcnJvclBhZ2VDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgcHJpbWFyeUxheW91dFJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgbGFuZGluZ1BhZ2VSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2xhbmRpbmdQYWdlL2xhbmRpbmdQYWdlQ29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJvdXRlQ29uZmlnKFxuICA8Um91dGUgcGF0aD1cIi9cIiB7Li4ucHJpbWFyeUxheW91dFJvdXRlQ29uZmlnfT5cbiAgICA8Um91dGUgey4uLmxhbmRpbmdQYWdlUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJlcnJvci86c3RhdHVzXCIgey4uLmVycm9yUGFnZVJvdXRlQ29uZmlnfSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwidGVybXNBbmRDb25kaXRpb25zXCIgey4uLnRlcm1zQW5kQ29uZGl0aW9uc1JvdXRlQ29uZmlnfSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwicHJpdmFjeVBvbGljeVwiIHsuLi5wcml2YWN5UG9saWN5Um91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJpbXByaW50XCIgey4uLmltcHJpbnRSb3V0ZUNvbmZpZ30gLz5cbiAgPC9Sb3V0ZT4sXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy5qcyIsImltcG9ydCBUZXJtc0FuZENvbmRpdGlvbnMgZnJvbSAnLi90ZXJtc0FuZENvbmRpdGlvbnMnO1xuXG5jb25zdCBUZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIgPSBUZXJtc0FuZENvbmRpdGlvbnM7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBUZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcblxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3NoYXJlZC9wYWdlQ29udGVudCc7XG5cbmNvbnN0IFRlcm1zQW5kQ29uZGl0aW9ucyA9ICgpID0+IChcbiAgPFBhZ2VDb250ZW50PlxuICAgIDxIZWxtZXQ+XG4gICAgICA8dGl0bGU+VGVybXMgYW5kIENvbmRpdGlvbnM8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk91ciB0ZXJtcyBhbmQgY29uZGl0aW9ucyB0aGF0IHlvdSBhZ3JlZSB0byB3aGVuIHVzaW5nIG91ciBzaXRlLlwiIC8+XG4gICAgPC9IZWxtZXQ+XG4gICAgPGgxPlRlcm1zIGFuZCBDb25kaXRpb25zPC9oMT5cbiAgICA8aDI+TGFzdCBVcGRhdGVkOiBKdW5lIDExdGggMjAxODwvaDI+XG4gICAgPHA+XG4gICAgICAmcXVvdDtZb3UmcXVvdDsgYW5kICZxdW90O3lvdXImcXVvdDsgcmVmZXIgdG8geW91LCBhcyBhIHVzZXIgb2YgdGhlIFNpdGUuXG4gICAgICBBICZxdW90O3VzZXImcXVvdDsgaXMgc29tZW9uZSB3aG8gYWNjZXNzZXMsYnJvd3NlcywgY3Jhd2xzLCBzY3JhcGVzLCBvciBpbiBhbnlcbiAgICAgIHdheSB1c2VzIHRoZSBTaXRlLiAmcXVvdDtXZSwmcXVvdDsgJnF1b3Q7dXMsJnF1b3Q7IGFuZCAmcXVvdDtvdXImcXVvdDsgcmVmZXIgdG8gb25ib2FyZG9yLlxuICAgICAgJnF1b3Q7Q29udGVudCZxdW90OyBtZWFucyB0ZXh0LCBpbWFnZXMsIHBob3RvcywgYXVkaW8sIHZpZGVvLCBsb2NhdGlvbiBkYXRhLFxuICAgICAgYW5kIGFsbCBvdGhlciBmb3JtcyBvZiBkYXRhIG9yIGNvbW11bmljYXRpb24uXG4gICAgICAmcXVvdDtZb3VyIENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IHlvdSBzdWJtaXQgb3IgdHJhbnNtaXQgdG8sIHRocm91Z2gsIG9yIGluXG4gICAgICBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUsIHN1Y2ggYXMgcmF0aW5ncywgcmV2aWV3cywgY29tcGxpbWVudHMsIGludml0YXRpb25zLFxuICAgICAgY2hlY2staW5zLCBtZXNzYWdlcywgYW5kIGluZm9ybWF0aW9uIHRoYXQgeW91IHB1YmxpY2x5IGRpc3BsYXkgb3IgZGlzcGxheWVkIGluXG4gICAgICB5b3VyIGFjY291bnQgcHJvZmlsZS5cbiAgICAgICZxdW90O1VzZXIgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgdXNlcnMgc3VibWl0IG9yIHRyYW5zbWl0IHRvLCB0aHJvdWdoLFxuICAgICAgb3IgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLiAmcXVvdDtvbmJvYXJkb3IgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXRcbiAgICAgIHdlIGNyZWF0ZSBhbmQgbWFrZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLlxuICAgICAgJnF1b3Q7VGhpcmQgUGFydHkgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgb3JpZ2luYXRlcyBmcm9tIHBhcnRpZXMgb3RoZXJcbiAgICAgIHRoYW4gb25ib2FyZG9yIG9yIGl0cyB1c2Vycywgd2hpY2ggaXMgbWFkZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLlxuICAgICAgJnF1b3Q7U2l0ZSBDb250ZW50JnF1b3Q7IG1lYW5zIGFsbCBvZiB0aGUgQ29udGVudCB0aGF0IGlzIG1hZGUgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb25cbiAgICAgIHdpdGggdGhlIFNpdGUsIGluY2x1ZGluZyBZb3VyIENvbnRlbnQsIFVzZXIgQ29udGVudCwgVGhpcmQgUGFydHkgQ29udGVudCxcbiAgICAgIGFuZCBvbmJvYXJkb3IgQ29udGVudC5cbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGVybXM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBCeSBhY2Nlc3NpbmcgdGhpcyB3ZWJzaXRlLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5IHRoZXNlIHdlYnNpdGUgVGVybXNcbiAgICAgICAgICBhbmQgQ29uZGl0aW9ucyBvZiBVc2UsIGFsbCBhcHBsaWNhYmxlIGxhd3MgYW5kIHJlZ3VsYXRpb25zLCBhbmQgYWdyZWUgdGhhdCB5b3VcbiAgICAgICAgICBhcmUgcmVzcG9uc2libGUgZm9yIGNvbXBsaWFuY2Ugd2l0aCBhbnkgYXBwbGljYWJsZSBsb2NhbCBsYXdzLlxuICAgICAgICAgIElmIHlvdSBkbyBub3QgYWdyZWUgd2l0aCBhbnkgb2YgdGhlc2UgdGVybXMsIHlvdSBhcmUgcHJvaGliaXRlZCBmcm9tIHVzaW5nIG9yXG4gICAgICAgICAgYWNjZXNzaW5nIHRoaXMgc2l0ZS4gVGhlIG1hdGVyaWFscyBjb250YWluZWQgaW4gdGhpcyB3ZWJzaXRlIGFyZSBwcm90ZWN0ZWRcbiAgICAgICAgICBieSBhcHBsaWNhYmxlIGNvcHlyaWdodCBhbmQgdHJhZGUgbWFyayBsYXcuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5EaXNjbGFpbWVyPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIG1hdGVyaWFscyBvbiB0aGUgb25ib2FyZG9yIHdlYnNpdGUgYXJlIHByb3ZpZGVkICZxdW90O2FzIHNob3duJnF1b3Q7LlxuICAgICAgICAgIG9uYm9hcmRvciBtYWtlcyBubyB3YXJyYW50aWVzLCBleHByZXNzZWQgb3IgaW1wbGllZCwgYW5kIGhlcmVieSBkaXNjbGFpbXNcbiAgICAgICAgICBhbmQgbmVnYXRlcyBhbGwgb3RoZXIgd2FycmFudGllcywgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiwgaW1wbGllZFxuICAgICAgICAgIHdhcnJhbnRpZXMgb3IgY29uZGl0aW9ucyBvZiBtZXJjaGFudGFiaWxpdHksIGZpdG5lc3MgZm9yIGEgcGFydGljdWxhclxuICAgICAgICAgIHB1cnBvc2UsIG9yIG5vbi1pbmZyaW5nZW1lbnQgb2YgaW50ZWxsZWN0dWFsIHByb3BlcnR5IG9yIG90aGVyIHZpb2xhdGlvbiBvZiByaWdodHMuXG4gICAgICAgICAgRnVydGhlciwgb25ib2FyZG9yIGRvZXMgbm90IHdhcnJhbnQgb3IgbWFrZSBhbnkgcmVwcmVzZW50YXRpb25zIGNvbmNlcm5pbmcgdGhlIGFjY3VyYWN5LFxuICAgICAgICAgIGxpa2VseSByZXN1bHRzLCBvciByZWxpYWJpbGl0eSBvZiB0aGUgdXNlIG9mIHRoZSBtYXRlcmlhbHMgb24gaXRzIGludGVybmV0XG4gICAgICAgICAgd2Vic2l0ZSBvciBvdGhlcndpc2UgcmVsYXRpbmcgdG8gc3VjaCBtYXRlcmlhbHMgb3Igb24gYW55IHNpdGVzIGxpbmtlZCB0byB0aGlzIHNpdGUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5MaW1pdGF0aW9uczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEluIG5vIGV2ZW50IHNoYWxsIG9uYm9hcmRvciBvciBpdHMgc3VwcGxpZXJzIGJlIGxpYWJsZSBmb3IgYW55IGRhbWFnZXMgKGluY2x1ZGluZywgd2l0aG91dFxuICAgICAgICAgIGxpbWl0YXRpb24sIGRhbWFnZXMgZm9yIGxvc3Mgb2YgZGF0YSBvciBwcm9maXQsIG9yIGR1ZSB0byBidXNpbmVzcyBpbnRlcnJ1cHRpb24pXG4gICAgICAgICAgYXJpc2luZyBvdXQgb2YgdGhlIHVzZSBvciBpbmFiaWxpdHkgdG8gdXNlIHRoZSBtYXRlcmlhbHMgb24gb3VyIGludGVybmV0IHNpdGUgb3JcbiAgICAgICAgICBvZmZlcmVkIHNlcnZpY2VzLCBldmVuIGlmIHdlIG9yIGFuIGF1dGhvcml6ZWQgcmVwcmVzZW50YXRpdmUgaGFzIGJlZW4gbm90aWZpZWRcbiAgICAgICAgICBvcmFsbHkgb3IgaW4gd3JpdGluZyBvZiB0aGUgcG9zc2liaWxpdHkgb2Ygc3VjaCBkYW1hZ2UuIEJlY2F1c2Ugc29tZSBqdXJpc2RpY3Rpb25zXG4gICAgICAgICAgZG8gbm90IGFsbG93IGxpbWl0YXRpb25zIG9uIGltcGxpZWQgd2FycmFudGllcywgb3IgbGltaXRhdGlvbnMgb2YgbGlhYmlsaXR5IGZvclxuICAgICAgICAgIGNvbnNlcXVlbnRpYWwgb3IgaW5jaWRlbnRhbCBkYW1hZ2VzLCB0aGVzZSBsaW1pdGF0aW9ucyBtYXkgbm90IGFwcGx5IHRvIHlvdS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlJldmlzaW9ucyBhbmQgRXJyb3JzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIG1hdGVyaWFscyBhcHBlYXJpbmcgb24gb3VyIHdlYnNpdGUgY291bGQgaW5jbHVkZSB0ZWNobmljYWwsIHR5cG9ncmFwaGljYWwsXG4gICAgICAgICAgb3IgcGhvdG9ncmFwaGljIGVycm9ycy4gb25ib2FyZG9yIGRvZXMgbm90IHdhcnJhbnQgdGhhdCBhbnkgb2YgdGhlIG1hdGVyaWFscyBvblxuICAgICAgICAgIGl0cyB3ZWJzaXRlIGFyZSBhY2N1cmF0ZSwgY29tcGxldGUsIG9yIGN1cnJlbnQuIFdlIG1heSBtYWtlIGNoYW5nZXMgdG8gdGhlXG4gICAgICAgICAgbWF0ZXJpYWxzIGNvbnRhaW5lZCBvbiBpdHMgd2Vic2l0ZSBhdCBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkxpbmtzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgb25ib2FyZG9yIGhhcyBub3QgcmV2aWV3ZWQgYWxsIG9mIHRoZSBzaXRlcyBsaW5rZWQgdG8gaXRzIGludGVybmV0IHdlYnNpdGVcbiAgICAgICAgICBhbmQgaXMgbm90IHJlc3BvbnNpYmxlIGZvciB0aGUgY29udGVudHMgb2YgYW55IHN1Y2ggbGlua2VkIHNpdGUuXG4gICAgICAgICAgVGhlIGluY2x1c2lvbiBvZiBhbnkgbGluayBkb2VzIG5vdCBpbXBseSBlbmRvcnNlbWVudCBieSB1cyBvZiB0aGUgc2l0ZS5cbiAgICAgICAgICBVc2Ugb2YgYW55IHN1Y2ggbGlua2VkIHdlYnNpdGUgaXMgYXQgdGhlIHVzZXImcXVvdDtzIG93biByaXNrLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+R292ZXJuaW5nIExhdzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFueSBjbGFpbSByZWxhdGluZyB0byB0aGUgb25ib2FyZG9yIHdlYnNpdGUgc2hhbGwgYmUgZ292ZXJuZWQgYnkgdGhlIGxhd3NcbiAgICAgICAgICBvZiB0aGUgY291bnRyeSBvZiBub3RlIHdpdGhvdXQgcmVnYXJkIHRvIGl0cyBjb25mbGljdCBvZiBsYXcgcHJvdmlzaW9ucy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkVuZ2xpc2ggTGFuZ3VhZ2U8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJbiB0aGUgZXZlbnQgb2YgYSBjb25mbGljdCBiZXR3ZWVuIHRoZXNlIFRlcm1zIGFuZCBhIGZvcmVpZ24gbGFuZ3VhZ2UgdmVyc2lvblxuICAgICAgICAgIG9mIG91ciBUZXJtcyBvZiBVc2UsIHRoZSBFbmdsaXNoIGxhbmd1YWdlIHZlcnNpb24gb2YgdGhlc2UgVGVybXMgZ292ZXJucy5cbiAgICAgICAgICBBbGwgZGlzcHV0ZXMsIGNsYWltcyBhbmQgY2F1c2VzIG9mIGFjdGlvbiAoYW5kIHJlbGF0ZWQgcHJvY2VlZGluZ3MpIHdpbGwgYmVcbiAgICAgICAgICBjb21tdW5pY2F0ZWQgaW4gRW5nbGlzaC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkNvcHlyaWdodCBwb2xpY3ksIG5vdGljZSBhbmQgY2xhaW0gaW5mb3JtYXRpb248L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbGwgbWF0ZXJpYWxzIG9uIHRoaXMgc2l0ZSwgd2hldGhlciBzZXBhcmF0ZSBvciBjb21waWxlZCwgaW5jbHVkaW5nLFxuICAgICAgICAgIGJ1dCBub3QgbGltaXRlZCB0bywgdGV4dCwgZ3JhcGhpY3MsIGF1ZGlvIGNsaXBzLCBsb2dvcywgYnV0dG9ucywgaW1hZ2VzLFxuICAgICAgICAgIGRpZ2l0YWwgZG93bmxvYWRzLCBkYXRhIGNvbXBpbGF0aW9ucywgc29mdHdhcmUsIGljb25zLCBodG1sIGNvZGUgYW5kIHhtbCBjb2RlLFxuICAgICAgICAgIGFzIHdlbGwgYXMgYWxsIGNvcHlyaWdodCwgcGF0ZW50LCB0cmFkZW1hcmssIHRyYWRlIGRyZXNzLCBhbmQgb3RoZXIgcmlnaHRzXG4gICAgICAgICAgdGhlcmVpbiwgYXJlIG93bmVkIG9yIGxpY2Vuc2VkIGJ5IG9uYm9hcmRvciBhbmQgaXRzIHRoaXJkLXBhcnR5IGluZm9ybWF0aW9uIHByb3ZpZGVycyxcbiAgICAgICAgICBhbmQgYXJlIHByb3RlY3RlZCBieSBpbnRlcm5hdGlvbmFsIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBsYXdzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgIDwvb2w+XG4gIDwvUGFnZUNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXJtc0FuZENvbmRpdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwYWdlQ29udGVudFwiOlwiQ29tcG9uZW50cy1zaGFyZWQtcGFnZUNvbnRlbnRfX3BhZ2VDb250ZW50XCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcGFnZUNvbnRlbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBQcml2YWN5UG9saWN5IGZyb20gJy4vcHJpdmFjeVBvbGljeSc7XG5cbmNvbnN0IFByaXZhY3lQb2xpY3lDb250YWluZXIgPSBQcml2YWN5UG9saWN5O1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogUHJpdmFjeVBvbGljeUNvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhY3lQb2xpY3lDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuXG5jb25zdCBQcml2YWN5UG9saWN5ID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPEhlbG1ldD5cbiAgICAgIDx0aXRsZT5Qcml2YWN5IFBvbGljeTwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiT3VyIHByaXZhY3kgcG9saWN5IGV4cGxhaW5pbmcgd2hhdCBkYXRhIHdlIGNvbGxlY3QuXCIgLz5cbiAgICA8L0hlbG1ldD5cbiAgICA8aDE+UHJpdmFjeSBQb2xpY3k8L2gxPlxuICAgIDxoMj5MYXN0IFVwZGF0ZWQ6IEp1bmUgMTF0aCAyMDE4PC9oMj5cbiAgICA8cD5cbiAgICAgIFRoaXMgcHJpdmFjeSBwb2xpY3kgaGFzIGJlZW4gY29tcGlsZWQgdG8gYmV0dGVyIHNlcnZlIHRob3NlIHdobyBhcmUgY29uY2VybmVkIHdpdGggaG93IHRoZWlyXG4gICAgICAmYXBvcztQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiZhcG9zOyAoUElJKSBpcyBiZWluZyB1c2VkIG9ubGluZS5cbiAgICAgIFBJSSwgYXMgZGVzY3JpYmVkIGluIFVTIHByaXZhY3kgbGF3IGFuZCBpbmZvcm1hdGlvbiBzZWN1cml0eSwgaXMgaW5mb3JtYXRpb24gdGhhdCBjYW4gYmUgdXNlZFxuICAgICAgb24gaXRzIG93biBvciB3aXRoIG90aGVyIGluZm9ybWF0aW9uIHRvIGlkZW50aWZ5LCBjb250YWN0LCBvciBsb2NhdGUgYSBzaW5nbGUgcGVyc29uLCBvciB0b1xuICAgICAgaWRlbnRpZnkgYW4gaW5kaXZpZHVhbCBpbiBjb250ZXh0LiBQbGVhc2UgcmVhZCBvdXIgcHJpdmFjeSBwb2xpY3kgY2FyZWZ1bGx5IHRvIGdldCBhIGNsZWFyXG4gICAgICB1bmRlcnN0YW5kaW5nIG9mIGhvdyB3ZSBjb2xsZWN0LCB1c2UsIHByb3RlY3Qgb3Igb3RoZXJ3aXNlIGhhbmRsZVxuICAgICAgeW91ciBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiBpbiBhY2NvcmRhbmNlIHdpdGggb3VyIHdlYnNpdGUuXG4gICAgPC9wPlxuICAgIDxvbD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldoYXQgcGVyc29uYWwgaW5mb3JtYXRpb24gZG8gd2UgY29sbGVjdD88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXaGVuIHJlZ2lzdGVyaW5nIGZvciBvdXIgbmV3c2xldHRlciwgeW91IHdpbGwgYmUgYXNrZWQgdG8gZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzLlxuICAgICAgICAgIFRoaXMgaXMgdG8gaGVscCB1cyBpbmRlbnRpZnkgeW91IGFuZCBrZWVwIHlvdSB1cGRhdGVkLlxuICAgICAgICAgIFdlIHdpbGwgbm90IHNlbmQgeW91IGFueSBlbWFpbHMgdGhhdCB5b3UgZG8gbm90IHJlcXVlc3QuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5XaGVuIGRvIHdlIGNvbGxlY3QgaW5mb3JtYXRpb24/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgY29sbGVjdCBjZXJ0YWluIGluZm9ybWF0aW9uIGZyb20geW91IHdoZW4geW91IHJlZ2lzdGVyIGZvciBvdXIgbmV3c2xldHRlci5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkhvdyBkbyB3ZSBwcm90ZWN0IHlvdXIgaW5mb3JtYXRpb24/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgZG8gbm90IHVzZSB2dWxuZXJhYmlsaXR5IHNjYW5uaW5nIGFuZC9vciBzY2FubmluZyB0byBQQ0kgc3RhbmRhcmRzLlxuICAgICAgICAgIFdlIG5ldmVyIGFzayBmb3IgY3JlZGl0IGNhcmQgbnVtYmVycy4gV2UgdXNlIHJlZ3VsYXIgTWFsd2FyZSBTY2FubmluZy5cbiAgICAgICAgICBZb3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIGNvbnRhaW5lZCBiZWhpbmQgc2VjdXJlZCBuZXR3b3JrcyBhbmQgaXMgb25seSBhY2Nlc3NpYmxlXG4gICAgICAgICAgYnkgYSBsaW1pdGVkIG51bWJlciBvZiBwZXJzb25zIHdobyBoYXZlIHNwZWNpYWwgYWNjZXNzIHJpZ2h0cyB0byBzdWNoIHN5c3RlbXMsIGFuZCBhcmVcbiAgICAgICAgICByZXF1aXJlZCB0byBrZWVwIHRoZSBpbmZvcm1hdGlvbiBjb25maWRlbnRpYWwuIEluIGFkZGl0aW9uLCBhbGwgc2Vuc2l0aXZlIGluZm9ybWF0aW9uXG4gICAgICAgICAgeW91IHN1cHBseSBpcyBlbmNyeXB0ZWQgdmlhIFNlY3VyZSBTb2NrZXQgTGF5ZXIgKFNTTCkgdGVjaG5vbG9neS5cbiAgICAgICAgICBXZSBpbXBsZW1lbnQgYSB2YXJpZXR5IG9mIHNlY3VyaXR5IG1lYXN1cmVzIHdoZW4gYSB1c2VyIGVudGVycywgc3VibWl0cywgb3IgYWNjZXNzZXMgdGhlaXJcbiAgICAgICAgICBpbmZvcm1hdGlvbiB0byBtYWludGFpbiB0aGUgc2FmZXR5IG9mIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5EbyB3ZSB1c2UgJmFwb3M7Y29va2llcyZhcG9zOz88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBZZXMuIENvb2tpZXMgYXJlIHNtYWxsIGZpbGVzIHRoYXQgYSBzaXRlIG9yIGl0cyBzZXJ2aWNlIHByb3ZpZGVyIHRyYW5zZmVycyB0byB5b3VyXG4gICAgICAgICAgY29tcHV0ZXImYXBvcztzIGhhcmQgZHJpdmUgdGhyb3VnaCB5b3VyIFdlYiBicm93c2VyIHRoYXQgZW5hYmxlcyB0aGVcbiAgICAgICAgICBzaXRlJmFwb3M7cyBvciBzZXJ2aWNlIHByb3ZpZGVyJmFwb3M7cyBzeXN0ZW1zIHRvIHJlY29nbml6ZSB5b3VyIGJyb3dzZXIgYW5kIGNhcHR1cmVcbiAgICAgICAgICBhbmQgcmVtZW1iZXIgY2VydGFpbiBpbmZvcm1hdGlvbi4gVGhleSBhcmUgdXNlZCB0byBoZWxwIHVzIHVuZGVyc3RhbmQgeW91ciBwcmVmZXJlbmNlc1xuICAgICAgICAgIGJhc2VkIG9uIHByZXZpb3VzIG9yIGN1cnJlbnQgc2l0ZSBhY3Rpdml0eSwgd2hpY2ggZW5hYmxlcyB1cyB0byBwcm92aWRlXG4gICAgICAgICAgeW91IHdpdGggaW1wcm92ZWQgc2VydmljZXMuIFdlIGFsc28gdXNlIGNvb2tpZXMgdG8gaGVscCB1cyBjb21waWxlIGFnZ3JlZ2F0ZSBkYXRhIGFib3V0XG4gICAgICAgICAgc2l0ZSB0cmFmZmljIGFuZCBzaXRlIGludGVyYWN0aW9uIHNvIHRoYXQgd2UgY2FuIG9mZmVyIGJldHRlciBzaXRlXG4gICAgICAgICAgZXhwZXJpZW5jZXMgYW5kIHRvb2xzIGluIHRoZSBmdXR1cmUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5XZSB1c2UgY29va2llcyB0bzo8L2gyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlVuZGVyc3RhbmQgYW5kIHNhdmUgdXNlciZhcG9zO3MgcHJlZmVyZW5jZXMgZm9yIGZ1dHVyZSB2aXNpdHMuPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBDb21waWxlIGFnZ3JlZ2F0ZSBkYXRhIGFib3V0IHNpdGUgdHJhZmZpYyBhbmQgc2l0ZSBpbnRlcmFjdGlvbnNcbiAgICAgICAgICAgIGluIG9yZGVyIHRvIG9mZmVyIGJldHRlciBzaXRlIGV4cGVyaWVuY2VzIGFuZCB0b29scyBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgV2UgbWF5IGFsc28gdXNlIHRydXN0ZWQgdGhpcmQtcGFydHkgc2VydmljZXMgdGhhdCB0cmFjayB0aGlzXG4gICAgICAgICAgICBpbmZvcm1hdGlvbiBvbiBvdXIgYmVoYWxmXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ29va2llcyBhcmUgYW4gaW1wb3J0YW50IHBhcnQgb2Ygb3VyIHdlYnNpdGUgYW5kIHRoZSB3ZWJzaXRlIHdpbGwgbm90IHdvcmtcbiAgICAgICAgICB3aXRob3V0IGhhdmluZyB0aGVtIGVuYWJsZWQuIEJ5IHVzaW5nIG91ciBzaXRlIHlvdSBhbGxvdyB1cyB0byB1c2UgY29va2llcy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlRoaXJkLXBhcnR5IGRpc2Nsb3N1cmU8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBkbyBub3Qgc2VsbCwgdHJhZGUsIG9yIG90aGVyd2lzZSB0cmFuc2ZlciB0byBvdXRzaWRlXG4gICAgICAgICAgcGFydGllcyB5b3VyIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGhpcmQtcGFydHkgbGlua3M8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSBtYXkgYmUgdGhpcmQtcGFydHkgbGlua3MgdG8gcmFkaW8gc3RhdGlvbiB3ZWJzaXRlcyB0aHJvdWdob3V0IG91clxuICAgICAgICAgIHdlYnNpdGUuIFRoZXNlIHRoaXJkLXBhcnR5IHNpdGVzIGhhdmUgc2VwYXJhdGUgYW5kIGluZGVwZW5kZW50IHByaXZhY3kgcG9saWNpZXMuXG4gICAgICAgICAgV2UgdGhlcmVmb3JlIGhhdmUgbm8gcmVzcG9uc2liaWxpdHkgb3IgbGlhYmlsaXR5IGZvciB0aGUgY29udGVudCBhbmRcbiAgICAgICAgICBhY3Rpdml0aWVzIG9mIHRoZXNlIGxpbmtlZCBzaXRlcy4gTm9uZXRoZWxlc3MsIHdlIHNlZWsgdG8gcHJvdGVjdFxuICAgICAgICAgIHRoZSBpbnRlZ3JpdHkgb2Ygb3VyIHNpdGUgYW5kIHdlbGNvbWUgYW55IGZlZWRiYWNrIGFib3V0IHRoZXNlIHNpdGVzLlxuICAgICAgICAgIEFueSBsaW5rIG9uIG91ciBzaXRlIHRvIGEgdGhpcmQgcGFydCB3ZWJzaXRlIHRoYXQgaXMgbm90IHJlbGV2YW50XG4gICAgICAgICAgb3IgaWYgd2UgZGVlbSBpdCBpbmFwcHJvcHJpYXRlLCBtYXkgYmUgcmVtb3ZlZC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkdvb2dsZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEdvb2dsZSZhcG9zO3MgYWR2ZXJ0aXNpbmcgcmVxdWlyZW1lbnRzIGNhbiBiZSBzdW1tZWQgdXAgYnlcbiAgICAgICAgICBHb29nbGUmYXBvcztzIEFkdmVydGlzaW5nIFByaW5jaXBsZXMuIFRoZXkgYXJlIHB1dCBpbiBwbGFjZSB0b1xuICAgICAgICAgIHByb3ZpZGUgYSBwb3NpdGl2ZSBleHBlcmllbmNlIGZvciB1c2Vycy4gaHR0cHM6Ly9zdXBwb3J0Lmdvb2dsZS5jb20vYWR3b3Jkc3BvbGljeS9hbnN3ZXIvMTMxNjU0OD9obD1lblxuXG4gICAgICAgICAgV2UgaGF2ZSBub3QgZW5hYmxlZCBHb29nbGUgQWRTZW5zZSBvbiBvdXIgc2l0ZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkNhbGlmb3JuaWEgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3Q8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDYWxPUFBBIGlzIHRoZSBmaXJzdCBzdGF0ZSBsYXcgaW4gdGhlIG5hdGlvbiB0byByZXF1aXJlIGNvbW1lcmNpYWxcbiAgICAgICAgICB3ZWJzaXRlcyBhbmQgb25saW5lIHNlcnZpY2VzIHRvIHBvc3QgYSBwcml2YWN5IHBvbGljeS5cbiAgICAgICAgICBUaGUgbGF3JmFwb3M7cyByZWFjaCBzdHJldGNoZXMgd2VsbCBiZXlvbmQgQ2FsaWZvcm5pYSB0byByZXF1aXJlIGFueSBwZXJzb24gb3IgY29tcGFueVxuICAgICAgICAgIGluIHRoZSBVbml0ZWQgU3RhdGVzIChhbmQgY29uY2VpdmFibHkgdGhlIHdvcmxkKSB0aGF0IG9wZXJhdGVzIHdlYnNpdGVzIGNvbGxlY3RpbmdcbiAgICAgICAgICBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiBmcm9tIENhbGlmb3JuaWEgY29uc3VtZXJzIHRvIHBvc3QgYSBjb25zcGljdW91c1xuICAgICAgICAgIHByaXZhY3kgcG9saWN5IG9uIGl0cyB3ZWJzaXRlIHN0YXRpbmcgZXhhY3RseSB0aGUgaW5mb3JtYXRpb24gYmVpbmcgY29sbGVjdGVkIGFuZFxuICAgICAgICAgIHRob3NlIGluZGl2aWR1YWxzIG9yIGNvbXBhbmllcyB3aXRoIHdob20gaXQgaXMgYmVpbmcgc2hhcmVkLiAtIFNlZSBtb3JlIGF0OlxuICAgICAgICAgIGh0dHA6Ly9jb25zdW1lcmNhbC5vcmcvY2FsaWZvcm5pYS1vbmxpbmUtcHJpdmFjeS1wcm90ZWN0aW9uLWFjdC1jYWxvcHBhLyNzdGhhc2guMEZkUmJUNTEuZHB1ZlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+QWNjb3JkaW5nIHRvIENhbE9QUEEsIHdlIGFncmVlIHRvIHRoZSBmb2xsb3dpbmc6PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVXNlcnMgY2FuIHZpc2l0IG91ciBzaXRlIGFub255bW91c2x5LlxuICAgICAgICAgIFRoaXMgcHJpdmFjeSBwb2xpY3kgaGFzIGEgbGluayB0byBpdCBmcm9tIG91ciBob21lIHBhZ2UgaW4gdGhlIGhlYWRlci5cbiAgICAgICAgICBPdXIgUHJpdmFjeSBQb2xpY3kgbGluayBpbmNsdWRlcyB0aGUgd29yZCAmYXBvcztQcml2YWN5JmFwb3M7IGFuZCBjYW4gZWFzaWx5XG4gICAgICAgICAgYmUgZm91bmQgb24gdGhlIHBhZ2Ugc3BlY2lmaWVkIGFib3ZlLlxuXG4gICAgICAgICAgWW91IHdpbGwgYmUgbm90aWZpZWQgb2YgYW55IFByaXZhY3kgUG9saWN5IGNoYW5nZXM6XG4gICAgICAgICAgICAgICAg4oCiIE9uIG91ciBQcml2YWN5IFBvbGljeSBQYWdlXG4gICAgICAgICAgQ2FuIGNoYW5nZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uOlxuICAgICAgICAgICAgICAgIOKAoiBUaHJvdWdoIG91ciB3ZWJzaXRlXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Eb2VzIG91ciBzaXRlIGFsbG93IHRoaXJkLXBhcnR5IGJlaGF2aW9yYWwgdHJhY2tpbmc/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSXQmYXBvcztzIGltcG9ydGFudCB0byBub3RlIHRoYXQgd2UgYWxsb3cgdGhpcmQtcGFydHkgYmVoYXZpb3JhbCB0cmFja2luZ1xuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q09QUEEgKENoaWxkcmVuIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0KTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdoZW4gaXQgY29tZXMgdG8gdGhlIGNvbGxlY3Rpb24gb2YgcGVyc29uYWwgaW5mb3JtYXRpb24gZnJvbSBjaGlsZHJlblxuICAgICAgICAgIHVuZGVyIHRoZSBhZ2Ugb2YgMTMgeWVhcnMgb2xkLCB0aGUgQ2hpbGRyZW4mYXBvcztzIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb25cbiAgICAgICAgICBBY3QgKENPUFBBKSBwdXRzIHBhcmVudHMgaW4gY29udHJvbC4gVGhlIEZlZGVyYWwgVHJhZGUgQ29tbWlzc2lvbiwgVW5pdGVkIFN0YXRlcyZhcG9zO1xuICAgICAgICAgIGNvbnN1bWVyIHByb3RlY3Rpb24gYWdlbmN5LCBlbmZvcmNlcyB0aGUgQ09QUEEgUnVsZSwgd2hpY2ggc3BlbGxzIG91dCB3aGF0XG4gICAgICAgICAgb3BlcmF0b3JzIG9mIHdlYnNpdGVzIGFuZCBvbmxpbmUgc2VydmljZXMgbXVzdCBkbyB0byBwcm90ZWN0IGNoaWxkcmVuJmFwb3M7c1xuICAgICAgICAgIHByaXZhY3kgYW5kIHNhZmV0eSBvbmxpbmUuXG5cbiAgICAgICAgICBXZSBkbyBub3Qgc3BlY2lmaWNhbGx5IG1hcmtldCB0byBjaGlsZHJlbiB1bmRlciB0aGUgYWdlIG9mIDEzIHllYXJzIG9sZC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzIFByaW5jaXBsZXMgZm9ybSB0aGUgYmFja2JvbmUgb2YgcHJpdmFjeVxuICAgICAgICAgIGxhdyBpbiB0aGUgVW5pdGVkIFN0YXRlcyBhbmQgdGhlIGNvbmNlcHRzIHRoZXkgaW5jbHVkZSBoYXZlIHBsYXllZCBhIHNpZ25pZmljYW50XG4gICAgICAgICAgcm9sZSBpbiB0aGUgZGV2ZWxvcG1lbnQgb2YgZGF0YSBwcm90ZWN0aW9uIGxhd3MgYXJvdW5kIHRoZSBnbG9iZS4gVW5kZXJzdGFuZGluZ1xuICAgICAgICAgIHRoZSBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlIFByaW5jaXBsZXMgYW5kIGhvdyB0aGV5IHNob3VsZCBiZSBpbXBsZW1lbnRlZCBpc1xuICAgICAgICAgIGNyaXRpY2FsIHRvIGNvbXBseSB3aXRoIHRoZSB2YXJpb3VzIHByaXZhY3kgbGF3cyB0aGF0IHByb3RlY3QgcGVyc29uYWwgaW5mb3JtYXRpb24uXG5cbiAgICAgICAgICBJbiBvcmRlciB0byBiZSBpbiBsaW5lIHdpdGggRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXMgd2Ugd2lsbCB0YWtlIHRoZVxuICAgICAgICAgIGZvbGxvd2luZyByZXNwb25zaXZlIGFjdGlvbiwgc2hvdWxkIGEgZGF0YSBicmVhY2ggb2NjdXI6XG5cbiAgICAgICAgICBXZSB3aWxsIG5vdGlmeSB5b3UgdmlhIGVtYWlsIHdpdGhpbiA3IGJ1c2luZXNzIGRheXMuIFdlIHdpbGwgYWxzb1xuICAgICAgICAgIG5vdGlmeSB1c2VycyB2aWEgYW4gaW4tc2l0ZSBub3RpZmljYXRpb24gb24gdGhlIGhvbWUgcGFnZSB3aXRoaW4gNyBidXNpbmVzcyBkYXlzLlxuXG4gICAgICAgICAgV2UgYWxzbyBhZ3JlZSB0byB0aGUgSW5kaXZpZHVhbCBSZWRyZXNzIFByaW5jaXBsZSB3aGljaCByZXF1aXJlcyB0aGF0IGluZGl2aWR1YWxzXG4gICAgICAgICAgaGF2ZSB0aGUgcmlnaHQgdG8gbGVnYWxseSBwdXJzdWUgZW5mb3JjZWFibGUgcmlnaHRzIGFnYWluc3QgZGF0YSBjb2xsZWN0b3JzXG4gICAgICAgICAgYW5kIHByb2Nlc3NvcnMgd2hvIGZhaWwgdG8gYWRoZXJlIHRvIHRoZSBsYXcuIFRoaXMgcHJpbmNpcGxlIHJlcXVpcmVzIG5vdCBvbmx5XG4gICAgICAgICAgdGhhdCBpbmRpdmlkdWFscyBoYXZlIGVuZm9yY2VhYmxlIHJpZ2h0cyBhZ2FpbnN0IGRhdGEgdXNlcnMsIGJ1dCBhbHNvIHRoYXRcbiAgICAgICAgICBpbmRpdmlkdWFscyBoYXZlIHJlY291cnNlIHRvIGNvdXJ0cyBvciBnb3Zlcm5tZW50IGFnZW5jaWVzIHRvIGludmVzdGlnYXRlXG4gICAgICAgICAgYW5kL29yIHByb3NlY3V0ZSBub24tY29tcGxpYW5jZSBieSBkYXRhIHByb2Nlc3NvcnMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgPC9vbD5cbiAgPC9QYWdlQ29udGVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhY3lQb2xpY3k7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5LmpzIiwiaW1wb3J0IEltcHJpbnQgZnJvbSAnLi9pbXByaW50JztcblxuY29uc3QgSW1wcmludENvbnRhaW5lciA9IEltcHJpbnQ7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBJbXByaW50Q29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wcmludENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnRDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcblxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3NoYXJlZC9wYWdlQ29udGVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1wcmludC5zY3NzJztcblxuY29uc3QgSW1wcmludCA9ICgpID0+IChcbiAgPFBhZ2VDb250ZW50PlxuICAgIDxIZWxtZXQ+XG4gICAgICA8dGl0bGU+SW1wcmludDwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ29udGFjdCBpbmZvcm1hdGlvbiBmb3Igb25ib2FyZG9yLmNvbS5cIiAvPlxuICAgIDwvSGVsbWV0PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1wcmludENvbnRlbnR9PlxuICAgICAgPGgxPkltcHJpbnQ8L2gxPlxuICAgICAgPGRpdj5Db21wYW55IE5hbWU6IFZBU1QgTkVUV09SSyBMVEQ8L2Rpdj5cbiAgICAgIDxkaXY+Q0VPOiBNYXJ0aW4gRGF3c29uPC9kaXY+XG4gICAgICA8ZGl2PkFkZHJlc3M6IDI2IENhbGRlclZpZXcsIFJhc3RyaWNrLCBCcmlnaG91c2UsIEhENjNEUSBVbml0ZWQgS2luZ2RvbTwvZGl2PlxuICAgICAgPGRpdj5UZWxlcGhvbmU6ICsoNDQpNzQ3MzU5MTA5NzwvZGl2PlxuICAgICAgPGRpdj5FbWFpbCBhZGRyZXNzOiB1MTM1Njc3MEBnbWFpbC5jb208L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9QYWdlQ29udGVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltcHJpbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiaW1wcmludENvbnRlbnRcIjpcIkNvbXBvbmVudHMtZm9vdGVyLWltcHJpbnRfX2ltcHJpbnRDb250ZW50XCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wcyB9IGZyb20gJ3JlY29tcG9zZSc7XG5cbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnLi9lcnJvclBhZ2UnO1xuXG5jb25zdCBjcmVhdGVQcm9wcyA9ICh7IHN0YXR1cywgZXJyb3IgfSkgPT4ge1xuICBzd2l0Y2ggKHN0YXR1cykge1xuICAgIGNhc2UgNDA0OlxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUaGUgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQuJyB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG59O1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFByb3BzKGNyZWF0ZVByb3BzKSxcbik7XG5cbmNvbnN0IEVycm9yUGFnZUNvbnRhaW5lciA9IGVuaGFuY2UoRXJyb3JQYWdlKTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICByZW5kZXI6ICh7IHByb3BzIH0pID0+IHByb3BzICYmIChcbiAgICA8RXJyb3JQYWdlQ29udGFpbmVyXG4gICAgICBzdGF0dXM9e3BhcnNlSW50KHByb3BzLnBhcmFtcy5zdGF0dXMsIDEwKX1cbiAgICAgIGVycm9yPXtwcm9wcy5sb2NhdGlvbi5zdGF0ZS5lcnJvcn1cbiAgICAvPlxuICApLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXJyb3JQYWdlLnNjc3MnO1xuXG5jb25zdCBFcnJvclBhZ2UgPSAoeyBzdGF0dXMsIGVycm9yIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvclBhZ2V9PlxuICAgIDxIZWxtZXQ+XG4gICAgICA8dGl0bGU+RXJyb3Ige3N0YXR1c308L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIgLz5cbiAgICA8L0hlbG1ldD5cbiAgICA8aDE+RXJyb3Ige3N0YXR1c308L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PlxuICAgICAgPGRpdj5cbiAgICAgICAge2Vycm9yfVxuICAgICAgPC9kaXY+XG4gICAgICBXZSBoYXZlIGJlZW4gbm90aWZpZWQgb2YgdGhlIGVycm9yIMKvXFxfKOODhClfL8KvLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkVycm9yUGFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGVycm9yOiAnQW4gdW5rbm93biBlcnJvciBoYXMgb2NjdXJlZC4nLFxufTtcblxuRXJyb3JQYWdlLnByb3BUeXBlcyA9IHtcbiAgc3RhdHVzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZXJyb3JQYWdlXCI6XCJDb21wb25lbnRzLWVycm9yUGFnZS1lcnJvclBhZ2VfX2Vycm9yUGFnZVwiLFwiZXJyb3JcIjpcIkNvbXBvbmVudHMtZXJyb3JQYWdlLWVycm9yUGFnZV9fZXJyb3JcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBQcmltYXJ5TGF5b3V0IGZyb20gJy4vcHJpbWFyeUxheW91dCc7XG5cbmNvbnN0IFByaW1hcnlMYXlvdXRDb250YWluZXIgPSBQcmltYXJ5TGF5b3V0O1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogUHJpbWFyeUxheW91dENvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlMYXlvdXRDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wcmltYXJ5TGF5b3V0LnNjc3MnO1xuaW1wb3J0IFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5IGZyb20gJy4vcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9mb290ZXIvZm9vdGVyJztcblxuY29uc3QgUHJpbWFyeUxheW91dCA9ICh7XG4gIGNoaWxkcmVuLFxufSkgPT4gKFxuICA8UHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgY2xhc3NOYW1lPXtzdHlsZXMucHJpbWFyeUxheW91dH0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxGb290ZXIgLz5cbiAgPC9QcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeT5cbik7XG5cblByaW1hcnlMYXlvdXQuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbn07XG5cblByaW1hcnlMYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5TGF5b3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInByaW1hcnlMYXlvdXRcIjpcIkNvbXBvbmVudHMtbGF5b3V0cy1wcmltYXJ5TGF5b3V0LXByaW1hcnlMYXlvdXRfX3ByaW1hcnlMYXlvdXRcIixcIndyYXBcIjpcIkNvbXBvbmVudHMtbGF5b3V0cy1wcmltYXJ5TGF5b3V0LXByaW1hcnlMYXlvdXRfX3dyYXBcIixcIm1haW5cIjpcIkNvbXBvbmVudHMtbGF5b3V0cy1wcmltYXJ5TGF5b3V0LXByaW1hcnlMYXlvdXRfX21haW5cIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ2ZvdW5kJztcblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJlZmVyLXN0YXRlbGVzcy1mdW5jdGlvbiAqL1xuY2xhc3MgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvLyBjb21wb25lbnREaWRDYXRjaCgpIHtcbiAgLy8gICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvZXJyb3IvNTAwJyk7XG4gIC8vIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IG51bGwsXG59O1xuXG5QcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5wcm9wVHlwZXMgPSB7XG4gIC8vIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFJvdXRlcixcbikoUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2ZvdW5kJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5zY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgPExpbmsgdG89XCIvdGVybXNBbmRDb25kaXRpb25zXCI+dGVybXMgYW5kIGNvbmRpdGlvbnM8L0xpbms+XG4gICAgPExpbmsgdG89XCIvcHJpdmFjeVBvbGljeVwiPnByaXZhY3kgcG9saWN5PC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL2ltcHJpbnRcIj5pbXByaW50PC9MaW5rPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImZvb3RlclwiOlwiQ29tcG9uZW50cy1mb290ZXItZm9vdGVyX19mb290ZXJcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBMYW5kaW5nUGFnZSBmcm9tICcuL2xhbmRpbmdQYWdlJztcblxuY29uc3QgTGFuZGluZ1BhZ2VDb250YWluZXIgPSBMYW5kaW5nUGFnZTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IExhbmRpbmdQYWdlQ29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2VDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xhbmRpbmdQYWdlL2xhbmRpbmdQYWdlQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFN1YnNjcmliZU1haWxpbmdMaXN0IGZyb20gJy4uL3NoYXJlZC9mb3JtL3N1YnNjcmliZU1haWxpbmdMaXN0Q29udGFpbmVyJztcblxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgTWFrZSB0aGUgcHJvY2VzcyBvZiBvbmJvYXJkaW5nIHlvdXIgbmV3IGRldmVsb3BlcnMgZWFzeS5cblxuICAgIEpvaW4gb3VyIGVhcmx5IHNpZ24gdXAgbGlzdCBhbmQgd2UmYXBvcztsbCBnaXZlIHlvdXIgY29tcGFueSBhIGZyZWUgc2l4dGggbW9udGggc3Vic2NyaXB0aW9uLlxuICAgIENvbWluZyB0aGlzIEF1Z3VzdC5cblxuICAgIDxTdWJzY3JpYmVNYWlsaW5nTGlzdCAvPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sYW5kaW5nUGFnZS9sYW5kaW5nUGFnZS5qcyIsImltcG9ydCB7IGNvbXBvc2UsIHdpdGhIYW5kbGVycyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyByZWR1eEZvcm0sIFN1Ym1pc3Npb25FcnJvciB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5pbXBvcnQgU3Vic2NyaWJlTWFpbGluZ0xpc3QgZnJvbSAnLi9zdWJzY3JpYmVNYWlsaW5nTGlzdCc7XG5cbmNvbnN0IGhhbmRsZXJzID0ge1xuICBvblN1Ym1pdDogKCkgPT4gaW5wdXQgPT4gU3Vic2NyaWJlTWFpbGluZ0xpc3QoaW5wdXQpXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdGhyb3cgbmV3IFN1Ym1pc3Npb25FcnJvcihlcnJvcik7XG4gICAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoSGFuZGxlcnMoaGFuZGxlcnMpLFxuICByZWR1eEZvcm0oe1xuICAgIGZvcm06ICdzdWJzY3JpYmVNYWlsaW5nTGlzdCcsXG4gIH0pLFxuKShTdWJzY3JpYmVNYWlsaW5nTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9mb3JtL3N1YnNjcmliZU1haWxpbmdMaXN0Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBJbnZpc2libGVSZWNwYXRjaGEgZnJvbSAnLi4vaW5wdXRzL2ludmlzaWJsZVJlY2FwdGNoYUNvbnRhaW5lcic7XG5pbXBvcnQgRmllbGRJbnB1dCBmcm9tICcuLi9pbnB1dHMvZmllbGRJbnB1dENvbnRhaW5lcic7XG5pbXBvcnQgRm9ybVNwaW5uZXJCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2Zvcm1TcGlubmVyQnV0dG9uQ29udGFpbmVyJztcblxuY29uc3QgU3Vic2NyaWJlTWFpbGluZ0xpc3QgPSAoe1xuICBoYW5kbGVTdWJtaXQsXG4gIGZvcm0sXG59KSA9PiAoXG4gIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGFjdGlvbj1cIlwiPlxuICAgIDxGaWVsZElucHV0XG4gICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICBwbGFjZWhvbGRlcj1cImVtYWlsIGFkZHJlc3NcIlxuICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgIHZhbGlkYXRpb25zPXtbJ2VtYWlsJ119XG4gICAgICByZXF1aXJlZFxuICAgIC8+XG4gICAgPEludmlzaWJsZVJlY3BhdGNoYVxuICAgICAgbmFtZT1cInJlY2FwdGNoYVwiXG4gICAgICBzaXRla2V5PXtwcm9jZXNzLmVudi5SRUNBUFRDSEFfU0lURV9LRVl9XG4gICAgLz5cbiAgICA8Rm9ybVNwaW5uZXJCdXR0b24gZm9ybU5hbWU9e2Zvcm19PlxuICAgICAgSm9pbiBsaXN0XG4gICAgPC9Gb3JtU3Bpbm5lckJ1dHRvbj5cbiAgPC9mb3JtPlxuKTtcblxuU3Vic2NyaWJlTWFpbGluZ0xpc3QucHJvcFR5cGVzID0ge1xuICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGZvcm06IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmliZU1haWxpbmdMaXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvZm9ybS9zdWJzY3JpYmVNYWlsaW5nTGlzdC5qcyIsImltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wcywgd2l0aEhhbmRsZXJzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmltcG9ydCBjcmVhdGVGaWVsZFZhbGlkYXRvciBmcm9tICcuL2NyZWF0ZUZpZWxkVmFsaWRhdG9yJztcbmltcG9ydCBJbnZpc2libGVSZWNwYXRjaGEgZnJvbSAnLi9pbnZpc2libGVSZWNhcHRjaGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoUHJvcHMoKCkgPT4gKHsgY29tcG9uZW50OiBJbnZpc2libGVSZWNwYXRjaGEgfSkpLFxuICB3aXRoSGFuZGxlcnMoeyB2YWxpZGF0ZTogY3JlYXRlRmllbGRWYWxpZGF0b3IgfSksXG4pKEZpZWxkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2lucHV0cy9pbnZpc2libGVSZWNhcHRjaGFDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWNhcHRjaGEgZnJvbSAncmVhY3QtcmVjYXB0Y2hhJztcblxuaW1wb3J0IFZhbGlkYXRpb25GaWVsZCBmcm9tICcuL3ZhbGlkYXRpb25GaWVsZCc7XG5cbmNsYXNzIEludmlzaWJsZVJlY2FwdGNoYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVjYXB0Y2hhLmV4ZWN1dGUoKTtcbiAgfVxuICBzZXRSZWNhcHRjaGEgPSAoZSkgPT4ge1xuICAgIHRoaXMucmVjYXB0Y2hhID0gZTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxWYWxpZGF0aW9uRmllbGRcbiAgICAgICAgdG91Y2hlZD17dGhpcy5wcm9wcy5tZXRhLnRvdWNoZWR9XG4gICAgICAgIGVycm9yPXt0aGlzLnByb3BzLm1ldGEuZXJyb3J9XG4gICAgICA+XG4gICAgICAgIDxSZWNhcHRjaGFcbiAgICAgICAgICByZWY9e3RoaXMuc2V0UmVjYXB0Y2hhfVxuICAgICAgICAgIHNpemU9XCJpbnZpc2libGVcIlxuICAgICAgICAgIHNpdGVrZXk9e3Byb2Nlc3MuZW52LlJFQ0FQVENIQV9TSVRFX0tFWX1cbiAgICAgICAgICB2ZXJpZnlDYWxsYmFjaz17cmVzcG9uc2UgPT4gdGhpcy5wcm9wcy5pbnB1dC5vbkNoYW5nZShyZXNwb25zZSl9XG4gICAgICAgIC8+XG4gICAgICA8L1ZhbGlkYXRpb25GaWVsZD5cbiAgICApO1xuICB9XG59XG5cbkludmlzaWJsZVJlY2FwdGNoYS5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9KS5pc1JlcXVpcmVkLFxuICBtZXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRvdWNoZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIF0pLFxuICB9KS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW52aXNpYmxlUmVjYXB0Y2hhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL2ludmlzaWJsZVJlY2FwdGNoYS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgVmFsaWRhdGlvbkVycm9yIGZyb20gJy4vdmFsaWRhdGlvbkVycm9yJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi92YWxpZGF0aW9uRXJyb3JzLnNjc3MnO1xuXG5jb25zdCBFcnJvcnMgPSAoeyBlcnJvcnMgfSkgPT4gKFxuICBlcnJvcnMubGVuZ3RoID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JzfT5cbiAgICAgIHtlcnJvcnMubWFwKGVycm9yID0+IDxWYWxpZGF0aW9uRXJyb3Iga2V5PXtlcnJvcn0gZXJyb3I9e2Vycm9yfSAvPil9XG4gICAgPC9kaXY+XG4gICkgOiBudWxsXG4pO1xuXG5FcnJvcnMuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvcnM6IFtdLFxufTtcblxuRXJyb3JzLnByb3BUeXBlcyA9IHtcbiAgZXJyb3JzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvVmFsaWRhdGlvbi92YWxpZGF0aW9uRXJyb3JzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi92YWxpZGF0aW9uRXJyb3Iuc2Nzcyc7XG5cbmNvbnN0IEVycm9yID0gKHsgZXJyb3IgfSkgPT4gKFxuICBlcnJvciAmJiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PlxuICAgICAge2Vycm9yfVxuICAgIDwvc3Bhbj5cbiAgKVxuKTtcblxuRXJyb3IuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvcjogbnVsbCxcbn07XG5cbkVycm9yLnByb3BUeXBlcyA9IHtcbiAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL1ZhbGlkYXRpb24vdmFsaWRhdGlvbkVycm9yLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZXJyb3JcIjpcIkNvbXBvbmVudHMtc2hhcmVkLVZhbGlkYXRpb24tdmFsaWRhdGlvbkVycm9yX19lcnJvclwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL1ZhbGlkYXRpb24vdmFsaWRhdGlvbkVycm9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJlcnJvcnNcIjpcIkNvbXBvbmVudHMtc2hhcmVkLVZhbGlkYXRpb24tdmFsaWRhdGlvbkVycm9yc19fZXJyb3JzXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvVmFsaWRhdGlvbi92YWxpZGF0aW9uRXJyb3JzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJoYXNFcnJvclwiOlwiQ29tcG9uZW50cy1zaGFyZWQtaW5wdXRzLXZhbGlkYXRpb25GaWVsZF9faGFzRXJyb3JcIixcInZhbGlkYXRpb25GaWVsZFwiOlwiQ29tcG9uZW50cy1zaGFyZWQtaW5wdXRzLXZhbGlkYXRpb25GaWVsZF9fdmFsaWRhdGlvbkZpZWxkXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL3ZhbGlkYXRpb25GaWVsZC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2OTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzLCB3aXRoSGFuZGxlcnMgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuaW1wb3J0IGNyZWF0ZUZpZWxkVmFsaWRhdG9yIGZyb20gJy4vY3JlYXRlRmllbGRWYWxpZGF0b3InO1xuaW1wb3J0IEZpZWxkSW5wdXQgZnJvbSAnLi9maWVsZElucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aEhhbmRsZXJzKHsgdmFsaWRhdGU6IGNyZWF0ZUZpZWxkVmFsaWRhdG9yIH0pLFxuICB3aXRoUHJvcHMoKCkgPT4gKHsgY29tcG9uZW50OiBGaWVsZElucHV0IH0pKSxcbikoRmllbGQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL2ZpZWxkSW5wdXRDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFZhbGlkYXRpb25GaWVsZCBmcm9tICcuL3ZhbGlkYXRpb25GaWVsZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZmllbGRJbnB1dC5zY3NzJztcblxuY29uc3QgRmllbGRJbnB1dCA9ICh7XG4gIGlucHV0LFxuICBtZXRhOiB7IGZvcm0sIHRvdWNoZWQsIGVycm9yID0gW10gfSxcbiAgaWQsXG4gIC4uLnByb3BzXG59KSA9PiAoXG4gIDxWYWxpZGF0aW9uRmllbGQgdG91Y2hlZD17dG91Y2hlZH0gZXJyb3I9e2Vycm9yfT5cbiAgICA8aW5wdXRcbiAgICAgIHsuLi5pbnB1dH1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgaWQ9e2Ake2Zvcm19XyR7aWR9YH1cbiAgICAvPlxuICA8L1ZhbGlkYXRpb25GaWVsZD5cbik7XG5cbkZpZWxkSW5wdXQucHJvcFR5cGVzID0ge1xuICBpbnB1dDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIG1ldGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgZm9ybTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRvdWNoZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkKSxcbiAgICBdKSxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgRmllbGRJbnB1dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2lucHV0cy9maWVsZElucHV0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2lucHV0cy9maWVsZElucHV0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbXBvc2UsIHNldFByb3BUeXBlcywgbWFwUHJvcHMgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5pbXBvcnQgQnV0dG9uV2l0aFNwaW5uZXIgZnJvbSAnLi9zcGlubmVyQnV0dG9uQ29udGFpbmVyJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgZm9ybSB9LCB7IGZvcm1OYW1lIH0pID0+ICh7XG4gIGlzTG9hZGluZzogZm9ybVtmb3JtTmFtZV0uc3VibWl0dGluZyxcbn0pO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGZvcm1OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgcHJvcHNNYXBwZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGZvcm1OYW1lLFxuICAgIGRpc3BhdGNoLFxuICAgIC4uLm5ld1Byb3BzXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gbmV3UHJvcHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICBzZXRQcm9wVHlwZXMocHJvcFR5cGVzKSxcbiAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpLFxuICBtYXBQcm9wcyhwcm9wc01hcHBlciksXG4pKEJ1dHRvbldpdGhTcGlubmVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2J1dHRvbi9mb3JtU3Bpbm5lckJ1dHRvbkNvbnRhaW5lci5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb21wb3NlLCBzZXRQcm9wVHlwZXMsIGJyYW5jaCwgcmVuZGVyQ29tcG9uZW50LCBtYXBQcm9wcyB9IGZyb20gJ3JlY29tcG9zZSc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IFNwaW5uZXJCdXR0b24gZnJvbSAnLi9zcGlubmVyQnV0dG9uJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxufTtcblxuY29uc3QgcHJvcHNNYXBwZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlzTG9hZGluZyxcbiAgICAuLi5uZXdQcm9wc1xuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIG5ld1Byb3BzO1xufTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHNldFByb3BUeXBlcyhwcm9wVHlwZXMpLFxuICBtYXBQcm9wcyhwcm9wc01hcHBlciksXG4gIGJyYW5jaChcbiAgICBwcm9wcyA9PiAhcHJvcHMuaXNMb2FkaW5nLFxuICAgIHJlbmRlckNvbXBvbmVudChCdXR0b24pLFxuICApLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZShTcGlubmVyQnV0dG9uKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2J1dHRvbi9zcGlubmVyQnV0dG9uQ29udGFpbmVyLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2J1dHRvbi9idXR0b24uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zcGlubmVyQnV0dG9uLnNjc3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgU3Bpbm5lckljb24gZnJvbSAnLi4vLi4vaWNvbnMvc3Bpbm5lcic7XG5cbmNvbnN0IFNwaW5uZXJCdXR0b24gPSAoeyAuLi5wcm9wcyB9KSA9PiAoXG4gIDxCdXR0b24gey4uLnByb3BzfT5cbiAgICA8U3Bpbm5lckljb24gY2xhc3NOYW1lPXtzdHlsZXMuc3Bpbm5lckljb259IC8+XG4gIDwvQnV0dG9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lckJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2J1dHRvbi9zcGlubmVyQnV0dG9uLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wic3Bpbm5lckljb25cIjpcIkNvbXBvbmVudHMtc2hhcmVkLWJ1dHRvbi1zcGlubmVyQnV0dG9uX19zcGlubmVySWNvblwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2J1dHRvbi9zcGlubmVyQnV0dG9uLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDcwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgU3Bpbm5lckljb24gPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnByb3BzfSB3aWR0aD1cIjgwcHhcIiBoZWlnaHQ9XCI4MHB4XCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XG4gICAgPGNpcmNsZSBjeD1cIjg0XCIgY3k9XCI1MFwiIHI9XCIxLjQzNDY0XCIgZmlsbD1cIiM1NWFjZWVcIj5cbiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgdmFsdWVzPVwiODswOzA7MDswXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGNhbGNNb2RlPVwic3BsaW5lXCIgZHVyPVwiMS43c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGJlZ2luPVwiMHNcIiAvPlxuICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgdmFsdWVzPVwiODQ7ODQ7ODQ7ODQ7ODRcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBkdXI9XCIxLjdzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgYmVnaW49XCIwc1wiIC8+XG4gICAgPC9jaXJjbGU+XG4gICAgPGNpcmNsZSBjeD1cIjc3LjkwMjhcIiBjeT1cIjUwXCIgcj1cIjhcIiBmaWxsPVwiIzE1N2JmOFwiPlxuICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiB2YWx1ZXM9XCIwOzg7ODs4OzBcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBkdXI9XCIxLjdzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgYmVnaW49XCItMC44NXNcIiAvPlxuICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgdmFsdWVzPVwiMTY7MTY7NTA7ODQ7ODRcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBkdXI9XCIxLjdzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgYmVnaW49XCItMC44NXNcIiAvPlxuICAgIDwvY2lyY2xlPlxuICAgIDxjaXJjbGUgY3g9XCI0My45MDI4XCIgY3k9XCI1MFwiIHI9XCI4XCIgZmlsbD1cIiM1NWFjZWVcIj5cbiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgdmFsdWVzPVwiMDs4Ozg7ODswXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGNhbGNNb2RlPVwic3BsaW5lXCIgZHVyPVwiMS43c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGJlZ2luPVwiLTAuNDI1c1wiIC8+XG4gICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiB2YWx1ZXM9XCIxNjsxNjs1MDs4NDs4NFwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBjYWxjTW9kZT1cInNwbGluZVwiIGR1cj1cIjEuN3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBiZWdpbj1cIi0wLjQyNXNcIiAvPlxuICAgIDwvY2lyY2xlPlxuICAgIDxjaXJjbGUgY3g9XCIxNlwiIGN5PVwiNTBcIiByPVwiNi41NjUzNlwiIGZpbGw9XCIjMTU3YmY4XCI+XG4gICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHZhbHVlcz1cIjA7ODs4Ozg7MFwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBjYWxjTW9kZT1cInNwbGluZVwiIGR1cj1cIjEuN3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBiZWdpbj1cIjBzXCIgLz5cbiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHZhbHVlcz1cIjE2OzE2OzUwOzg0Ozg0XCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGNhbGNNb2RlPVwic3BsaW5lXCIgZHVyPVwiMS43c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGJlZ2luPVwiMHNcIiAvPlxuICAgIDwvY2lyY2xlPlxuICAgIDxjaXJjbGUgY3g9XCIxNlwiIGN5PVwiNTBcIiByPVwiMFwiIGZpbGw9XCIjNTVhY2VlXCI+XG4gICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHZhbHVlcz1cIjA7MDs4Ozg7OFwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBjYWxjTW9kZT1cInNwbGluZVwiIGR1cj1cIjEuN3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBiZWdpbj1cIjBzXCIgLz5cbiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHZhbHVlcz1cIjE2OzE2OzE2OzUwOzg0XCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGNhbGNNb2RlPVwic3BsaW5lXCIgZHVyPVwiMS43c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGJlZ2luPVwiMHNcIiAvPlxuICAgIDwvY2lyY2xlPlxuICA8L3N2Zz5cbik7XG5cblNwaW5uZXJJY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBudWxsLFxufTtcblxuU3Bpbm5lckljb24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVySWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvaWNvbnMvc3Bpbm5lci5qcyIsImltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBOZXR3b3JrLFxuICBSZWNvcmRTb3VyY2UsXG4gIFN0b3JlLFxufSBmcm9tICdyZWxheS1ydW50aW1lJztcbmltcG9ydCB7IHNldEVudmlyb21lbnQgfSBmcm9tICdyZWxheS1jb21wb3NlJztcblxuY29uc3QgZmV0Y2hRdWVyeSA9IChvcGVyYXRpb24sIHZhcmlhYmxlcykgPT5cbiAgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBvcGVyYXRpb24udGV4dCxcbiAgICAgIHZhcmlhYmxlcyxcbiAgICB9KSxcbiAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWxheS9pc3N1ZXMvMTgxNlxuICAgICAgaWYgKGpzb24uZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbik7XG4gICAgfSk7XG5cbmNvbnN0IG5ldHdvcmsgPSBOZXR3b3JrLmNyZWF0ZShmZXRjaFF1ZXJ5KTtcbmNvbnN0IHNvdXJjZSA9IG5ldyBSZWNvcmRTb3VyY2UoKTtcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHNvdXJjZSk7XG5jb25zdCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh7XG4gIG5ldHdvcmssXG4gIHN0b3JlLFxufSk7XG5cbnNldEVudmlyb21lbnQoZW52aXJvbm1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==