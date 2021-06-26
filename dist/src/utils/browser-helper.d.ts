import { TcElementImpl } from "../tc-element-impl";
export declare const BrowserHelper: {
    /**
     * opens the given url in the browser
     * @param {String} url
     * @returns {Promise<any>}
     */
    open(url: any): Promise<any>;
    /**
     * Set Browser ignoreSynchronization value
     */
    setIgnoreSync(bool: boolean): void;
    /**
     * restart the browser
     * @returns {Promise<any>}
     */
    restart(): Promise<any>;
    /**
     * close the browser
     * @returns {Promise<void>}
     */
    close(): Promise<void>;
    /**
     * close tab at a particular position
     * @param tabNumber - tab which needs to be closed
     * @param windowHandles - all window handles available
     */
    closeTab(tabNumber: number, windowHandles: string[]): Promise<void>;
    /**
     * maximize
     * @returns {Promise<void>}
     */
    maximize(): Promise<void>;
    /**
     * implicitly wait
     * @param {number} sec
     * @returns {Promise<void>}
     */
    implicitlyWait(sec: any): Promise<void>;
    /**
     * Sleep
     * @param {number} msec
     * @returns {Promise<void>}
     */
    sleep(msec: any): Promise<void>;
    /**
     * initialize the browser
     * @returns {Promise<void>}
     */
    initialize(): Promise<void>;
    /**
     * Get Title
     * @returns {Promise<string>}
     */
    getTitle(): Promise<string>;
    /**
     * Get Current URL
     * @returns {Promise<string>}
     */
    getCurrentUrl(): Promise<string>;
    /**
     * Get All Window Handles
     * @returns {Promise<string[]>}
     */
    getAllWindowHandles(): Promise<string[]>;
    /**
     * Switch Window
     * @param {Window} window
     * @returns {Promise<void>}
     */
    switchToWindow(window: any): Promise<void>;
    /**
     * Refresh
     * @returns {Promise<void>}
     */
    refresh(): Promise<void>;
    /**
     * Moves the mouse to the element location
     * @param {TcElementImpl} tcElement
     */
    mouseMove(tcElement: TcElementImpl): Promise<void>;
    /**
     * Wait until the element becomes visible
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilVisibilityOf(tcElement: TcElementImpl, timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the element becomes invisible
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilInVisibilityOf(tcElement: TcElementImpl, timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the element is present
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilPresenceOf(tcElement: TcElementImpl, timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the element is clickable
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilClickableOf(tcElement: TcElementImpl, timeout?: number, message?: string): Promise<void>;
    /**
     * Waits until alert is displayed
     * @param {number} timeout
     * @param {string} message
     */
    waitUntilAlertIsPresent(timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the given text to be present in the element
     * @param {TcElementImpl} tcElement
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilTextToBePresentInElement(tcElement: TcElementImpl, text: string, timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the text to be present in elementValue
     * @param {TcElementImpl} tcElement
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilTextToBePresentInElementValue(tcElement: TcElementImpl, text: string, timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the title of page contains
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilTitleContains(title: string, timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the title of page is exactly as the given title
     * @param {string} title
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilTitleIs(title: string, timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the url contains the given text
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilUrlContains(text: string, timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the url is exactly equal to given text
     * @param {string} text
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilUrlIs(text: string, timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the element is not present in DOM
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilStalenessOf(tcElement: TcElementImpl, timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the element is selected
     * @param {TcElementImpl} tcElement
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntilElementToBeSelected(tcElement: TcElementImpl, timeout?: number, message?: string): Promise<void>;
    /**
     * Wait until the function applied
     * @param {function} func
     * @param {number} timeout
     * @param  {string} message
     */
    waitUntil(func: () => any, timeout?: number, message?: string): Promise<void>;
    /**
     * Executes the given script with the provided arguments
     * @param {string} script
     * @param {TcElementImpl} tcElement
     */
    executeScript(script: string, tcElement: TcElementImpl): Promise<unknown>;
};
