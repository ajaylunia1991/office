
type ICodeceptCallback = (i?: CodeceptJS.I, current?:any, censusPage?:CodeceptJS.censusPage, phonePage?:CodeceptJS.phonePage, leadPage?:CodeceptJS.leadPage, quotePage?:CodeceptJS.quotePage, minisitePage?:CodeceptJS.minisitePage, doctorPage?:CodeceptJS.doctorPage, drugPage?:CodeceptJS.drugPage, pharmacyPage?:CodeceptJS.pharmacyPage, currentPlanPage?:CodeceptJS.currentPlanPage, compareV2Page?:CodeceptJS.compareV2Page, detailV2Page?:CodeceptJS.detailV2Page, ehimPage?:CodeceptJS.ehimPage, BOPage?:CodeceptJS.BOPage, cvsToolPage?:CodeceptJS.cvsToolPage, MarketLandingPage?:CodeceptJS.MarketLandingPage, ehmPage?:CodeceptJS.ehmPage, ehimPageNew?:CodeceptJS.ehimPageNew, headerPage?:CodeceptJS.headerPage, quotePageEHMP?:CodeceptJS.quotePageEHMP, mosePage?:CodeceptJS.mosePage, gmgPage?:CodeceptJS.gmgPage, quotePlanDetailPage?:CodeceptJS.quotePlanDetailPage, quotePlanComparePage?:CodeceptJS.quotePlanComparePage, quoteComparePage?:CodeceptJS.quoteComparePage, gmgHomePage?:CodeceptJS.gmgHomePage, ngpiBosePage?:CodeceptJS.ngpiBosePage, ngpiPage?:CodeceptJS.ngpiPage, ...args: any) => void;

declare class FeatureConfig {
  retry(times: number): FeatureConfig
  timeout(seconds: number): FeatureConfig
  config(config: object): FeatureConfig
  config(helperName: string, config: object): FeatureConfig
  tag(tagName: string): FeatureConfig
}

declare class ScenarioConfig {
  throws(err: any): ScenarioConfig;
  fails(): ScenarioConfig;
  retry(times: number): ScenarioConfig
  timeout(timeout: number): ScenarioConfig
  inject(inject: object): ScenarioConfig
  config(config: object): ScenarioConfig
  config(helperName: string, config: object): ScenarioConfig
  tag(tagName: string): ScenarioConfig
  injectDependencies(dependencies: { [key: string]: any }): ScenarioConfig
}

interface ILocator {
  id?: string;
  xpath?: string;
  css?: string;
  name?: string;
  frame?: string;
  android?: string;
  ios?: string;
}

type LocatorOrString = string | ILocator | Locator;

declare class Container {
  create(config: Object, opts: Object): void
  plugins(name?: string): Object
  support(name?: string): Object
  helpers(name?: string): Object
  translation(): Object
  mocha(): Object
  append(newContainer: Object): void
  clear(newHelpers: Object, newSupport: Object, newPlugins: Object): void
}

declare class RecorderSession {
  running: boolean
    start(name: string): void
    restore(name: string): void
    catch(fn: CallableFunction): void
}

declare class Recorder {
  retries: Object[]
  start(): void
  isRunning(): boolean
  startUnlessRunning(): void
  errHandler(fn: CallableFunction): void
  reset(): void
  session: RecorderSession
  add(taskName: string, fn?: CallableFunction, force?: boolean, retry?: boolean): Promise<any>
  retry(opts: Object): Promise<any>
  catch(customErrFn: CallableFunction): Promise<any>
  catchWithoutStop(customErrFn: CallableFunction ): Promise<any>
  throw(err: Error): Promise<any>
  saveFirstAsyncError(err: Error): void
  getAsyncErr(): Promise<Error>
  cleanAsyncErr(): void
  stop():void
  promise(): Promise<any>
  scheduled(): string[]
  toString(): string
  add(hookName: string, fn: CallableFunction, force?: boolean): void
  catch(customErrFn: CallableFunction): void
}

