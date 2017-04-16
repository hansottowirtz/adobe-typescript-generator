/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Application extends Adobe.Csawlib.CSHostObject {
			/**
			 * The front-most document.
			 * @type {Adobe.Incopy.Document}
			 */
			public activeDocument: Adobe.Incopy.Document;
			/**
			 * The current script running from the Scripts panel.
			 * @type {File}
			 * @readonly
			 */
			public readonly activeScript: File;
			/**
			 * The undo mode for the current script execution.
			 * @type {Adobe.Incopy.UndoModes}
			 * @readonly
			 */
			public readonly activeScriptUndoMode: Adobe.Incopy.UndoModes;
			/**
			 * The front-most window.
			 * @type {Adobe.Incopy.Window}
			 */
			public activeWindow: Adobe.Incopy.Window;
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
			 * Lists all paragraph styles (regardless of their group).
			 * @type {any}
			 * @readonly
			 */
			public readonly allParagraphStyles: any;
			/**
			 * All Table styles
			 * @type {any}
			 * @readonly
			 */
			public readonly allTableStyles: any;
			/**
			 * Anchored object default settings.
			 * @type {Adobe.Incopy.AnchoredObjectDefault}
			 * @readonly
			 */
			public readonly anchoredObjectDefaults: Adobe.Incopy.AnchoredObjectDefault;
			/**
			 * Anchored object settings.
			 * @type {Adobe.Incopy.AnchoredObjectSetting}
			 * @readonly
			 */
			public readonly anchoredObjectSettings: Adobe.Incopy.AnchoredObjectSetting;
			/**
			 * Auto-correct preferences.
			 * @type {Adobe.Incopy.AutoCorrectPreference}
			 * @readonly
			 */
			public readonly autoCorrectPreferences: Adobe.Incopy.AutoCorrectPreference;
			/**
			 * A collection of auto-correct tables.
			 * @type {Adobe.Incopy.AutoCorrectTables}
			 * @readonly
			 */
			public readonly autoCorrectTables: Adobe.Incopy.AutoCorrectTables;
			/**
			 * If true, expands text macros automatically when the macro is 
			 * typed in the document. If false, the macro remains as typed.
			 * @type {boolean}
			 */
			public autoExpandTextMacros: boolean;
			/**
			 * A collection of background task objects.
			 * @type {Adobe.Incopy.BackgroundTasks}
			 * @readonly
			 */
			public readonly backgroundTasks: Adobe.Incopy.BackgroundTasks;
			/**
			 * Baseline frame grid option settings.
			 * @type {Adobe.Incopy.BaselineFrameGridOption}
			 * @readonly
			 */
			public readonly baselineFrameGridOptions: Adobe.Incopy.BaselineFrameGridOption;
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
			 * A collection of cell style groups.
			 * @type {Adobe.Incopy.CellStyleGroups}
			 * @readonly
			 */
			public readonly cellStyleGroups: Adobe.Incopy.CellStyleGroups;
			/**
			 * A collection of cell styles.
			 * @type {Adobe.Incopy.CellStyles}
			 * @readonly
			 */
			public readonly cellStyles: Adobe.Incopy.CellStyles;
			/**
			 * Change glyph preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Incopy.ChangeGlyphPreference}
			 */
			public changeGlyphPreferences: Adobe.Incopy.ChangeGlyphPreference;
			/**
			 * Change grep preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Incopy.ChangeGrepPreference}
			 */
			public changeGrepPreferences: Adobe.Incopy.ChangeGrepPreference;
			/**
			 * Change text preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Incopy.ChangeTextPreference}
			 */
			public changeTextPreferences: Adobe.Incopy.ChangeTextPreference;
			/**
			 * Change transliterate preferences. Can also accept: 
			 * NothingEnum enumerator.
			 * @type {Adobe.Incopy.ChangeTransliteratePreference}
			 */
			public changeTransliteratePreferences: Adobe.Incopy.ChangeTransliteratePreference;
			/**
			 * A collection of character style groups.
			 * @type {Adobe.Incopy.CharacterStyleGroups}
			 * @readonly
			 */
			public readonly characterStyleGroups: Adobe.Incopy.CharacterStyleGroups;
			/**
			 * A collection of character styles.
			 * @type {Adobe.Incopy.CharacterStyles}
			 * @readonly
			 */
			public readonly characterStyles: Adobe.Incopy.CharacterStyles;
			/**
			 * Clipboard preference properties that define the way that the 
			 * application interacts with the system clipboard.
			 * @type {Adobe.Incopy.ClipboardPreference}
			 * @readonly
			 */
			public readonly clipboardPreferences: Adobe.Incopy.ClipboardPreference;
			/**
			 * A collection of colors.
			 * @type {Adobe.Incopy.Colors}
			 * @readonly
			 */
			public readonly colors: Adobe.Incopy.Colors;
			/**
			 * Conditional text preferences.
			 * @type {Adobe.Incopy.ConditionalTextPreference}
			 * @readonly
			 */
			public readonly conditionalTextPreferences: Adobe.Incopy.ConditionalTextPreference;
			/**
			 * A collection of conditions for conditional text.
			 * @type {Adobe.Incopy.Conditions}
			 * @readonly
			 */
			public readonly conditions: Adobe.Incopy.Conditions;
			/**
			 * A collection of condition sets for conditional text.
			 * @type {Adobe.Incopy.ConditionSets}
			 * @readonly
			 */
			public readonly conditionSets: Adobe.Incopy.ConditionSets;
			/**
			 * A collection of dialogs.
			 * @type {Adobe.Incopy.Dialogs}
			 * @readonly
			 */
			public readonly dialogs: Adobe.Incopy.Dialogs;
			/**
			 * User dictionary preference settings.
			 * @type {Adobe.Incopy.DictionaryPreference}
			 * @readonly
			 */
			public readonly dictionaryPreferences: Adobe.Incopy.DictionaryPreference;
			/**
			 * Document preference settings.
			 * @type {Adobe.Incopy.DocumentPreference}
			 * @readonly
			 */
			public readonly documentPreferences: Adobe.Incopy.DocumentPreference;
			/**
			 * A collection of document presets.
			 * @type {Adobe.Incopy.DocumentPresets}
			 * @readonly
			 */
			public readonly documentPresets: Adobe.Incopy.DocumentPresets;
			/**
			 * A collection of documents.
			 * @type {Adobe.Incopy.Documents}
			 * @readonly
			 */
			public readonly documents: Adobe.Incopy.Documents;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * Excel import preferences.
			 * @type {Adobe.Incopy.ExcelImportPreference}
			 * @readonly
			 */
			public readonly excelImportPreferences: Adobe.Incopy.ExcelImportPreference;
			/**
			 * The default export for web preferences.
			 * @type {Adobe.Incopy.ExportForWebPreference}
			 * @readonly
			 */
			public readonly exportForWebPreferences: Adobe.Incopy.ExportForWebPreference;
			/**
			 * The feature set.
			 * @type {Adobe.Incopy.FeatureSetOptions}
			 * @readonly
			 */
			public readonly featureSet: Adobe.Incopy.FeatureSetOptions;
			/**
			 * The full path to the file.
			 * @type {File}
			 * @readonly
			 */
			public readonly filePath: File;
			/**
			 * Find/change glyph options. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Incopy.FindChangeGlyphOption}
			 */
			public findChangeGlyphOptions: Adobe.Incopy.FindChangeGlyphOption;
			/**
			 * Find/change grep options. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Incopy.FindChangeGrepOption}
			 */
			public findChangeGrepOptions: Adobe.Incopy.FindChangeGrepOption;
			/**
			 * Find/change object options. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Incopy.FindChangeObjectOption}
			 */
			public findChangeObjectOptions: Adobe.Incopy.FindChangeObjectOption;
			/**
			 * Find/change text options. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Incopy.FindChangeTextOption}
			 */
			public findChangeTextOptions: Adobe.Incopy.FindChangeTextOption;
			/**
			 * Find/change transliterate options. Can also accept: 
			 * NothingEnum enumerator.
			 * @type {Adobe.Incopy.FindChangeTransliterateOption}
			 */
			public findChangeTransliterateOptions: Adobe.Incopy.FindChangeTransliterateOption;
			/**
			 * Find glyph preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Incopy.FindGlyphPreference}
			 */
			public findGlyphPreferences: Adobe.Incopy.FindGlyphPreference;
			/**
			 * Find grep preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Incopy.FindGrepPreference}
			 */
			public findGrepPreferences: Adobe.Incopy.FindGrepPreference;
			/**
			 * Find text preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Incopy.FindTextPreference}
			 */
			public findTextPreferences: Adobe.Incopy.FindTextPreference;
			/**
			 * Find transliterate preferences. Can also accept: NothingEnum 
			 * enumerator.
			 * @type {Adobe.Incopy.FindTransliteratePreference}
			 */
			public findTransliteratePreferences: Adobe.Incopy.FindTransliteratePreference;
			/**
			 * Font locking preference settings.
			 * @type {Adobe.Incopy.FontLockingPreference}
			 * @readonly
			 */
			public readonly fontLockingPreferences: Adobe.Incopy.FontLockingPreference;
			/**
			 * A collection of fonts.
			 * @type {Adobe.Incopy.Fonts}
			 * @readonly
			 */
			public readonly fonts: Adobe.Incopy.Fonts;
			/**
			 * Footnote option settings.
			 * @type {Adobe.Incopy.FootnoteOption}
			 * @readonly
			 */
			public readonly footnoteOptions: Adobe.Incopy.FootnoteOption;
			/**
			 * The frame fitting option to apply to placed or pasted 
			 * content. Can be applied to a frame, object style, or 
			 * document or to the application.
			 * @type {Adobe.Incopy.FrameFittingOption}
			 * @readonly
			 */
			public readonly frameFittingOptions: Adobe.Incopy.FrameFittingOption;
			/**
			 * The full path to the Application, including the name of the 
			 * Application.
			 * @type {File}
			 * @readonly
			 */
			public readonly fullName: File;
			/**
			 * PDF galley export preference settings.
			 * @type {Adobe.Incopy.PDFGalleyExportPreference}
			 * @readonly
			 */
			public readonly galleyPDFExportPreferences: Adobe.Incopy.PDFGalleyExportPreference;
			/**
			 * Galley preference settings.
			 * @type {Adobe.Incopy.GalleyPreference}
			 * @readonly
			 */
			public readonly galleyPreferences: Adobe.Incopy.GalleyPreference;
			/**
			 * Galley print preferences.
			 * @type {Adobe.Incopy.GalleyPrintPreference}
			 * @readonly
			 */
			public readonly galleyPrintPreferences: Adobe.Incopy.GalleyPrintPreference;
			/**
			 * General preference settings.
			 * @type {Adobe.Incopy.GeneralPreference}
			 * @readonly
			 */
			public readonly generalPreferences: Adobe.Incopy.GeneralPreference;
			/**
			 * A collection of gradients.
			 * @type {Adobe.Incopy.Gradients}
			 * @readonly
			 */
			public readonly gradients: Adobe.Incopy.Gradients;
			/**
			 * Grid preference settings.
			 * @type {Adobe.Incopy.GridPreference}
			 * @readonly
			 */
			public readonly gridPreferences: Adobe.Incopy.GridPreference;
			/**
			 * Guide preference settings.
			 * @type {Adobe.Incopy.GuidePreference}
			 * @readonly
			 */
			public readonly guidePreferences: Adobe.Incopy.GuidePreference;
			/**
			 * All attachable idle tasks.
			 * @type {Adobe.Incopy.IdleTasks}
			 * @readonly
			 */
			public readonly idleTasks: Adobe.Incopy.IdleTasks;
			/**
			 * The image I/O preference properties that define preferences 
			 * for importing images.
			 * @type {Adobe.Incopy.ImageIOPreference}
			 * @readonly
			 */
			public readonly imageIOPreferences: Adobe.Incopy.ImageIOPreference;
			/**
			 * Image preferences.
			 * @type {Adobe.Incopy.ImagePreference}
			 * @readonly
			 */
			public readonly imagePreferences: Adobe.Incopy.ImagePreference;
			/**
			 * IME preference settings.
			 * @type {Adobe.Incopy.IMEPreference}
			 * @readonly
			 */
			public readonly imePreferences: Adobe.Incopy.IMEPreference;
			/**
			 * Placed InDesign page attributes.
			 * @type {Adobe.Incopy.ImportedPageAttribute}
			 * @readonly
			 */
			public readonly importedPageAttributes: Adobe.Incopy.ImportedPageAttribute;
			/**
			 * Export options for InCopy INCX document format.
			 * @type {Adobe.Incopy.InCopyExportOption}
			 * @readonly
			 */
			public readonly incopyExportOptions: Adobe.Incopy.InCopyExportOption;
			/**
			 * A collection of indexing sort options.
			 * @type {Adobe.Incopy.IndexingSortOptions}
			 * @readonly
			 */
			public readonly indexingSortOptions: Adobe.Incopy.IndexingSortOptions;
			/**
			 * A collection of inks.
			 * @type {Adobe.Incopy.Inks}
			 * @readonly
			 */
			public readonly inks: Adobe.Incopy.Inks;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A collection of kinsoku tables.
			 * @type {Adobe.Incopy.KinsokuTables}
			 * @readonly
			 */
			public readonly kinsokuTables: Adobe.Incopy.KinsokuTables;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * A collection of languages with vendors.
			 * @type {Adobe.Incopy.LanguagesWithVendors}
			 * @readonly
			 */
			public readonly languagesWithVendors: Adobe.Incopy.LanguagesWithVendors;
			/**
			 * PDF layout export preference settings.
			 * @type {Adobe.Incopy.PDFLayoutExportPreference}
			 * @readonly
			 */
			public readonly layoutPDFExportPreferences: Adobe.Incopy.PDFLayoutExportPreference;
			/**
			 * Layout print preferences.
			 * @type {Adobe.Incopy.LayoutPrintPreference}
			 * @readonly
			 */
			public readonly layoutPrintPreferences: Adobe.Incopy.LayoutPrintPreference;
			/**
			 * The links preference properties that define preferences for 
			 * links.
			 * @type {Adobe.Incopy.LinkingPreference}
			 * @readonly
			 */
			public readonly linkingPreferences: Adobe.Incopy.LinkingPreference;
			/**
			 * Delay before mouse operations trigger live screen drawing of 
			 * page items.
			 * @type {Adobe.Incopy.LiveDrawingOptions}
			 */
			public liveScreenDrawing: Adobe.Incopy.LiveDrawingOptions;
			/**
			 * The locale of the application.
			 * @type {Adobe.Incopy.Locale}
			 * @readonly
			 */
			public readonly locale: Adobe.Incopy.Locale;
			/**
			 * Margin preference settings.
			 * @type {Adobe.Incopy.MarginPreference}
			 * @readonly
			 */
			public readonly marginPreferences: Adobe.Incopy.MarginPreference;
			/**
			 * A collection of menu actions.
			 * @type {Adobe.Incopy.MenuActions}
			 * @readonly
			 */
			public readonly menuActions: Adobe.Incopy.MenuActions;
			/**
			 * A collection of menus.
			 * @type {Adobe.Incopy.Menus}
			 * @readonly
			 */
			public readonly menus: Adobe.Incopy.Menus;
			/**
			 * A collection of mixed ink groups.
			 * @type {Adobe.Incopy.MixedInkGroups}
			 * @readonly
			 */
			public readonly mixedInkGroups: Adobe.Incopy.MixedInkGroups;
			/**
			 * A collection of mixed inks.
			 * @type {Adobe.Incopy.MixedInks}
			 * @readonly
			 */
			public readonly mixedInks: Adobe.Incopy.MixedInks;
			/**
			 * If true, a modal dialog or alert is active.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly modalState: boolean;
			/**
			 * A collection of mojikumi tables.
			 * @type {Adobe.Incopy.MojikumiTables}
			 * @readonly
			 */
			public readonly mojikumiTables: Adobe.Incopy.MojikumiTables;
			/**
			 * Mojikumi user interface preference settings.
			 * @type {Adobe.Incopy.MojikumiUiPreference}
			 * @readonly
			 */
			public readonly mojikumiUIPreferences: Adobe.Incopy.MojikumiUiPreference;
			/**
			 * The name of the Application.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * Note preference settings.
			 * @type {Adobe.Incopy.NotePreference}
			 * @readonly
			 */
			public readonly notePreferences: Adobe.Incopy.NotePreference;
			/**
			 * A collection of numbered lists.
			 * @type {Adobe.Incopy.NumberingLists}
			 * @readonly
			 */
			public readonly numberingLists: Adobe.Incopy.NumberingLists;
			/**
			 * The default page item formatting for the Application.
			 * @type {Adobe.Incopy.PageItemDefault}
			 * @readonly
			 */
			public readonly pageItemDefaults: Adobe.Incopy.PageItemDefault;
			/**
			 * A collection of panels.
			 * @type {Adobe.Incopy.Panels}
			 * @readonly
			 */
			public readonly panels: Adobe.Incopy.Panels;
			/**
			 * A collection of paragraph style groups.
			 * @type {Adobe.Incopy.ParagraphStyleGroups}
			 * @readonly
			 */
			public readonly paragraphStyleGroups: Adobe.Incopy.ParagraphStyleGroups;
			/**
			 * A collection of paragraph styles.
			 * @type {Adobe.Incopy.ParagraphStyles}
			 * @readonly
			 */
			public readonly paragraphStyles: Adobe.Incopy.ParagraphStyles;
			/**
			 * The parent of the Application (a Application).
			 * @type {Adobe.Incopy.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Incopy.Application;
			/**
			 * Pasteboard preference settings.
			 * @type {Adobe.Incopy.PasteboardPreference}
			 * @readonly
			 */
			public readonly pasteboardPreferences: Adobe.Incopy.PasteboardPreference;
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
			 * A collection of preferences objects.
			 * @type {Adobe.Incopy.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Incopy.Preferences;
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
			 * @type {Adobe.Incopy.ScriptArg}
			 * @readonly
			 */
			public readonly scriptArgs: Adobe.Incopy.ScriptArg;
			/**
			 * A collection of script menu actions.
			 * @type {Adobe.Incopy.ScriptMenuActions}
			 * @readonly
			 */
			public readonly scriptMenuActions: Adobe.Incopy.ScriptMenuActions;
			/**
			 * Script preferences.
			 * @type {Adobe.Incopy.ScriptPreference}
			 * @readonly
			 */
			public readonly scriptPreferences: Adobe.Incopy.ScriptPreference;
			/**
			 * The selected object(s). Can also accept: Object or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public selection: any;
			/**
			 * The user's serial number.
			 * @type {string}
			 * @readonly
			 */
			public readonly serialNumber: string;
			/**
			 * Spell-check preferences.
			 * @type {Adobe.Incopy.SpellPreference}
			 * @readonly
			 */
			public readonly spellPreferences: Adobe.Incopy.SpellPreference;
			/**
			 * Story preference settings.
			 * @type {Adobe.Incopy.StoryPreference}
			 * @readonly
			 */
			public readonly storyPreferences: Adobe.Incopy.StoryPreference;
			/**
			 * Stroke/fill proxy settings.
			 * @type {Adobe.Incopy.StrokeFillProxySetting}
			 * @readonly
			 */
			public readonly strokeFillProxySettings: Adobe.Incopy.StrokeFillProxySetting;
			/**
			 * A collection of stroke styles.
			 * @type {Adobe.Incopy.StrokeStyles}
			 * @readonly
			 */
			public readonly strokeStyles: Adobe.Incopy.StrokeStyles;
			/**
			 * A collection of swatches.
			 * @type {Adobe.Incopy.Swatches}
			 * @readonly
			 */
			public readonly swatches: Adobe.Incopy.Swatches;
			/**
			 * A collection of table style groups.
			 * @type {Adobe.Incopy.TableStyleGroups}
			 * @readonly
			 */
			public readonly tableStyleGroups: Adobe.Incopy.TableStyleGroups;
			/**
			 * A collection of table styles.
			 * @type {Adobe.Incopy.TableStyles}
			 * @readonly
			 */
			public readonly tableStyles: Adobe.Incopy.TableStyles;
			/**
			 * Tagged text export preferences.
			 * @type {Adobe.Incopy.TaggedTextExportPreference}
			 * @readonly
			 */
			public readonly taggedTextExportPreferences: Adobe.Incopy.TaggedTextExportPreference;
			/**
			 * Tagged text import preferences.
			 * @type {Adobe.Incopy.TaggedTextImportPreference}
			 * @readonly
			 */
			public readonly taggedTextImportPreferences: Adobe.Incopy.TaggedTextImportPreference;
			/**
			 * Text default settings.
			 * @type {Adobe.Incopy.TextDefault}
			 * @readonly
			 */
			public readonly textDefaults: Adobe.Incopy.TextDefault;
			/**
			 * Text editing preference settings.
			 * @type {Adobe.Incopy.TextEditingPreference}
			 * @readonly
			 */
			public readonly textEditingPreferences: Adobe.Incopy.TextEditingPreference;
			/**
			 * Text export preferences.
			 * @type {Adobe.Incopy.TextExportPreference}
			 * @readonly
			 */
			public readonly textExportPreferences: Adobe.Incopy.TextExportPreference;
			/**
			 * Text frame preference settings.
			 * @type {Adobe.Incopy.TextFramePreference}
			 * @readonly
			 */
			public readonly textFramePreferences: Adobe.Incopy.TextFramePreference;
			/**
			 * Text import preferences.
			 * @type {Adobe.Incopy.TextImportPreference}
			 * @readonly
			 */
			public readonly textImportPreferences: Adobe.Incopy.TextImportPreference;
			/**
			 * A collection of text macros.
			 * @type {Adobe.Incopy.TextMacros}
			 * @readonly
			 */
			public readonly textMacros: Adobe.Incopy.TextMacros;
			/**
			 * Text preference settings.
			 * @type {Adobe.Incopy.TextPreference}
			 * @readonly
			 */
			public readonly textPreferences: Adobe.Incopy.TextPreference;
			/**
			 * A collection of text variables.
			 * @type {Adobe.Incopy.TextVariables}
			 * @readonly
			 */
			public readonly textVariables: Adobe.Incopy.TextVariables;
			/**
			 * The text wrap preference properties that define the default 
			 * formatting for wrapping text around objects.
			 * @type {Adobe.Incopy.TextWrapPreference}
			 * @readonly
			 */
			public readonly textWrapPreferences: Adobe.Incopy.TextWrapPreference;
			/**
			 * A collection of tints.
			 * @type {Adobe.Incopy.Tints}
			 * @readonly
			 */
			public readonly tints: Adobe.Incopy.Tints;
			/**
			 * The current tool box states
			 * @type {Adobe.Incopy.ToolBox}
			 * @readonly
			 */
			public readonly toolBoxTools: Adobe.Incopy.ToolBox;
			/**
			 * Track changes preference settings.
			 * @type {Adobe.Incopy.TrackChangesPreference}
			 * @readonly
			 */
			public readonly trackChangesPreferences: Adobe.Incopy.TrackChangesPreference;
			/**
			 * A collection of transformation matrices.
			 * @type {Adobe.Incopy.TransformationMatrices}
			 * @readonly
			 */
			public readonly transformationMatrices: Adobe.Incopy.TransformationMatrices;
			/**
			 * A collection of trap presets.
			 * @type {Adobe.Incopy.TrapPresets}
			 * @readonly
			 */
			public readonly trapPresets: Adobe.Incopy.TrapPresets;
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
			 * @type {Adobe.Incopy.UserDictionaries}
			 * @readonly
			 */
			public readonly userDictionaries: Adobe.Incopy.UserDictionaries;
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
			 * @type {Adobe.Incopy.ViewPreference}
			 * @readonly
			 */
			public readonly viewPreferences: Adobe.Incopy.ViewPreference;
			/**
			 * If true, the Application is visible.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly visible: boolean;
			/**
			 * A collection of windows.
			 * @type {Adobe.Incopy.Windows}
			 * @readonly
			 */
			public readonly windows: Adobe.Incopy.Windows;
			/**
			 * Word and RTF import preferences.
			 * @type {Adobe.Incopy.WordRTFImportPreference}
			 * @readonly
			 */
			public readonly wordRTFImportPreferences: Adobe.Incopy.WordRTFImportPreference;
			/**
			 * A collection of XML export maps.
			 * @type {Adobe.Incopy.XMLExportMaps}
			 * @readonly
			 */
			public readonly xmlExportMaps: Adobe.Incopy.XMLExportMaps;
			/**
			 * XML export preference settings.
			 * @type {Adobe.Incopy.XMLExportPreference}
			 * @readonly
			 */
			public readonly xmlExportPreferences: Adobe.Incopy.XMLExportPreference;
			/**
			 * A collection of XML import maps.
			 * @type {Adobe.Incopy.XMLImportMaps}
			 * @readonly
			 */
			public readonly xmlImportMaps: Adobe.Incopy.XMLImportMaps;
			/**
			 * XML import preference settings.
			 * @type {Adobe.Incopy.XMLImportPreference}
			 * @readonly
			 */
			public readonly xmlImportPreferences: Adobe.Incopy.XMLImportPreference;
			/**
			 * The XML preference settings.
			 * @type {Adobe.Incopy.XMLPreference}
			 * @readonly
			 */
			public readonly xmlPreferences: Adobe.Incopy.XMLPreference;
			/**
			 * A collection of XML tags.
			 * @type {Adobe.Incopy.XMLTags}
			 * @readonly
			 */
			public readonly xmlTags: Adobe.Incopy.XMLTags;
			/**
			 * XML view preference settings.
			 * @type {Adobe.Incopy.XMLViewPreference}
			 * @readonly
			 */
			public readonly xmlViewPreferences: Adobe.Incopy.XMLViewPreference;
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
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerApplication(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			 * @returns {Adobe.Incopy.Color}
			 */
			public importAdobeSwatchbookProcessColor(nameParam: string): Adobe.Incopy.Color;
			/**
			 * Imports a spot color swatch from an Adobe color book.
			 * @param {string} nameParam The spot color to load.
			 * @returns {Adobe.Incopy.Color}
			 */
			public importAdobeSwatchbookSpotColor(nameParam: string): Adobe.Incopy.Color;
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
			 * Opens the specified document.
			 * @param {any} fromParam The file path(s) to the document. Can 
			 * accept: File or Array of Files.
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
			 * Prints the specified file(s).
			 * @param {any} fromParam One or more file paths. Can accept: 
			 * File or Array of Files.
			 * @param {boolean} printDialogParam Whether to invoke the 
			 * print dialog (Optional)
			 * @returns {void}
			 */
			public print(fromParam: any, printDialogParam: boolean): void;
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