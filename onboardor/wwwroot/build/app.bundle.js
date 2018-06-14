webpackJsonp([0],{

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageContent = __webpack_require__(662);

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

/***/ 295:
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

/***/ 298:
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

var _classnames = __webpack_require__(297);

var _classnames2 = _interopRequireDefault(_classnames);

var _button = __webpack_require__(721);

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

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 75e8591313932d5a4bc00859bcd44552
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type subscribeMailingListMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    email: string,
    recaptcha: string,
  },
|};
export type subscribeMailingListMutationResponse = {|
  +subscribeMailingList: ?{|
    +clientMutationId: ?string,
  |},
|};
*/

/*
mutation subscribeMailingListMutation(
  $input: SubscribeMailingListInput!
) {
  subscribeMailingList(input: $input) {
    clientMutationId
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SubscribeMailingListInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "subscribeMailingList",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "SubscribeMailingListInput!"
    }],
    "concreteType": "SubscribeMailingListPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "clientMutationId",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "subscribeMailingListMutation",
    "id": null,
    "text": "mutation subscribeMailingListMutation(\n  $input: SubscribeMailingListInput!\n) {\n  subscribeMailingList(input: $input) {\n    clientMutationId\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "subscribeMailingListMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "subscribeMailingListMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}();
node /*: any*/.hash = 'b7774705a522c61eac286b0ba4f46c99';
module.exports = node;

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(315);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(328);

var _app = __webpack_require__(330);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(778);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(29);

var _foundRelay = __webpack_require__(346);

var _router = __webpack_require__(457);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(470);

var _store2 = _interopRequireDefault(_store);

var _environment = __webpack_require__(777);

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

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createConnectedRouter = __webpack_require__(148);

var _createConnectedRouter2 = _interopRequireDefault(_createConnectedRouter);

var _createRender = __webpack_require__(153);

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

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(23);

var _reduxThunk = __webpack_require__(471);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxForm = __webpack_require__(98);

var _foundReducer = __webpack_require__(166);

var _foundReducer2 = _interopRequireDefault(_foundReducer);

var _Actions = __webpack_require__(73);

var _Actions2 = _interopRequireDefault(_Actions);

var _BrowserProtocol = __webpack_require__(167);

var _BrowserProtocol2 = _interopRequireDefault(_BrowserProtocol);

var _createHistoryEnhancer = __webpack_require__(281);

var _createHistoryEnhancer2 = _interopRequireDefault(_createHistoryEnhancer);

var _queryMiddleware = __webpack_require__(282);

var _queryMiddleware2 = _interopRequireDefault(_queryMiddleware);

var _createMatchEnhancer = __webpack_require__(168);

var _createMatchEnhancer2 = _interopRequireDefault(_createMatchEnhancer);

var _Matcher = __webpack_require__(169);

var _Matcher2 = _interopRequireDefault(_Matcher);

var _routeConfig = __webpack_require__(649);

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

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _makeRouteConfig = __webpack_require__(283);

var _makeRouteConfig2 = _interopRequireDefault(_makeRouteConfig);

var _Route = __webpack_require__(284);

var _Route2 = _interopRequireDefault(_Route);

var _termsAndConditionsContainer = __webpack_require__(653);

var _privacyPolicyContainer = __webpack_require__(664);

var _imprintContainer = __webpack_require__(666);

var _errorPageContainer = __webpack_require__(669);

var _primaryLayoutContainer = __webpack_require__(673);

var _landingPageContainer = __webpack_require__(686);

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

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _termsAndConditions = __webpack_require__(654);

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditionsContainer = _termsAndConditions2.default;

var routeConfig = exports.routeConfig = {
  Component: TermsAndConditionsContainer
};

exports.default = TermsAndConditionsContainer;

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(111);

var _pageContent = __webpack_require__(170);

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

/***/ 662:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pageContent":"Components-shared-pageContent__pageContent"};

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _privacyPolicy = __webpack_require__(665);

var _privacyPolicy2 = _interopRequireDefault(_privacyPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicyContainer = _privacyPolicy2.default;

var routeConfig = exports.routeConfig = {
  Component: PrivacyPolicyContainer
};

exports.default = PrivacyPolicyContainer;

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(111);

var _pageContent = __webpack_require__(170);

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

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _imprint = __webpack_require__(667);

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImprintContainer = _imprint2.default;

var routeConfig = exports.routeConfig = {
  Component: ImprintContainer
};

exports.default = ImprintContainer;

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(111);

var _pageContent = __webpack_require__(170);

var _pageContent2 = _interopRequireDefault(_pageContent);

var _imprint = __webpack_require__(668);

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

/***/ 668:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"imprintContent":"Components-footer-imprint__imprintContent"};

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(46);

var _errorPage = __webpack_require__(671);

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

var _reactHelmet = __webpack_require__(111);

var _errorPage = __webpack_require__(672);

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

/***/ 672:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errorPage":"Components-errorPage-errorPage__errorPage","error":"Components-errorPage-errorPage__error"};

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _primaryLayout = __webpack_require__(674);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayoutContainer = _primaryLayout2.default;

var routeConfig = exports.routeConfig = {
  Component: PrimaryLayoutContainer
};

exports.default = PrimaryLayoutContainer;

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _primaryLayout = __webpack_require__(675);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

var _primaryLayoutErrorBoundary = __webpack_require__(676);

var _primaryLayoutErrorBoundary2 = _interopRequireDefault(_primaryLayoutErrorBoundary);

var _footer = __webpack_require__(684);

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

/***/ 675:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primaryLayout":"Components-layouts-primaryLayout-primaryLayout__primaryLayout","wrap":"Components-layouts-primaryLayout-primaryLayout__wrap","main":"Components-layouts-primaryLayout-primaryLayout__main"};

/***/ }),

/***/ 676:
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

var _recompose = __webpack_require__(46);

var _found = __webpack_require__(286);

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

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _found = __webpack_require__(286);

var _footer = __webpack_require__(685);

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

/***/ 685:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"Components-footer-footer__footer"};

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _landingPage = __webpack_require__(687);

var _landingPage2 = _interopRequireDefault(_landingPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LandingPageContainer = _landingPage2.default;

var routeConfig = exports.routeConfig = {
  Component: LandingPageContainer
};

exports.default = LandingPageContainer;

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _subscribeMailingListContainer = __webpack_require__(688);

var _subscribeMailingListContainer2 = _interopRequireDefault(_subscribeMailingListContainer);

var _landingPage = __webpack_require__(776);

var _landingPage2 = _interopRequireDefault(_landingPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LandingPage = function LandingPage() {
  return _react2.default.createElement(
    'div',
    { className: _landingPage2.default.landingPage },
    _react2.default.createElement(
      'div',
      { className: _landingPage2.default.capture },
      'Make the process of onboarding your new developers easy.'
    ),
    _react2.default.createElement(
      'div',
      { className: _landingPage2.default.joinContainer },
      _react2.default.createElement(
        'div',
        { className: _landingPage2.default.join },
        'Join our beta sign up list and we\'ll give your team a ',
        _react2.default.createElement(
          'span',
          null,
          'free sixth month subscription!'
        )
      ),
      _react2.default.createElement(_subscribeMailingListContainer2.default, null),
      _react2.default.createElement(
        'div',
        { className: _landingPage2.default.coming },
        'Coming this August.'
      )
    )
  );
};

exports.default = LandingPage;

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(46);

var _reduxForm = __webpack_require__(98);

var _subscribeMailingList = __webpack_require__(689);

var _subscribeMailingList2 = _interopRequireDefault(_subscribeMailingList);

var _subscribeMailingListMutation = __webpack_require__(726);

var _subscribeMailingListMutation2 = _interopRequireDefault(_subscribeMailingListMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  onSubmit: function onSubmit() {
    return function (input) {
      return (0, _subscribeMailingListMutation2.default)(input).catch(function (error) {
        throw new _reduxForm.SubmissionError(error);
      });
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recompose.withHandlers)(handlers), (0, _reduxForm.reduxForm)({
  form: 'subscribeMailingList'
}))(_subscribeMailingList2.default);

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invisibleRecaptchaContainer = __webpack_require__(690);

var _invisibleRecaptchaContainer2 = _interopRequireDefault(_invisibleRecaptchaContainer);

var _fieldInputContainer = __webpack_require__(710);

var _fieldInputContainer2 = _interopRequireDefault(_fieldInputContainer);

var _formSpinnerButtonContainer = __webpack_require__(719);

var _formSpinnerButtonContainer2 = _interopRequireDefault(_formSpinnerButtonContainer);

var _subscribeMailingList = __webpack_require__(725);

var _subscribeMailingList2 = _interopRequireDefault(_subscribeMailingList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubscribeMailingList = function SubscribeMailingList(_ref) {
  var handleSubmit = _ref.handleSubmit,
      form = _ref.form;
  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit, action: '' },
    _react2.default.createElement(
      'div',
      { className: _subscribeMailingList2.default.email },
      _react2.default.createElement(_fieldInputContainer2.default, {
        name: 'email',
        id: 'email',
        placeholder: 'email',
        type: 'email',
        validations: ['email'],
        required: true
      }),
      _react2.default.createElement(
        _formSpinnerButtonContainer2.default,
        { formName: form },
        'JOIN LIST'
      )
    ),
    _react2.default.createElement(_invisibleRecaptchaContainer2.default, {
      name: 'recaptcha',
      sitekey: "6LdV3F4UAAAAAAHstIWHTY1fZER_DgFAmqWqzgky"
    })
  );
};

SubscribeMailingList.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  form: _propTypes2.default.string.isRequired
};

exports.default = SubscribeMailingList;

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(46);

var _reduxForm = __webpack_require__(98);

var _createFieldValidator = __webpack_require__(295);

var _createFieldValidator2 = _interopRequireDefault(_createFieldValidator);

var _invisibleRecaptcha = __webpack_require__(691);

var _invisibleRecaptcha2 = _interopRequireDefault(_invisibleRecaptcha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _recompose.withProps)(function () {
  return { component: _invisibleRecaptcha2.default };
}), (0, _recompose.withHandlers)({ validate: _createFieldValidator2.default }))(_reduxForm.Field);

/***/ }),

/***/ 691:
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

var _reactGoogleRecaptcha = __webpack_require__(692);

var _reactGoogleRecaptcha2 = _interopRequireDefault(_reactGoogleRecaptcha);

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
      //  this.recaptcha.execute();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_reactGoogleRecaptcha2.default, {
        ref: this.setRecaptcha,
        size: 'invisible',
        sitekey: "6LdV3F4UAAAAAAHstIWHTY1fZER_DgFAmqWqzgky",
        onChange: function onChange(response) {
          return _this2.props.input.onChange(response);
        }
      });
    }
  }]);

  return InvisibleRecaptcha;
}(_react2.default.Component);

InvisibleRecaptcha.propTypes = {
  input: _propTypes2.default.shape({
    onChange: _propTypes2.default.func.isRequired
  }).isRequired
};

exports.default = InvisibleRecaptcha;

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(46);

var _reduxForm = __webpack_require__(98);

var _createFieldValidator = __webpack_require__(295);

var _createFieldValidator2 = _interopRequireDefault(_createFieldValidator);

var _fieldInput = __webpack_require__(711);

var _fieldInput2 = _interopRequireDefault(_fieldInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _recompose.withHandlers)({ validate: _createFieldValidator2.default }), (0, _recompose.withProps)(function () {
  return { component: _fieldInput2.default };
}))(_reduxForm.Field);

/***/ }),

/***/ 711:
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

var _validationField = __webpack_require__(712);

var _validationField2 = _interopRequireDefault(_validationField);

var _fieldInput = __webpack_require__(718);

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

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(297);

var _classnames2 = _interopRequireDefault(_classnames);

var _validationErrors = __webpack_require__(713);

var _validationErrors2 = _interopRequireDefault(_validationErrors);

var _validationField = __webpack_require__(717);

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

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationError = __webpack_require__(714);

var _validationError2 = _interopRequireDefault(_validationError);

var _validationErrors = __webpack_require__(716);

var _validationErrors2 = _interopRequireDefault(_validationErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValidationErrors = function ValidationErrors(_ref) {
  var errors = _ref.errors;
  return errors.length ? _react2.default.createElement(
    'div',
    { className: _validationErrors2.default.errors },
    errors.map(function (error) {
      return _react2.default.createElement(_validationError2.default, { key: error, error: error });
    })
  ) : null;
};

ValidationErrors.defaultProps = {
  errors: []
};

ValidationErrors.propTypes = {
  errors: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired)
};

exports.default = ValidationErrors;

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationError = __webpack_require__(715);

var _validationError2 = _interopRequireDefault(_validationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValidationError = function ValidationError(_ref) {
  var error = _ref.error;
  return error && _react2.default.createElement(
    'span',
    { className: _validationError2.default.error },
    error
  );
};

ValidationError.defaultProps = {
  error: null
};

ValidationError.propTypes = {
  error: _propTypes2.default.string
};

exports.default = ValidationError;

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"error":"Components-shared-Validation-validationError__error"};

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errors":"Components-shared-Validation-validationErrors__errors"};

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hasError":"Components-shared-inputs-validationField__hasError","validationField":"Components-shared-inputs-validationField__validationField"};

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"input":"Components-shared-inputs-fieldInput__input"};

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(29);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(46);

var _spinnerButtonContainer = __webpack_require__(720);

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

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(46);

var _button = __webpack_require__(298);