declare class CodeceptJSEvent {
  dispatcher: NodeJS.EventEmitter
  test: {
    started: string
    before: string
    after: string
    passed: string
    failed: string
    finished: string
  }
  suite: {
    before: string,
    after: string,
  }
  hook: {
    started: string,
    passed: string,
  }
  step: {
    before: string,
    after: string,
    started: string,
    passed: string,
    failed: string,
    finished: string,
  }
  all: {
    before: string,
    after: string,
    result: string,
  }
  multiple: {
    before: string,
    after: string,
  }
  emit(event: string, param: string): void
  cleanDispatcher(): void
}

declare class Output {
  colors: any
  styles: {
    error: any,
    success: any,
    scenario: any,
    basic: any,
    debug: any,
    log: any,
  }

  print(msg: string): void
  stepShift: number
  level(level: number): number
  process(process: string): string
  debug(msg: string): void
  log(msg: string): void
  error(msg: string): void
  success(msg: string): void
  plugin(name: string, msg: string): void
  step(step: any): void
  suite: {
    started: Function
  }
  test: {
    started(test: string): void
    passed(test: string): void
    failed(test: string): void
    skipped(test: string): void
  }
  scenario: {
    started(test: string): void
    passed(test: string): void
    failed(test: string): void
  }
  say(message: string, color?: string): void
  result(passed: number, failed: number, skipped: number, duration: string): void
}

declare class Config {
  create(newConfig: Object): Object
  load(configFile: string): Config
  get(key: string, val: any): any
  append(additionalConfig: Object): Object
  reset(): Object
}

declare class Helper {
  /** Abstract method to provide required config options */
  static _config(): any;
  /** Abstract method to validate config */
  _validateConfig<T>(config: T): T;
  /** Sets config for current test */
  _setConfig(opts: any): void;
  /** Hook executed before all tests */
  _init(): void
  /** Hook executed before each test. */
  _before(): void
  /** Hook executed after each test */
  _after(): void
  /**
   * Hook provides a test details
   * Executed in the very beginning of a test
   */
  _test(test: () => void): void
  /** Hook executed after each passed test */
  _passed(test: () => void): void
  /** Hook executed after each failed test */
  _failed(test: () => void): void
  /** Hook executed before each step */
  _beforeStep(step: () => void): void
  /** Hook executed after each step */
  _afterStep(step: () => void): void
  /** Hook executed before each suite */
  _beforeSuite(suite: () => void): void
  /** Hook executed after each suite */
  _afterSuite(suite: () => void): void
  /** Hook executed after all tests are executed */
  _finishTest(suite: () => void): void
  /**Access another configured helper: this.helpers['AnotherHelper'] */
  readonly helpers: any
  /** Print debug message to console (outputs only in debug mode) */
  debug(msg: string): void

  debugSection(section: string, msg: string): void
}

declare class Locator {
  constructor(locator: LocatorOrString, defaultType?: string);

  or(locator: LocatorOrString): Locator;
  find(locator: LocatorOrString): Locator;
  withChild(locator: LocatorOrString): Locator;
  withDescendant(locator: LocatorOrString): Locator;
  at(position: number): Locator;
  first(): Locator;
  last(): Locator;
  inside(locator: LocatorOrString): Locator;
  before(locator: LocatorOrString): Locator;
  after(locator: LocatorOrString): Locator;
  withText(text: string): Locator;
  withAttr(attrs: object): Locator;
  as(output: string): Locator;
}


