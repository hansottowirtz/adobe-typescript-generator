/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Application extends Adobe.Csawlib.CSHostObject {
			/**
			 * The active book.
			 * @type {Adobe.Indesign.Book}
			 */
			public activeBook: Adobe.Indesign.Book;
			/**
			 * The front-most document.
			 * @type {Adobe.Indesign.Document}
			 */
			public activeDocument: Adobe.Indesign.Document;
			/**
			 * The current script running from the Scripts panel.
			 * @type {File}
			 * @readonly
			 */
			public readonly activeScript: File;
			/**
			 * The undo mode for the current script execution.
			 * @type {Adobe.Indesign.UndoModes}
			 * @readonly
			 */
			public readonly activeScriptUndoMode: Adobe.Indesign.UndoModes;
			/**
			 * The front-most window. Can return: Window, LayoutWindow or 
			 * StoryWindow.
			 * @type {any}
			 */
			public activeWindow: any;
			/**
			 * Dispatched after the Application becomes active. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_ACTIVATE: string;
			/**
			 * Dispatched after a Document is closed. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_CLOSE: string;
			/**
			 * Dispatched after the active context changes. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_CONTEXT_CHANGED: string;
			/**
			 * Dispatched when the Application is quitting. Since the quit 
			 * has been committed, it can not be canceled. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_QUIT: string;
			/**
			 * Dispatched after an attribute on the active selection 
			 * changes. This event bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_SELECTION_ATTRIBUTE_CHANGED: string;
			/**
			 * Dispatched after the active selection changes. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_SELECTION_CHANGED: string;
			/**
			 * Preferences for alignment and distribution.
			 * @type {Adobe.Indesign.AlignDistributePreference}
			 * @readonly
			 */
			public readonly alignDistributePreferences: Adobe.Indesign.AlignDistributePreference;
			/**
			 * All Cell styles
			 * @type {any}
			 * @readonly
			 */
			public readonly allCellStyles: any;
			/**
			 * Lists all character styles (regardless of their group).
			 * @type {any}
			 * @readonly
			 */
			public readonly allCharacterStyles: any;
			/**
			 * All object styles contained by the Application.
			 * @type {any}
			 * @readonly
			 */
			public readonly allObjectStyles: any;
			/**
			 * Lists all paragraph styles (regardless of their group).
			 * @type {any}
			 * @readonly
			 */
			public readonly allParagraphStyles: any;
			/**
			 * The list of all object types (strings) a preflight rule can 
			 * operate on.
			 * @type {any}
			 * @readonly
			 */
			public readonly allPreflightObjectTypes: any;
			/**
			 * The list of all categories that have been declared by rules.
			 * @type {any}
			 * @readonly
			 */
			public readonly allPreflightRuleCategories: any;
			/**
			 * The list of all known (declared) rule IDs.
			 * @type {any}
			 * @readonly
			 */
			public readonly allPreflightRuleIDs: any;
			/**
			 * All Table styles
			 * @type {any}
			 * @readonly
			 */
			public readonly allTableStyles: any;
			/**
			 * Anchored object default settings.
			 * @type {Adobe.Indesign.AnchoredObjectDefault}
			 * @readonly
			 */
			public readonly anchoredObjectDefaults: Adobe.Indesign.AnchoredObjectDefault;
			/**
			 * Anchored object settings.
			 * @type {Adobe.Indesign.AnchoredObjectSetting}
			 * @readonly
			 */
			public readonly anchoredObjectSettings: Adobe.Indesign.AnchoredObjectSetting;
			/**
			 * Auto-correct preferences.
			 * @type {Adobe.Indesign.AutoCorrectPreference}
			 * @readonly
			 */
			public readonly autoCorrectPreferences: Adobe.Indesign.AutoCorrectPreference;
			/**
			 * A collection of auto-correct tables.
			 * @type {Adobe.Indesign.AutoCorrectTables}
			 * @readonly
			 */
			public readonly autoCorrectTables: Adobe.Indesign.AutoCorrectTables;
			/**
			 * A collection of background task objects.
			 * @type {Adobe.Indesign.BackgroundTasks}
			 * @readonly
			 */
			public readonly backgroundTasks: Adobe.Indesign.BackgroundTasks;
			/**
			 * Baseline frame grid option settings.
			 * @type {Adobe.Indesign.BaselineFrameGridOption}
			 * @readonly
			 */
			public readonly baselineFrameGridOptions: Adobe.Indesign.BaselineFrameGridOption;
			/**
			 * Dispatched before the Application becomes inactive. This 
			 * event bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_DEACTIVATE: string;
			/**
			 * Dispatched before a Document is created. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_NEW: string;
			/**
			 * Dispatched before a Document is opened. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_OPEN: string;
			/**
			 * Dispatched before the Application is quit. Allows the quit 
			 * to be canceled. This event bubbles. This event is 
			 * cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_QUIT: string;
			/**
			 * A collection of books.
			 * @type {Adobe.Indesign.Books}
			 * @readonly
			 */
			public readonly books: Adobe.Indesign.Books;
			/**
			 * Button preference settings.
			 * @type {Adobe.Indesign.ButtonPreference}
			 * @readonly
			 */
			public readonly buttonPreferences: Adobe.Indesign.ButtonPreference;
			/**
			 * A collection of cell style groups.
			 * @type {Adobe.Indesign.CellStyleGroups}
			 * @readonly
			 */
			public readonly cellStyleGroups: Adobe.Indesign.CellStyleGroups;
			/**
			 * A collection of cell style mappings.
			 * @type {Adobe.Indesign.CellStyleMappings}
			 * @readonly
			 */
			public readonly cellStyleMappings: Adobe.Indesign.CellStyleMappings;
			/**
			 * A collection of cell styles.
			 * @type {Adobe.Indesign.CellStyles}
			 * @readonly
			 */
			public readonly cellStyles: Adobe.Indesign.CellStyles;
			/**
			 * Change glyph preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Indesign.ChangeGlyphPreference}
			 */
			public changeGlyphPreferences: Adobe.Indesign.ChangeGlyphPreference;
			/**
			 * Change grep preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Indesign.ChangeGrepPreference}
			 */
			public changeGrepPreferences: Adobe.Indesign.ChangeGrepPreference;
			/**
			 * Change object preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Indesign.ChangeObjectPreference}
			 */
			public changeObjectPreferences: Adobe.Indesign.ChangeObjectPreference;
			/**
			 * Change text preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Indesign.ChangeTextPreference}
			 */
			public changeTextPreferences: Adobe.Indesign.ChangeTextPreference;
			/**
			 * Change transliterate preferences. Can also accept: 
			 * NothingEnum enumerator.
			 * @type {Adobe.Indesign.ChangeTransliteratePreference}
			 */
			public changeTransliteratePreferences: Adobe.Indesign.ChangeTransliteratePreference;
			/**
			 * A collection of character style groups.
			 * @type {Adobe.Indesign.CharacterStyleGroups}
			 * @readonly
			 */
			public readonly characterStyleGroups: Adobe.Indesign.CharacterStyleGroups;
			/**
			 * A collection of character styles.
			 * @type {Adobe.Indesign.CharacterStyles}
			 * @readonly
			 */
			public readonly characterStyles: Adobe.Indesign.CharacterStyles;
			/**
			 * A collection of char style mappings.
			 * @type {Adobe.Indesign.CharStyleMappings}
			 * @readonly
			 */
			public readonly charStyleMappings: Adobe.Indesign.CharStyleMappings;
			/**
			 * CJK grid preference settings.
			 * @type {Adobe.Indesign.CjkGridPreference}
			 * @readonly
			 */
			public readonly cjkGridPreferences: Adobe.Indesign.CjkGridPreference;
			/**
			 * Clear overrides first before applying object style
			 * @type {boolean}
			 */
			public clearOverridesWhenApplyingStyle: boolean;
			/**
			 * Clipboard preference properties that define the way that the 
			 * application interacts with the system clipboard.
			 * @type {Adobe.Indesign.ClipboardPreference}
			 * @readonly
			 */
			public readonly clipboardPreferences: Adobe.Indesign.ClipboardPreference;
			/**
			 * A collection of colors.
			 * @type {Adobe.Indesign.Colors}
			 * @readonly
			 */
			public readonly colors: Adobe.Indesign.Colors;
			/**
			 * Color setting properties that define color management 
			 * defaults.
			 * @type {Adobe.Indesign.ColorSetting}
			 * @readonly
			 */
			public readonly colorSettings: Adobe.Indesign.ColorSetting;
			/**
			 * A collection of composite fonts.
			 * @type {Adobe.Indesign.CompositeFonts}
			 * @readonly
			 */
			public readonly compositeFonts: Adobe.Indesign.CompositeFonts;
			/**
			 * Conditional text preferences.
			 * @type {Adobe.Indesign.ConditionalTextPreference}
			 * @readonly
			 */
			public readonly conditionalTextPreferences: Adobe.Indesign.ConditionalTextPreference;
			/**
			 * A collection of conditions for conditional text.
			 * @type {Adobe.Indesign.Conditions}
			 * @readonly
			 */
			public readonly conditions: Adobe.Indesign.Conditions;
			/**
			 * A collection of condition sets for conditional text.
			 * @type {Adobe.Indesign.ConditionSets}
			 * @readonly
			 */
			public readonly conditionSets: Adobe.Indesign.ConditionSets;
			/**
			 * The Content Placer. Used to get a reference to the content 
			 * placer object.
			 * @type {Adobe.Indesign.ContentPlacerObject}
			 * @readonly
			 */
			public readonly contentPlacer: Adobe.Indesign.ContentPlacerObject;
			/**
			 * A collection of dashed stroke styles.
			 * @type {Adobe.Indesign.DashedStrokeStyles}
			 * @readonly
			 */
			public readonly dashedStrokeStyles: Adobe.Indesign.DashedStrokeStyles;
			/**
			 * The data merge option properties that define the data merge.
			 * @type {Adobe.Indesign.DataMergeOption}
			 * @readonly
			 */
			public readonly dataMergeOptions: Adobe.Indesign.DataMergeOption;
			/**
			 * A collection of dialogs.
			 * @type {Adobe.Indesign.Dialogs}
			 * @readonly
			 */
			public readonly dialogs: Adobe.Indesign.Dialogs;
			/**
			 * User dictionary preference settings.
			 * @type {Adobe.Indesign.DictionaryPreference}
			 * @readonly
			 */
			public readonly dictionaryPreferences: Adobe.Indesign.DictionaryPreference;
			/**
			 * Display performance settings.
			 * @type {Adobe.Indesign.DisplayPerformancePreference}
			 * @readonly
			 */
			public readonly displayPerformancePreferences: Adobe.Indesign.DisplayPerformancePreference;
			/**
			 * Display setting properties.
			 * @type {Adobe.Indesign.DisplaySettings}
			 * @readonly
			 */
			public readonly displaySettings: Adobe.Indesign.DisplaySettings;
			/**
			 * Document preference settings.
			 * @type {Adobe.Indesign.DocumentPreference}
			 * @readonly
			 */
			public readonly documentPreferences: Adobe.Indesign.DocumentPreference;
			/**
			 * A collection of document presets.
			 * @type {Adobe.Indesign.DocumentPresets}
			 * @readonly
			 */
			public readonly documentPresets: Adobe.Indesign.DocumentPresets;
			/**
			 * A collection of documents.
			 * @type {Adobe.Indesign.Documents}
			 * @readonly
			 */
			public readonly documents: Adobe.Indesign.Documents;
			/**
			 * A collection of dotted stroke styles.
			 * @type {Adobe.Indesign.DottedStrokeStyles}
			 * @readonly
			 */
			public readonly dottedStrokeStyles: Adobe.Indesign.DottedStrokeStyles;
			/**
			 * EPS export preferences.
			 * @type {Adobe.Indesign.EPSExportPreference}
			 * @readonly
			 */
			public readonly epsExportPreferences: Adobe.Indesign.EPSExportPreference;
			/**
			 * EPS import preferences.
			 * @type {Adobe.Indesign.EPSImportPreference}
			 * @readonly
			 */
			public readonly epsImportPreferences: Adobe.Indesign.EPSImportPreference;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * Excel import preferences.
			 * @type {Adobe.Indesign.ExcelImportPreference}
			 * @readonly
			 */
			public readonly excelImportPreferences: Adobe.Indesign.ExcelImportPreference;
			/**
			 * The default export for web preferences.
			 * @type {Adobe.Indesign.ExportForWebPreference}
			 * @readonly
			 */
			public readonly exportForWebPreferences: Adobe.Indesign.ExportForWebPreference;
			/**
			 * The feature set.
			 * @type {Adobe.Indesign.FeatureSetOptions}
			 * @readonly
			 */
			public readonly featureSet: Adobe.Indesign.FeatureSetOptions;
			/**
			 * The full path to the file.
			 * @type {File}
			 * @readonly
			 */
			public readonly filePath: File;
			/**
			 * Find/change glyph options. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Indesign.FindChangeGlyphOption}
			 */
			public findChangeGlyphOptions: Adobe.Indesign.FindChangeGlyphOption;
			/**
			 * Find/change grep options. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Indesign.FindChangeGrepOption}
			 */
			public findChangeGrepOptions: Adobe.Indesign.FindChangeGrepOption;
			/**
			 * Find/change object options. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Indesign.FindChangeObjectOption}
			 */
			public findChangeObjectOptions: Adobe.Indesign.FindChangeObjectOption;
			/**
			 * Find/change text options. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Indesign.FindChangeTextOption}
			 */
			public findChangeTextOptions: Adobe.Indesign.FindChangeTextOption;
			/**
			 * Find/change transliterate options. Can also accept: 
			 * NothingEnum enumerator.
			 * @type {Adobe.Indesign.FindChangeTransliterateOption}
			 */
			public findChangeTransliterateOptions: Adobe.Indesign.FindChangeTransliterateOption;
			/**
			 * Find glyph preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Indesign.FindGlyphPreference}
			 */
			public findGlyphPreferences: Adobe.Indesign.FindGlyphPreference;
			/**
			 * Find grep preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Indesign.FindGrepPreference}
			 */
			public findGrepPreferences: Adobe.Indesign.FindGrepPreference;
			/**
			 * Find object preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Indesign.FindObjectPreference}
			 */
			public findObjectPreferences: Adobe.Indesign.FindObjectPreference;
			/**
			 * Find text preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Indesign.FindTextPreference}
			 */
			public findTextPreferences: Adobe.Indesign.FindTextPreference;
			/**
			 * Find transliterate preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Indesign.FindTransliteratePreference}
			 */
			public findTransliteratePreferences: Adobe.Indesign.FindTransliteratePreference;
			/**
			 * A collection of transparency flattener presets.
			 * @type {Adobe.Indesign.FlattenerPresets}
			 * @readonly
			 */
			public readonly flattenerPresets: Adobe.Indesign.FlattenerPresets;
			/**
			 * Font locking preference settings.
			 * @type {Adobe.Indesign.FontLockingPreference}
			 * @readonly
			 */
			public readonly fontLockingPreferences: Adobe.Indesign.FontLockingPreference;
			/**
			 * A collection of fonts.
			 * @type {Adobe.Indesign.Fonts}
			 * @readonly
			 */
			public readonly fonts: Adobe.Indesign.Fonts;
			/**
			 * Footnote option settings.
			 * @type {Adobe.Indesign.FootnoteOption}
			 * @readonly
			 */
			public readonly footnoteOptions: Adobe.Indesign.FootnoteOption;
			/**
			 * The frame fitting option to apply to placed or pasted 
			 * content. Can be applied to a frame, object style, or 
			 * document or to the application.
			 * @type {Adobe.Indesign.FrameFittingOption}
			 * @readonly
			 */
			public readonly frameFittingOptions: Adobe.Indesign.FrameFittingOption;
			/**
			 * The full path to the Application, including the name of the 
			 * Application.
			 * @type {File}
			 * @readonly
			 */
			public readonly fullName: File;
			/**
			 * Galley preference settings.
			 * @type {Adobe.Indesign.GalleyPreference}
			 * @readonly
			 */
			public readonly galleyPreferences: Adobe.Indesign.GalleyPreference;
			/**
			 * General preference settings.
			 * @type {Adobe.Indesign.GeneralPreference}
			 * @readonly
			 */
			public readonly generalPreferences: Adobe.Indesign.GeneralPreference;
			/**
			 * Grabber preference properties that define display 
			 * performance quality during scrolling.
			 * @type {Adobe.Indesign.GrabberPreference}
			 * @readonly
			 */
			public readonly grabberPreferences: Adobe.Indesign.GrabberPreference;
			/**
			 * A collection of gradients.
			 * @type {Adobe.Indesign.Gradients}
			 * @readonly
			 */
			public readonly gradients: Adobe.Indesign.Gradients;
			/**
			 * Grid preference settings.
			 * @type {Adobe.Indesign.GridPreference}
			 * @readonly
			 */
			public readonly gridPreferences: Adobe.Indesign.GridPreference;
			/**
			 * Grid printing preference and export settings.
			 * @type {Adobe.Indesign.GridPrintingPreference}
			 * @readonly
			 */
			public readonly gridPrintingPreferences: Adobe.Indesign.GridPrintingPreference;
			/**
			 * Guide preference settings.
			 * @type {Adobe.Indesign.GuidePreference}
			 * @readonly
			 */
			public readonly guidePreferences: Adobe.Indesign.GuidePreference;
			/**
			 * All attachable idle tasks.
			 * @type {Adobe.Indesign.IdleTasks}
			 * @readonly
			 */
			public readonly idleTasks: Adobe.Indesign.IdleTasks;
			/**
			 * The image I/O preference properties that define preferences 
			 * for importing images.
			 * @type {Adobe.Indesign.ImageIOPreference}
			 * @readonly
			 */
			public readonly imageIOPreferences: Adobe.Indesign.ImageIOPreference;
			/**
			 * Image preferences.
			 * @type {Adobe.Indesign.ImagePreference}
			 * @readonly
			 */
			public readonly imagePreferences: Adobe.Indesign.ImagePreference;
			/**
			 * IME preference settings.
			 * @type {Adobe.Indesign.IMEPreference}
			 * @readonly
			 */
			public readonly imePreferences: Adobe.Indesign.IMEPreference;
			/**
			 * Placed InDesign page attributes.
			 * @type {Adobe.Indesign.ImportedPageAttribute}
			 * @readonly
			 */
			public readonly importedPageAttributes: Adobe.Indesign.ImportedPageAttribute;
			/**
			 * Export options for InCopy INCX document format.
			 * @type {Adobe.Indesign.InCopyExportOption}
			 * @readonly
			 */
			public readonly incopyExportOptions: Adobe.Indesign.InCopyExportOption;
			/**
			 * The index options properties that define how an index is 
			 * formatted.
			 * @type {Adobe.Indesign.IndexOptions}
			 * @readonly
			 */
			public readonly indexGenerationOptions: Adobe.Indesign.IndexOptions;
			/**
			 * A collection of indexing sort options.
			 * @type {Adobe.Indesign.IndexingSortOptions}
			 * @readonly
			 */
			public readonly indexingSortOptions: Adobe.Indesign.IndexingSortOptions;
			/**
			 * A collection of inks.
			 * @type {Adobe.Indesign.Inks}
			 * @readonly
			 */
			public readonly inks: Adobe.Indesign.Inks;
			/**
			 * Interactive PDF export preferences.
			 * @type {Adobe.Indesign.InteractivePDFExportPreference}
			 * @readonly
			 */
			public readonly interactivePDFExportPreferences: Adobe.Indesign.InteractivePDFExportPreference;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * JPEG export preferences.
			 * @type {Adobe.Indesign.JPEGExportPreference}
			 * @readonly
			 */
			public readonly jpegExportPreferences: Adobe.Indesign.JPEGExportPreference;
			/**
			 * A collection of kinsoku tables.
			 * @type {Adobe.Indesign.KinsokuTables}
			 * @readonly
			 */
			public readonly kinsokuTables: Adobe.Indesign.KinsokuTables;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * A collection of languages with vendors.
			 * @type {Adobe.Indesign.LanguagesWithVendors}
			 * @readonly
			 */
			public readonly languagesWithVendors: Adobe.Indesign.LanguagesWithVendors;
			/**
			 * Layout sdjustment preference settings.
			 * @type {Adobe.Indesign.LayoutAdjustmentPreference}
			 * @readonly
			 */
			public readonly layoutAdjustmentPreferences: Adobe.Indesign.LayoutAdjustmentPreference;
			/**
			 * Default properties specific to layout grids.
			 * @type {Adobe.Indesign.LayoutGridDataInformation}
			 * @readonly
			 */
			public readonly layoutGridData: Adobe.Indesign.LayoutGridDataInformation;
			/**
			 * A collection of layout windows.
			 * @type {Adobe.Indesign.LayoutWindows}
			 * @readonly
			 */
			public readonly layoutWindows: Adobe.Indesign.LayoutWindows;
			/**
			 * A collection of object libraries.
			 * @type {Adobe.Indesign.Libraries}
			 * @readonly
			 */
			public readonly libraries: Adobe.Indesign.Libraries;
			/**
			 * Linked Page Item options
			 * @type {Adobe.Indesign.LinkedPageItemOption}
			 * @readonly
			 */
			public readonly linkedPageItemOptions: Adobe.Indesign.LinkedPageItemOption;
			/**
			 * Linked story options
			 * @type {Adobe.Indesign.LinkedStoryOption}
			 * @readonly
			 */
			public readonly linkedStoryOptions: Adobe.Indesign.LinkedStoryOption;
			/**
			 * The links preference properties that define preferences for 
			 * links.
			 * @type {Adobe.Indesign.LinkingPreference}
			 * @readonly
			 */
			public readonly linkingPreferences: Adobe.Indesign.LinkingPreference;
			/**
			 * Delay before mouse operations trigger live screen drawing of 
			 * page items.
			 * @type {Adobe.Indesign.LiveDrawingOptions}
			 */
			public liveScreenDrawing: Adobe.Indesign.LiveDrawingOptions;
			/**
			 * The locale of the application.
			 * @type {Adobe.Indesign.Locale}
			 * @readonly
			 */
			public readonly locale: Adobe.Indesign.Locale;
			/**
			 * Margin preference settings.
			 * @type {Adobe.Indesign.MarginPreference}
			 * @readonly
			 */
			public readonly marginPreferences: Adobe.Indesign.MarginPreference;
			/**
			 * A collection of menu actions.
			 * @type {Adobe.Indesign.MenuActions}
			 * @readonly
			 */
			public readonly menuActions: Adobe.Indesign.MenuActions;
			/**
			 * A collection of menus.
			 * @type {Adobe.Indesign.Menus}
			 * @readonly
			 */
			public readonly menus: Adobe.Indesign.Menus;
			/**
			 * A collection of mixed ink groups.
			 * @type {Adobe.Indesign.MixedInkGroups}
			 * @readonly
			 */
			public readonly mixedInkGroups: Adobe.Indesign.MixedInkGroups;
			/**
			 * A collection of mixed inks.
			 * @type {Adobe.Indesign.MixedInks}
			 * @readonly
			 */
			public readonly mixedInks: Adobe.Indesign.MixedInks;
			/**
			 * If true, a modal dialog or alert is active.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly modalState: boolean;
			/**
			 * A collection of mojikumi tables.
			 * @type {Adobe.Indesign.MojikumiTables}
			 * @readonly
			 */
			public readonly mojikumiTables: Adobe.Indesign.MojikumiTables;
			/**
			 * Mojikumi user interface preference settings.
			 * @type {Adobe.Indesign.MojikumiUiPreference}
			 * @readonly
			 */
			public readonly mojikumiUIPreferences: Adobe.Indesign.MojikumiUiPreference;
			/**
			 * A collection of Motion presets.
			 * @type {Adobe.Indesign.MotionPresets}
			 * @readonly
			 */
			public readonly motionPresets: Adobe.Indesign.MotionPresets;
			/**
			 * The name of the Application.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * A collection of named grids.
			 * @type {Adobe.Indesign.NamedGrids}
			 * @readonly
			 */
			public readonly namedGrids: Adobe.Indesign.NamedGrids;
			/**
			 * Note preference settings.
			 * @type {Adobe.Indesign.NotePreference}
			 * @readonly
			 */
			public readonly notePreferences: Adobe.Indesign.NotePreference;
			/**
			 * A collection of numbered lists.
			 * @type {Adobe.Indesign.NumberingLists}
			 * @readonly
			 */
			public readonly numberingLists: Adobe.Indesign.NumberingLists;
			/**
			 * A collection of object style groups.
			 * @type {Adobe.Indesign.ObjectStyleGroups}
			 * @readonly
			 */
			public readonly objectStyleGroups: Adobe.Indesign.ObjectStyleGroups;
			/**
			 * A collection of object styles.
			 * @type {Adobe.Indesign.ObjectStyles}
			 * @readonly
			 */
			public readonly objectStyles: Adobe.Indesign.ObjectStyles;
			/**
			 * The default page item formatting for the Application.
			 * @type {Adobe.Indesign.PageItemDefault}
			 * @readonly
			 */
			public readonly pageItemDefaults: Adobe.Indesign.PageItemDefault;
			/**
			 * A collection of panels.
			 * @type {Adobe.Indesign.Panels}
			 * @readonly
			 */
			public readonly panels: Adobe.Indesign.Panels;
			/**
			 * A collection of paragraph style groups.
			 * @type {Adobe.Indesign.ParagraphStyleGroups}
			 * @readonly
			 */
			public readonly paragraphStyleGroups: Adobe.Indesign.ParagraphStyleGroups;
			/**
			 * A collection of paragraph styles.
			 * @type {Adobe.Indesign.ParagraphStyles}
			 * @readonly
			 */
			public readonly paragraphStyles: Adobe.Indesign.ParagraphStyles;
			/**
			 * A collection of para style mappings.
			 * @type {Adobe.Indesign.ParaStyleMappings}
			 * @readonly
			 */
			public readonly paraStyleMappings: Adobe.Indesign.ParaStyleMappings;
			/**
			 * The parent of the Application (a Application).
			 * @type {Adobe.Indesign.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * Pasteboard preference settings.
			 * @type {Adobe.Indesign.PasteboardPreference}
			 * @readonly
			 */
			public readonly pasteboardPreferences: Adobe.Indesign.PasteboardPreference;
			/**
			 * A collection of PDF export preferences.
			 * @type {Adobe.Indesign.PDFExportPreference}
			 * @readonly
			 */
			public readonly pdfExportPreferences: Adobe.Indesign.PDFExportPreference;
			/**
			 * A collection of PDF export presets.
			 * @type {Adobe.Indesign.PDFExportPresets}
			 * @readonly
			 */
			public readonly pdfExportPresets: Adobe.Indesign.PDFExportPresets;
			/**
			 * The PDF place preference properties that define how PDF 
			 * files are placed in the current document.
			 * @type {Adobe.Indesign.PDFPlacePreference}
			 * @readonly
			 */
			public readonly pdfPlacePreferences: Adobe.Indesign.PDFPlacePreference;
			/**
			 * The available performance metrics.
			 * @type {any}
			 * @readonly
			 */
			public readonly performanceMetrics: any;
			/**
			 * Lists the extensions of file types that can be placed.
			 * @type {any}
			 * @readonly
			 */
			public readonly placeableFileExtensions: any;
			/**
			 * Lists the types of files that can be placed.
			 * @type {any}
			 * @readonly
			 */
			public readonly placeableFileTypes: any;
			/**
			 * PNG export preferences.
			 * @type {Adobe.Indesign.PNGExportPreference}
			 * @readonly
			 */
			public readonly pngExportPreferences: Adobe.Indesign.PNGExportPreference;
			/**
			 * Polygon preference properties to use to define default 
			 * settings for creating a polygon.
			 * @type {Adobe.Indesign.PolygonPreference}
			 * @readonly
			 */
			public readonly polygonPreferences: Adobe.Indesign.PolygonPreference;
			/**
			 * A collection of preferences objects.
			 * @type {Adobe.Indesign.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * Preflight book option settings.
			 * @type {Adobe.Indesign.PreflightBookOption}
			 * @readonly
			 */
			public readonly preflightBookOptions: Adobe.Indesign.PreflightBookOption;
			/**
			 * Preflight option settings.
			 * @type {Adobe.Indesign.PreflightOption}
			 * @readonly
			 */
			public readonly preflightOptions: Adobe.Indesign.PreflightOption;
			/**
			 * A collection of preflight processes.
			 * @type {Adobe.Indesign.PreflightProcesses}
			 * @readonly
			 */
			public readonly preflightProcesses: Adobe.Indesign.PreflightProcesses;
			/**
			 * A collection of preflight profiles.
			 * @type {Adobe.Indesign.PreflightProfiles}
			 * @readonly
			 */
			public readonly preflightProfiles: Adobe.Indesign.PreflightProfiles;
			/**
			 * A collection of preflight rules.
			 * @type {Adobe.Indesign.PreflightRules}
			 * @readonly
			 */
			public readonly preflightRules: Adobe.Indesign.PreflightRules;
			/**
			 * A collection of printer presets.
			 * @type {Adobe.Indesign.PrinterPresets}
			 * @readonly
			 */
			public readonly printerPresets: Adobe.Indesign.PrinterPresets;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The names of the items in the redo stack.
			 * @type {any}
			 * @readonly
			 */
			public readonly redoHistory: any;
			/**
			 * The name of the action on the top of the redo stack.
			 * @type {string}
			 * @readonly
			 */
			public readonly redoName: string;
			/**
			 * Arguments to pass to a script.
			 * @type {Adobe.Indesign.ScriptArg}
			 * @readonly
			 */
			public readonly scriptArgs: Adobe.Indesign.ScriptArg;
			/**
			 * A collection of script menu actions.
			 * @type {Adobe.Indesign.ScriptMenuActions}
			 * @readonly
			 */
			public readonly scriptMenuActions: Adobe.Indesign.ScriptMenuActions;
			/**
			 * Script preferences.
			 * @type {Adobe.Indesign.ScriptPreference}
			 * @readonly
			 */
			public readonly scriptPreferences: Adobe.Indesign.ScriptPreference;
			/**
			 * The selected object(s). Can also accept: Object or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public selection: any;
			/**
			 * The key object of the selection. Can also accept: 
			 * NothingEnum enumerator.
			 * @type {Adobe.Indesign.PageItem}
			 */
			public selectionKeyObject: Adobe.Indesign.PageItem;
			/**
			 * The user's serial number.
			 * @type {string}
			 * @readonly
			 */
			public readonly serialNumber: string;
			/**
			 * Smart Guide preference properties.
			 * @type {Adobe.Indesign.SmartGuidePreference}
			 * @readonly
			 */
			public readonly smartGuidePreferences: Adobe.Indesign.SmartGuidePreference;
			/**
			 * Spell-check preferences.
			 * @type {Adobe.Indesign.SpellPreference}
			 * @readonly
			 */
			public readonly spellPreferences: Adobe.Indesign.SpellPreference;
			/**
			 * Default properties specific to frame grids.
			 * @type {Adobe.Indesign.StoryGridDataInformation}
			 * @readonly
			 */
			public readonly storyGridData: Adobe.Indesign.StoryGridDataInformation;
			/**
			 * Story preference settings.
			 * @type {Adobe.Indesign.StoryPreference}
			 * @readonly
			 */
			public readonly storyPreferences: Adobe.Indesign.StoryPreference;
			/**
			 * A collection of story windows.
			 * @type {Adobe.Indesign.StoryWindows}
			 * @readonly
			 */
			public readonly storyWindows: Adobe.Indesign.StoryWindows;
			/**
			 * A collection of striped stroke styles.
			 * @type {Adobe.Indesign.StripedStrokeStyles}
			 * @readonly
			 */
			public readonly stripedStrokeStyles: Adobe.Indesign.StripedStrokeStyles;
			/**
			 * Stroke/fill proxy settings.
			 * @type {Adobe.Indesign.StrokeFillProxySetting}
			 * @readonly
			 */
			public readonly strokeFillProxySettings: Adobe.Indesign.StrokeFillProxySetting;
			/**
			 * A collection of stroke styles.
			 * @type {Adobe.Indesign.StrokeStyles}
			 * @readonly
			 */
			public readonly strokeStyles: Adobe.Indesign.StrokeStyles;
			/**
			 * A collection of swatches.
			 * @type {Adobe.Indesign.Swatches}
			 * @readonly
			 */
			public readonly swatches: Adobe.Indesign.Swatches;
			/**
			 * SWF export preferences.
			 * @type {Adobe.Indesign.SWFExportPreference}
			 * @readonly
			 */
			public readonly swfExportPreferences: Adobe.Indesign.SWFExportPreference;
			/**
			 * A collection of table style groups.
			 * @type {Adobe.Indesign.TableStyleGroups}
			 * @readonly
			 */
			public readonly tableStyleGroups: Adobe.Indesign.TableStyleGroups;
			/**
			 * A collection of table style mappings.
			 * @type {Adobe.Indesign.TableStyleMappings}
			 * @readonly
			 */
			public readonly tableStyleMappings: Adobe.Indesign.TableStyleMappings;
			/**
			 * A collection of table styles.
			 * @type {Adobe.Indesign.TableStyles}
			 * @readonly
			 */
			public readonly tableStyles: Adobe.Indesign.TableStyles;
			/**
			 * Tagged PDF preferences.
			 * @type {Adobe.Indesign.TaggedPDFPreference}
			 * @readonly
			 */
			public readonly taggedPDFPreferences: Adobe.Indesign.TaggedPDFPreference;
			/**
			 * Tagged text export preferences.
			 * @type {Adobe.Indesign.TaggedTextExportPreference}
			 * @readonly
			 */
			public readonly taggedTextExportPreferences: Adobe.Indesign.TaggedTextExportPreference;
			/**
			 * Tagged text import preferences.
			 * @type {Adobe.Indesign.TaggedTextImportPreference}
			 * @readonly
			 */
			public readonly taggedTextImportPreferences: Adobe.Indesign.TaggedTextImportPreference;
			/**
			 * Text default settings.
			 * @type {Adobe.Indesign.TextDefault}
			 * @readonly
			 */
			public readonly textDefaults: Adobe.Indesign.TextDefault;
			/**
			 * Text editing preference settings.
			 * @type {Adobe.Indesign.TextEditingPreference}
			 * @readonly
			 */
			public readonly textEditingPreferences: Adobe.Indesign.TextEditingPreference;
			/**
			 * Text export preferences.
			 * @type {Adobe.Indesign.TextExportPreference}
			 * @readonly
			 */
			public readonly textExportPreferences: Adobe.Indesign.TextExportPreference;
			/**
			 * Text frame preference settings.
			 * @type {Adobe.Indesign.TextFramePreference}
			 * @readonly
			 */
			public readonly textFramePreferences: Adobe.Indesign.TextFramePreference;
			/**
			 * Text import preferences.
			 * @type {Adobe.Indesign.TextImportPreference}
			 * @readonly
			 */
			public readonly textImportPreferences: Adobe.Indesign.TextImportPreference;
			/**
			 * Text preference settings.
			 * @type {Adobe.Indesign.TextPreference}
			 * @readonly
			 */
			public readonly textPreferences: Adobe.Indesign.TextPreference;
			/**
			 * A collection of text variables.
			 * @type {Adobe.Indesign.TextVariables}
			 * @readonly
			 */
			public readonly textVariables: Adobe.Indesign.TextVariables;
			/**
			 * The text wrap preference properties that define the default 
			 * formatting for wrapping text around objects.
			 * @type {Adobe.Indesign.TextWrapPreference}
			 * @readonly
			 */
			public readonly textWrapPreferences: Adobe.Indesign.TextWrapPreference;
			/**
			 * A collection of tints.
			 * @type {Adobe.Indesign.Tints}
			 * @readonly
			 */
			public readonly tints: Adobe.Indesign.Tints;
			/**
			 * The current tool box states
			 * @type {Adobe.Indesign.ToolBox}
			 * @readonly
			 */
			public readonly toolBoxTools: Adobe.Indesign.ToolBox;
			/**
			 * Track changes preference settings.
			 * @type {Adobe.Indesign.TrackChangesPreference}
			 * @readonly
			 */
			public readonly trackChangesPreferences: Adobe.Indesign.TrackChangesPreference;
			/**
			 * A collection of transformation matrices.
			 * @type {Adobe.Indesign.TransformationMatrices}
			 * @readonly
			 */
			public readonly transformationMatrices: Adobe.Indesign.TransformationMatrices;
			/**
			 * Transform preference properties that define default 
			 * behaviors when transforming objects. Note: Transforming 
			 * includes rotation, scaling, flipping, and shearing.
			 * @type {Adobe.Indesign.TransformPreference}
			 * @readonly
			 */
			public readonly transformPreferences: Adobe.Indesign.TransformPreference;
			/**
			 * Transparency preference settings.
			 * @type {Adobe.Indesign.TransparencyPreference}
			 * @readonly
			 */
			public readonly transparencyPreferences: Adobe.Indesign.TransparencyPreference;
			/**
			 * A collection of trap presets.
			 * @type {Adobe.Indesign.TrapPresets}
			 * @readonly
			 */
			public readonly trapPresets: Adobe.Indesign.TrapPresets;
			/**
			 * The names of the items in the undo stack.
			 * @type {any}
			 * @readonly
			 */
			public readonly undoHistory: any;
			/**
			 * The name of the action on the top of the undo stack.
			 * @type {string}
			 * @readonly
			 */
			public readonly undoName: string;
			/**
			 * The swatches that are not being used.
			 * @type {any}
			 * @readonly
			 */
			public readonly unusedSwatches: any;
			/**
			 * The color assigned to the tracked changes and notes created 
			 * by the user, specified either as an array of three doubles, 
			 * each in the range 0 to 255 and representing R, G, and B 
			 * values, or as an InCopy UI color. Can return: Array of 3 
			 * Reals (0 - 255) or InCopyUIColors enumerator.
			 * @type {any}
			 */
			public userColor: any;
			/**
			 * A collection of user dictionaries.
			 * @type {Adobe.Indesign.UserDictionaries}
			 * @readonly
			 */
			public readonly userDictionaries: Adobe.Indesign.UserDictionaries;
			/**
			 * The user associated with the tracked changes and notes.
			 * @type {string}
			 */
			public userName: string;
			/**
			 * The application version.
			 * @type {string}
			 * @readonly
			 */
			public readonly version: string;
			/**
			 * View preference settings.
			 * @type {Adobe.Indesign.ViewPreference}
			 * @readonly
			 */
			public readonly viewPreferences: Adobe.Indesign.ViewPreference;
			/**
			 * If true, the Application is visible.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly visible: boolean;
			/**
			 * Watermark preferences
			 * @type {Adobe.Indesign.WatermarkPreference}
			 * @readonly
			 */
			public readonly watermarkPreferences: Adobe.Indesign.WatermarkPreference;
			/**
			 * A collection of windows.
			 * @type {Adobe.Indesign.Windows}
			 * @readonly
			 */
			public readonly windows: Adobe.Indesign.Windows;
			/**
			 * Word and RTF import preferences.
			 * @type {Adobe.Indesign.WordRTFImportPreference}
			 * @readonly
			 */
			public readonly wordRTFImportPreferences: Adobe.Indesign.WordRTFImportPreference;
			/**
			 * XFL export preferences.
			 * @type {Adobe.Indesign.XFLExportPreference}
			 * @readonly
			 */
			public readonly xflExportPreferences: Adobe.Indesign.XFLExportPreference;
			/**
			 * A collection of XML export maps.
			 * @type {Adobe.Indesign.XMLExportMaps}
			 * @readonly
			 */
			public readonly xmlExportMaps: Adobe.Indesign.XMLExportMaps;
			/**
			 * XML export preference settings.
			 * @type {Adobe.Indesign.XMLExportPreference}
			 * @readonly
			 */
			public readonly xmlExportPreferences: Adobe.Indesign.XMLExportPreference;
			/**
			 * A collection of XML import maps.
			 * @type {Adobe.Indesign.XMLImportMaps}
			 * @readonly
			 */
			public readonly xmlImportMaps: Adobe.Indesign.XMLImportMaps;
			/**
			 * XML import preference settings.
			 * @type {Adobe.Indesign.XMLImportPreference}
			 * @readonly
			 */
			public readonly xmlImportPreferences: Adobe.Indesign.XMLImportPreference;
			/**
			 * The XML preference settings.
			 * @type {Adobe.Indesign.XMLPreference}
			 * @readonly
			 */
			public readonly xmlPreferences: Adobe.Indesign.XMLPreference;
			/**
			 * A collection of XML rule processors.
			 * @type {Adobe.Indesign.XMLRuleProcessors}
			 * @readonly
			 */
			public readonly xmlRuleProcessors: Adobe.Indesign.XMLRuleProcessors;
			/**
			 * A collection of XML tags.
			 * @type {Adobe.Indesign.XMLTags}
			 * @readonly
			 */
			public readonly xmlTags: Adobe.Indesign.XMLTags;
			/**
			 * XML view preference settings.
			 * @type {Adobe.Indesign.XMLViewPreference}
			 * @readonly
			 */
			public readonly xmlViewPreferences: Adobe.Indesign.XMLViewPreference;
			/**
			 * Makes the application the front-most or active window.
			 * @returns {void}
			 */
			public activate(): void;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerApplication(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Applies the specified menu customization set. An empty 
			 * string will reset all menus and colorization (Show Full 
			 * Menus). No string will apply the default menu set.
			 * @param {string} nameParam The menu customization set. 
			 * (Optional)
			 * @returns {void}
			 */
			public applyMenuCustomization(nameParam: string): void;
			/**
			 * Applies the specified shortcut set file. No string will 
			 * apply the default shortcut set.
			 * @param {string} nameParam The shortcut set. (Optional)
			 * @returns {void}
			 */
			public applyShortcutSet(nameParam: string): void;
			/**
			 * Applies the specified workspace.
			 * @param {string} nameParam The workspace. (Optional)
			 * @returns {void}
			 */
			public applyWorkspace(nameParam: string): void;
			/**
			 * Cancels all the background tasks.
			 * @returns {void}
			 */
			public cancelAllTasks(): void;
			/**
			 * Cascades all document windows.
			 * @returns {void}
			 */
			public cascadeWindows(): void;
			/**
			 * Finds glyphs that match the find what value and replaces the 
			 * glyphs with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeGlyph(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeGrep(reverseOrderParam: boolean): any;
			/**
			 * Finds objects that match the find what value and replace the 
			 * objects with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeObject(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value and 
			 * replaces the text with the change character type value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Removes the frame fittings options and resets it to the 
			 * initial state.
			 * @returns {void}
			 */
			public clearFrameFittingOptions(): void;
			/**
			 * Copies the selection in the active document window to the 
			 * clipboard.
			 * @returns {void}
			 */
			public copy(): void;
			/**
			 * Cuts the selection in the active document window and stores 
			 * it in the clipboard.
			 * @returns {void}
			 */
			public cut(): void;
			/**
			 * Deletes the specified find/change query.
			 * @param {string} queryNameParam The query to delete.
			 * @param {SearchModes} searchModeParam The search mode.
			 * @returns {void}
			 */
			public deleteFindChangeQuery(queryNameParam: string, searchModeParam: SearchModes): void;
			/**
			 * Deletes unused XML markup tags.
			 * @returns {void}
			 */
			public deleteUnusedTags(): void;
			/**
			 * Generate Code Via DommyDumper
			 * @param {string} dommytemplateinputfolderParam Holds path to 
			 * template folder as string
			 * @param {string} dommycodeoutputfolderParam Holds path to 
			 * code output folder as string
			 * @returns {void}
			 */
			public dommygeneratecode(dommytemplateinputfolderParam: string, dommycodeoutputfolderParam: string): void;
			/**
			 * Executes the script in the specified language as a single 
			 * transaction.
			 * @param {any} scriptParam The script to execute. Can accept: 
			 * File, String or JavaScript Function.
			 * @param {ScriptLanguage} languageParam The language of the 
			 * script to execute. If not specified, uses the language used 
			 * to call this method. (Optional)
			 * @param {any[]} withArgumentsParam An array of arguments 
			 * passed to the script. (Optional)
			 * @param {UndoModes} undoModeParam How to undo this script. 
			 * (Optional)
			 * @param {string} undoNameParam The name of the undo step for 
			 * entire script undo mode. (Optional)
			 * @returns {any}
			 */
			public doScript(scriptParam: any, languageParam: ScriptLanguage, withArgumentsParam: any[], undoModeParam: UndoModes, undoNameParam: string): any;
			/**
			 * Dumps memory allocations from all marks in the specified 
			 * range.
			 * @param {any[]} fromParam The first mark in the range.
			 * @param {any[]} toParam The last mark in the range.
			 * @returns {void}
			 */
			public dumpBetweenMemoryMarks(fromParam: any[], toParam: any[]): void;
			/**
			 * Dumps memory allocations from the specified mark.
			 * @param {any[]} fromParam The mark from which to dump memory.
			 * @returns {void}
			 */
			public dumpFromMemoryMark(fromParam: any[]): void;
			/**
			 * Export the presets to a file.
			 * @param {ExportPresetFormat} formatParam The preset format.
			 * @param {File} toParam The file to export to.
			 * @param {string} versionCommentsParam The comments for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam Forcibly save a version. 
			 * (Optional)
			 * @returns {void}
			 */
			public exportPresets(formatParam: ExportPresetFormat, toParam: File, versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Exports stroke styles or presets.
			 * @param {File} toParam The file to save to
			 * @param {any[]} strokeStyleListParam The list of stroke 
			 * styles to save
			 * @param {string} versionCommentsParam The comment for this 
			 * version (Optional)
			 * @param {boolean} forceSaveParam Forcibly save a version 
			 * (Optional)
			 * @returns {void}
			 */
			public exportStrokeStyles(toParam: File, strokeStyleListParam: any[], versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Finds glyphs that match the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findGlyph(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findGrep(reverseOrderParam: boolean): any;
			/**
			 * Returns the locale-independent string(s) from the internal 
			 * string localization database that correspond to the 
			 * specified string (in the current locale).
			 * @param {string} forParam The string to search for.
			 * @returns {any}
			 */
			public findKeyStrings(forParam: string): any;
			/**
			 * Finds objects that match the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findObject(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Generate schema for IDML.
			 * @param {File} toParam The folder path of the schema.
			 * @param {boolean} packageFormatParam If true, generate schema 
			 * for package format (multiple files). Default value is false. 
			 * (Optional)
			 * @returns {void}
			 */
			public generateIDMLSchema(toParam: File, packageFormatParam: boolean): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Imports a process color swatch from a preloaded Adobe color 
			 * book.
			 * @param {string} nameParam The process color to load.
			 * @returns {Adobe.Indesign.Color}
			 */
			public importAdobeSwatchbookProcessColor(nameParam: string): Adobe.Indesign.Color;
			/**
			 * Imports a spot color swatch from an Adobe color book.
			 * @param {string} nameParam The spot color to load.
			 * @returns {Adobe.Indesign.Color}
			 */
			public importAdobeSwatchbookSpotColor(nameParam: string): Adobe.Indesign.Color;
			/**
			 * Imports presets from the specified file.
			 * @param {ExportPresetFormat} formatParam The type of preset 
			 * to import. 
			 * @param {File} fromParam The file to import presets from.
			 * @returns {void}
			 */
			public importFile(formatParam: ExportPresetFormat, fromParam: File): void;
			/**
			 * Imports the specified styles.
			 * @param {ImportFormat} formatParam The types of styles to 
			 * import.
			 * @param {File} fromParam The file containing the styles you 
			 * want to import.
			 * @param {GlobalClashResolutionStrategy} globalStrategyParam 
			 * The resolution strategy to employ for imported styles that 
			 * have the same names as existing styles. (Optional)
			 * @returns {void}
			 */
			public importStyles(formatParam: ImportFormat, fromParam: File, globalStrategyParam: GlobalClashResolutionStrategy): void;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Load conditions from the specified file.
			 * @param {File} fromParam The path to the file that contains 
			 * the conditions.
			 * @param {boolean} loadConditionSetsParam If true, load the 
			 * condition sets as well. (Optional)
			 * @returns {void}
			 */
			public loadConditions(fromParam: File, loadConditionSetsParam: boolean): void;
			/**
			 * Loads the specified find/change query.
			 * @param {string} queryNameParam The query to load.
			 * @param {SearchModes} searchModeParam The search mode.
			 * @returns {void}
			 */
			public loadFindChangeQuery(queryNameParam: string, searchModeParam: SearchModes): void;
			/**
			 * Load motion preset from the specified file.
			 * @param {File} fromParam The Flash motion preset file.
			 * @returns {Adobe.Indesign.MotionPreset}
			 */
			public loadMotionPreset(fromParam: File): Adobe.Indesign.MotionPreset;
			/**
			 * Load preflight profile from the specified file.
			 * @param {File} fromParam The InDesign preflight profile file 
			 * or InDesign document.
			 * @returns {Adobe.Indesign.PreflightProfile}
			 */
			public loadPreflightProfile(fromParam: File): Adobe.Indesign.PreflightProfile;
			/**
			 * Load swatches from the specified file.
			 * @param {File} fromParam The swatch file or InDesign 
			 * document.
			 * @returns {void}
			 */
			public loadSwatches(fromParam: File): void;
			/**
			 * Loads a set of XML markup tags from the specified file.
			 * @param {File} fromParam The path to the file that contains 
			 * the tags.
			 * @returns {void}
			 */
			public loadXMLTags(fromParam: File): void;
			/**
			 * Gets the memory statistics from the server.
			 * @returns {any}
			 */
			public memoryStatistics(): any;
			/**
			 * Mount a Version Cue project.
			 * @param {string} serverURLParam The URL of the Version Cue 
			 * server containing the project
			 * @param {string} projectNameParam The name of the Version Cue 
			 * project to mount
			 * @returns {void}
			 */
			public mountProject(serverURLParam: string, projectNameParam: string): void;
			/**
			 * Opens the specified document, book, or library.
			 * @param {any} fromParam The file path(s) to the document, 
			 * book, or library. Can accept: File or Array of Files.
			 * @param {boolean} showingWindowParam If true, opens the 
			 * document in a window. If false, the document is opened but 
			 * is not displayed in a window. (Optional)
			 * @param {OpenOptions} openOptionParam How to open the 
			 * document. (Optional)
			 * @returns {any}
			 */
			public open(fromParam: any, showingWindowParam: boolean, openOptionParam: OpenOptions): any;
			/**
			 * Package a folder into a UCF file.
			 * @param {File} sourceFolderParam The folder to be packaged 
			 * into an IDML file. Does not validate structure of the folder 
			 * pursuant to the IDML spec. Caller is responsible for making 
			 * sure the files in the folder are correctly organized.
			 * @param {File} ucfFileParam The destination UCF file. Will be 
			 * overwritten if it already exists.
			 * @param {string} mimeMediaTypeParam
			 * @returns {void}
			 */
			public packageUCF(sourceFolderParam: File, ucfFileParam: File, mimeMediaTypeParam: string): void;
			/**
			 * Pastes data from the clipboard into the active document 
			 * window.
			 * @returns {void}
			 */
			public paste(): void;
			/**
			 * Pastes data from the clipboard into the active document 
			 * window at the same position that the data held in its 
			 * original document.
			 * @returns {void}
			 */
			public pasteInPlace(): void;
			/**
			 * Pastes data from the clipboard into the selected object in 
			 * the active document window.
			 * @returns {void}
			 */
			public pasteInto(): void;
			/**
			 * Pastes data (minus formatting) from the clipboard into the 
			 * active document window.
			 * @returns {void}
			 */
			public pasteWithoutFormatting(): void;
			/**
			 * Gets the current value of the specified performance metric.
			 * @param {any} forParam The status to get from InDesign. Can 
			 * accept: Long Integer or PerformanceMetricOptions enumerator.
			 * @returns {any}
			 */
			public performanceMetric(forParam: any): any;
			/**
			 * Gets the long name of the specified performance metric.
			 * @param {any} forParam The status to get from InDesign. Can 
			 * accept: Long Integer or PerformanceMetricOptions enumerator.
			 * @returns {string}
			 */
			public performanceMetricLongName(forParam: any): string;
			/**
			 * Gets the short name of the specified performance metric.
			 * @param {any} forParam The status to get from InDesign. Can 
			 * accept: Long Integer or PerformanceMetricOptions enumerator.
			 * @returns {string}
			 */
			public performanceMetricShortName(forParam: any): string;
			/**
			 * Place one or more files following the behavior of the place 
			 * menu item. This may load the place gun or replace the 
			 * selected object, depending on current preferences.
			 * @param {any} fileNameParam One or more files to place. Can 
			 * accept: File or Array of Files.
			 * @param {boolean} showingOptionsParam Whether to display the 
			 * import options dialog (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the placed object(s) (Optional)
			 * @returns {void}
			 */
			public place(fileNameParam: any, showingOptionsParam: boolean, withPropertiesParam: any): void;
			/**
			 * Prints the specified file(s).
			 * @param {any} fromParam One or more file paths. Can accept: 
			 * File or Array of Files.
			 * @param {boolean} printDialogParam Whether to invoke the 
			 * print dialog (Optional)
			 * @param {any} usingParam Printer preset to use. Can accept: 
			 * PrinterPresetTypes enumerator or PrinterPreset. (Optional)
			 * @returns {void}
			 */
			public print(fromParam: any, printDialogParam: boolean, usingParam: any): void;
			/**
			 * Quits the application.
			 * @param {SaveOptions} savingParam The option to use for 
			 * saving changes to open documents before quitting. (Optional)
			 * @returns {void}
			 */
			public quit(savingParam: SaveOptions): void;
			/**
			 * Redoes the last action.
			 * @returns {void}
			 */
			public redo(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerApplication(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Saves the specified find/change query.
			 * @param {string} queryNameParam The query to save.
			 * @param {SearchModes} searchModeParam The search mode.
			 * @returns {void}
			 */
			public saveFindChangeQuery(queryNameParam: string, searchModeParam: SearchModes): void;
			/**
			 * Saves the specified swatch(es) to a swatchbook file.
			 * @param {File} toParam The swatchbook file to save to.
			 * @param {any[]} swatchListParam The swatch(es) to save.
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {void}
			 */
			public saveSwatches(toParam: File, swatchListParam: any[], versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Saves a set of tags to an external file.
			 * @param {File} toParam The full path to the file in which to 
			 * save the tags.
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {void}
			 */
			public saveXMLTags(toParam: File, versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Selects the specified object(s).
			 * @param {any} selectableItemsParam The objects to select. Can 
			 * accept: Object, Array of Objects, NothingEnum enumerator or 
			 * SelectAll enumerator.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the Application in relation to 
			 * previously selected objects. (Optional)
			 * @returns {void}
			 */
			public select(selectableItemsParam: any, existingSelectionParam: SelectionOptions): void;
			/**
			 * Sets the application's preferences.
			 * @param {any} applicationPreferencesParam The IDML defaults 
			 * file or enumeration. Can accept: File or LanguageAndRegion 
			 * enumerator.
			 * @returns {void}
			 */
			public setApplicationPreferences(applicationPreferencesParam: any): void;
			/**
			 * Tile all document windows
			 * @returns {void}
			 */
			public tileWindows(): void;
			/**
			 * Toggles the visibility of the entire panel system.
			 * @returns {void}
			 */
			public togglePanelSystemVisibility(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Translates a key string into localized form based on current 
			 * application locale.
			 * @param {string} forParam The key string to translate
			 * @returns {string}
			 */
			public translateKeyString(forParam: string): string;
			/**
			 * Undoes the last action.
			 * @returns {void}
			 */
			public undo(): void;
			/**
			 * Unpackage a UCF file into a folder structure.
			 * @param {File} ucfFileParam The UCF file to be unpackaged.
			 * @param {File} destinationFolderParam The folder where you 
			 * would like the UCF file unpackaged to. Will be created if it 
			 * does not exist.
			 * @returns {void}
			 */
			public unpackageUCF(ucfFileParam: File, destinationFolderParam: File): void;
			/**
			 * Forces a check for new fonts in the various Fonts folders.
			 * @returns {void}
			 */
			public updateFonts(): void;
			/**
			 * Waits for all the background tasks to finish.
			 * @returns {any}
			 */
			public waitForAllTasks(): any;
		}
	}
}