var _button2 = _interopRequireDefault(_button);

var _spinnerButton = __webpack_require__(722);

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

/***/ 721:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"Components-shared-button-button__button","primary":"Components-shared-button-button__primary"};

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _spinnerButton = __webpack_require__(723);

var _spinnerButton2 = _interopRequireDefault(_spinnerButton);

var _button = __webpack_require__(298);

var _button2 = _interopRequireDefault(_button);

var _spinner = __webpack_require__(724);

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

/***/ 723:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"spinnerIcon":"Components-shared-button-spinnerButton__spinnerIcon"};

/***/ }),

/***/ 724:
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

/***/ 725:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"email":"Components-shared-form-subscribeMailingList__email"};

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(299);

var _relayCompose = __webpack_require__(311);

var mutation = function mutation() {
  var node = __webpack_require__(312);

  if (node.hash && node.hash !== 'b7774705a522c61eac286b0ba4f46c99') {
    console.error('The definition of \'subscribeMailingListMutation\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(312);
};

exports.default = function (_ref) {
  var email = _ref.email,
      recaptcha = _ref.recaptcha;

  var variables = {
    input: {
      email: email,
      recaptcha: recaptcha
    }
  };

  return (0, _relayCompose.createMutation)(mutation, variables);
};

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"landingPage":"Components-landingPage-landingPage__landingPage","capture":"Components-landingPage-landingPage__capture","joinContainer":"Components-landingPage-landingPage__joinContainer","join":"Components-landingPage-landingPage__join","coming":"Components-landingPage-landingPage__coming"};

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _relayRuntime = __webpack_require__(14);

var _relayCompose = __webpack_require__(311);

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

/***/ 778:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[313]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvY3JlYXRlRmllbGRWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9mb3JtL19fZ2VuZXJhdGVkX18vc3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvbi5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dC5zY3NzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xhbmRpbmdQYWdlL2xhbmRpbmdQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGFuZGluZ1BhZ2UvbGFuZGluZ1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvZm9ybS9zdWJzY3JpYmVNYWlsaW5nTGlzdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9mb3JtL3N1YnNjcmliZU1haWxpbmdMaXN0LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL2lucHV0cy9pbnZpc2libGVSZWNhcHRjaGFDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL2ludmlzaWJsZVJlY2FwdGNoYS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvZmllbGRJbnB1dENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvZmllbGRJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvdmFsaWRhdGlvbkZpZWxkLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL1ZhbGlkYXRpb24vdmFsaWRhdGlvbkVycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9WYWxpZGF0aW9uL3ZhbGlkYXRpb25FcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9WYWxpZGF0aW9uL3ZhbGlkYXRpb25FcnJvci5zY3NzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL1ZhbGlkYXRpb24vdmFsaWRhdGlvbkVycm9ycy5zY3NzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL2lucHV0cy92YWxpZGF0aW9uRmllbGQuc2NzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvZmllbGRJbnB1dC5zY3NzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL2J1dHRvbi9mb3JtU3Bpbm5lckJ1dHRvbkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9idXR0b24vc3Bpbm5lckJ1dHRvbkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9idXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL3NwaW5uZXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL3NwaW5uZXJCdXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ljb25zL3NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvZm9ybS9zdWJzY3JpYmVNYWlsaW5nTGlzdC5zY3NzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL2Zvcm0vc3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xhbmRpbmdQYWdlL2xhbmRpbmdQYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvYXBwLnNjc3MiXSwibmFtZXMiOlsiUGFnZUNvbnRlbnQiLCJjaGlsZHJlbiIsInBhZ2VDb250ZW50IiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJkZWZhdWx0RXJyb3JNZXNzYWdlcyIsImVtYWlsIiwicmVxdWlyZWQiLCJSVUxFUyIsInZhbHVlIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0Iiwia2V5cyIsImdldE1hdGNoZXIiLCJuYW1lIiwiZXJyb3JNZXNzYWdlIiwicnVsZSIsImNvbnNvbGUiLCJlcnJvciIsInRlc3QiLCJjcmVhdGVWYWxpZGF0ZSIsImludmFsaWRNYXRjaGVyIiwibWF0Y2hlcnMiLCJmaW5kIiwibWF0Y2hlciIsInZhbGlkYXRpb25zIiwiY29uY2F0IiwiZm9yRWFjaCIsInZhbGlkYXRpb24iLCJ2YWxpZGF0aW9uTWF0Y2hlcnMiLCJtYXAiLCJydWxlTmFtZSIsIkJ1dHRvbiIsInN0eWxlTmFtZSIsImNsYXNzTmFtZSIsInByb3BzIiwiYnV0dG9uIiwiZGVmYXVsdFByb3BzIiwic3RyaW5nIiwidjAiLCJ2MSIsImhhc2giLCJtb2R1bGUiLCJleHBvcnRzIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlc29sdmVyIiwiQXBwIiwic3RvcmUiLCJSZW5kZXJFcnJvciIsInJvdXRlciIsInJlcGxhY2UiLCJwYXRobmFtZSIsInN0YXR1cyIsInN0YXRlIiwiZGF0YSIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0IiwicmVuZGVyRXJyb3IiLCJoaXN0b3J5RW5oYW5jZXIiLCJwcm90b2NvbCIsIm1pZGRsZXdhcmVzIiwibWF0Y2hlckVuaGFuY2VyIiwiY29tcG9zZUVuaGFuY2VycyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsIm1pZGRsZVdhcmUiLCJyZWR1Y2VycyIsImZvdW5kIiwiZm9ybSIsImRpc3BhdGNoIiwiaW5pdCIsIlRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lciIsInJvdXRlQ29uZmlnIiwiQ29tcG9uZW50IiwiVGVybXNBbmRDb25kaXRpb25zIiwiUHJpdmFjeVBvbGljeUNvbnRhaW5lciIsIlByaXZhY3lQb2xpY3kiLCJJbXByaW50Q29udGFpbmVyIiwiSW1wcmludCIsImltcHJpbnRDb250ZW50IiwiY3JlYXRlUHJvcHMiLCJlbmhhbmNlIiwiRXJyb3JQYWdlQ29udGFpbmVyIiwicGFyc2VJbnQiLCJwYXJhbXMiLCJsb2NhdGlvbiIsIkVycm9yUGFnZSIsImVycm9yUGFnZSIsIlByaW1hcnlMYXlvdXRDb250YWluZXIiLCJQcmltYXJ5TGF5b3V0IiwicHJpbWFyeUxheW91dCIsIndyYXAiLCJtYWluIiwiUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkiLCJGb290ZXIiLCJmb290ZXIiLCJMYW5kaW5nUGFnZUNvbnRhaW5lciIsIkxhbmRpbmdQYWdlIiwibGFuZGluZ1BhZ2UiLCJjYXB0dXJlIiwiam9pbkNvbnRhaW5lciIsImpvaW4iLCJjb21pbmciLCJoYW5kbGVycyIsIm9uU3VibWl0IiwiaW5wdXQiLCJjYXRjaCIsIlN1YnNjcmliZU1haWxpbmdMaXN0IiwiaGFuZGxlU3VibWl0IiwiUkVDQVBUQ0hBX1NJVEVfS0VZIiwiZnVuYyIsImNvbXBvbmVudCIsInZhbGlkYXRlIiwiSW52aXNpYmxlUmVjYXB0Y2hhIiwic2V0UmVjYXB0Y2hhIiwiZSIsInJlY2FwdGNoYSIsIm9uQ2hhbmdlIiwicmVzcG9uc2UiLCJGaWVsZElucHV0IiwibWV0YSIsInRvdWNoZWQiLCJpZCIsImJvb2wiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwiVmFsaWRhdGlvbkZpZWxkIiwic2hvd0Vycm9yIiwiZXJyb3JzIiwiaGFzRXJyb3IiLCJ2YWxpZGF0aW9uRmllbGQiLCJWYWxpZGF0aW9uRXJyb3JzIiwiVmFsaWRhdGlvbkVycm9yIiwibWFwU3RhdGVUb1Byb3BzIiwiZm9ybU5hbWUiLCJpc0xvYWRpbmciLCJzdWJtaXR0aW5nIiwicHJvcHNNYXBwZXIiLCJuZXdQcm9wcyIsIlNwaW5uZXJCdXR0b24iLCJzcGlubmVySWNvbiIsIlNwaW5uZXJJY29uIiwibXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJmZXRjaFF1ZXJ5Iiwib3BlcmF0aW9uIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidGV4dCIsInRoZW4iLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJuZXR3b3JrIiwiY3JlYXRlIiwic291cmNlIiwiZW52aXJvbm1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDbEI7QUFBQTtBQUFBLE1BQUssV0FBVyxzQkFBT0MsV0FBdkI7QUFDR0Q7QUFESCxHQURrQjtBQUFBLENBQXBCOztBQU1BRCxZQUFZRyxTQUFaLEdBQXdCO0FBQ3RCRixZQUFVLG9CQUFVRyxJQUFWLENBQWVDO0FBREgsQ0FBeEI7O2tCQUllTCxXOzs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7O0FBRUEsSUFBTU0sdUJBQXVCO0FBQzNCQyxTQUFPLHFEQURvQjtBQUUz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U0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQVRGO0FBZUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BZkY7QUE0QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BNUJGO0FBeUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixTQUZGO0FBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGLE9BekNGO0FBeURFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQXpERjtBQWdFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FoRUY7QUE0RUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BNUVGO0FBc0ZFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQXRGRjtBQW1HRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FuR0Y7QUFpSEU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BakhGO0FBdUhFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FE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Q29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2VDb250ZW50LnNjc3MnO1xuXG5jb25zdCBQYWdlQ29udGVudCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGVudH0+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbik7XG5cblBhZ2VDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQ29udGVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50LmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5jb25zdCBkZWZhdWx0RXJyb3JNZXNzYWdlcyA9IHtcbiAgZW1haWw6ICdFbWFpbCBtdXN0IGNvbnRhaW4gYW4gXFwnQFxcJyBhbmQgYSBcXCcuXFwnIHRvIGJlIHZhbGlkJyxcbiAgcmVxdWlyZWQ6ICdUaGlzIGlucHV0IGlzIHJlcXVpcmVkJyxcbn07XG5cbmNvbnN0IFJVTEVTID0ge1xuICBlbWFpbDogLy4rQC4rXFwuLisvaSxcbiAgcmVxdWlyZWQ6IHZhbHVlID0+IChcbiAgICB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgdmFsdWUgIT09IG51bGwgJiZcbiAgICAodHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicgfHwgdmFsdWUgPT09IHRydWUpICYmXG4gICAgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgdmFsdWUubGVuZ3RoID4gMCkgJiZcbiAgICAoIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA+IDApICYmXG4gICAgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDApXG4gICksXG59O1xuXG5jb25zdCBnZXRNYXRjaGVyID0gKG5hbWUsIGVycm9yTWVzc2FnZSA9IGRlZmF1bHRFcnJvck1lc3NhZ2VzW25hbWVdKSA9PiB7XG4gIGNvbnN0IHJ1bGUgPSBSVUxFU1tuYW1lXTtcblxuICBpZiAoIXJ1bGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGBObyBydWxlIGZvciBuYW1lIFwiJHtuYW1lfVwiIGRlZmluZWRgKTtcbiAgfVxuXG4gIGNvbnN0IHRlc3QgPSB0eXBlb2YgcnVsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJ1bGUgOiB2YWx1ZSA9PiBydWxlLnRlc3QodmFsdWUpO1xuXG4gIHJldHVybiB7IG5hbWUsIHRlc3QsIGVycm9yTWVzc2FnZSB9O1xufTtcblxuY29uc3QgY3JlYXRlVmFsaWRhdGUgPSBtYXRjaGVycyA9PiAodmFsdWUpID0+IHtcbiAgY29uc3QgaW52YWxpZE1hdGNoZXIgPSBtYXRjaGVycy5maW5kKG1hdGNoZXIgPT4gIW1hdGNoZXIudGVzdCh2YWx1ZSkpO1xuXG4gIGlmICghaW52YWxpZE1hdGNoZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGludmFsaWRNYXRjaGVyLmVycm9yTWVzc2FnZSB8fCB0cnVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKHsgdmFsaWRhdGlvbnMgPSBbXSwgcmVxdWlyZWQgfSkgPT4ge1xuICBsZXQgbWF0Y2hlcnMgPSBbXTtcblxuICBpZiAocmVxdWlyZWQpIHtcbiAgICBtYXRjaGVycyA9IG1hdGNoZXJzLmNvbmNhdChnZXRNYXRjaGVyKCdyZXF1aXJlZCcpKTtcbiAgfVxuXG4gIHZhbGlkYXRpb25zLmZvckVhY2goKHZhbGlkYXRpb24pID0+IHtcbiAgICBpZiAodmFsaWRhdGlvbiAmJiB0eXBlb2YgdmFsaWRhdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRpb25NYXRjaGVycyA9IGdldE1hdGNoZXIodmFsaWRhdGlvbik7XG5cbiAgICAgIG1hdGNoZXJzID0gbWF0Y2hlcnMuY29uY2F0KHZhbGlkYXRpb25NYXRjaGVycyk7XG4gICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uICYmIHR5cGVvZiB2YWxpZGF0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3QgdmFsaWRhdGlvbk1hdGNoZXJzID0gT2JqZWN0LmtleXModmFsaWRhdGlvbikubWFwKFxuICAgICAgICBydWxlTmFtZSA9PiBnZXRNYXRjaGVyKHJ1bGVOYW1lLCB2YWxpZGF0aW9uW3J1bGVOYW1lXSksXG4gICAgICApO1xuXG4gICAgICBtYXRjaGVycyA9IG1hdGNoZXJzLmNvbmNhdCh2YWxpZGF0aW9uTWF0Y2hlcnMpO1xuICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvbnMpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3ZhbGlkYXRpb25zIG5lZWRzIHRvIGJlIGFuIGFycmF5IG9mIHR5cGUgW1xcJ3J1bGVcXCddIG9yIFt7IHJ1bGVOYW1lOiBcXCdlcnJvck1lc3NhZ2VcXCcgfV0nKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjcmVhdGVWYWxpZGF0ZShtYXRjaGVycyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL2NyZWF0ZUZpZWxkVmFsaWRhdG9yLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5zY3NzJztcblxuY29uc3QgQnV0dG9uID0gKHtcbiAgY2hpbGRyZW4sIHN0eWxlTmFtZSwgY2xhc3NOYW1lLCAuLi5wcm9wc1xufSkgPT4gKFxuICA8YnV0dG9uXG4gICAgey4uLnByb3BzfVxuICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuYnV0dG9uLCBzdHlsZXNbc3R5bGVOYW1lXSwgY2xhc3NOYW1lKX1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9idXR0b24+XG4pO1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZU5hbWU6ICdwcmltYXJ5JyxcbiAgY2xhc3NOYW1lOiBudWxsLFxufTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL2J1dHRvbi5qcyIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggNzVlODU5MTMxMzkzMmQ1YTRiYzAwODU5YmNkNDQ1NTJcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5leHBvcnQgdHlwZSBzdWJzY3JpYmVNYWlsaW5nTGlzdE11dGF0aW9uVmFyaWFibGVzID0ge3xcbiAgaW5wdXQ6IHtcbiAgICBjbGllbnRNdXRhdGlvbklkPzogP3N0cmluZyxcbiAgICBlbWFpbDogc3RyaW5nLFxuICAgIHJlY2FwdGNoYTogc3RyaW5nLFxuICB9LFxufH07XG5leHBvcnQgdHlwZSBzdWJzY3JpYmVNYWlsaW5nTGlzdE11dGF0aW9uUmVzcG9uc2UgPSB7fFxuICArc3Vic2NyaWJlTWFpbGluZ0xpc3Q6ID97fFxuICAgICtjbGllbnRNdXRhdGlvbklkOiA/c3RyaW5nLFxuICB8fSxcbnx9O1xuKi9cblxuXG4vKlxubXV0YXRpb24gc3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvbihcbiAgJGlucHV0OiBTdWJzY3JpYmVNYWlsaW5nTGlzdElucHV0IVxuKSB7XG4gIHN1YnNjcmliZU1haWxpbmdMaXN0KGlucHV0OiAkaW5wdXQpIHtcbiAgICBjbGllbnRNdXRhdGlvbklkXG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxvY2FsQXJndW1lbnRcIixcbiAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIlN1YnNjcmliZU1haWxpbmdMaXN0SW5wdXQhXCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICBcIm5hbWVcIjogXCJzdWJzY3JpYmVNYWlsaW5nTGlzdFwiLFxuICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgIFwiYXJnc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgICAgIFwidmFyaWFibGVOYW1lXCI6IFwiaW5wdXRcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiU3Vic2NyaWJlTWFpbGluZ0xpc3RJbnB1dCFcIlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJjb25jcmV0ZVR5cGVcIjogXCJTdWJzY3JpYmVNYWlsaW5nTGlzdFBheWxvYWRcIixcbiAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImNsaWVudE11dGF0aW9uSWRcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJtdXRhdGlvblwiLFxuICBcIm5hbWVcIjogXCJzdWJzY3JpYmVNYWlsaW5nTGlzdE11dGF0aW9uXCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwibXV0YXRpb24gc3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvbihcXG4gICRpbnB1dDogU3Vic2NyaWJlTWFpbGluZ0xpc3RJbnB1dCFcXG4pIHtcXG4gIHN1YnNjcmliZU1haWxpbmdMaXN0KGlucHV0OiAkaW5wdXQpIHtcXG4gICAgY2xpZW50TXV0YXRpb25JZFxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJzdWJzY3JpYmVNYWlsaW5nTGlzdE11dGF0aW9uXCIsXG4gICAgXCJ0eXBlXCI6IFwiTXV0YXRpb25cIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiB2MVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwic3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvblwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogdjFcbiAgfVxufTtcbn0pKCk7XG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICdiNzc3NDcwNWE1MjJjNjFlYWMyODZiMGJhNGY0NmM5OSc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9mb3JtL19fZ2VuZXJhdGVkX18vc3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvbi5ncmFwaHFsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcblxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgJy4vYXBwLnNjc3MnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJlc29sdmVyIH0gZnJvbSAnZm91bmQtcmVsYXknO1xuXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGluZy9yb3V0ZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUvc3RvcmUnO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQvZW52aXJvbm1lbnQnO1xuXG5jb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcihlbnZpcm9ubWVudCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJvdXRlciBtYXRjaENvbnRleHQ9e3sgc3RvcmUgfX0gcmVzb2x2ZXI9e3Jlc29sdmVyfSAvPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvYXBwLmpzIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIgZnJvbSAnZm91bmQvbGliL2NyZWF0ZUNvbm5lY3RlZFJvdXRlcic7XG5pbXBvcnQgY3JlYXRlUmVuZGVyIGZyb20gJ2ZvdW5kL2xpYi9jcmVhdGVSZW5kZXInO1xuXG5jb25zdCBSZW5kZXJFcnJvciA9ICh7IGVycm9yLCByb3V0ZXIgfSkgPT4ge1xuICByb3V0ZXIucmVwbGFjZSh7XG4gICAgcGF0aG5hbWU6IGAvZXJyb3IvJHtlcnJvci5zdGF0dXN9YCxcbiAgICBzdGF0ZToge1xuICAgICAgZXJyb3I6IGVycm9yLmRhdGEsXG4gICAgfSxcbiAgfSk7XG59O1xuXG5SZW5kZXJFcnJvci5wcm9wVHlwZXMgPSB7XG4gIGVycm9yOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHN0YXR1czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB9KS5pc1JlcXVpcmVkLFxuICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbm5lY3RlZFJvdXRlcih7XG4gIHJlbmRlcjogY3JlYXRlUmVuZGVyKHtcbiAgICByZW5kZXJFcnJvcjogUmVuZGVyRXJyb3IsXG4gIH0pLFxufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLmpzIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IHJlZHVjZXIgYXMgZm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IGZvdW5kIGZyb20gJ2ZvdW5kL2xpYi9mb3VuZFJlZHVjZXInO1xuaW1wb3J0IEZhcmNlQWN0aW9ucyBmcm9tICdmYXJjZS9saWIvQWN0aW9ucyc7XG5pbXBvcnQgQnJvd3NlclByb3RvY29sIGZyb20gJ2ZhcmNlL2xpYi9Ccm93c2VyUHJvdG9jb2wnO1xuaW1wb3J0IGNyZWF0ZUhpc3RvcnlFbmhhbmNlciBmcm9tICdmYXJjZS9saWIvY3JlYXRlSGlzdG9yeUVuaGFuY2VyJztcbmltcG9ydCBxdWVyeU1pZGRsZXdhcmUgZnJvbSAnZmFyY2UvbGliL3F1ZXJ5TWlkZGxld2FyZSc7XG5pbXBvcnQgY3JlYXRlTWF0Y2hFbmhhbmNlciBmcm9tICdmb3VuZC9saWIvY3JlYXRlTWF0Y2hFbmhhbmNlcic7XG5pbXBvcnQgTWF0Y2hlciBmcm9tICdmb3VuZC9saWIvTWF0Y2hlcic7XG5cbmltcG9ydCByb3V0ZUNvbmZpZyBmcm9tICcuLi9yb3V0aW5nL3JvdXRlQ29uZmlnJztcblxuY29uc3QgaGlzdG9yeUVuaGFuY2VyID0gY3JlYXRlSGlzdG9yeUVuaGFuY2VyKHtcbiAgcHJvdG9jb2w6IG5ldyBCcm93c2VyUHJvdG9jb2woKSxcbiAgbWlkZGxld2FyZXM6IFtxdWVyeU1pZGRsZXdhcmVdLFxufSk7XG5cbmNvbnN0IG1hdGNoZXJFbmhhbmNlciA9IGNyZWF0ZU1hdGNoRW5oYW5jZXIoXG4gIG5ldyBNYXRjaGVyKHJvdXRlQ29uZmlnKSxcbik7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcblxuY29uc3QgbWlkZGxlV2FyZSA9IGNvbXBvc2VFbmhhbmNlcnMoXG4gIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXG4gIGhpc3RvcnlFbmhhbmNlcixcbiAgbWF0Y2hlckVuaGFuY2VyLFxuKTtcblxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBmb3VuZCxcbiAgZm9ybSxcbn0pO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB7fSwgbWlkZGxlV2FyZSk7XG5cbnN0b3JlLmRpc3BhdGNoKEZhcmNlQWN0aW9ucy5pbml0KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL3N0b3JlL3N0b3JlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtYWtlUm91dGVDb25maWcgZnJvbSAnZm91bmQvbGliL21ha2VSb3V0ZUNvbmZpZyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnZm91bmQvbGliL1JvdXRlJztcblxuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgdGVybXNBbmRDb25kaXRpb25zUm91dGVDb25maWcgfSBmcm9tICcuLi8uLi9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHByaXZhY3lQb2xpY3lSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2Zvb3Rlci9wcml2YWN5UG9saWN5Q29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGltcHJpbnRSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2Zvb3Rlci9pbXByaW50Q29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGVycm9yUGFnZVJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZXJyb3JQYWdlL2Vycm9yUGFnZUNvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBwcmltYXJ5TGF5b3V0Um91dGVDb25maWcgfSBmcm9tICcuLi8uLi9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dENvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBsYW5kaW5nUGFnZVJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vbGFuZGluZ1BhZ2UvbGFuZGluZ1BhZ2VDb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlUm91dGVDb25maWcoXG4gIDxSb3V0ZSBwYXRoPVwiL1wiIHsuLi5wcmltYXJ5TGF5b3V0Um91dGVDb25maWd9PlxuICAgIDxSb3V0ZSB7Li4ubGFuZGluZ1BhZ2VSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImVycm9yLzpzdGF0dXNcIiB7Li4uZXJyb3JQYWdlUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJ0ZXJtc0FuZENvbmRpdGlvbnNcIiB7Li4udGVybXNBbmRDb25kaXRpb25zUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJwcml2YWN5UG9saWN5XCIgey4uLnByaXZhY3lQb2xpY3lSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImltcHJpbnRcIiB7Li4uaW1wcmludFJvdXRlQ29uZmlnfSAvPlxuICA8L1JvdXRlPixcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlQ29uZmlnLmpzIiwiaW1wb3J0IFRlcm1zQW5kQ29uZGl0aW9ucyBmcm9tICcuL3Rlcm1zQW5kQ29uZGl0aW9ucyc7XG5cbmNvbnN0IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lciA9IFRlcm1zQW5kQ29uZGl0aW9ucztcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSAnLi4vc2hhcmVkL3BhZ2VDb250ZW50JztcblxuY29uc3QgVGVybXNBbmRDb25kaXRpb25zID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPEhlbG1ldD5cbiAgICAgIDx0aXRsZT5UZXJtcyBhbmQgQ29uZGl0aW9uczwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiT3VyIHRlcm1zIGFuZCBjb25kaXRpb25zIHRoYXQgeW91IGFncmVlIHRvIHdoZW4gdXNpbmcgb3VyIHNpdGUuXCIgLz5cbiAgICA8L0hlbG1ldD5cbiAgICA8aDE+VGVybXMgYW5kIENvbmRpdGlvbnM8L2gxPlxuICAgIDxoMj5MYXN0IFVwZGF0ZWQ6IEp1bmUgMTF0aCAyMDE4PC9oMj5cbiAgICA8cD5cbiAgICAgICZxdW90O1lvdSZxdW90OyBhbmQgJnF1b3Q7eW91ciZxdW90OyByZWZlciB0byB5b3UsIGFzIGEgdXNlciBvZiB0aGUgU2l0ZS5cbiAgICAgIEEgJnF1b3Q7dXNlciZxdW90OyBpcyBzb21lb25lIHdobyBhY2Nlc3Nlcyxicm93c2VzLCBjcmF3bHMsIHNjcmFwZXMsIG9yIGluIGFueVxuICAgICAgd2F5IHVzZXMgdGhlIFNpdGUuICZxdW90O1dlLCZxdW90OyAmcXVvdDt1cywmcXVvdDsgYW5kICZxdW90O291ciZxdW90OyByZWZlciB0byBvbmJvYXJkb3IuXG4gICAgICAmcXVvdDtDb250ZW50JnF1b3Q7IG1lYW5zIHRleHQsIGltYWdlcywgcGhvdG9zLCBhdWRpbywgdmlkZW8sIGxvY2F0aW9uIGRhdGEsXG4gICAgICBhbmQgYWxsIG90aGVyIGZvcm1zIG9mIGRhdGEgb3IgY29tbXVuaWNhdGlvbi5cbiAgICAgICZxdW90O1lvdXIgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgeW91IHN1Ym1pdCBvciB0cmFuc21pdCB0bywgdGhyb3VnaCwgb3IgaW5cbiAgICAgIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZSwgc3VjaCBhcyByYXRpbmdzLCByZXZpZXdzLCBjb21wbGltZW50cywgaW52aXRhdGlvbnMsXG4gICAgICBjaGVjay1pbnMsIG1lc3NhZ2VzLCBhbmQgaW5mb3JtYXRpb24gdGhhdCB5b3UgcHVibGljbHkgZGlzcGxheSBvciBkaXNwbGF5ZWQgaW5cbiAgICAgIHlvdXIgYWNjb3VudCBwcm9maWxlLlxuICAgICAgJnF1b3Q7VXNlciBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdCB1c2VycyBzdWJtaXQgb3IgdHJhbnNtaXQgdG8sIHRocm91Z2gsXG4gICAgICBvciBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUuICZxdW90O29uYm9hcmRvciBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdFxuICAgICAgd2UgY3JlYXRlIGFuZCBtYWtlIGF2YWlsYWJsZSBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUuXG4gICAgICAmcXVvdDtUaGlyZCBQYXJ0eSBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdCBvcmlnaW5hdGVzIGZyb20gcGFydGllcyBvdGhlclxuICAgICAgdGhhbiBvbmJvYXJkb3Igb3IgaXRzIHVzZXJzLCB3aGljaCBpcyBtYWRlIGF2YWlsYWJsZSBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUuXG4gICAgICAmcXVvdDtTaXRlIENvbnRlbnQmcXVvdDsgbWVhbnMgYWxsIG9mIHRoZSBDb250ZW50IHRoYXQgaXMgbWFkZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvblxuICAgICAgd2l0aCB0aGUgU2l0ZSwgaW5jbHVkaW5nIFlvdXIgQ29udGVudCwgVXNlciBDb250ZW50LCBUaGlyZCBQYXJ0eSBDb250ZW50LFxuICAgICAgYW5kIG9uYm9hcmRvciBDb250ZW50LlxuICAgIDwvcD5cbiAgICA8b2w+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UZXJtczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEJ5IGFjY2Vzc2luZyB0aGlzIHdlYnNpdGUsIHlvdSBhcmUgYWdyZWVpbmcgdG8gYmUgYm91bmQgYnkgdGhlc2Ugd2Vic2l0ZSBUZXJtc1xuICAgICAgICAgIGFuZCBDb25kaXRpb25zIG9mIFVzZSwgYWxsIGFwcGxpY2FibGUgbGF3cyBhbmQgcmVndWxhdGlvbnMsIGFuZCBhZ3JlZSB0aGF0IHlvdVxuICAgICAgICAgIGFyZSByZXNwb25zaWJsZSBmb3IgY29tcGxpYW5jZSB3aXRoIGFueSBhcHBsaWNhYmxlIGxvY2FsIGxhd3MuXG4gICAgICAgICAgSWYgeW91IGRvIG5vdCBhZ3JlZSB3aXRoIGFueSBvZiB0aGVzZSB0ZXJtcywgeW91IGFyZSBwcm9oaWJpdGVkIGZyb20gdXNpbmcgb3JcbiAgICAgICAgICBhY2Nlc3NpbmcgdGhpcyBzaXRlLiBUaGUgbWF0ZXJpYWxzIGNvbnRhaW5lZCBpbiB0aGlzIHdlYnNpdGUgYXJlIHByb3RlY3RlZFxuICAgICAgICAgIGJ5IGFwcGxpY2FibGUgY29weXJpZ2h0IGFuZCB0cmFkZSBtYXJrIGxhdy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRpc2NsYWltZXI8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgbWF0ZXJpYWxzIG9uIHRoZSBvbmJvYXJkb3Igd2Vic2l0ZSBhcmUgcHJvdmlkZWQgJnF1b3Q7YXMgc2hvd24mcXVvdDsuXG4gICAgICAgICAgb25ib2FyZG9yIG1ha2VzIG5vIHdhcnJhbnRpZXMsIGV4cHJlc3NlZCBvciBpbXBsaWVkLCBhbmQgaGVyZWJ5IGRpc2NsYWltc1xuICAgICAgICAgIGFuZCBuZWdhdGVzIGFsbCBvdGhlciB3YXJyYW50aWVzLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uLCBpbXBsaWVkXG4gICAgICAgICAgd2FycmFudGllcyBvciBjb25kaXRpb25zIG9mIG1lcmNoYW50YWJpbGl0eSwgZml0bmVzcyBmb3IgYSBwYXJ0aWN1bGFyXG4gICAgICAgICAgcHVycG9zZSwgb3Igbm9uLWluZnJpbmdlbWVudCBvZiBpbnRlbGxlY3R1YWwgcHJvcGVydHkgb3Igb3RoZXIgdmlvbGF0aW9uIG9mIHJpZ2h0cy5cbiAgICAgICAgICBGdXJ0aGVyLCBvbmJvYXJkb3IgZG9lcyBub3Qgd2FycmFudCBvciBtYWtlIGFueSByZXByZXNlbnRhdGlvbnMgY29uY2VybmluZyB0aGUgYWNjdXJhY3ksXG4gICAgICAgICAgbGlrZWx5IHJlc3VsdHMsIG9yIHJlbGlhYmlsaXR5IG9mIHRoZSB1c2Ugb2YgdGhlIG1hdGVyaWFscyBvbiBpdHMgaW50ZXJuZXRcbiAgICAgICAgICB3ZWJzaXRlIG9yIG90aGVyd2lzZSByZWxhdGluZyB0byBzdWNoIG1hdGVyaWFscyBvciBvbiBhbnkgc2l0ZXMgbGlua2VkIHRvIHRoaXMgc2l0ZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkxpbWl0YXRpb25zPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSW4gbm8gZXZlbnQgc2hhbGwgb25ib2FyZG9yIG9yIGl0cyBzdXBwbGllcnMgYmUgbGlhYmxlIGZvciBhbnkgZGFtYWdlcyAoaW5jbHVkaW5nLCB3aXRob3V0XG4gICAgICAgICAgbGltaXRhdGlvbiwgZGFtYWdlcyBmb3IgbG9zcyBvZiBkYXRhIG9yIHByb2ZpdCwgb3IgZHVlIHRvIGJ1c2luZXNzIGludGVycnVwdGlvbilcbiAgICAgICAgICBhcmlzaW5nIG91dCBvZiB0aGUgdXNlIG9yIGluYWJpbGl0eSB0byB1c2UgdGhlIG1hdGVyaWFscyBvbiBvdXIgaW50ZXJuZXQgc2l0ZSBvclxuICAgICAgICAgIG9mZmVyZWQgc2VydmljZXMsIGV2ZW4gaWYgd2Ugb3IgYW4gYXV0aG9yaXplZCByZXByZXNlbnRhdGl2ZSBoYXMgYmVlbiBub3RpZmllZFxuICAgICAgICAgIG9yYWxseSBvciBpbiB3cml0aW5nIG9mIHRoZSBwb3NzaWJpbGl0eSBvZiBzdWNoIGRhbWFnZS4gQmVjYXVzZSBzb21lIGp1cmlzZGljdGlvbnNcbiAgICAgICAgICBkbyBub3QgYWxsb3cgbGltaXRhdGlvbnMgb24gaW1wbGllZCB3YXJyYW50aWVzLCBvciBsaW1pdGF0aW9ucyBvZiBsaWFiaWxpdHkgZm9yXG4gICAgICAgICAgY29uc2VxdWVudGlhbCBvciBpbmNpZGVudGFsIGRhbWFnZXMsIHRoZXNlIGxpbWl0YXRpb25zIG1heSBub3QgYXBwbHkgdG8geW91LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+UmV2aXNpb25zIGFuZCBFcnJvcnM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgbWF0ZXJpYWxzIGFwcGVhcmluZyBvbiBvdXIgd2Vic2l0ZSBjb3VsZCBpbmNsdWRlIHRlY2huaWNhbCwgdHlwb2dyYXBoaWNhbCxcbiAgICAgICAgICBvciBwaG90b2dyYXBoaWMgZXJyb3JzLiBvbmJvYXJkb3IgZG9lcyBub3Qgd2FycmFudCB0aGF0IGFueSBvZiB0aGUgbWF0ZXJpYWxzIG9uXG4gICAgICAgICAgaXRzIHdlYnNpdGUgYXJlIGFjY3VyYXRlLCBjb21wbGV0ZSwgb3IgY3VycmVudC4gV2UgbWF5IG1ha2UgY2hhbmdlcyB0byB0aGVcbiAgICAgICAgICBtYXRlcmlhbHMgY29udGFpbmVkIG9uIGl0cyB3ZWJzaXRlIGF0IGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+TGlua3M8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBvbmJvYXJkb3IgaGFzIG5vdCByZXZpZXdlZCBhbGwgb2YgdGhlIHNpdGVzIGxpbmtlZCB0byBpdHMgaW50ZXJuZXQgd2Vic2l0ZVxuICAgICAgICAgIGFuZCBpcyBub3QgcmVzcG9uc2libGUgZm9yIHRoZSBjb250ZW50cyBvZiBhbnkgc3VjaCBsaW5rZWQgc2l0ZS5cbiAgICAgICAgICBUaGUgaW5jbHVzaW9uIG9mIGFueSBsaW5rIGRvZXMgbm90IGltcGx5IGVuZG9yc2VtZW50IGJ5IHVzIG9mIHRoZSBzaXRlLlxuICAgICAgICAgIFVzZSBvZiBhbnkgc3VjaCBsaW5rZWQgd2Vic2l0ZSBpcyBhdCB0aGUgdXNlciZxdW90O3Mgb3duIHJpc2suXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Hb3Zlcm5pbmcgTGF3PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQW55IGNsYWltIHJlbGF0aW5nIHRvIHRoZSBvbmJvYXJkb3Igd2Vic2l0ZSBzaGFsbCBiZSBnb3Zlcm5lZCBieSB0aGUgbGF3c1xuICAgICAgICAgIG9mIHRoZSBjb3VudHJ5IG9mIG5vdGUgd2l0aG91dCByZWdhcmQgdG8gaXRzIGNvbmZsaWN0IG9mIGxhdyBwcm92aXNpb25zLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RW5nbGlzaCBMYW5ndWFnZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEluIHRoZSBldmVudCBvZiBhIGNvbmZsaWN0IGJldHdlZW4gdGhlc2UgVGVybXMgYW5kIGEgZm9yZWlnbiBsYW5ndWFnZSB2ZXJzaW9uXG4gICAgICAgICAgb2Ygb3VyIFRlcm1zIG9mIFVzZSwgdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UgdmVyc2lvbiBvZiB0aGVzZSBUZXJtcyBnb3Zlcm5zLlxuICAgICAgICAgIEFsbCBkaXNwdXRlcywgY2xhaW1zIGFuZCBjYXVzZXMgb2YgYWN0aW9uIChhbmQgcmVsYXRlZCBwcm9jZWVkaW5ncykgd2lsbCBiZVxuICAgICAgICAgIGNvbW11bmljYXRlZCBpbiBFbmdsaXNoLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q29weXJpZ2h0IHBvbGljeSwgbm90aWNlIGFuZCBjbGFpbSBpbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFsbCBtYXRlcmlhbHMgb24gdGhpcyBzaXRlLCB3aGV0aGVyIHNlcGFyYXRlIG9yIGNvbXBpbGVkLCBpbmNsdWRpbmcsXG4gICAgICAgICAgYnV0IG5vdCBsaW1pdGVkIHRvLCB0ZXh0LCBncmFwaGljcywgYXVkaW8gY2xpcHMsIGxvZ29zLCBidXR0b25zLCBpbWFnZXMsXG4gICAgICAgICAgZGlnaXRhbCBkb3dubG9hZHMsIGRhdGEgY29tcGlsYXRpb25zLCBzb2Z0d2FyZSwgaWNvbnMsIGh0bWwgY29kZSBhbmQgeG1sIGNvZGUsXG4gICAgICAgICAgYXMgd2VsbCBhcyBhbGwgY29weXJpZ2h0LCBwYXRlbnQsIHRyYWRlbWFyaywgdHJhZGUgZHJlc3MsIGFuZCBvdGhlciByaWdodHNcbiAgICAgICAgICB0aGVyZWluLCBhcmUgb3duZWQgb3IgbGljZW5zZWQgYnkgb25ib2FyZG9yIGFuZCBpdHMgdGhpcmQtcGFydHkgaW5mb3JtYXRpb24gcHJvdmlkZXJzLFxuICAgICAgICAgIGFuZCBhcmUgcHJvdGVjdGVkIGJ5IGludGVybmF0aW9uYWwgaW50ZWxsZWN0dWFsIHByb3BlcnR5IGxhd3MuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgPC9vbD5cbiAgPC9QYWdlQ29udGVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1zQW5kQ29uZGl0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9ucy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBhZ2VDb250ZW50XCI6XCJDb21wb25lbnRzLXNoYXJlZC1wYWdlQ29udGVudF9fcGFnZUNvbnRlbnRcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFByaXZhY3lQb2xpY3kgZnJvbSAnLi9wcml2YWN5UG9saWN5JztcblxuY29uc3QgUHJpdmFjeVBvbGljeUNvbnRhaW5lciA9IFByaXZhY3lQb2xpY3k7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBQcml2YWN5UG9saWN5Q29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeUNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3ByaXZhY3lQb2xpY3lDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcblxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3NoYXJlZC9wYWdlQ29udGVudCc7XG5cbmNvbnN0IFByaXZhY3lQb2xpY3kgPSAoKSA9PiAoXG4gIDxQYWdlQ29udGVudD5cbiAgICA8SGVsbWV0PlxuICAgICAgPHRpdGxlPlByaXZhY3kgUG9saWN5PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJPdXIgcHJpdmFjeSBwb2xpY3kgZXhwbGFpbmluZyB3aGF0IGRhdGEgd2UgY29sbGVjdC5cIiAvPlxuICAgIDwvSGVsbWV0PlxuICAgIDxoMT5Qcml2YWN5IFBvbGljeTwvaDE+XG4gICAgPGgyPkxhc3QgVXBkYXRlZDogSnVuZSAxMXRoIDIwMTg8L2gyPlxuICAgIDxwPlxuICAgICAgVGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYmVlbiBjb21waWxlZCB0byBiZXR0ZXIgc2VydmUgdGhvc2Ugd2hvIGFyZSBjb25jZXJuZWQgd2l0aCBob3cgdGhlaXJcbiAgICAgICZhcG9zO1BlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uJmFwb3M7IChQSUkpIGlzIGJlaW5nIHVzZWQgb25saW5lLlxuICAgICAgUElJLCBhcyBkZXNjcmliZWQgaW4gVVMgcHJpdmFjeSBsYXcgYW5kIGluZm9ybWF0aW9uIHNlY3VyaXR5LCBpcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSB1c2VkXG4gICAgICBvbiBpdHMgb3duIG9yIHdpdGggb3RoZXIgaW5mb3JtYXRpb24gdG8gaWRlbnRpZnksIGNvbnRhY3QsIG9yIGxvY2F0ZSBhIHNpbmdsZSBwZXJzb24sIG9yIHRvXG4gICAgICBpZGVudGlmeSBhbiBpbmRpdmlkdWFsIGluIGNvbnRleHQuIFBsZWFzZSByZWFkIG91ciBwcml2YWN5IHBvbGljeSBjYXJlZnVsbHkgdG8gZ2V0IGEgY2xlYXJcbiAgICAgIHVuZGVyc3RhbmRpbmcgb2YgaG93IHdlIGNvbGxlY3QsIHVzZSwgcHJvdGVjdCBvciBvdGhlcndpc2UgaGFuZGxlXG4gICAgICB5b3VyIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uIGluIGFjY29yZGFuY2Ugd2l0aCBvdXIgd2Vic2l0ZS5cbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2hhdCBwZXJzb25hbCBpbmZvcm1hdGlvbiBkbyB3ZSBjb2xsZWN0PzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdoZW4gcmVnaXN0ZXJpbmcgZm9yIG91ciBuZXdzbGV0dGVyLCB5b3Ugd2lsbCBiZSBhc2tlZCB0byBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAgVGhpcyBpcyB0byBoZWxwIHVzIGluZGVudGlmeSB5b3UgYW5kIGtlZXAgeW91IHVwZGF0ZWQuXG4gICAgICAgICAgV2Ugd2lsbCBub3Qgc2VuZCB5b3UgYW55IGVtYWlscyB0aGF0IHlvdSBkbyBub3QgcmVxdWVzdC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldoZW4gZG8gd2UgY29sbGVjdCBpbmZvcm1hdGlvbj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBjb2xsZWN0IGNlcnRhaW4gaW5mb3JtYXRpb24gZnJvbSB5b3Ugd2hlbiB5b3UgcmVnaXN0ZXIgZm9yIG91ciBuZXdzbGV0dGVyLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+SG93IGRvIHdlIHByb3RlY3QgeW91ciBpbmZvcm1hdGlvbj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBkbyBub3QgdXNlIHZ1bG5lcmFiaWxpdHkgc2Nhbm5pbmcgYW5kL29yIHNjYW5uaW5nIHRvIFBDSSBzdGFuZGFyZHMuXG4gICAgICAgICAgV2UgbmV2ZXIgYXNrIGZvciBjcmVkaXQgY2FyZCBudW1iZXJzLiBXZSB1c2UgcmVndWxhciBNYWx3YXJlIFNjYW5uaW5nLlxuICAgICAgICAgIFlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgY29udGFpbmVkIGJlaGluZCBzZWN1cmVkIG5ldHdvcmtzIGFuZCBpcyBvbmx5IGFjY2Vzc2libGVcbiAgICAgICAgICBieSBhIGxpbWl0ZWQgbnVtYmVyIG9mIHBlcnNvbnMgd2hvIGhhdmUgc3BlY2lhbCBhY2Nlc3MgcmlnaHRzIHRvIHN1Y2ggc3lzdGVtcywgYW5kIGFyZVxuICAgICAgICAgIHJlcXVpcmVkIHRvIGtlZXAgdGhlIGluZm9ybWF0aW9uIGNvbmZpZGVudGlhbC4gSW4gYWRkaXRpb24sIGFsbCBzZW5zaXRpdmUgaW5mb3JtYXRpb25cbiAgICAgICAgICB5b3Ugc3VwcGx5IGlzIGVuY3J5cHRlZCB2aWEgU2VjdXJlIFNvY2tldCBMYXllciAoU1NMKSB0ZWNobm9sb2d5LlxuICAgICAgICAgIFdlIGltcGxlbWVudCBhIHZhcmlldHkgb2Ygc2VjdXJpdHkgbWVhc3VyZXMgd2hlbiBhIHVzZXIgZW50ZXJzLCBzdWJtaXRzLCBvciBhY2Nlc3NlcyB0aGVpclxuICAgICAgICAgIGluZm9ybWF0aW9uIHRvIG1haW50YWluIHRoZSBzYWZldHkgb2YgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRvIHdlIHVzZSAmYXBvcztjb29raWVzJmFwb3M7PzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFllcy4gQ29va2llcyBhcmUgc21hbGwgZmlsZXMgdGhhdCBhIHNpdGUgb3IgaXRzIHNlcnZpY2UgcHJvdmlkZXIgdHJhbnNmZXJzIHRvIHlvdXJcbiAgICAgICAgICBjb21wdXRlciZhcG9zO3MgaGFyZCBkcml2ZSB0aHJvdWdoIHlvdXIgV2ViIGJyb3dzZXIgdGhhdCBlbmFibGVzIHRoZVxuICAgICAgICAgIHNpdGUmYXBvcztzIG9yIHNlcnZpY2UgcHJvdmlkZXImYXBvcztzIHN5c3RlbXMgdG8gcmVjb2duaXplIHlvdXIgYnJvd3NlciBhbmQgY2FwdHVyZVxuICAgICAgICAgIGFuZCByZW1lbWJlciBjZXJ0YWluIGluZm9ybWF0aW9uLiBUaGV5IGFyZSB1c2VkIHRvIGhlbHAgdXMgdW5kZXJzdGFuZCB5b3VyIHByZWZlcmVuY2VzXG4gICAgICAgICAgYmFzZWQgb24gcHJldmlvdXMgb3IgY3VycmVudCBzaXRlIGFjdGl2aXR5LCB3aGljaCBlbmFibGVzIHVzIHRvIHByb3ZpZGVcbiAgICAgICAgICB5b3Ugd2l0aCBpbXByb3ZlZCBzZXJ2aWNlcy4gV2UgYWxzbyB1c2UgY29va2llcyB0byBoZWxwIHVzIGNvbXBpbGUgYWdncmVnYXRlIGRhdGEgYWJvdXRcbiAgICAgICAgICBzaXRlIHRyYWZmaWMgYW5kIHNpdGUgaW50ZXJhY3Rpb24gc28gdGhhdCB3ZSBjYW4gb2ZmZXIgYmV0dGVyIHNpdGVcbiAgICAgICAgICBleHBlcmllbmNlcyBhbmQgdG9vbHMgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldlIHVzZSBjb29raWVzIHRvOjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+VW5kZXJzdGFuZCBhbmQgc2F2ZSB1c2VyJmFwb3M7cyBwcmVmZXJlbmNlcyBmb3IgZnV0dXJlIHZpc2l0cy48L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIENvbXBpbGUgYWdncmVnYXRlIGRhdGEgYWJvdXQgc2l0ZSB0cmFmZmljIGFuZCBzaXRlIGludGVyYWN0aW9uc1xuICAgICAgICAgICAgaW4gb3JkZXIgdG8gb2ZmZXIgYmV0dGVyIHNpdGUgZXhwZXJpZW5jZXMgYW5kIHRvb2xzIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICBXZSBtYXkgYWxzbyB1c2UgdHJ1c3RlZCB0aGlyZC1wYXJ0eSBzZXJ2aWNlcyB0aGF0IHRyYWNrIHRoaXNcbiAgICAgICAgICAgIGluZm9ybWF0aW9uIG9uIG91ciBiZWhhbGZcbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDb29raWVzIGFyZSBhbiBpbXBvcnRhbnQgcGFydCBvZiBvdXIgd2Vic2l0ZSBhbmQgdGhlIHdlYnNpdGUgd2lsbCBub3Qgd29ya1xuICAgICAgICAgIHdpdGhvdXQgaGF2aW5nIHRoZW0gZW5hYmxlZC4gQnkgdXNpbmcgb3VyIHNpdGUgeW91IGFsbG93IHVzIHRvIHVzZSBjb29raWVzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGhpcmQtcGFydHkgZGlzY2xvc3VyZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGRvIG5vdCBzZWxsLCB0cmFkZSwgb3Igb3RoZXJ3aXNlIHRyYW5zZmVyIHRvIG91dHNpZGVcbiAgICAgICAgICBwYXJ0aWVzIHlvdXIgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UaGlyZC1wYXJ0eSBsaW5rczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZXJlIG1heSBiZSB0aGlyZC1wYXJ0eSBsaW5rcyB0byByYWRpbyBzdGF0aW9uIHdlYnNpdGVzIHRocm91Z2hvdXQgb3VyXG4gICAgICAgICAgd2Vic2l0ZS4gVGhlc2UgdGhpcmQtcGFydHkgc2l0ZXMgaGF2ZSBzZXBhcmF0ZSBhbmQgaW5kZXBlbmRlbnQgcHJpdmFjeSBwb2xpY2llcy5cbiAgICAgICAgICBXZSB0aGVyZWZvcmUgaGF2ZSBubyByZXNwb25zaWJpbGl0eSBvciBsaWFiaWxpdHkgZm9yIHRoZSBjb250ZW50IGFuZFxuICAgICAgICAgIGFjdGl2aXRpZXMgb2YgdGhlc2UgbGlua2VkIHNpdGVzLiBOb25ldGhlbGVzcywgd2Ugc2VlayB0byBwcm90ZWN0XG4gICAgICAgICAgdGhlIGludGVncml0eSBvZiBvdXIgc2l0ZSBhbmQgd2VsY29tZSBhbnkgZmVlZGJhY2sgYWJvdXQgdGhlc2Ugc2l0ZXMuXG4gICAgICAgICAgQW55IGxpbmsgb24gb3VyIHNpdGUgdG8gYSB0aGlyZCBwYXJ0IHdlYnNpdGUgdGhhdCBpcyBub3QgcmVsZXZhbnRcbiAgICAgICAgICBvciBpZiB3ZSBkZWVtIGl0IGluYXBwcm9wcmlhdGUsIG1heSBiZSByZW1vdmVkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+R29vZ2xlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgR29vZ2xlJmFwb3M7cyBhZHZlcnRpc2luZyByZXF1aXJlbWVudHMgY2FuIGJlIHN1bW1lZCB1cCBieVxuICAgICAgICAgIEdvb2dsZSZhcG9zO3MgQWR2ZXJ0aXNpbmcgUHJpbmNpcGxlcy4gVGhleSBhcmUgcHV0IGluIHBsYWNlIHRvXG4gICAgICAgICAgcHJvdmlkZSBhIHBvc2l0aXZlIGV4cGVyaWVuY2UgZm9yIHVzZXJzLiBodHRwczovL3N1cHBvcnQuZ29vZ2xlLmNvbS9hZHdvcmRzcG9saWN5L2Fuc3dlci8xMzE2NTQ4P2hsPWVuXG5cbiAgICAgICAgICBXZSBoYXZlIG5vdCBlbmFibGVkIEdvb2dsZSBBZFNlbnNlIG9uIG91ciBzaXRlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q2FsaWZvcm5pYSBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIENhbE9QUEEgaXMgdGhlIGZpcnN0IHN0YXRlIGxhdyBpbiB0aGUgbmF0aW9uIHRvIHJlcXVpcmUgY29tbWVyY2lhbFxuICAgICAgICAgIHdlYnNpdGVzIGFuZCBvbmxpbmUgc2VydmljZXMgdG8gcG9zdCBhIHByaXZhY3kgcG9saWN5LlxuICAgICAgICAgIFRoZSBsYXcmYXBvcztzIHJlYWNoIHN0cmV0Y2hlcyB3ZWxsIGJleW9uZCBDYWxpZm9ybmlhIHRvIHJlcXVpcmUgYW55IHBlcnNvbiBvciBjb21wYW55XG4gICAgICAgICAgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgKGFuZCBjb25jZWl2YWJseSB0aGUgd29ybGQpIHRoYXQgb3BlcmF0ZXMgd2Vic2l0ZXMgY29sbGVjdGluZ1xuICAgICAgICAgIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uIGZyb20gQ2FsaWZvcm5pYSBjb25zdW1lcnMgdG8gcG9zdCBhIGNvbnNwaWN1b3VzXG4gICAgICAgICAgcHJpdmFjeSBwb2xpY3kgb24gaXRzIHdlYnNpdGUgc3RhdGluZyBleGFjdGx5IHRoZSBpbmZvcm1hdGlvbiBiZWluZyBjb2xsZWN0ZWQgYW5kXG4gICAgICAgICAgdGhvc2UgaW5kaXZpZHVhbHMgb3IgY29tcGFuaWVzIHdpdGggd2hvbSBpdCBpcyBiZWluZyBzaGFyZWQuIC0gU2VlIG1vcmUgYXQ6XG4gICAgICAgICAgaHR0cDovL2NvbnN1bWVyY2FsLm9yZy9jYWxpZm9ybmlhLW9ubGluZS1wcml2YWN5LXByb3RlY3Rpb24tYWN0LWNhbG9wcGEvI3N0aGFzaC4wRmRSYlQ1MS5kcHVmXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5BY2NvcmRpbmcgdG8gQ2FsT1BQQSwgd2UgYWdyZWUgdG8gdGhlIGZvbGxvd2luZzo8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBVc2VycyBjYW4gdmlzaXQgb3VyIHNpdGUgYW5vbnltb3VzbHkuXG4gICAgICAgICAgVGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYSBsaW5rIHRvIGl0IGZyb20gb3VyIGhvbWUgcGFnZSBpbiB0aGUgaGVhZGVyLlxuICAgICAgICAgIE91ciBQcml2YWN5IFBvbGljeSBsaW5rIGluY2x1ZGVzIHRoZSB3b3JkICZhcG9zO1ByaXZhY3kmYXBvczsgYW5kIGNhbiBlYXNpbHlcbiAgICAgICAgICBiZSBmb3VuZCBvbiB0aGUgcGFnZSBzcGVjaWZpZWQgYWJvdmUuXG5cbiAgICAgICAgICBZb3Ugd2lsbCBiZSBub3RpZmllZCBvZiBhbnkgUHJpdmFjeSBQb2xpY3kgY2hhbmdlczpcbiAgICAgICAgICAgICAgICDigKIgT24gb3VyIFByaXZhY3kgUG9saWN5IFBhZ2VcbiAgICAgICAgICBDYW4gY2hhbmdlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb246XG4gICAgICAgICAgICAgICAg4oCiIFRocm91Z2ggb3VyIHdlYnNpdGVcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRvZXMgb3VyIHNpdGUgYWxsb3cgdGhpcmQtcGFydHkgYmVoYXZpb3JhbCB0cmFja2luZz88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJdCZhcG9zO3MgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCB3ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5DT1BQQSAoQ2hpbGRyZW4gT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2hlbiBpdCBjb21lcyB0byB0aGUgY29sbGVjdGlvbiBvZiBwZXJzb25hbCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuXG4gICAgICAgICAgdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQsIHRoZSBDaGlsZHJlbiZhcG9zO3MgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvblxuICAgICAgICAgIEFjdCAoQ09QUEEpIHB1dHMgcGFyZW50cyBpbiBjb250cm9sLiBUaGUgRmVkZXJhbCBUcmFkZSBDb21taXNzaW9uLCBVbml0ZWQgU3RhdGVzJmFwb3M7XG4gICAgICAgICAgY29uc3VtZXIgcHJvdGVjdGlvbiBhZ2VuY3ksIGVuZm9yY2VzIHRoZSBDT1BQQSBSdWxlLCB3aGljaCBzcGVsbHMgb3V0IHdoYXRcbiAgICAgICAgICBvcGVyYXRvcnMgb2Ygd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyBtdXN0IGRvIHRvIHByb3RlY3QgY2hpbGRyZW4mYXBvcztzXG4gICAgICAgICAgcHJpdmFjeSBhbmQgc2FmZXR5IG9ubGluZS5cblxuICAgICAgICAgIFdlIGRvIG5vdCBzcGVjaWZpY2FsbHkgbWFya2V0IHRvIGNoaWxkcmVuIHVuZGVyIHRoZSBhZ2Ugb2YgMTMgeWVhcnMgb2xkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXMgUHJpbmNpcGxlcyBmb3JtIHRoZSBiYWNrYm9uZSBvZiBwcml2YWN5XG4gICAgICAgICAgbGF3IGluIHRoZSBVbml0ZWQgU3RhdGVzIGFuZCB0aGUgY29uY2VwdHMgdGhleSBpbmNsdWRlIGhhdmUgcGxheWVkIGEgc2lnbmlmaWNhbnRcbiAgICAgICAgICByb2xlIGluIHRoZSBkZXZlbG9wbWVudCBvZiBkYXRhIHByb3RlY3Rpb24gbGF3cyBhcm91bmQgdGhlIGdsb2JlLiBVbmRlcnN0YW5kaW5nXG4gICAgICAgICAgdGhlIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2UgUHJpbmNpcGxlcyBhbmQgaG93IHRoZXkgc2hvdWxkIGJlIGltcGxlbWVudGVkIGlzXG4gICAgICAgICAgY3JpdGljYWwgdG8gY29tcGx5IHdpdGggdGhlIHZhcmlvdXMgcHJpdmFjeSBsYXdzIHRoYXQgcHJvdGVjdCBwZXJzb25hbCBpbmZvcm1hdGlvbi5cblxuICAgICAgICAgIEluIG9yZGVyIHRvIGJlIGluIGxpbmUgd2l0aCBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlcyB3ZSB3aWxsIHRha2UgdGhlXG4gICAgICAgICAgZm9sbG93aW5nIHJlc3BvbnNpdmUgYWN0aW9uLCBzaG91bGQgYSBkYXRhIGJyZWFjaCBvY2N1cjpcblxuICAgICAgICAgIFdlIHdpbGwgbm90aWZ5IHlvdSB2aWEgZW1haWwgd2l0aGluIDcgYnVzaW5lc3MgZGF5cy4gV2Ugd2lsbCBhbHNvXG4gICAgICAgICAgbm90aWZ5IHVzZXJzIHZpYSBhbiBpbi1zaXRlIG5vdGlmaWNhdGlvbiBvbiB0aGUgaG9tZSBwYWdlIHdpdGhpbiA3IGJ1c2luZXNzIGRheXMuXG5cbiAgICAgICAgICBXZSBhbHNvIGFncmVlIHRvIHRoZSBJbmRpdmlkdWFsIFJlZHJlc3MgUHJpbmNpcGxlIHdoaWNoIHJlcXVpcmVzIHRoYXQgaW5kaXZpZHVhbHNcbiAgICAgICAgICBoYXZlIHRoZSByaWdodCB0byBsZWdhbGx5IHB1cnN1ZSBlbmZvcmNlYWJsZSByaWdodHMgYWdhaW5zdCBkYXRhIGNvbGxlY3RvcnNcbiAgICAgICAgICBhbmQgcHJvY2Vzc29ycyB3aG8gZmFpbCB0byBhZGhlcmUgdG8gdGhlIGxhdy4gVGhpcyBwcmluY2lwbGUgcmVxdWlyZXMgbm90IG9ubHlcbiAgICAgICAgICB0aGF0IGluZGl2aWR1YWxzIGhhdmUgZW5mb3JjZWFibGUgcmlnaHRzIGFnYWluc3QgZGF0YSB1c2VycywgYnV0IGFsc28gdGhhdFxuICAgICAgICAgIGluZGl2aWR1YWxzIGhhdmUgcmVjb3Vyc2UgdG8gY291cnRzIG9yIGdvdmVybm1lbnQgYWdlbmNpZXMgdG8gaW52ZXN0aWdhdGVcbiAgICAgICAgICBhbmQvb3IgcHJvc2VjdXRlIG5vbi1jb21wbGlhbmNlIGJ5IGRhdGEgcHJvY2Vzc29ycy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICA8L29sPlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3ByaXZhY3lQb2xpY3kuanMiLCJpbXBvcnQgSW1wcmludCBmcm9tICcuL2ltcHJpbnQnO1xuXG5jb25zdCBJbXByaW50Q29udGFpbmVyID0gSW1wcmludDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IEltcHJpbnRDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbXByaW50Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSAnLi4vc2hhcmVkL3BhZ2VDb250ZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbXByaW50LnNjc3MnO1xuXG5jb25zdCBJbXByaW50ID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPEhlbG1ldD5cbiAgICAgIDx0aXRsZT5JbXByaW50PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDb250YWN0IGluZm9ybWF0aW9uIGZvciBvbmJvYXJkb3IuY29tLlwiIC8+XG4gICAgPC9IZWxtZXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbXByaW50Q29udGVudH0+XG4gICAgICA8aDE+SW1wcmludDwvaDE+XG4gICAgICA8ZGl2PkNvbXBhbnkgTmFtZTogVkFTVCBORVRXT1JLIExURDwvZGl2PlxuICAgICAgPGRpdj5DRU86IE1hcnRpbiBEYXdzb248L2Rpdj5cbiAgICAgIDxkaXY+QWRkcmVzczogMjYgQ2FsZGVyVmlldywgUmFzdHJpY2ssIEJyaWdob3VzZSwgSEQ2M0RRIFVuaXRlZCBLaW5nZG9tPC9kaXY+XG4gICAgICA8ZGl2PlRlbGVwaG9uZTogKyg0NCk3NDczNTkxMDk3PC9kaXY+XG4gICAgICA8ZGl2PkVtYWlsIGFkZHJlc3M6IHUxMzU2NzcwQGdtYWlsLmNvbTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wcmludDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJpbXByaW50Q29udGVudFwiOlwiQ29tcG9uZW50cy1mb290ZXItaW1wcmludF9faW1wcmludENvbnRlbnRcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzIH0gZnJvbSAncmVjb21wb3NlJztcblxuaW1wb3J0IEVycm9yUGFnZSBmcm9tICcuL2Vycm9yUGFnZSc7XG5cbmNvbnN0IGNyZWF0ZVByb3BzID0gKHsgc3RhdHVzLCBlcnJvciB9KSA9PiB7XG4gIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgY2FzZSA0MDQ6XG4gICAgICByZXR1cm4geyBlcnJvcjogJ1RoZSBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZC4nIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cbn07XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoUHJvcHMoY3JlYXRlUHJvcHMpLFxuKTtcblxuY29uc3QgRXJyb3JQYWdlQ29udGFpbmVyID0gZW5oYW5jZShFcnJvclBhZ2UpO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIHJlbmRlcjogKHsgcHJvcHMgfSkgPT4gcHJvcHMgJiYgKFxuICAgIDxFcnJvclBhZ2VDb250YWluZXJcbiAgICAgIHN0YXR1cz17cGFyc2VJbnQocHJvcHMucGFyYW1zLnN0YXR1cywgMTApfVxuICAgICAgZXJyb3I9e3Byb3BzLmxvY2F0aW9uLnN0YXRlLmVycm9yfVxuICAgIC8+XG4gICksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2VDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2VDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9lcnJvclBhZ2Uuc2Nzcyc7XG5cbmNvbnN0IEVycm9yUGFnZSA9ICh7IHN0YXR1cywgZXJyb3IgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yUGFnZX0+XG4gICAgPEhlbG1ldD5cbiAgICAgIDx0aXRsZT5FcnJvciB7c3RhdHVzfTwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXhcIiAvPlxuICAgIDwvSGVsbWV0PlxuICAgIDxoMT5FcnJvciB7c3RhdHVzfTwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+XG4gICAgICA8ZGl2PlxuICAgICAgICB7ZXJyb3J9XG4gICAgICA8L2Rpdj5cbiAgICAgIFdlIGhhdmUgYmVlbiBub3RpZmllZCBvZiB0aGUgZXJyb3Igwq9cXF8o44OEKV8vwq8uIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuRXJyb3JQYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6ICdBbiB1bmtub3duIGVycm9yIGhhcyBvY2N1cmVkLicsXG59O1xuXG5FcnJvclBhZ2UucHJvcFR5cGVzID0ge1xuICBzdGF0dXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJlcnJvclBhZ2VcIjpcIkNvbXBvbmVudHMtZXJyb3JQYWdlLWVycm9yUGFnZV9fZXJyb3JQYWdlXCIsXCJlcnJvclwiOlwiQ29tcG9uZW50cy1lcnJvclBhZ2UtZXJyb3JQYWdlX19lcnJvclwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFByaW1hcnlMYXlvdXQgZnJvbSAnLi9wcmltYXJ5TGF5b3V0JztcblxuY29uc3QgUHJpbWFyeUxheW91dENvbnRhaW5lciA9IFByaW1hcnlMYXlvdXQ7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBQcmltYXJ5TGF5b3V0Q29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWFyeUxheW91dENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3ByaW1hcnlMYXlvdXQuc2Nzcyc7XG5pbXBvcnQgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZnJvbSAnLi9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2Zvb3Rlci9mb290ZXInO1xuXG5jb25zdCBQcmltYXJ5TGF5b3V0ID0gKHtcbiAgY2hpbGRyZW4sXG59KSA9PiAoXG4gIDxQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSBjbGFzc05hbWU9e3N0eWxlcy5wcmltYXJ5TGF5b3V0fT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPEZvb3RlciAvPlxuICA8L1ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5PlxuKTtcblxuUHJpbWFyeUxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxufTtcblxuUHJpbWFyeUxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicHJpbWFyeUxheW91dFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fcHJpbWFyeUxheW91dFwiLFwid3JhcFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fd3JhcFwiLFwibWFpblwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fbWFpblwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnZm91bmQnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcmVmZXItc3RhdGVsZXNzLWZ1bmN0aW9uICovXG5jbGFzcyBQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vIGNvbXBvbmVudERpZENhdGNoKCkge1xuICAvLyAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9lcnJvci81MDAnKTtcbiAgLy8gfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogbnVsbCxcbn07XG5cblByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5LnByb3BUeXBlcyA9IHtcbiAgLy8gcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoUm91dGVyLFxuKShQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnZm91bmQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLnNjc3MnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICA8TGluayB0bz1cIi90ZXJtc0FuZENvbmRpdGlvbnNcIj50ZXJtcyBhbmQgY29uZGl0aW9uczwvTGluaz5cbiAgICA8TGluayB0bz1cIi9wcml2YWN5UG9saWN5XCI+cHJpdmFjeSBwb2xpY3k8L0xpbms+XG4gICAgPExpbmsgdG89XCIvaW1wcmludFwiPmltcHJpbnQ8L0xpbms+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZm9vdGVyXCI6XCJDb21wb25lbnRzLWZvb3Rlci1mb290ZXJfX2Zvb3RlclwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2ODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gJy4vbGFuZGluZ1BhZ2UnO1xuXG5jb25zdCBMYW5kaW5nUGFnZUNvbnRhaW5lciA9IExhbmRpbmdQYWdlO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogTGFuZGluZ1BhZ2VDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZUNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGFuZGluZ1BhZ2UvbGFuZGluZ1BhZ2VDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU3Vic2NyaWJlTWFpbGluZ0xpc3QgZnJvbSAnLi4vc2hhcmVkL2Zvcm0vc3Vic2NyaWJlTWFpbGluZ0xpc3RDb250YWluZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xhbmRpbmdQYWdlLnNjc3MnO1xuXG5jb25zdCBMYW5kaW5nUGFnZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5kaW5nUGFnZX0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXB0dXJlfT5cbiAgICAgIE1ha2UgdGhlIHByb2Nlc3Mgb2Ygb25ib2FyZGluZyB5b3VyIG5ldyBkZXZlbG9wZXJzIGVhc3kuXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmpvaW5Db250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5qb2lufT5cbiAgICAgICAgSm9pbiBvdXIgYmV0YSBzaWduIHVwIGxpc3QgYW5kIHdlJmFwb3M7bGwgZ2l2ZSB5b3VyIHRlYW0gYSA8c3Bhbj5mcmVlIHNpeHRoIG1vbnRoIHN1YnNjcmlwdGlvbiE8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPFN1YnNjcmliZU1haWxpbmdMaXN0IC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29taW5nfT5Db21pbmcgdGhpcyBBdWd1c3QuPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xhbmRpbmdQYWdlL2xhbmRpbmdQYWdlLmpzIiwiaW1wb3J0IHsgY29tcG9zZSwgd2l0aEhhbmRsZXJzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IHJlZHV4Rm9ybSwgU3VibWlzc2lvbkVycm9yIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmltcG9ydCBTdWJzY3JpYmVNYWlsaW5nTGlzdCBmcm9tICcuL3N1YnNjcmliZU1haWxpbmdMaXN0JztcbmltcG9ydCBzdWJzY3JpYmVNYWlsaW5nTGlzdE11dGF0aW9uIGZyb20gJy4vc3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvbic7XG5cbmNvbnN0IGhhbmRsZXJzID0ge1xuICBvblN1Ym1pdDogKCkgPT4gaW5wdXQgPT4gc3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvbihpbnB1dClcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB0aHJvdyBuZXcgU3VibWlzc2lvbkVycm9yKGVycm9yKTtcbiAgICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhIYW5kbGVycyhoYW5kbGVycyksXG4gIHJlZHV4Rm9ybSh7XG4gICAgZm9ybTogJ3N1YnNjcmliZU1haWxpbmdMaXN0JyxcbiAgfSksXG4pKFN1YnNjcmliZU1haWxpbmdMaXN0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2Zvcm0vc3Vic2NyaWJlTWFpbGluZ0xpc3RDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEludmlzaWJsZVJlY3BhdGNoYSBmcm9tICcuLi9pbnB1dHMvaW52aXNpYmxlUmVjYXB0Y2hhQ29udGFpbmVyJztcbmltcG9ydCBGaWVsZElucHV0IGZyb20gJy4uL2lucHV0cy9maWVsZElucHV0Q29udGFpbmVyJztcbmltcG9ydCBGb3JtU3Bpbm5lckJ1dHRvbiBmcm9tICcuLi9idXR0b24vZm9ybVNwaW5uZXJCdXR0b25Db250YWluZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N1YnNjcmliZU1haWxpbmdMaXN0LnNjc3MnO1xuXG5jb25zdCBTdWJzY3JpYmVNYWlsaW5nTGlzdCA9ICh7XG4gIGhhbmRsZVN1Ym1pdCxcbiAgZm9ybSxcbn0pID0+IChcbiAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gYWN0aW9uPVwiXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbH0+XG4gICAgICA8RmllbGRJbnB1dFxuICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIHZhbGlkYXRpb25zPXtbJ2VtYWlsJ119XG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPEZvcm1TcGlubmVyQnV0dG9uIGZvcm1OYW1lPXtmb3JtfT5cbiAgICAgICAgSk9JTiBMSVNUXG4gICAgICA8L0Zvcm1TcGlubmVyQnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxJbnZpc2libGVSZWNwYXRjaGFcbiAgICAgIG5hbWU9XCJyZWNhcHRjaGFcIlxuICAgICAgc2l0ZWtleT17cHJvY2Vzcy5lbnYuUkVDQVBUQ0hBX1NJVEVfS0VZfVxuICAgIC8+XG4gIDwvZm9ybT5cbik7XG5cblN1YnNjcmliZU1haWxpbmdMaXN0LnByb3BUeXBlcyA9IHtcbiAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBmb3JtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWJzY3JpYmVNYWlsaW5nTGlzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2Zvcm0vc3Vic2NyaWJlTWFpbGluZ0xpc3QuanMiLCJpbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHMsIHdpdGhIYW5kbGVycyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5pbXBvcnQgY3JlYXRlRmllbGRWYWxpZGF0b3IgZnJvbSAnLi9jcmVhdGVGaWVsZFZhbGlkYXRvcic7XG5pbXBvcnQgSW52aXNpYmxlUmVjcGF0Y2hhIGZyb20gJy4vaW52aXNpYmxlUmVjYXB0Y2hhJztcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFByb3BzKCgpID0+ICh7IGNvbXBvbmVudDogSW52aXNpYmxlUmVjcGF0Y2hhIH0pKSxcbiAgd2l0aEhhbmRsZXJzKHsgdmFsaWRhdGU6IGNyZWF0ZUZpZWxkVmFsaWRhdG9yIH0pLFxuKShGaWVsZCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvaW52aXNpYmxlUmVjYXB0Y2hhQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVjYXB0Y2hhIGZyb20gJ3JlYWN0LWdvb2dsZS1yZWNhcHRjaGEnO1xuXG5jbGFzcyBJbnZpc2libGVSZWNhcHRjaGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgLy8gIHRoaXMucmVjYXB0Y2hhLmV4ZWN1dGUoKTtcbiAgfVxuICBzZXRSZWNhcHRjaGEgPSAoZSkgPT4ge1xuICAgIHRoaXMucmVjYXB0Y2hhID0gZTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWNhcHRjaGFcbiAgICAgICAgcmVmPXt0aGlzLnNldFJlY2FwdGNoYX1cbiAgICAgICAgc2l6ZT1cImludmlzaWJsZVwiXG4gICAgICAgIHNpdGVrZXk9e3Byb2Nlc3MuZW52LlJFQ0FQVENIQV9TSVRFX0tFWX1cbiAgICAgICAgb25DaGFuZ2U9e3Jlc3BvbnNlID0+IHRoaXMucHJvcHMuaW5wdXQub25DaGFuZ2UocmVzcG9uc2UpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbkludmlzaWJsZVJlY2FwdGNoYS5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9KS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW52aXNpYmxlUmVjYXB0Y2hhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRzL2ludmlzaWJsZVJlY2FwdGNoYS5qcyIsImltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wcywgd2l0aEhhbmRsZXJzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmltcG9ydCBjcmVhdGVGaWVsZFZhbGlkYXRvciBmcm9tICcuL2NyZWF0ZUZpZWxkVmFsaWRhdG9yJztcbmltcG9ydCBGaWVsZElucHV0IGZyb20gJy4vZmllbGRJbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhIYW5kbGVycyh7IHZhbGlkYXRlOiBjcmVhdGVGaWVsZFZhbGlkYXRvciB9KSxcbiAgd2l0aFByb3BzKCgpID0+ICh7IGNvbXBvbmVudDogRmllbGRJbnB1dCB9KSksXG4pKEZpZWxkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2lucHV0cy9maWVsZElucHV0Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBWYWxpZGF0aW9uRmllbGQgZnJvbSAnLi92YWxpZGF0aW9uRmllbGQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ZpZWxkSW5wdXQuc2Nzcyc7XG5cbmNvbnN0IEZpZWxkSW5wdXQgPSAoe1xuICBpbnB1dCxcbiAgbWV0YTogeyBmb3JtLCB0b3VjaGVkLCBlcnJvciA9IFtdIH0sXG4gIGlkLFxuICAuLi5wcm9wc1xufSkgPT4gKFxuICA8VmFsaWRhdGlvbkZpZWxkIHRvdWNoZWQ9e3RvdWNoZWR9IGVycm9yPXtlcnJvcn0+XG4gICAgPGlucHV0XG4gICAgICB7Li4uaW5wdXR9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgIGlkPXtgJHtmb3JtfV8ke2lkfWB9XG4gICAgLz5cbiAgPC9WYWxpZGF0aW9uRmllbGQ+XG4pO1xuXG5GaWVsZElucHV0LnByb3BUeXBlcyA9IHtcbiAgaW5wdXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KS5pc1JlcXVpcmVkLFxuICBtZXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGZvcm06IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0b3VjaGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCksXG4gICAgXSksXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkSW5wdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvZmllbGRJbnB1dC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBWYWxpZGF0aW9uRXJyb3JzIGZyb20gJy4uL1ZhbGlkYXRpb24vdmFsaWRhdGlvbkVycm9ycyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdmFsaWRhdGlvbkZpZWxkLnNjc3MnO1xuXG5jb25zdCBWYWxpZGF0aW9uRmllbGQgPSAoe1xuICBjaGlsZHJlbixcbiAgZXJyb3IsXG4gIHRvdWNoZWQsXG4gIHNob3dFcnJvcixcbiAgY2xhc3NOYW1lLFxufSkgPT4ge1xuICBsZXQgZXJyb3JzID0gZXJyb3I7XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGVycm9yKSkge1xuICAgIGVycm9ycyA9IFtlcnJvcl07XG4gIH1cblxuICBjb25zdCBoYXNFcnJvciA9IGVycm9ycy5sZW5ndGggPiAwO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NOYW1lLCAodG91Y2hlZCAmJiBoYXNFcnJvcikgJiYgc3R5bGVzLmhhc0Vycm9yKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZhbGlkYXRpb25GaWVsZH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAge3RvdWNoZWQgJiYgc2hvd0Vycm9yID8gPFZhbGlkYXRpb25FcnJvcnMgZXJyb3JzPXtlcnJvcnN9IC8+IDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblZhbGlkYXRpb25GaWVsZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGVycm9yOiBudWxsLFxuICBjbGFzc05hbWU6IG51bGwsXG4gIHNob3dFcnJvcjogdHJ1ZSxcbn07XG5cblZhbGlkYXRpb25GaWVsZC5wcm9wVHlwZXMgPSB7XG4gIHNob3dFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICB0b3VjaGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCksXG4gIF0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0aW9uRmllbGQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvdmFsaWRhdGlvbkZpZWxkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBWYWxpZGF0aW9uRXJyb3IgZnJvbSAnLi92YWxpZGF0aW9uRXJyb3InO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3ZhbGlkYXRpb25FcnJvcnMuc2Nzcyc7XG5cbmNvbnN0IFZhbGlkYXRpb25FcnJvcnMgPSAoeyBlcnJvcnMgfSkgPT4gKFxuICBlcnJvcnMubGVuZ3RoID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JzfT5cbiAgICAgIHtlcnJvcnMubWFwKGVycm9yID0+IDxWYWxpZGF0aW9uRXJyb3Iga2V5PXtlcnJvcn0gZXJyb3I9e2Vycm9yfSAvPil9XG4gICAgPC9kaXY+XG4gICkgOiBudWxsXG4pO1xuXG5WYWxpZGF0aW9uRXJyb3JzLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3JzOiBbXSxcbn07XG5cblZhbGlkYXRpb25FcnJvcnMucHJvcFR5cGVzID0ge1xuICBlcnJvcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0aW9uRXJyb3JzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvVmFsaWRhdGlvbi92YWxpZGF0aW9uRXJyb3JzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi92YWxpZGF0aW9uRXJyb3Iuc2Nzcyc7XG5cbmNvbnN0IFZhbGlkYXRpb25FcnJvciA9ICh7IGVycm9yIH0pID0+IChcbiAgZXJyb3IgJiYgKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT5cbiAgICAgIHtlcnJvcn1cbiAgICA8L3NwYW4+XG4gIClcbik7XG5cblZhbGlkYXRpb25FcnJvci5kZWZhdWx0UHJvcHMgPSB7XG4gIGVycm9yOiBudWxsLFxufTtcblxuVmFsaWRhdGlvbkVycm9yLnByb3BUeXBlcyA9IHtcbiAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0aW9uRXJyb3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9WYWxpZGF0aW9uL3ZhbGlkYXRpb25FcnJvci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImVycm9yXCI6XCJDb21wb25lbnRzLXNoYXJlZC1WYWxpZGF0aW9uLXZhbGlkYXRpb25FcnJvcl9fZXJyb3JcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9WYWxpZGF0aW9uL3ZhbGlkYXRpb25FcnJvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZXJyb3JzXCI6XCJDb21wb25lbnRzLXNoYXJlZC1WYWxpZGF0aW9uLXZhbGlkYXRpb25FcnJvcnNfX2Vycm9yc1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL1ZhbGlkYXRpb24vdmFsaWRhdGlvbkVycm9ycy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiaGFzRXJyb3JcIjpcIkNvbXBvbmVudHMtc2hhcmVkLWlucHV0cy12YWxpZGF0aW9uRmllbGRfX2hhc0Vycm9yXCIsXCJ2YWxpZGF0aW9uRmllbGRcIjpcIkNvbXBvbmVudHMtc2hhcmVkLWlucHV0cy12YWxpZGF0aW9uRmllbGRfX3ZhbGlkYXRpb25GaWVsZFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2lucHV0cy92YWxpZGF0aW9uRmllbGQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImlucHV0XCI6XCJDb21wb25lbnRzLXNoYXJlZC1pbnB1dHMtZmllbGRJbnB1dF9faW5wdXRcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dHMvZmllbGRJbnB1dC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb21wb3NlLCBzZXRQcm9wVHlwZXMsIG1hcFByb3BzIH0gZnJvbSAncmVjb21wb3NlJztcblxuaW1wb3J0IEJ1dHRvbldpdGhTcGlubmVyIGZyb20gJy4vc3Bpbm5lckJ1dHRvbkNvbnRhaW5lcic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGZvcm0gfSwgeyBmb3JtTmFtZSB9KSA9PiAoe1xuICBpc0xvYWRpbmc6IGZvcm1bZm9ybU5hbWVdLnN1Ym1pdHRpbmcsXG59KTtcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBmb3JtTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IHByb3BzTWFwcGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmb3JtTmFtZSxcbiAgICBkaXNwYXRjaCxcbiAgICAuLi5uZXdQcm9wc1xuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIG5ld1Byb3BzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgc2V0UHJvcFR5cGVzKHByb3BUeXBlcyksXG4gIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSxcbiAgbWFwUHJvcHMocHJvcHNNYXBwZXIpLFxuKShCdXR0b25XaXRoU3Bpbm5lcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9idXR0b24vZm9ybVNwaW5uZXJCdXR0b25Db250YWluZXIuanMiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29tcG9zZSwgc2V0UHJvcFR5cGVzLCBicmFuY2gsIHJlbmRlckNvbXBvbmVudCwgbWFwUHJvcHMgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBTcGlubmVyQnV0dG9uIGZyb20gJy4vc3Bpbm5lckJ1dHRvbic7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgaXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmNvbnN0IHByb3BzTWFwcGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpc0xvYWRpbmcsXG4gICAgLi4ubmV3UHJvcHNcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiBuZXdQcm9wcztcbn07XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICBzZXRQcm9wVHlwZXMocHJvcFR5cGVzKSxcbiAgbWFwUHJvcHMocHJvcHNNYXBwZXIpLFxuICBicmFuY2goXG4gICAgcHJvcHMgPT4gIXByb3BzLmlzTG9hZGluZyxcbiAgICByZW5kZXJDb21wb25lbnQoQnV0dG9uKSxcbiAgKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2UoU3Bpbm5lckJ1dHRvbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9idXR0b24vc3Bpbm5lckJ1dHRvbkNvbnRhaW5lci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImJ1dHRvblwiOlwiQ29tcG9uZW50cy1zaGFyZWQtYnV0dG9uLWJ1dHRvbl9fYnV0dG9uXCIsXCJwcmltYXJ5XCI6XCJDb21wb25lbnRzLXNoYXJlZC1idXR0b24tYnV0dG9uX19wcmltYXJ5XCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL2J1dHRvbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NwaW5uZXJCdXR0b24uc2Nzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBTcGlubmVySWNvbiBmcm9tICcuLi8uLi9pY29ucy9zcGlubmVyJztcblxuY29uc3QgU3Bpbm5lckJ1dHRvbiA9ICh7IC4uLnByb3BzIH0pID0+IChcbiAgPEJ1dHRvbiB7Li4ucHJvcHN9PlxuICAgIDxTcGlubmVySWNvbiBjbGFzc05hbWU9e3N0eWxlcy5zcGlubmVySWNvbn0gLz5cbiAgPC9CdXR0b24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyQnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL3NwaW5uZXJCdXR0b24uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJzcGlubmVySWNvblwiOlwiQ29tcG9uZW50cy1zaGFyZWQtYnV0dG9uLXNwaW5uZXJCdXR0b25fX3NwaW5uZXJJY29uXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL3NwaW5uZXJCdXR0b24uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBTcGlubmVySWNvbiA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucHJvcHN9IHdpZHRoPVwiODBweFwiIGhlaWdodD1cIjgwcHhcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cbiAgICA8Y2lyY2xlIGN4PVwiODRcIiBjeT1cIjUwXCIgcj1cIjEuNDM0NjRcIiBmaWxsPVwiIzU1YWNlZVwiPlxuICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiB2YWx1ZXM9XCI4OzA7MDswOzBcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBkdXI9XCIxLjdzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgYmVnaW49XCIwc1wiIC8+XG4gICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiB2YWx1ZXM9XCI4NDs4NDs4NDs4NDs4NFwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBjYWxjTW9kZT1cInNwbGluZVwiIGR1cj1cIjEuN3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBiZWdpbj1cIjBzXCIgLz5cbiAgICA8L2NpcmNsZT5cbiAgICA8Y2lyY2xlIGN4PVwiNzcuOTAyOFwiIGN5PVwiNTBcIiByPVwiOFwiIGZpbGw9XCIjMTU3YmY4XCI+XG4gICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIHZhbHVlcz1cIjA7ODs4Ozg7MFwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBjYWxjTW9kZT1cInNwbGluZVwiIGR1cj1cIjEuN3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBiZWdpbj1cIi0wLjg1c1wiIC8+XG4gICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiY3hcIiB2YWx1ZXM9XCIxNjsxNjs1MDs4NDs4NFwiIGtleVRpbWVzPVwiMDswLjI1OzAuNTswLjc1OzFcIiBrZXlTcGxpbmVzPVwiMCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDE7MCAwLjUgMC41IDFcIiBjYWxjTW9kZT1cInNwbGluZVwiIGR1cj1cIjEuN3NcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBiZWdpbj1cIi0wLjg1c1wiIC8+XG4gICAgPC9jaXJjbGU+XG4gICAgPGNpcmNsZSBjeD1cIjQzLjkwMjhcIiBjeT1cIjUwXCIgcj1cIjhcIiBmaWxsPVwiIzU1YWNlZVwiPlxuICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiB2YWx1ZXM9XCIwOzg7ODs4OzBcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBkdXI9XCIxLjdzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgYmVnaW49XCItMC40MjVzXCIgLz5cbiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJjeFwiIHZhbHVlcz1cIjE2OzE2OzUwOzg0Ozg0XCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGNhbGNNb2RlPVwic3BsaW5lXCIgZHVyPVwiMS43c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGJlZ2luPVwiLTAuNDI1c1wiIC8+XG4gICAgPC9jaXJjbGU+XG4gICAgPGNpcmNsZSBjeD1cIjE2XCIgY3k9XCI1MFwiIHI9XCI2LjU2NTM2XCIgZmlsbD1cIiMxNTdiZjhcIj5cbiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgdmFsdWVzPVwiMDs4Ozg7ODswXCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGNhbGNNb2RlPVwic3BsaW5lXCIgZHVyPVwiMS43c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGJlZ2luPVwiMHNcIiAvPlxuICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgdmFsdWVzPVwiMTY7MTY7NTA7ODQ7ODRcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBkdXI9XCIxLjdzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgYmVnaW49XCIwc1wiIC8+XG4gICAgPC9jaXJjbGU+XG4gICAgPGNpcmNsZSBjeD1cIjE2XCIgY3k9XCI1MFwiIHI9XCIwXCIgZmlsbD1cIiM1NWFjZWVcIj5cbiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgdmFsdWVzPVwiMDswOzg7ODs4XCIga2V5VGltZXM9XCIwOzAuMjU7MC41OzAuNzU7MVwiIGtleVNwbGluZXM9XCIwIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMTswIDAuNSAwLjUgMVwiIGNhbGNNb2RlPVwic3BsaW5lXCIgZHVyPVwiMS43c1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIGJlZ2luPVwiMHNcIiAvPlxuICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cImN4XCIgdmFsdWVzPVwiMTY7MTY7MTY7NTA7ODRcIiBrZXlUaW1lcz1cIjA7MC4yNTswLjU7MC43NTsxXCIga2V5U3BsaW5lcz1cIjAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxOzAgMC41IDAuNSAxXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBkdXI9XCIxLjdzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgYmVnaW49XCIwc1wiIC8+XG4gICAgPC9jaXJjbGU+XG4gIDwvc3ZnPlxuKTtcblxuU3Bpbm5lckljb24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IG51bGwsXG59O1xuXG5TcGlubmVySWNvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9pY29ucy9zcGlubmVyLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZW1haWxcIjpcIkNvbXBvbmVudHMtc2hhcmVkLWZvcm0tc3Vic2NyaWJlTWFpbGluZ0xpc3RfX2VtYWlsXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvZm9ybS9zdWJzY3JpYmVNYWlsaW5nTGlzdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LXJlbGF5JztcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5cbmNvbnN0IG11dGF0aW9uID0gZ3JhcGhxbGBcbiAgbXV0YXRpb24gc3Vic2NyaWJlTWFpbGluZ0xpc3RNdXRhdGlvbihcbiAgICAkaW5wdXQ6IFN1YnNjcmliZU1haWxpbmdMaXN0SW5wdXQhXG4gICkge1xuICAgIHN1YnNjcmliZU1haWxpbmdMaXN0KGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIGNsaWVudE11dGF0aW9uSWRcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGVtYWlsLCByZWNhcHRjaGEgfSkgPT4ge1xuICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgaW5wdXQ6IHtcbiAgICAgIGVtYWlsLFxuICAgICAgcmVjYXB0Y2hhLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZU11dGF0aW9uKFxuICAgIG11dGF0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9mb3JtL3N1YnNjcmliZU1haWxpbmdMaXN0TXV0YXRpb24uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJsYW5kaW5nUGFnZVwiOlwiQ29tcG9uZW50cy1sYW5kaW5nUGFnZS1sYW5kaW5nUGFnZV9fbGFuZGluZ1BhZ2VcIixcImNhcHR1cmVcIjpcIkNvbXBvbmVudHMtbGFuZGluZ1BhZ2UtbGFuZGluZ1BhZ2VfX2NhcHR1cmVcIixcImpvaW5Db250YWluZXJcIjpcIkNvbXBvbmVudHMtbGFuZGluZ1BhZ2UtbGFuZGluZ1BhZ2VfX2pvaW5Db250YWluZXJcIixcImpvaW5cIjpcIkNvbXBvbmVudHMtbGFuZGluZ1BhZ2UtbGFuZGluZ1BhZ2VfX2pvaW5cIixcImNvbWluZ1wiOlwiQ29tcG9uZW50cy1sYW5kaW5nUGFnZS1sYW5kaW5nUGFnZV9fY29taW5nXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9sYW5kaW5nUGFnZS9sYW5kaW5nUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtcbiAgRW52aXJvbm1lbnQsXG4gIE5ldHdvcmssXG4gIFJlY29yZFNvdXJjZSxcbiAgU3RvcmUsXG59IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuaW1wb3J0IHsgc2V0RW52aXJvbWVudCB9IGZyb20gJ3JlbGF5LWNvbXBvc2UnO1xuXG5jb25zdCBmZXRjaFF1ZXJ5ID0gKG9wZXJhdGlvbiwgdmFyaWFibGVzKSA9PlxuICBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcXVlcnk6IG9wZXJhdGlvbi50ZXh0LFxuICAgICAgdmFyaWFibGVzLFxuICAgIH0pLFxuICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlbGF5L2lzc3Vlcy8xODE2XG4gICAgICBpZiAoanNvbi5lcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGpzb24uZXJyb3JzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShqc29uKTtcbiAgICB9KTtcblxuY29uc3QgbmV0d29yayA9IE5ldHdvcmsuY3JlYXRlKGZldGNoUXVlcnkpO1xuY29uc3Qgc291cmNlID0gbmV3IFJlY29yZFNvdXJjZSgpO1xuY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoc291cmNlKTtcbmNvbnN0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHtcbiAgbmV0d29yayxcbiAgc3RvcmUsXG59KTtcblxuc2V0RW52aXJvbWVudChlbnZpcm9ubWVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVudmlyb25tZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9hcHAvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9