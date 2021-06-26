import { browser, protractor } from "protractor";
import { TcElementImpl } from "../tc-element-impl";

export const BrowserHelper = {
  /**
   * opens the given url in the browser
   * @param {String} url
   * @returns {Promise<any>}
   */
  async open(url): Promise<any> {
    await browser.get(url);
  },

  /**
   * Set Browser ignoreSynchronization value
   */
  setIgnoreSync(bool: boolean) {
    browser.ignoreSynchronization = bool;
  },

  /**
   * restart the browser
   * @returns {Promise<any>}
   */
  async restart(): Promise<any> {
    await browser.restart();
  },

  /**
   * close the browser
   * @returns {Promise<void>}
   */
  async close(): Promise<void> {
    await browser.close();
  },

  /**
   * close tab at a particular position
   * @param tabNumber - tab which needs to be closed
   * @param windowHandles - all window handles available
   */
  async closeTab(tabNumber: number, windowHandles: string[]): Promise<void> {
    await this.switchToWindow(windowHandles[tabNumber]);
    await browser.driver.close();
    await this.switchToWindow(windowHandles[0]);
  },

  /**
   * maximize
   * @returns {Promise<void>}
   */
  async maximize(): Promise<void> {
    await browser.driver.manage().window().maximize();
  },

  /**
   * implicitly wait
   * @param {number} sec
   * @returns {Promise<void>}
   */
  async implicitlyWait(sec): Promise<void> {
    await browser.manage().timeouts().implicitlyWait(sec);
  },

  /**
   * Sleep
   * @param {number} msec
   * @returns {Promise<void>}
   */
  async sleep(msec): Promise<void> {
    await browser.sleep(msec);
  },

  /**
   * initialize the browser
   * @returns {Promise<void>}
   */
  async initialize() {
    await BrowserHelper.restart();
    await BrowserHelper.maximize();
    BrowserHelper.setIgnoreSync(true); // This is set  to false when accessing Non Angular Pages.
  },

  /**
   * Get Title
   * @returns {Promise<string>}
   */
  async getTitle(): Promise<string> {
    return browser.getTitle();
  },

  /**
   * Get Current URL
   * @returns {Promise<string>}
   */
  async getCurrentUrl(): Promise<string> {
    return browser.getCurrentUrl();
  },

  /**
   * Get All Window Handles
   * @returns {Promise<string[]>}
   */
  async getAllWindowHandles(): Promise<string[]> {
    return browser.getAllWindowHandles();
  },

  /**
   * Switch Window
   * @param {Window} window
   * @returns {Promise<void>}
   */
  async switchToWindow(window): Promise<void> {
    await browser.switchTo().window(window);
  },

  /**
   * Refresh
   * @returns {Promise<void>}
   */
  async refresh(): Promise<void> {
    await browser.driver.navigate().refresh();
  },

  /**
   * Moves the mouse to the element location
   * @param {TcElementImpl} tcElement
   */
  async mouseMove(tcElement: TcElementImpl) {
    await browser.actions().mouseMove(tcElement.getElement()).perform();
  },

  /**
   * Wait until the element becomes visible
   * @param {TcElementImpl} tcElement
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUntilVisibilityOf(
    tcElement: TcElementImpl,
    timeout?: number,
    message?: string
  ) {
    await this.waitUntil(
      () => protractor.ExpectedConditions.visibilityOf(tcElement.getElement()),
      timeout,
      message
    );
  },

  /**
   * Wait until the element becomes invisible
   * @param {TcElementImpl} tcElement
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUntilInVisibilityOf(
    tcElement: TcElementImpl,
    timeout?: number,
    message?: string
  ) {
    await this.waitUntil(
      () =>
        protractor.ExpectedConditions.invisibilityOf(tcElement.getElement()),
      timeout,
      message
    );
  },

  /**
   * Wait until the element is present
   * @param {TcElementImpl} tcElement
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUntilPresenceOf(
    tcElement: TcElementImpl,
    timeout?: number,
    message?: string
  ) {
    await this.waitUntil(
      () => protractor.ExpectedConditions.presenceOf(tcElement.getElement()),
      timeout,
      message
    );
  },

  /**
   * Wait until the element is clickable
   * @param {TcElementImpl} tcElement
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUntilClickableOf(
    tcElement: TcElementImpl,
    timeout?: number,
    message?: string
  ) {
    await this.waitUntil(
      () =>
        protractor.ExpectedConditions.elementToBeClickable(
          tcElement.getElement()
        ),
      timeout,
      message
    );
  },

  /**
   * Waits until alert is displayed
   * @param {number} timeout
   * @param {string} message
   */
  async waitUntilAlertIsPresent(timeout?: number, message?: string) {
    await this.waitUntil(
      () => protractor.ExpectedConditions.alertIsPresent(),
      timeout,
      message
    );
  },

  /**
   * Wait until the given text to be present in the element
   * @param {TcElementImpl} tcElement
   * @param {string} text
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUntilTextToBePresentInElement(
    tcElement: TcElementImpl,
    text: string,
    timeout?: number,
    message?: string
  ) {
    await this.waitUntil(
      () =>
        protractor.ExpectedConditions.textToBePresentInElement(
          tcElement.getElement(),
          text
        ),
      timeout,
      message
    );
  },

  /**
   * Wait until the text to be present in elementValue
   * @param {TcElementImpl} tcElement
   * @param {string} text
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUntilTextToBePresentInElementValue(
    tcElement: TcElementImpl,
    text: string,
    timeout?: number,
    message?: string
  ) {
    await this.waitUntil(
      () =>
        protractor.ExpectedConditions.textToBePresentInElementValue(
          tcElement.getElement(),
          text
        ),
      timeout,
      message
    );
  },

  /**
   * Wait until the title of page contains
   * @param {string} text
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUntilTitleContains(
    title: string,
    timeout?: number,
    message?: string
  ) {
    await this.waitUntil(
      () => protractor.ExpectedConditions.titleContains(title),
      timeout,
      message
    );
  },

  /**
   * Wait until the title of page is exactly as the given title
   * @param {string} title
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUntilTitleIs(title: string, timeout?: number, message?: string) {
    await this.waitUntil(
      () => protractor.ExpectedConditions.titleIs(title),
      timeout,
      message
    );
  },

  /**
   * Wait until the url contains the given text
   * @param {string} text
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUntilUrlContains(text: string, timeout?: number, message?: string) {
    await this.waitUntil(
      () => protractor.ExpectedConditions.urlContains(text),
      timeout,
      message
    );
  },

  /**
   * Wait until the url is exactly equal to given text
   * @param {string} text
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUntilUrlIs(text: string, timeout?: number, message?: string) {
    await this.waitUntil(
      () => protractor.ExpectedConditions.urlIs(text),
      timeout,
      message
    );
  },

  /**
   * Wait until the element is not present in DOM
   * @param {TcElementImpl} tcElement
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUntilStalenessOf(
    tcElement: TcElementImpl,
    timeout?: number,
    message?: string
  ) {
    await this.waitUntil(
      () => protractor.ExpectedConditions.stalenessOf(tcElement.getElement()),
      timeout,
      message
    );
  },

  /**
   * Wait until the element is selected
   * @param {TcElementImpl} tcElement
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUntilElementToBeSelected(
    tcElement: TcElementImpl,
    timeout?: number,
    message?: string
  ) {
    await this.waitUntil(
      () =>
        protractor.ExpectedConditions.elementToBeSelected(
          tcElement.getElement()
        ),
      timeout,
      message
    );
  },

  /**
   * Wait until the function applied
   * @param {function} func
   * @param {number} timeout
   * @param  {string} message
   */
  async waitUntil(func: () => any, timeout?: number, message?: string) {
    if (timeout && message) {
      await browser.wait(func(), timeout, message);
    } else if (timeout) {
      await browser.wait(func(), timeout);
    } else {
      await browser.wait(func());
    }
  },

  /**
   * Executes the given script with the provided arguments
   * @param {string} script
   * @param {TcElementImpl} tcElement
   */
  async executeScript(script: string, tcElement: TcElementImpl) {
    return browser.executeScript(script, tcElement.element.getWebElement());
  }
};
