/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Application extends Adobe.Csawlib.CSHostObject {
			/** The active book. */
			public activeBook: Adobe.Indesign.Book;
			/** The front-most document. */
			public activeDocument: Adobe.Indesign.Document;
			/** The current script running from the Scripts panel. */
			public readonly activeScript: File;
			/** The undo mode for the current script execution. */
			public readonly activeScriptUndoMode: Adobe.Indesign.UndoModes;
			/**
			 * The front-most window. Can return: Window, LayoutWindow or 
			 * StoryWindow.
			 */
			public activeWindow: any;
			/**
			 * Dispatched after the Application becomes active. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_ACTIVATE: string;
			/**
			 * Dispatched after a Document is closed. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly AFTER_CLOSE: string;
			/**
			 * Dispatched after the active context changes. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_CONTEXT_CHANGED: string;
			/**
			 * Dispatched when the Application is quitting. Since the quit 
			 * has been committed, it can not be canceled. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_QUIT: string;
			/**
			 * Dispatched after an attribute on the active selection 
			 * changes. This event bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_SELECTION_ATTRIBUTE_CHANGED: string;
			/**
			 * Dispatched after the active selection changes. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_SELECTION_CHANGED: string;
			/** Preferences for alignment and distribution. */
			public readonly alignDistributePreferences: Adobe.Indesign.AlignDistributePreference;
			/** All Cell styles */
			public readonly allCellStyles: any;
			/** Lists all character styles (regardless of their group). */
			public readonly allCharacterStyles: any;
			/** All object styles contained by the Application. */
			public readonly allObjectStyles: any;
			/** Lists all paragraph styles (regardless of their group). */
			public readonly allParagraphStyles: any;
			/**
			 * The list of all object types (strings) a preflight rule can 
			 * operate on.
			 */
			public readonly allPreflightObjectTypes: any;
			/**
			 * The list of all categories that have been declared by rules.
			 */
			public readonly allPreflightRuleCategories: any;
			/** The list of all known (declared) rule IDs. */
			public readonly allPreflightRuleIDs: any;
			/** All Table styles */
			public readonly allTableStyles: any;
			/** Anchored object default settings. */
			public readonly anchoredObjectDefaults: Adobe.Indesign.AnchoredObjectDefault;
			/** Anchored object settings. */
			public readonly anchoredObjectSettings: Adobe.Indesign.AnchoredObjectSetting;
			/** Auto-correct preferences. */
			public readonly autoCorrectPreferences: Adobe.Indesign.AutoCorrectPreference;
			/** A collection of auto-correct tables. */
			public readonly autoCorrectTables: Adobe.Indesign.AutoCorrectTables;
			/** A collection of background task objects. */
			public readonly backgroundTasks: Adobe.Indesign.BackgroundTasks;
			/** Baseline frame grid option settings. */
			public readonly baselineFrameGridOptions: Adobe.Indesign.BaselineFrameGridOption;
			/**
			 * Dispatched before the Application becomes inactive. This 
			 * event bubbles. This event is not cancelable.
			 */
			public static readonly BEFORE_DEACTIVATE: string;
			/**
			 * Dispatched before a Document is created. This event bubbles. 
			 * This event is cancelable.
			 */
			public static readonly BEFORE_NEW: string;
			/**
			 * Dispatched before a Document is opened. This event bubbles. 
			 * This event is cancelable.
			 */
			public static readonly BEFORE_OPEN: string;
			/**
			 * Dispatched before the Application is quit. Allows the quit 
			 * to be canceled. This event bubbles. This event is 
			 * cancelable.
			 */
			public static readonly BEFORE_QUIT: string;
			/** A collection of books. */
			public readonly books: Adobe.Indesign.Books;
			/** Button preference settings. */
			public readonly buttonPreferences: Adobe.Indesign.ButtonPreference;
			/** A collection of cell style groups. */
			public readonly cellStyleGroups: Adobe.Indesign.CellStyleGroups;
			/** A collection of cell styles. */
			public readonly cellStyles: Adobe.Indesign.CellStyles;
			/**
			 * Change glyph preferences. Can also accept: NothingEnum 
			 * enumerator.
			 */
			public changeGlyphPreferences: Adobe.Indesign.ChangeGlyphPreference;
			/**
			 * Change grep preferences. Can also accept: NothingEnum 
			 * enumerator.
			 */
			public changeGrepPreferences: Adobe.Indesign.ChangeGrepPreference;
			/**
			 * Change object preferences. Can also accept: NothingEnum 
			 * enumerator.
			 */
			public changeObjectPreferences: Adobe.Indesign.ChangeObjectPreference;
			/**
			 * Change text preferences. Can also accept: NothingEnum 
			 * enumerator.
			 */
			public changeTextPreferences: Adobe.Indesign.ChangeTextPreference;
			/**
			 * Change transliterate preferences. Can also accept: 
			 * NothingEnum enumerator.
			 */
			public changeTransliteratePreferences: Adobe.Indesign.ChangeTransliteratePreference;
			/** A collection of character style groups. */
			public readonly characterStyleGroups: Adobe.Indesign.CharacterStyleGroups;
			/** A collection of character styles. */
			public readonly characterStyles: Adobe.Indesign.CharacterStyles;
			/** CJK grid preference settings. */
			public readonly cjkGridPreferences: Adobe.Indesign.CjkGridPreference;
			/** Clear overrides first before applying object style */
			public clearOverridesWhenApplyingStyle: boolean;
			/**
			 * Clipboard preference properties that define the way that the 
			 * application interacts with the system clipboard.
			 */
			public readonly clipboardPreferences: Adobe.Indesign.ClipboardPreference;
			/** A collection of colors. */
			public readonly colors: Adobe.Indesign.Colors;
			/**
			 * Color setting properties that define color management 
			 * defaults.
			 */
			public readonly colorSettings: Adobe.Indesign.ColorSetting;
			/** A collection of composite fonts. */
			public readonly compositeFonts: Adobe.Indesign.CompositeFonts;
			/** Conditional text preferences. */
			public readonly conditionalTextPreferences: Adobe.Indesign.ConditionalTextPreference;
			/** A collection of conditions for conditional text. */
			public readonly conditions: Adobe.Indesign.Conditions;
			/** A collection of condition sets for conditional text. */
			public readonly conditionSets: Adobe.Indesign.ConditionSets;
			/** A collection of dashed stroke styles. */
			public readonly dashedStrokeStyles: Adobe.Indesign.DashedStrokeStyles;
			/**
			 * The data merge option properties that define the data merge.
			 */
			public readonly dataMergeOptions: Adobe.Indesign.DataMergeOption;
			/** A collection of dialogs. */
			public readonly dialogs: Adobe.Indesign.Dialogs;
			/** User dictionary preference settings. */
			public readonly dictionaryPreferences: Adobe.Indesign.DictionaryPreference;
			/** Display performance settings. */
			public readonly displayPerformancePreferences: Adobe.Indesign.DisplayPerformancePreference;
			/** Display setting properties. */
			public readonly displaySettings: Adobe.Indesign.DisplaySettings;
			/** Document preference settings. */
			public readonly documentPreferences: Adobe.Indesign.DocumentPreference;
			/** A collection of document presets. */
			public readonly documentPresets: Adobe.Indesign.DocumentPresets;
			/** A collection of documents. */
			public readonly documents: Adobe.Indesign.Documents;
			/** A collection of dotted stroke styles. */
			public readonly dottedStrokeStyles: Adobe.Indesign.DottedStrokeStyles;
			/** EPS export preferences. */
			public readonly epsExportPreferences: Adobe.Indesign.EPSExportPreference;
			/** EPS import preferences. */
			public readonly epsImportPreferences: Adobe.Indesign.EPSImportPreference;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** Excel import preferences. */
			public readonly excelImportPreferences: Adobe.Indesign.ExcelImportPreference;
			/** The default export for web preferences. */
			public readonly exportForWebPreferences: Adobe.Indesign.ExportForWebPreference;
			/** The feature set. */
			public readonly featureSet: Adobe.Indesign.FeatureSetOptions;
			/** The full path to the file. */
			public readonly filePath: File;
			/**
			 * Find/change glyph options. Can also accept: NothingEnum 
			 * enumerator.
			 */
			public findChangeGlyphOptions: Adobe.Indesign.FindChangeGlyphOption;
			/**
			 * Find/change grep options. Can also accept: NothingEnum 
			 * enumerator.
			 */
			public findChangeGrepOptions: Adobe.Indesign.FindChangeGrepOption;
			/**
			 * Find/change object options. Can also accept: NothingEnum 
			 * enumerator.
			 */
			public findChangeObjectOptions: Adobe.Indesign.FindChangeObjectOption;
			/**
			 * Find/change text options. Can also accept: NothingEnum 
			 * enumerator.
			 */
			public findChangeTextOptions: Adobe.Indesign.FindChangeTextOption;
			/**
			 * Find/change transliterate options. Can also accept: 
			 * NothingEnum enumerator.
			 */
			public findChangeTransliterateOptions: Adobe.Indesign.FindChangeTransliterateOption;
			/**
			 * Find glyph preferences. Can also accept: NothingEnum 
			 * enumerator.
			 */
			public findGlyphPreferences: Adobe.Indesign.FindGlyphPreference;
			/**
			 * Find grep preferences. Can also accept: NothingEnum 
			 * enumerator.
			 */
			public findGrepPreferences: Adobe.Indesign.FindGrepPreference;
			/**
			 * Find object preferences. Can also accept: NothingEnum 
			 * enumerator.
			 */
			public findObjectPreferences: Adobe.Indesign.FindObjectPreference;
			/**
			 * Find text preferences. Can also accept: NothingEnum 
			 * enumerator.
			 */
			public findTextPreferences: Adobe.Indesign.FindTextPreference;
			/**
			 * Find transliterate preferences. Can also accept: NothingEnum 
			 * enumerator.
			 */
			public findTransliteratePreferences: Adobe.Indesign.FindTransliteratePreference;
			/** A collection of transparency flattener presets. */
			public readonly flattenerPresets: Adobe.Indesign.FlattenerPresets;
			/** A collection of fonts. */
			public readonly fonts: Adobe.Indesign.Fonts;
			/** Footnote option settings. */
			public readonly footnoteOptions: Adobe.Indesign.FootnoteOption;
			/**
			 * The frame fitting option to apply to placed or pasted 
			 * content. Can be applied to a frame, object style, or 
			 * document or to the application.
			 */
			public readonly frameFittingOptions: Adobe.Indesign.FrameFittingOption;
			/**
			 * The full path to the Application, including the name of the 
			 * Application.
			 */
			public readonly fullName: File;
			/** Galley preference settings. */
			public readonly galleyPreferences: Adobe.Indesign.GalleyPreference;
			/** General preference settings. */
			public readonly generalPreferences: Adobe.Indesign.GeneralPreference;
			/**
			 * Grabber preference properties that define display 
			 * performance quality during scrolling.
			 */
			public readonly grabberPreferences: Adobe.Indesign.GrabberPreference;
			/** A collection of gradients. */
			public readonly gradients: Adobe.Indesign.Gradients;
			/** Grid preference settings. */
			public readonly gridPreferences: Adobe.Indesign.GridPreference;
			/** Grid printing preference and export settings. */
			public readonly gridPrintingPreferences: Adobe.Indesign.GridPrintingPreference;
			/** Guide preference settings. */
			public readonly guidePreferences: Adobe.Indesign.GuidePreference;
			/** All attachable idle tasks. */
			public readonly idleTasks: Adobe.Indesign.IdleTasks;
			/**
			 * The image I/O preference properties that define preferences 
			 * for importing images.
			 */
			public readonly imageIOPreferences: Adobe.Indesign.ImageIOPreference;
			/** Image preferences. */
			public readonly imagePreferences: Adobe.Indesign.ImagePreference;
			/** IME preference settings. */
			public readonly imePreferences: Adobe.Indesign.IMEPreference;
			/** Placed InDesign page attributes. */
			public readonly importedPageAttributes: Adobe.Indesign.ImportedPageAttribute;
			/** Export options for InCopy INCX document format. */
			public readonly incopyExportOptions: Adobe.Indesign.InCopyExportOption;
			/**
			 * The index options properties that define how an index is 
			 * formatted.
			 */
			public readonly indexGenerationOptions: Adobe.Indesign.IndexOptions;
			/** A collection of indexing sort options. */
			public readonly indexingSortOptions: Adobe.Indesign.IndexingSortOptions;
			/** A collection of inks. */
			public readonly inks: Adobe.Indesign.Inks;
			/** Interactive PDF export preferences. */
			public readonly interactivePDFExportPreferences: Adobe.Indesign.InteractivePDFExportPreference;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** JPEG export preferences. */
			public readonly jpegExportPreferences: Adobe.Indesign.JPEGExportPreference;
			/** A collection of kinsoku tables. */
			public readonly kinsokuTables: Adobe.Indesign.KinsokuTables;
			/** A property that can be set to any string. */
			public label: string;
			/** A collection of languages with vendors. */
			public readonly languagesWithVendors: Adobe.Indesign.LanguagesWithVendors;
			/** Layout sdjustment preference settings. */
			public readonly layoutAdjustmentPreferences: Adobe.Indesign.LayoutAdjustmentPreference;
			/** Default properties specific to layout grids. */
			public readonly layoutGridData: Adobe.Indesign.LayoutGridDataInformation;
			/** A collection of layout windows. */
			public readonly layoutWindows: Adobe.Indesign.LayoutWindows;
			/** A collection of object libraries. */
			public readonly libraries: Adobe.Indesign.Libraries;
			/**
			 * The links preference properties that define preferences for 
			 * links.
			 */
			public readonly linkingPreferences: Adobe.Indesign.LinkingPreference;
			/**
			 * Delay before mouse operations trigger live screen drawing of 
			 * page items.
			 */
			public liveScreenDrawing: Adobe.Indesign.LiveDrawingOptions;
			/** The locale of the application. */
			public readonly locale: Adobe.Indesign.Locale;
			/** Margin preference settings. */
			public readonly marginPreferences: Adobe.Indesign.MarginPreference;
			/** A collection of menu actions. */
			public readonly menuActions: Adobe.Indesign.MenuActions;
			/** A collection of menus. */
			public readonly menus: Adobe.Indesign.Menus;
			/** A collection of mixed ink groups. */
			public readonly mixedInkGroups: Adobe.Indesign.MixedInkGroups;
			/** A collection of mixed inks. */
			public readonly mixedInks: Adobe.Indesign.MixedInks;
			/** If true, a modal dialog or alert is active. */
			public readonly modalState: boolean;
			/** A collection of mojikumi tables. */
			public readonly mojikumiTables: Adobe.Indesign.MojikumiTables;
			/** Mojikumi user interface preference settings. */
			public readonly mojikumiUIPreferences: Adobe.Indesign.MojikumiUiPreference;
			/** A collection of Motion presets. */
			public readonly motionPresets: Adobe.Indesign.MotionPresets;
			/** The name of the Application. */
			public readonly name: string;
			/** A collection of named grids. */
			public readonly namedGrids: Adobe.Indesign.NamedGrids;
			/** Note preference settings. */
			public readonly notePreferences: Adobe.Indesign.NotePreference;
			/** A collection of numbered lists. */
			public readonly numberingLists: Adobe.Indesign.NumberingLists;
			/** A collection of object style groups. */
			public readonly objectStyleGroups: Adobe.Indesign.ObjectStyleGroups;
			/** A collection of object styles. */
			public readonly objectStyles: Adobe.Indesign.ObjectStyles;
			/** The default page item formatting for the Application. */
			public readonly pageItemDefaults: Adobe.Indesign.PageItemDefault;
			/** A collection of panels. */
			public readonly panels: Adobe.Indesign.Panels;
			/** A collection of paragraph style groups. */
			public readonly paragraphStyleGroups: Adobe.Indesign.ParagraphStyleGroups;
			/** A collection of paragraph styles. */
			public readonly paragraphStyles: Adobe.Indesign.ParagraphStyles;
			/** The parent of the Application (a Application). */
			public readonly parent: Adobe.Indesign.Application;
			/** Pasteboard preference settings. */
			public readonly pasteboardPreferences: Adobe.Indesign.PasteboardPreference;
			/** A collection of PDF export preferences. */
			public readonly pdfExportPreferences: Adobe.Indesign.PDFExportPreference;
			/** A collection of PDF export presets. */
			public readonly pdfExportPresets: Adobe.Indesign.PDFExportPresets;
			/**
			 * The PDF place preference properties that define how PDF 
			 * files are placed in the current document.
			 */
			public readonly pdfPlacePreferences: Adobe.Indesign.PDFPlacePreference;
			/** The available performance metrics. */
			public readonly performanceMetrics: any;
			/** Lists the extensions of file types that can be placed. */
			public readonly placeableFileExtensions: any;
			/** Lists the types of files that can be placed. */
			public readonly placeableFileTypes: any;
			/**
			 * Polygon preference properties to use to define default 
			 * settings for creating a polygon.
			 */
			public readonly polygonPreferences: Adobe.Indesign.PolygonPreference;
			/** A collection of preferences objects. */
			public readonly preferences: Adobe.Indesign.Preferences;
			/** Preflight book option settings. */
			public readonly preflightBookOptions: Adobe.Indesign.PreflightBookOption;
			/** Preflight option settings. */
			public readonly preflightOptions: Adobe.Indesign.PreflightOption;
			/** A collection of preflight processes. */
			public readonly preflightProcesses: Adobe.Indesign.PreflightProcesses;
			/** A collection of preflight profiles. */
			public readonly preflightProfiles: Adobe.Indesign.PreflightProfiles;
			/** A collection of preflight rules. */
			public readonly preflightRules: Adobe.Indesign.PreflightRules;
			/** A collection of printer presets. */
			public readonly printerPresets: Adobe.Indesign.PrinterPresets;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The names of the items in the redo stack. */
			public readonly redoHistory: any;
			/** The name of the action on the top of the redo stack. */
			public readonly redoName: string;
			/** Arguments to pass to a script. */
			public readonly scriptArgs: Adobe.Indesign.ScriptArg;
			/** A collection of script menu actions. */
			public readonly scriptMenuActions: Adobe.Indesign.ScriptMenuActions;
			/** Script preferences. */
			public readonly scriptPreferences: Adobe.Indesign.ScriptPreference;
			/**
			 * The selected object(s). Can also accept: Object or 
			 * NothingEnum enumerator.
			 */
			public selection: any;
			/** The user's serial number. */
			public readonly serialNumber: string;
			/** Smart Guide preference properties. */
			public readonly smartGuidePreferences: Adobe.Indesign.SmartGuidePreference;
			/** Spell-check preferences. */
			public readonly spellPreferences: Adobe.Indesign.SpellPreference;
			/** Default properties specific to frame grids. */
			public readonly storyGridData: Adobe.Indesign.StoryGridDataInformation;
			/** Story preference settings. */
			public readonly storyPreferences: Adobe.Indesign.StoryPreference;
			/** A collection of story windows. */
			public readonly storyWindows: Adobe.Indesign.StoryWindows;
			/** A collection of striped stroke styles. */
			public readonly stripedStrokeStyles: Adobe.Indesign.StripedStrokeStyles;
			/** Stroke/fill proxy settings. */
			public readonly strokeFillProxySettings: Adobe.Indesign.StrokeFillProxySetting;
			/** A collection of stroke styles. */
			public readonly strokeStyles: Adobe.Indesign.StrokeStyles;
			/** A collection of swatches. */
			public readonly swatches: Adobe.Indesign.Swatches;
			/** SWF export preferences. */
			public readonly swfExportPreferences: Adobe.Indesign.SWFExportPreference;
			/** A collection of table style groups. */
			public readonly tableStyleGroups: Adobe.Indesign.TableStyleGroups;
			/** A collection of table styles. */
			public readonly tableStyles: Adobe.Indesign.TableStyles;
			/** Tagged text export preferences. */
			public readonly taggedTextExportPreferences: Adobe.Indesign.TaggedTextExportPreference;
			/** Tagged text import preferences. */
			public readonly taggedTextImportPreferences: Adobe.Indesign.TaggedTextImportPreference;
			/** Text default settings. */
			public readonly textDefaults: Adobe.Indesign.TextDefault;
			/** Text editing preference settings. */
			public readonly textEditingPreferences: Adobe.Indesign.TextEditingPreference;
			/** Text export preferences. */
			public readonly textExportPreferences: Adobe.Indesign.TextExportPreference;
			/** Text frame preference settings. */
			public readonly textFramePreferences: Adobe.Indesign.TextFramePreference;
			/** Text import preferences. */
			public readonly textImportPreferences: Adobe.Indesign.TextImportPreference;
			/** Text preference settings. */
			public readonly textPreferences: Adobe.Indesign.TextPreference;
			/** A collection of text variables. */
			public readonly textVariables: Adobe.Indesign.TextVariables;
			/**
			 * The text wrap preference properties that define the default 
			 * formatting for wrapping text around objects.
			 */
			public readonly textWrapPreferences: Adobe.Indesign.TextWrapPreference;
			/** A collection of tints. */
			public readonly tints: Adobe.Indesign.Tints;
			/** The current tool box states */
			public readonly toolBoxTools: Adobe.Indesign.ToolBox;
			/** Track changes preference settings. */
			public readonly trackChangesPreferences: Adobe.Indesign.TrackChangesPreference;
			/** A collection of transformation matrices. */
			public readonly transformationMatrices: Adobe.Indesign.TransformationMatrices;
			/**
			 * Transform preference properties that define default 
			 * behaviors when transforming objects. Note: Transforming 
			 * includes rotation, scaling, flipping, and shearing.
			 */
			public readonly transformPreferences: Adobe.Indesign.TransformPreference;
			/** Transparency preference settings. */
			public readonly transparencyPreferences: Adobe.Indesign.TransparencyPreference;
			/** A collection of trap presets. */
			public readonly trapPresets: Adobe.Indesign.TrapPresets;
			/** The names of the items in the undo stack. */
			public readonly undoHistory: any;
			/** The name of the action on the top of the undo stack. */
			public readonly undoName: string;
			/** The swatches that are not being used. */
			public readonly unusedSwatches: any;
			/**
			 * The color assigned to the tracked changes and notes created 
			 * by the user, specified either as an array of three doubles, 
			 * each in the range 0 to 255 and representing R, G, and B 
			 * values, or as an InCopy UI color. Can return: Array of 3 
			 * Reals (0 - 255) or InCopyUIColors enumerator.
			 */
			public userColor: any;
			/** A collection of user dictionaries. */
			public readonly userDictionaries: Adobe.Indesign.UserDictionaries;
			/** The user associated with the tracked changes and notes. */
			public userName: string;
			/** The application version. */
			public readonly version: string;
			/** View preference settings. */
			public readonly viewPreferences: Adobe.Indesign.ViewPreference;
			/** If true, the Application is visible. */
			public readonly visible: boolean;
			/** Watermark preferences */
			public readonly watermarkPreferences: Adobe.Indesign.WatermarkPreference;
			/** A collection of windows. */
			public readonly windows: Adobe.Indesign.Windows;
			/** Word and RTF import preferences. */
			public readonly wordRTFImportPreferences: Adobe.Indesign.WordRTFImportPreference;
			/** XFL export preferences. */
			public readonly xflExportPreferences: Adobe.Indesign.XFLExportPreference;
			/** A collection of XML export maps. */
			public readonly xmlExportMaps: Adobe.Indesign.XMLExportMaps;
			/** XML export preference settings. */
			public readonly xmlExportPreferences: Adobe.Indesign.XMLExportPreference;
			/** A collection of XML import maps. */
			public readonly xmlImportMaps: Adobe.Indesign.XMLImportMaps;
			/** XML import preference settings. */
			public readonly xmlImportPreferences: Adobe.Indesign.XMLImportPreference;
			/** The XML preference settings. */
			public readonly xmlPreferences: Adobe.Indesign.XMLPreference;
			/** A collection of XML rule processors. */
			public readonly xmlRuleProcessors: Adobe.Indesign.XMLRuleProcessors;
			/** A collection of XML tags. */
			public readonly xmlTags: Adobe.Indesign.XMLTags;
			/** XML view preference settings. */
			public readonly xmlViewPreferences: Adobe.Indesign.XMLViewPreference;
			/** Makes the application the front-most or active window. */
			public activate(): void;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerApplication(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Applies the specified menu customization set. An empty 
			 * string will reset all menus and colorization (Show Full 
			 * Menus). No string will apply the default menu set.
			 * @param {string} nameParam - The menu customization set. 
			 * (Optional)
			 */
			public applyMenuCustomization(nameParam: string): void;
			/**
			 * Applies the specified shortcut set file. No string will 
			 * apply the default shortcut set.
			 * @param {string} nameParam - The shortcut set. (Optional)
			 */
			public applyShortcutSet(nameParam: string): void;
			/**
			 * Applies the specified workspace.
			 * @param {string} nameParam - The workspace. (Optional)
			 */
			public applyWorkspace(nameParam: string): void;
			/** Cancels all the background tasks. */
			public cancelAllTasks(): void;
			/** Cascades all document windows. */
			public cascadeWindows(): void;
			/**
			 * Finds glyphs that match the find what value and replaces the 
			 * glyphs with the change to value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeGlyph(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeGrep(reverseOrderParam: boolean): any;
			/**
			 * Finds objects that match the find what value and replace the 
			 * objects with the change to value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeObject(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value and 
			 * replaces the text with the change character type value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Removes the frame fittings options and resets it to the 
			 * initial state.
			 */
			public clearFrameFittingOptions(): void;
			/**
			 * Copies the selection in the active document window to the 
			 * clipboard.
			 */
			public copy(): void;
			/**
			 * Cuts the selection in the active document window and stores 
			 * it in the clipboard.
			 */
			public cut(): void;
			/**
			 * Deletes the specified find/change query.
			 * @param {string} queryNameParam - The query to delete.
			 * @param {SearchModes} searchModeParam - The search mode.
			 */
			public deleteFindChangeQuery(queryNameParam: string, searchModeParam: SearchModes): void;
			/** Deletes unused XML markup tags. */
			public deleteUnusedTags(): void;
			/**
			 * Generate Code Via DommyDumper
			 * @param {string} dommytemplateinputfolderParam - Holds path 
			 * to template folder as string
			 * @param {string} dommycodeoutputfolderParam - Holds path to 
			 * code output folder as string
			 */
			public dommygeneratecode(dommytemplateinputfolderParam: string, dommycodeoutputfolderParam: string): void;
			/**
			 * Executes the script in the specified language as a single 
			 * transaction.
			 * @param {any} scriptParam - The script to execute. Can 
			 * accept: File, String or JavaScript Function.
			 * @param {ScriptLanguage} languageParam - The language of the 
			 * script to execute. If not specified, uses the language used 
			 * to call this method. (Optional)
			 * @param {any[]} withArgumentsParam - An array of arguments 
			 * passed to the script. (Optional)
			 * @param {UndoModes} undoModeParam - How to undo this script. 
			 * (Optional)
			 * @param {string} undoNameParam - The name of the undo step 
			 * for entire script undo mode. (Optional)
			 */
			public doScript(scriptParam: any, languageParam: ScriptLanguage, withArgumentsParam: any[], undoModeParam: UndoModes, undoNameParam: string): any;
			/**
			 * Dumps memory allocations from all marks in the specified 
			 * range.
			 * @param {number} fromParam - The first mark in the range.
			 * @param {number} toParam - The last mark in the range.
			 */
			public dumpBetweenMemoryMarks(fromParam: number, toParam: number): void;
			/**
			 * Dumps memory allocations from the specified mark.
			 * @param {number} fromParam - The mark from which to dump 
			 * memory.
			 */
			public dumpFromMemoryMark(fromParam: number): void;
			/**
			 * Export the presets to a file.
			 * @param {ExportPresetFormat} formatParam - The preset format.
			 * @param {File} toParam - The file to export to.
			 * @param {string} versionCommentsParam - The comments for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam - Forcibly save a version. 
			 * (Optional)
			 */
			public exportPresets(formatParam: ExportPresetFormat, toParam: File, versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Exports stroke styles or presets.
			 * @param {File} toParam - The file to save to
			 * @param {any[]} strokeStyleListParam - The list of stroke 
			 * styles to save
			 * @param {string} versionCommentsParam - The comment for this 
			 * version (Optional)
			 * @param {boolean} forceSaveParam - Forcibly save a version 
			 * (Optional)
			 */
			public exportStrokeStyles(toParam: File, strokeStyleListParam: any[], versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam - The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Finds glyphs that match the find what value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findGlyph(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findGrep(reverseOrderParam: boolean): any;
			/**
			 * Returns the locale-independent string(s) from the internal 
			 * string localization database that correspond to the 
			 * specified string (in the current locale).
			 * @param {string} forParam - The string to search for.
			 */
			public findKeyStrings(forParam: string): any;
			/**
			 * Finds objects that match the find what value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findObject(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Generate schema for IDML.
			 * @param {File} toParam - The folder path of the schema.
			 * @param {boolean} packageFormatParam - If true, generate 
			 * schema for package format (multiple files). Default value is 
			 * false. (Optional)
			 */
			public generateIDMLSchema(toParam: File, packageFormatParam: boolean): void;
			/** Gets the instance ids of all open documents. */
			public getDocumentsIds(): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Imports a process color swatch from a preloaded Adobe color 
			 * book.
			 * @param {string} nameParam - The process color to load.
			 */
			public importAdobeSwatchbookProcessColor(nameParam: string): Adobe.Indesign.Color;
			/**
			 * Imports a spot color swatch from an Adobe color book.
			 * @param {string} nameParam - The spot color to load.
			 */
			public importAdobeSwatchbookSpotColor(nameParam: string): Adobe.Indesign.Color;
			/**
			 * Imports presets from the specified file.
			 * @param {ExportPresetFormat} formatParam - The type of preset 
			 * to import. 
			 * @param {File} fromParam - The file to import presets from.
			 */
			public importFile(formatParam: ExportPresetFormat, fromParam: File): void;
			/**
			 * Imports the specified styles.
			 * @param {ImportFormat} formatParam - The types of styles to 
			 * import.
			 * @param {File} fromParam - The file containing the styles you 
			 * want to import.
			 * @param {GlobalClashResolutionStrategy} globalStrategyParam - 
			 * The resolution strategy to employ for imported styles that 
			 * have the same names as existing styles. (Optional)
			 */
			public importStyles(formatParam: ImportFormat, fromParam: File, globalStrategyParam: GlobalClashResolutionStrategy): void;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam - The key.
			 * @param {string} valueParam - The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Jump to the specified comment in open document.
			 * @param {string} documentidParam - Document ID for comment to 
			 * jump to.
			 * @param {string} commentdataParam - Info about the comment to 
			 * jump to.
			 */
			public jumpToComment(documentidParam: string, commentdataParam: string): void;
			/**
			 * Load conditions from the specified file.
			 * @param {File} fromParam - The path to the file that contains 
			 * the conditions.
			 * @param {boolean} loadConditionSetsParam - If true, load the 
			 * condition sets as well. (Optional)
			 */
			public loadConditions(fromParam: File, loadConditionSetsParam: boolean): void;
			/**
			 * Loads the specified find/change query.
			 * @param {string} queryNameParam - The query to load.
			 * @param {SearchModes} searchModeParam - The search mode.
			 */
			public loadFindChangeQuery(queryNameParam: string, searchModeParam: SearchModes): void;
			/**
			 * Load motion preset from the specified file.
			 * @param {File} fromParam - The Flash motion preset file.
			 */
			public loadMotionPreset(fromParam: File): Adobe.Indesign.MotionPreset;
			/**
			 * Load preflight profile from the specified file.
			 * @param {File} fromParam - The InDesign preflight profile 
			 * file or InDesign document.
			 */
			public loadPreflightProfile(fromParam: File): Adobe.Indesign.PreflightProfile;
			/**
			 * Load swatches from the specified file.
			 * @param {File} fromParam - The swatch file or InDesign 
			 * document.
			 */
			public loadSwatches(fromParam: File): void;
			/**
			 * Loads a set of XML markup tags from the specified file.
			 * @param {File} fromParam - The path to the file that contains 
			 * the tags.
			 */
			public loadXMLTags(fromParam: File): void;
			/** Gets the memory statistics from the server. */
			public memoryStatistics(): any;
			/**
			 * Mount a Version Cue project.
			 * @param {string} serverURLParam - The URL of the Version Cue 
			 * server containing the project
			 * @param {string} projectNameParam - The name of the Version 
			 * Cue project to mount
			 */
			public mountProject(serverURLParam: string, projectNameParam: string): void;
			/**
			 * Opens the specified document, book, or library.
			 * @param {any} fromParam - The file path(s) to the document, 
			 * book, or library. Can accept: File or Array of Files.
			 * @param {boolean} showingWindowParam - If true, opens the 
			 * document in a window. If false, the document is opened but 
			 * is not displayed in a window. (Optional)
			 * @param {OpenOptions} openOptionParam - How to open the 
			 * document. (Optional)
			 */
			public open(fromParam: any, showingWindowParam: boolean, openOptionParam: OpenOptions): any;
			/**
			 * Package a folder into a UCF file.
			 * @param {File} sourceFolderParam - The folder to be packaged 
			 * into an IDML file. Does not validate structure of the folder 
			 * pursuant to the IDML spec. Caller is responsible for making 
			 * sure the files in the folder are correctly organized.
			 * @param {File} ucfFileParam - The destination UCF file. Will 
			 * be overwritten if it already exists.
			 * @param {string} mimeMediaTypeParam
			 */
			public packageUCF(sourceFolderParam: File, ucfFileParam: File, mimeMediaTypeParam: string): void;
			/**
			 * Pastes data from the clipboard into the active document 
			 * window.
			 */
			public paste(): void;
			/**
			 * Pastes data from the clipboard into the active document 
			 * window at the same position that the data held in its 
			 * original document.
			 */
			public pasteInPlace(): void;
			/**
			 * Pastes data from the clipboard into the selected object in 
			 * the active document window.
			 */
			public pasteInto(): void;
			/**
			 * Pastes data (minus formatting) from the clipboard into the 
			 * active document window.
			 */
			public pasteWithoutFormatting(): void;
			/**
			 * Gets the current value of the specified performance metric.
			 * @param {any} forParam - The status to get from InDesign. Can 
			 * accept: Long Integer or PerformanceMetricOptions enumerator.
			 */
			public performanceMetric(forParam: any): any;
			/**
			 * Gets the long name of the specified performance metric.
			 * @param {any} forParam - The status to get from InDesign. Can 
			 * accept: Long Integer or PerformanceMetricOptions enumerator.
			 */
			public performanceMetricLongName(forParam: any): string;
			/**
			 * Gets the short name of the specified performance metric.
			 * @param {any} forParam - The status to get from InDesign. Can 
			 * accept: Long Integer or PerformanceMetricOptions enumerator.
			 */
			public performanceMetricShortName(forParam: any): string;
			/**
			 * Place one or more files following the behavior of the place 
			 * menu item. This may load the place gun or replace the 
			 * selected object, depending on current preferences.
			 * @param {any} fileNameParam - One or more files to place. Can 
			 * accept: File or Array of Files.
			 * @param {boolean} showingOptionsParam - Whether to display 
			 * the import options dialog (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the placed object(s) (Optional)
			 */
			public place(fileNameParam: any, showingOptionsParam: boolean, withPropertiesParam: any): void;
			/**
			 * Prints the specified file(s).
			 * @param {any} fromParam - One or more file paths. Can accept: 
			 * File or Array of Files.
			 * @param {boolean} printDialogParam - Whether to invoke the 
			 * print dialog (Optional)
			 * @param {any} usingParam - Printer preset to use. Can accept: 
			 * PrinterPresetTypes enumerator or PrinterPreset. (Optional)
			 */
			public print(fromParam: any, printDialogParam: boolean, usingParam: any): void;
			/**
			 * Quits the application.
			 * @param {SaveOptions} savingParam - The option to use for 
			 * saving changes to open documents before quitting. (Optional)
			 */
			public quit(savingParam: SaveOptions): void;
			/** Redoes the last action. */
			public redo(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerApplication(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Saves the specified find/change query.
			 * @param {string} queryNameParam - The query to save.
			 * @param {SearchModes} searchModeParam - The search mode.
			 */
			public saveFindChangeQuery(queryNameParam: string, searchModeParam: SearchModes): void;
			/**
			 * Saves the specified swatch(es) to a swatchbook file.
			 * @param {File} toParam - The swatchbook file to save to.
			 * @param {any[]} swatchListParam - The swatch(es) to save.
			 * @param {string} versionCommentsParam - The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam - If true, forcibly saves a 
			 * version. (Optional)
			 */
			public saveSwatches(toParam: File, swatchListParam: any[], versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Saves a set of tags to an external file.
			 * @param {File} toParam - The full path to the file in which 
			 * to save the tags.
			 * @param {string} versionCommentsParam - The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam - If true, forcibly saves a 
			 * version. (Optional)
			 */
			public saveXMLTags(toParam: File, versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Selects the specified object(s).
			 * @param {any} selectableItemsParam - The objects to select. 
			 * Can accept: Object, Array of Objects, NothingEnum enumerator 
			 * or SelectAll enumerator.
			 * @param {SelectionOptions} existingSelectionParam - The 
			 * selection status of the Application in relation to 
			 * previously selected objects. (Optional)
			 */
			public select(selectableItemsParam: any, existingSelectionParam: SelectionOptions): void;
			/**
			 * Sets the application's preferences.
			 * @param {any} applicationPreferencesParam - The IDML defaults 
			 * file or enumeration. Can accept: File or LanguageAndRegion 
			 * enumerator.
			 */
			public setApplicationPreferences(applicationPreferencesParam: any): void;
			/** Tile all document windows */
			public tileWindows(): void;
			/** Toggles the visibility of the entire panel system. */
			public togglePanelSystemVisibility(): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/**
			 * Translates a key string into localized form based on current 
			 * application locale.
			 * @param {string} forParam - The key string to translate
			 */
			public translateKeyString(forParam: string): string;
			/** Undoes the last action. */
			public undo(): void;
			/**
			 * Unpackage a UCF file into a folder structure.
			 * @param {File} ucfFileParam - The UCF file to be unpackaged.
			 * @param {File} destinationFolderParam - The folder where you 
			 * would like the UCF file unpackaged to. Will be created if it 
			 * does not exist.
			 */
			public unpackageUCF(ucfFileParam: File, destinationFolderParam: File): void;
			/**
			 * Update the link resource info of buzzword link.
			 * @param {string} docIdParam - Buzzword document id for the 
			 * link resource to be updated.
			 * @param {LinkStatus} statusParam - new status of the link.
			 * @param {string} statusInfoParam - Customized status info 
			 * string for Buzzword link. (Optional)
			 * @param {string} titleParam - Document title for Buzzword 
			 * link. (Optional)
			 * @param {string} docVersionParam - Buzzword document version. 
			 * (Optional)
			 * @param {string} contentVersionParam - Buzzword document 
			 * content version (Optional)
			 * @param {number} modYearParam - the modification year for the 
			 * Buzzword document (Optional)
			 * @param {number} modMonthParam - the modification month for 
			 * the Buzzword document (Optional)
			 * @param {number} modDayParam - the modification day for the 
			 * Buzzword document (Optional)
			 * @param {number} modHourParam - the modification hour for the 
			 * Buzzword document (Optional)
			 * @param {number} modMinuteParam - the modification minute for 
			 * the Buzzword document (Optional)
			 * @param {number} modSecondParam - the modification second for 
			 * the Buzzword document (Optional)
			 */
			public updateBuzzwordLinkInfo(docIdParam: string, statusParam: LinkStatus, statusInfoParam: string, titleParam: string, docVersionParam: string, contentVersionParam: string, modYearParam: number, modMonthParam: number, modDayParam: number, modHourParam: number, modMinuteParam: number, modSecondParam: number): string;
			/** Forces a check for new fonts in the various Fonts folders. */
			public updateFonts(): void;
			/** Waits for all the background tasks to finish. */
			public waitForAllTasks(): any;
		}
	}
}