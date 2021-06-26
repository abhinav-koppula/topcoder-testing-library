"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
exports.BrowserHelper = {
    /**
     * opens the given url in the browser
     * @param {String} url
     * @returns {Promise<any>}
     */
    open: function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.get(url)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Set Browser ignoreSynchronization value
     */
    setIgnoreSync: function (bool) {
        protractor_1.browser.ignoreSynchronization = bool;
    },
    /**
     * restart the browser
     * @returns {Promise<any>}
     */
    restart: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.restart()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * close the browser
     * @returns {Promise<void>}
     */
    close: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * close tab at a particular position
     * @param tabNumber - tab which needs to be closed
     * @param windowHandles - all window handles available
     */
    closeTab: function (tabNumber, windowHandles) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.switchToWindow(windowHandles[tabNumber])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.driver.close()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.switchToWindow(windowHandles[0])];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * maximize
     * @returns {Promise<void>}
     */
    maximize: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.driver.manage().window().maximize()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * implicitly wait
     * @param {number} sec
     * @returns {Promise<void>}
     */
    implicitlyWait: function (sec) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.manage().timeouts().implicitlyWait(sec)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Sleep
     * @param {number} msec
     * @returns {Promise<void>}
     */
    sleep: function (msec) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(msec)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * initialize the browser
     * @returns {Promise<void>}
     */
    initialize: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.BrowserHelper.restart()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, exports.BrowserHelper.maximize()];
                    case 2:
                        _a.sent();
                        exports.BrowserHelper.setIgnoreSync(true); // This is set  to false when accessing Non Angular Pages.
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Get Title
     * @returns {Promise<string>}
     */
    getTitle: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, protractor_1.browser.getTitle()];
            });
        });
    },
    /**
     * Get Current URL
     * @returns {Promise<string>}
     */
    getCurrentUrl: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, protractor_1.browser.getCurrentUrl()];
            });
        });
    },
    /**
     * Get All Window Handles
     * @returns {Promise<string[]>}
     */
    getAllWindowHandles: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, protractor_1.browser.getAllWindowHandles()];
            });
        });
    },
    /**
     * Switch Window
     * @param {Window} window
     * @returns {Promise<void>}
     */
    switchToWindow: function (window) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.switchTo().window(window)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Refresh
     * @returns {Promise<void>}
     */
    refresh: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.driver.navigate().refresh()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Moves the mouse to the element location
     * @param {TcElementImpl} tcElement
     */
    mouseMove: function (tcElement) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.actions().mouseMove(tcElement.getElement()).perform()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the element becomes visible
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilVisibilityOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.visibilityOf(tcElement.getElement()); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the element becomes invisible
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilInVisibilityOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () {
                            return protractor_1.protractor.ExpectedConditions.invisibilityOf(tcElement.getElement());
                        }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the element is present
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilPresenceOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.presenceOf(tcElement.getElement()); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the element is clickable
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilClickableOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () {
                            return protractor_1.protractor.ExpectedConditions.elementToBeClickable(tcElement.getElement());
                        }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Waits until alert is displayed
     * @param {number} timeout
     * @param {string} message
     */
    waitUntilAlertIsPresent: function (timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.alertIsPresent(); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the given text to be present in the element
     * @param {TcElementImpl} tcElement
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilTextToBePresentInElement: function (tcElement, text, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () {
                            return protractor_1.protractor.ExpectedConditions.textToBePresentInElement(tcElement.getElement(), text);
                        }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the text to be present in elementValue
     * @param {TcElementImpl} tcElement
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilTextToBePresentInElementValue: function (tcElement, text, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () {
                            return protractor_1.protractor.ExpectedConditions.textToBePresentInElementValue(tcElement.getElement(), text);
                        }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the title of page contains
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilTitleContains: function (title, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.titleContains(title); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the title of page is exactly as the given title
     * @param {string} title
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilTitleIs: function (title, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.titleIs(title); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the url contains the given text
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilUrlContains: function (text, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.urlContains(text); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the url is exactly equal to given text
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilUrlIs: function (text, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.urlIs(text); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the element is not present in DOM
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilStalenessOf: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () { return protractor_1.protractor.ExpectedConditions.stalenessOf(tcElement.getElement()); }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the element is selected
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilElementToBeSelected: function (tcElement, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitUntil(function () {
                            return protractor_1.protractor.ExpectedConditions.elementToBeSelected(tcElement.getElement());
                        }, timeout, message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Wait until the function applied
     * @param {function} func
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntil: function (func, timeout, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(timeout && message)) return [3 /*break*/, 2];
                        return [4 /*yield*/, protractor_1.browser.wait(func(), timeout, message)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!timeout) return [3 /*break*/, 4];
                        return [4 /*yield*/, protractor_1.browser.wait(func(), timeout)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, protractor_1.browser.wait(func())];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    },
    /**
     * Executes the given script with the provided arguments
     * @param {string} script
     * @param {TcElementImpl} tcElement
     */
    executeScript: function (script, tcElement) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, protractor_1.browser.executeScript(script, tcElement.element.getWebElement())];
            });
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvYnJvd3Nlci1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFpRDtBQUdwQyxRQUFBLGFBQWEsR0FBRztJQUMzQjs7OztPQUlHO0lBQ0csSUFBSSxFQUFWLFVBQVcsR0FBRzs7Ozs0QkFDWixxQkFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQTs7d0JBQXRCLFNBQXNCLENBQUM7Ozs7O0tBQ3hCO0lBRUQ7O09BRUc7SUFDSCxhQUFhLEVBQWIsVUFBYyxJQUFhO1FBQ3pCLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7O09BR0c7SUFDRyxPQUFPLEVBQWI7Ozs7NEJBQ0UscUJBQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQXZCLFNBQXVCLENBQUM7Ozs7O0tBQ3pCO0lBRUQ7OztPQUdHO0lBQ0csS0FBSyxFQUFYOzs7OzRCQUNFLHFCQUFNLG9CQUFPLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFyQixTQUFxQixDQUFDOzs7OztLQUN2QjtJQUVEOzs7O09BSUc7SUFDRyxRQUFRLEVBQWQsVUFBZSxTQUFpQixFQUFFLGFBQXVCOzs7OzRCQUN2RCxxQkFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFBOzt3QkFBbkQsU0FBbUQsQ0FBQzt3QkFDcEQscUJBQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUE1QixTQUE0QixDQUFDO3dCQUM3QixxQkFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBM0MsU0FBMkMsQ0FBQzs7Ozs7S0FDN0M7SUFFRDs7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