declare function actor(customSteps?: {
  [action: string]: (this: CodeceptJS.I, ...args: any[]) => void
}): CodeceptJS.I;
declare function actor(customSteps?: {}): CodeceptJS.I;
declare function Feature(title: string, opts?: {}): FeatureConfig;
declare const Scenario: {
  (title: string, callback: ICodeceptCallback): ScenarioConfig;
  (title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
  only(title: string, callback: ICodeceptCallback): ScenarioConfig;
  only(title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
}
declare interface IScenario {
  Scenario(title: string, callback: ICodeceptCallback): ScenarioConfig;
  Scenario(title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
}
declare function xScenario(title: string, callback: ICodeceptCallback): ScenarioConfig;
declare function xScenario(title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
declare interface IData {
  Scenario(title: string, callback: ICodeceptCallback): ScenarioConfig;
  Scenario(title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
  only: IScenario;
}
declare function Data(data: any): IData;
declare function xData(data: any): IData;
declare function Before(callback: ICodeceptCallback): void;
declare function BeforeSuite(callback: ICodeceptCallback): void;
declare function After(callback: ICodeceptCallback): void;
declare function AfterSuite(callback: ICodeceptCallback): void;

declare function inject(): {
  I: CodeceptJS.I
  censusPage: CodeceptJS.censusPage
  phonePage: CodeceptJS.phonePage
  leadPage: CodeceptJS.leadPage
  quotePage: CodeceptJS.quotePage
  minisitePage: CodeceptJS.minisitePage
  doctorPage: CodeceptJS.doctorPage
  drugPage: CodeceptJS.drugPage
  pharmacyPage: CodeceptJS.pharmacyPage
  currentPlanPage: CodeceptJS.currentPlanPage
  compareV2Page: CodeceptJS.compareV2Page
  detailV2Page: CodeceptJS.detailV2Page
  ehimPage: CodeceptJS.ehimPage
  BOPage: CodeceptJS.BOPage
  cvsToolPage: CodeceptJS.cvsToolPage
  MarketLandingPage: CodeceptJS.MarketLandingPage
  ehmPage: CodeceptJS.ehmPage
  ehimPageNew: CodeceptJS.ehimPageNew
  headerPage: CodeceptJS.headerPage
  quotePageEHMP: CodeceptJS.quotePageEHMP
  mosePage: CodeceptJS.mosePage
  gmgPage: CodeceptJS.gmgPage
  quotePlanDetailPage: CodeceptJS.quotePlanDetailPage
  quotePlanComparePage: CodeceptJS.quotePlanComparePage
  quoteComparePage: CodeceptJS.quoteComparePage
  gmgHomePage: CodeceptJS.gmgHomePage
  ngpiBosePage: CodeceptJS.ngpiBosePage
  ngpiPage: CodeceptJS.ngpiPage
};
declare function locate(selector: LocatorOrString): Locator;
declare function within(selector: LocatorOrString, callback: Function): Promise<any>;
declare function session(selector: LocatorOrString, callback: Function): Promise<any>;
declare function session(selector: LocatorOrString, config: any, callback: Function): Promise<any>;
declare function pause(): void;
declare function secret(secret: any): string;

declare const codeceptjs: any;

declare namespace CodeceptJS {
  export const container: Container
  export const recorder: Recorder
  export const event: CodeceptJSEvent
  export const output: Output
  export const config: Config

  export interface I {
    assertThat(expr: string, msg: string) : void,
    debug(msg: string) : void,
    debugSection(section: string, msg: string) : void,
    defineTimeout(timeouts: string) : void,
    amOnPage(url: string) : void,
    click(locator: LocatorOrString, context?: LocatorOrString) : void,
    doubleClick(locator: LocatorOrString, context?: LocatorOrString) : void,
    rightClick(locator: LocatorOrString) : void,
    fillField(field: LocatorOrString, value: string) : void,
    appendField(field: LocatorOrString, value: string) : void,
    clearField(field: LocatorOrString) : void,
    selectOption(select: LocatorOrString, option: string) : void,
    attachFile(locator: LocatorOrString, pathToFile: string) : void,
    checkOption(field: LocatorOrString, context?: LocatorOrString) : void,
    uncheckOption(field: LocatorOrString, context?: LocatorOrString) : void,
    grabTextFrom(locator: LocatorOrString) : Promise<string>,
    grabHTMLFrom(locator: LocatorOrString) : Promise<string>,
    grabValueFrom(locator: LocatorOrString) : Promise<string>,
    grabCssPropertyFrom(locator: LocatorOrString, cssProperty: string) : Promise<string>,
    grabAttributeFrom(locator: LocatorOrString, attr: string) : Promise<string>,
    seeInTitle(text: string) : void,
    seeTitleEquals(text: string) : void,
    dontSeeInTitle(text: string) : void,
    grabTitle() : Promise<string>,
    see(text: string, context?: LocatorOrString) : void,
    seeTextEquals(text: string, context?: LocatorOrString) : void,
    dontSee(text: string, context?: LocatorOrString) : void,
    seeInField(field: LocatorOrString, value: string) : void,
    dontSeeInField(field: LocatorOrString, value: string) : void,
    seeCheckboxIsChecked(field: LocatorOrString) : void,
    dontSeeCheckboxIsChecked(field: LocatorOrString) : void,
    seeElement(locator: LocatorOrString) : void,
    dontSeeElement(locator: LocatorOrString) : void,
    seeElementInDOM(locator: LocatorOrString) : void,
    dontSeeElementInDOM(locator: LocatorOrString) : void,
    seeInSource(text: string) : void,
    grabSource() : Promise<string>,
    grabBrowserLogs() : Promise<string>,
    grabCurrentUrl() : Promise<string>,
    grabBrowserUrl() : Promise<string>,
    dontSeeInSource(text: string) : void,
    seeNumberOfElements(locator: LocatorOrString, num: number) : void,
    seeNumberOfVisibleElements(locator: LocatorOrString, num: number) : void,
    seeCssPropertiesOnElements(locator: LocatorOrString, cssProperties: string) : void,
    seeAttributesOnElements(locator: LocatorOrString, attributes: string) : void,
    grabNumberOfVisibleElements(locator: LocatorOrString) : Promise<string>,
    seeInCurrentUrl(url: string) : void,
    dontSeeInCurrentUrl(url: string) : void,
    seeCurrentUrlEquals(url: string) : void,
    dontSeeCurrentUrlEquals(url: string) : void,
    executeScript(fn: Function) : void,
    executeAsyncScript(fn: Function) : void,
    scrollTo(locator: LocatorOrString, offsetX?: number, offsetY?: number) : void,
    moveCursorTo(locator: LocatorOrString, offsetX?: number, offsetY?: number) : void,
    saveScreenshot(fileName: string, fullPage?: string) : void,
    setCookie(cookie: string) : void,
    clearCookie(cookie: string) : void,
    seeCookie(name: string) : void,
    dontSeeCookie(name: string) : void,
    grabCookie(name: string) : Promise<string>,
    acceptPopup() : void,
    cancelPopup() : void,
    seeInPopup(text: string) : void,
    grabPopupText() : Promise<string>,
    pressKey(key: string) : void,
    resizeWindow(width: number, height: number) : void,
    dragAndDrop(srcElement: string, destElement: string) : void,
    closeOtherTabs() : void,
    wait(sec: number) : void,
    waitForEnabled(locator: LocatorOrString, sec?: number) : void,
    waitForElement(locator: LocatorOrString, sec?: number) : void,
    waitUntilExists(locator: LocatorOrString, sec?: number) : void,
    waitInUrl(urlPart: string, sec?: number) : void,
    waitUrlEquals(urlPart: string, sec?: number) : void,
    waitForText(text: string, sec?: number, context?: LocatorOrString) : void,
    waitForValue(field: LocatorOrString, value: string, sec?: number) : void,
    waitForVisible(locator: LocatorOrString, sec?: number) : void,
    waitNumberOfVisibleElements(locator: LocatorOrString, num: number, sec?: number) : void,
    waitForInvisible(locator: LocatorOrString, sec?: number) : void,
    waitToHide(locator: LocatorOrString, sec?: number) : void,
    waitForStalenessOf(locator: LocatorOrString, sec?: number) : void,
    waitForDetached(locator: LocatorOrString, sec?: number) : void,
    waitForFunction(fn: Function, argsOrSec?: string, sec?: number) : void,
    waitUntil(fn: Function, sec?: number, timeoutMsg?: string, interval?: string) : void,
    switchTo(locator: LocatorOrString) : void,
    switchToNextTab(num?: number, sec?: number) : void,
    switchToPreviousTab(num?: number, sec?: number) : void,
    closeCurrentTab() : void,
    openNewTab() : void,
    grabNumberOfOpenTabs() : Promise<string>,
    refreshPage() : void,
    scrollPageToTop() : void,
    scrollPageToBottom() : void,
    grabPageScrollPosition() : Promise<string>,
    runOnIOS(caps: string, fn: Function) : void,
    runOnAndroid(caps: string, fn: Function) : void,
    runInWeb(fn: Function) : void,
    say: () => any; 
    retryStep(opts: string) : void,

  }

  export interface censusPage {
    FillMSCensus(zip: string, birthday: string, partb: string, gender: string, smoker: string) : void,
    EditMSCensus(zip: string, birthday: string, partb: string, gender: string, smoker: string) : void,
    newEditMSCensus(zip: string, birthday: string, partb: string, gender: string, smoker: string) : void,
    FillMAMDCensus(zip: string) : void,
    ClickHeaderlinks() : void,

  }


  export interface phonePage {
    verifyPhone() : void,
    verifyHomePhone() : void,

  }


  export interface leadPage {
    typeLead(firstName: string, lastName: string, phone: string) : void,
    typeAccountInfo(email: string, firstName: string) : void,
    closeLeadForm() : void,

  }


  export interface quotePage {
    checkDetailAndCompare() : void,
    filterHumanaPlans(carrierFamilyId: string) : void,
    addDrugAndDocInPharmacyMinisite() : void,
    addDrugAndDocInPharmacyTool() : void,
    addDrugAndDocInCarrierMinisite() : void,
    addDrug() : void,
    addDrugForTool() : void,
    addPharmacy() : void,
    addDocs() : void,
    switchPlanYear(yearPath: string) : void,

  }


  export interface minisitePage {
    fillZip(zip: string) : void,
    fillPharmacyZip(zip: string, pharmacyName: string) : void,
    checkLogoAndSavePic(carrierName: string, hasFilter: string) : void,
    checkFilter(carrierFamilyID: string, hasFilter: string) : void,
    carrierLandingToQuote(zip: string, carrierName: string, hasFilter: string, carrierFamilyID: string) : void,
    carrierLandingToCensusToQuote(zip: string) : void,
    pharmacyLandingToQuote(pharmacyzip: string, hasFilter: string, pharmacyName: string) : void,
    pharmacyToolToQuote(zip: string) : void,

  }


  export interface doctorPage {
    addDocs() : void,
    clickAddLinkToDocTool() : void,
    clickZipNextBtn() : void,
    clickNameNextBtn() : void,
    fillZip(zip: string) : void,
    fillDocName(name: string) : void,
    checkDetailCompareDoctorInfo(doc1: string, doc2: string, doc3: string) : void,

  }


  export interface drugPage {
    addDrug() : void,

  }


  export interface pharmacyPage {
    addPharmacy() : void,

  }


  export interface currentPlanPage {
    addCurrentPlan() : void,
    addSpecificCurrentPlan() : void,

  }


  export interface compareV2Page {

  }


  export interface detailV2Page {

  }


  export interface ehimPage {

  }


  export interface BOPage {
    validateBOPhoneNumber(phone: string, firstName: string, lastName: string, leadStatus: string) : void,

  }


  export interface cvsToolPage {

  }


  export interface MarketLandingPage {
    fillleadform(firstName: string, lastName: string, phone: string) : void,

  }


  export interface ehmPage {
    verifyHomePhone() : void,
    verifyCensusPage(value: string) : void,
    verifyEHMHomePage() : void,
    verifyEHM_ArticlesPage(val1: string, val2: string) : void,
    fillLeadForm(fn: Function, ln: string, ph: string, zip: string) : void,

  }


  export interface ehimPageNew {

  }


  export interface headerPage {
    verifyQuotePage(value: string) : void,

  }


  export interface quotePageEHMP {
    addingDrug(l1: string, l2: string, l3: string, l4: string, type: string, dosage: string, pack: string) : void,
    addingDoctor(zip: string, name: string, radius: string, location: string) : void,

  }


  export interface mosePage {
    fillApplicantInfo(fn: Function, ln: string, gender: string, birthdate: string) : void,
    fillContactInfo(phone: string, email: string) : void,
    fillMailingAddress() : void,
    fillMedicareInfo(medicareId: string, parta: string, partb: string) : void,
    fillSep() : void,
    fillEligibility() : void,
    fillPcp() : void,
    fillPay(method: string) : void,
    checkAndEditReviewForm() : void,
    submitBySelf() : void,
    submitByOther() : void,

  }


  export interface gmgPage {
    startShoppingFlow() : void,
    fillHappyPathInformation() : void,
    zipCodeValidation(zipCode: string, expectedText: string) : void,
    ageMessageValidation(month: string, day: string, year: string, expectedText: string) : void,
    medicalConditionsDeclination() : void,
    openEnrollmentMessage() : void,
    notYetQualifyMessage() : void,
    selectFirstPlan() : void,
    selectFirstCarrier() : void,
    enrollInPlanSummarySection() : void,
    fillApplicantInformation() : void,
    fillCoverageInformation() : void,
    answerNoToAllRadioButtons(dinamycID: string) : void,
    fillAditionalInformation() : void,
    fillPaymentInformation() : void,
    purchase() : void,

  }


  export interface quotePlanDetailPage {

  }


  export interface quotePlanComparePage {
    someFunction() : void,

  }


  export interface quoteComparePage {
    someFunction() : void,

  }


  export interface gmgHomePage {
    checkDetailAndCompare(btn: string) : void,
    filterHumanaPlans(carrierFamilyId: string) : void,
    addDrugAndDocInPharmacyMinisite() : void,
    addDrugAndDocInPharmacyTool() : void,
    addDrugAndDocInCarrierMinisite() : void,
    addDrug() : void,
    addDrugForTool() : void,
    addPharmacy() : void,
    addDocs() : void,
    switchPlanYear(yearPath: string) : void,
    clickTopGetStartedButton() : void,
    clickBottomGetStartedButton() : void,
    clickMoreMedicareAnswersButton() : void,
    clickReadMoreMedicareSupplementPlansBtn() : void,
    clickReadMoreInsuranceCompaniesBtn() : void,
    clickReadMoreMedicareSupplementInsuranceBtn() : void,

  }


  export interface ngpiBosePage {
    loginToBose(userId: string, pwd: string) : void,
    fillNameToApplication(fName: string, lName: string) : void,
    selectPage1Details(zcode: string) : void,
    selectPage2Details() : void,
    selectPage3Details() : void,
    selectPage4Details(personalCode: string, yob: string) : void,

  }


  export interface ngpiPage {
    fillngpileadform(personalCode: string, birthYear: string, zipCode: string, allId: string) : void,
    validateNGPIPageText(textData: string) : void,
    validateBrowseplans(allId: string) : void,
    validateEditRxDrugs(drugName: string) : void,
    validateDoctors(drName: string) : void,
    validateCarriersforSummitOnly() : void,

  }

}

declare module "codeceptjs" {
  export = CodeceptJS;
}
