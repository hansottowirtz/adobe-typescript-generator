/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Document extends Adobe.Csawlib.CSHostObject {
			/**
			 * Dispatched after the Document becomes active. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_ACTIVATE: string;
			/**
			 * Dispatched after a Document is exported. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly AFTER_EXPORT: string;
			/**
			 * Dispatched after importing a file into a Document. This 
			 * event bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_IMPORT: string;
			/**
			 * Dispatched after one or more links in the Document have been 
			 * added, deleted, or modified. This event bubbles. This event 
			 * is not cancelable.
			 */
			public static readonly AFTER_LINKS_CHANGED: string;
			/**
			 * Dispatched after a Document is created. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly AFTER_NEW: string;
			/**
			 * Dispatched after a Document is opened. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly AFTER_OPEN: string;
			/**
			 * Dispatched after a Document is printed. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly AFTER_PRINT: string;
			/**
			 * Dispatched after a Document is reverted. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly AFTER_REVERT: string;
			/**
			 * Dispatched after a Document is saved. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly AFTER_SAVE: string;
			/**
			 * Dispatched after a copy of a Document is saved. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_SAVE_A_COPY: string;
			/**
			 * Dispatched after a Document is saved under a new name. This 
			 * event bubbles. This event is not cancelable.
			 */
			public static readonly AFTER_SAVE_AS: string;
			/** All Cell styles */
			public readonly allCellStyles: any;
			/** Lists all character styles (regardless of their group). */
			public readonly allCharacterStyles: any;
			/** Lists all graphics contained by the Document. */
			public readonly allGraphics: any;
			/** Lists all page items contained by the Document. */
			public readonly allPageItems: any;
			/** Lists all paragraph styles (regardless of their group). */
			public readonly allParagraphStyles: any;
			/** All Table styles */
			public readonly allTableStyles: any;
			/** Anchored object default settings. */
			public readonly anchoredObjectDefaults: Adobe.Incopy.AnchoredObjectDefault;
			/** Anchored object settings. */
			public readonly anchoredObjectSettings: Adobe.Incopy.AnchoredObjectSetting;
			/** A collection of assignments. */
			public readonly assignments: Adobe.Incopy.Assignments;
			/** The XML element associated with the Document. */
			public readonly associatedXMLElement: Adobe.Incopy.XMLItem;
			/** Baseline frame grid option settings. */
			public readonly baselineFrameGridOptions: Adobe.Incopy.BaselineFrameGridOption;
			/**
			 * Dispatched before a Document is closed. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly BEFORE_CLOSE: string;
			/**
			 * Dispatched before the Document becomes inactive. This event 
			 * bubbles. This event is not cancelable.
			 */
			public static readonly BEFORE_DEACTIVATE: string;
			/**
			 * Dispatched before a Document is exported. This event 
			 * bubbles. This event is cancelable.
			 */
			public static readonly BEFORE_EXPORT: string;
			/**
			 * Dispatched before importing a file into a Document. This 
			 * event bubbles. This event is cancelable.
			 */
			public static readonly BEFORE_IMPORT: string;
			/**
			 * Dispatched before a Document is printed. This event bubbles. 
			 * This event is cancelable.
			 */
			public static readonly BEFORE_PRINT: string;
			/**
			 * Dispatched before a Document is reverted. This event 
			 * bubbles. This event is cancelable.
			 */
			public static readonly BEFORE_REVERT: string;
			/**
			 * Dispatched before a Document is saved. This event bubbles. 
			 * This event is cancelable.
			 */
			public static readonly BEFORE_SAVE: string;
			/**
			 * Dispatched before a copy of a Document is saved. This event 
			 * bubbles. This event is cancelable.
			 */
			public static readonly BEFORE_SAVE_A_COPY: string;
			/**
			 * Dispatched before a Document is saved under a new name. This 
			 * event bubbles. This event is cancelable.
			 */
			public static readonly BEFORE_SAVE_AS: string;
			/** A collection of buttons. */
			public readonly buttons: Adobe.Incopy.Buttons;
			/** A collection of cell style groups. */
			public readonly cellStyleGroups: Adobe.Incopy.CellStyleGroups;
			/** A collection of cell styles. */
			public readonly cellStyles: Adobe.Incopy.CellStyles;
			/** A collection of character style groups. */
			public readonly characterStyleGroups: Adobe.Incopy.CharacterStyleGroups;
			/** A collection of character styles. */
			public readonly characterStyles: Adobe.Incopy.CharacterStyles;
			/** A collection of colors. */
			public readonly colors: Adobe.Incopy.Colors;
			/** Conditional text preferences. */
			public readonly conditionalTextPreferences: Adobe.Incopy.ConditionalTextPreference;
			/** A collection of conditions for conditional text. */
			public readonly conditions: Adobe.Incopy.Conditions;
			/** A collection of condition sets for conditional text. */
			public readonly conditionSets: Adobe.Incopy.ConditionSets;
			/** If true, the Document was converted. */
			public readonly converted: boolean;
			/** A collection of cross reference formats. */
			public readonly crossReferenceFormats: Adobe.Incopy.CrossReferenceFormats;
			/** A collection of cross reference text sources. */
			public readonly crossReferenceSources: Adobe.Incopy.CrossReferenceSources;
			/** User dictionary preference settings. */
			public readonly dictionaryPreferences: Adobe.Incopy.DictionaryPreference;
			/** Document preference settings. */
			public readonly documentPreferences: Adobe.Incopy.DocumentPreference;
			/** A collection of DTDs. */
			public readonly dtds: Adobe.Incopy.DTDs;
			/** The Version Cue editing state of the file. */
			public readonly editingState: Adobe.Incopy.EditingState;
			/** EPSTexts */
			public readonly epstexts: Adobe.Incopy.EPSTexts;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** The default export for web preferences. */
			public readonly exportForWebPreferences: Adobe.Incopy.ExportForWebPreference;
			/**
			 * Dispatched after a Document export is canceled or fails. 
			 * This event bubbles. This event is not cancelable.
			 */
			public static readonly FAILED_EXPORT: string;
			/** The full path to the file. */
			public readonly filePath: File;
			/** A collection of fonts. */
			public readonly fonts: Adobe.Incopy.Fonts;
			/** Footnote option settings. */
			public readonly footnoteOptions: Adobe.Incopy.FootnoteOption;
			/** A collection of form fields. */
			public readonly formFields: Adobe.Incopy.FormFields;
			/**
			 * The frame fitting option to apply to placed or pasted 
			 * content. Can be applied to a frame, object style, or 
			 * document or to the application.
			 */
			public readonly frameFittingOptions: Adobe.Incopy.FrameFittingOption;
			/**
			 * The full path to the Document, including the name of the 
			 * Document.
			 */
			public readonly fullName: File;
			/** Galley preference settings. */
			public readonly galleyPreferences: Adobe.Incopy.GalleyPreference;
			/** A collection of gradients. */
			public readonly gradients: Adobe.Incopy.Gradients;
			/** A collection of graphic lines. */
			public readonly graphicLines: Adobe.Incopy.GraphicLines;
			/** Grid preference settings. */
			public readonly gridPreferences: Adobe.Incopy.GridPreference;
			/** A collection of groups. */
			public readonly groups: Adobe.Incopy.Groups;
			/** Guide preference settings. */
			public readonly guidePreferences: Adobe.Incopy.GuidePreference;
			/** A collection of guides. */
			public readonly guides: Adobe.Incopy.Guides;
			/** A collection of hyperlink external page destinations. */
			public readonly hyperlinkExternalPageDestinations: Adobe.Incopy.HyperlinkExternalPageDestinations;
			/** A collection of hyperlink page item sources. */
			public readonly hyperlinkPageItemSources: Adobe.Incopy.HyperlinkPageItemSources;
			/** A collection of hyperlinks. */
			public readonly hyperlinks: Adobe.Incopy.Hyperlinks;
			/** A collection of hyperlink text destinations. */
			public readonly hyperlinkTextDestinations: Adobe.Incopy.HyperlinkTextDestinations;
			/** A collection of hyperlink text sources. */
			public readonly hyperlinkTextSources: Adobe.Incopy.HyperlinkTextSources;
			/** A collection of hyperlink URL destinations. */
			public readonly hyperlinkURLDestinations: Adobe.Incopy.HyperlinkURLDestinations;
			/** A collection of hyphenation exceptions lists. */
			public readonly hyphenationExceptions: Adobe.Incopy.HyphenationExceptions;
			/** The unique ID of the Document. */
			public readonly id: number;
			/** The index of the Document within its containing object. */
			public readonly index: number;
			/** A collection of indexing sort options. */
			public readonly indexingSortOptions: Adobe.Incopy.IndexingSortOptions;
			/** A collection of inks. */
			public readonly inks: Adobe.Incopy.Inks;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A collection of kinsoku tables. */
			public readonly kinsokuTables: Adobe.Incopy.KinsokuTables;
			/** A property that can be set to any string. */
			public label: string;
			/** A collection of languages. */
			public readonly languages: Adobe.Incopy.Languages;
			/** A collection of layers. */
			public readonly layers: Adobe.Incopy.Layers;
			/** A collection of links. */
			public readonly links: Adobe.Incopy.Links;
			/** Margin preference settings. */
			public readonly marginPreferences: Adobe.Incopy.MarginPreference;
			/** A collection of master spreads. */
			public readonly masterSpreads: Adobe.Incopy.MasterSpreads;
			/** Metadata preference settings. */
			public readonly metadataPreferences: Adobe.Incopy.MetadataPreference;
			/** A collection of mixed ink groups. */
			public readonly mixedInkGroups: Adobe.Incopy.MixedInkGroups;
			/** A collection of mixed inks. */
			public readonly mixedInks: Adobe.Incopy.MixedInks;
			/**
			 * If true, the Document has been modified since it was last 
			 * saved.
			 */
			public readonly modified: boolean;
			/** A collection of mojikumi tables. */
			public readonly mojikumiTables: Adobe.Incopy.MojikumiTables;
			/** Mojikumi user interface preference settings. */
			public readonly mojikumiUIPreferences: Adobe.Incopy.MojikumiUiPreference;
			/** A collection of multi-state objects. */
			public readonly multiStateObjects: Adobe.Incopy.MultiStateObjects;
			/** The name of the Document. */
			public readonly name: string;
			/** A collection of numbered lists. */
			public readonly numberingLists: Adobe.Incopy.NumberingLists;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Incopy.Ovals;
			/** The default page item formatting for the Document. */
			public readonly pageItemDefaults: Adobe.Incopy.PageItemDefault;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 */
			public readonly pageItems: Adobe.Incopy.PageItems;
			/** A collection of pages. */
			public readonly pages: Adobe.Incopy.Pages;
			/** A collection of paragraph destinations. */
			public readonly paragraphDestinations: Adobe.Incopy.ParagraphDestinations;
			/** A collection of paragraph style groups. */
			public readonly paragraphStyleGroups: Adobe.Incopy.ParagraphStyleGroups;
			/** A collection of paragraph styles. */
			public readonly paragraphStyles: Adobe.Incopy.ParagraphStyles;
			/** The parent of the Document (a Application). */
			public readonly parent: Adobe.Incopy.Application;
			/** Pasteboard preference settings. */
			public readonly pasteboardPreferences: Adobe.Incopy.PasteboardPreference;
			/** The place gun. */
			public readonly placeGuns: Adobe.Incopy.PlaceGun;
			/** A collection of polygons. */
			public readonly polygons: Adobe.Incopy.Polygons;
			/** A collection of preferences objects. */
			public readonly preferences: Adobe.Incopy.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** If true, the Document is read-only. */
			public readonly readOnly: boolean;
			/** If true, the Document was recovered. */
			public readonly recovered: boolean;
			/** A collection of rectangles. */
			public readonly rectangles: Adobe.Incopy.Rectangles;
			/** The names of the items in the redo stack. */
			public readonly redoHistory: any;
			/** The name of the action on the top of the redo stack. */
			public readonly redoName: string;
			/** If true, the Document has been saved since it was created. */
			public readonly saved: boolean;
			/** A collection of sections. */
			public readonly sections: Adobe.Incopy.Sections;
			/**
			 * The selected object(s). Can also accept: Object or 
			 * NothingEnum enumerator.
			 */
			public selection: any;
			/** The spline items collection. */
			public readonly splineItems: Adobe.Incopy.SplineItems;
			/** A collection of spreads. */
			public readonly spreads: Adobe.Incopy.Spreads;
			/** A collection of stories. */
			public readonly stories: Adobe.Incopy.Stories;
			/** Story preference settings. */
			public readonly storyPreferences: Adobe.Incopy.StoryPreference;
			/** A collection of stroke styles. */
			public readonly strokeStyles: Adobe.Incopy.StrokeStyles;
			/** A collection of swatches. */
			public readonly swatches: Adobe.Incopy.Swatches;
			/** A collection of table style groups. */
			public readonly tableStyleGroups: Adobe.Incopy.TableStyleGroups;
			/** A collection of table styles. */
			public readonly tableStyles: Adobe.Incopy.TableStyles;
			/** Text default settings. */
			public readonly textDefaults: Adobe.Incopy.TextDefault;
			/** Text frame preference settings. */
			public readonly textFramePreferences: Adobe.Incopy.TextFramePreference;
			/** A collection of text frames. */
			public readonly textFrames: Adobe.Incopy.TextFrames;
			/** Text preference settings. */
			public readonly textPreferences: Adobe.Incopy.TextPreference;
			/** A collection of text variables. */
			public readonly textVariables: Adobe.Incopy.TextVariables;
			/**
			 * The text wrap preference properties that define the default 
			 * formatting for wrapping text around objects.
			 */
			public readonly textWrapPreferences: Adobe.Incopy.TextWrapPreference;
			/** A collection of tints. */
			public readonly tints: Adobe.Incopy.Tints;
			/** A collection of trap presets. */
			public readonly trapPresets: Adobe.Incopy.TrapPresets;
			/** The names of the items in the undo stack. */
			public readonly undoHistory: any;
			/** The name of the action on the top of the undo stack. */
			public readonly undoName: string;
			/** The swatches that are not being used. */
			public readonly unusedSwatches: any;
			/** A collection of XML validation errors. */
			public readonly validationErrors: Adobe.Incopy.ValidationErrors;
			/** The Version Cue version state of the file. */
			public readonly versionState: Adobe.Incopy.VersionState;
			/** View preference settings. */
			public readonly viewPreferences: Adobe.Incopy.ViewPreference;
			/** If true, the Document is visible. */
			public readonly visible: boolean;
			/** A collection of windows. */
			public readonly windows: Adobe.Incopy.Windows;
			/** A collection of XML comments. */
			public readonly xmlComments: Adobe.Incopy.XMLComments;
			/** A collection of XML elements. */
			public readonly xmlElements: Adobe.Incopy.XMLElements;
			/** A collection of XML export maps. */
			public readonly xmlExportMaps: Adobe.Incopy.XMLExportMaps;
			/** XML export preference settings. */
			public readonly xmlExportPreferences: Adobe.Incopy.XMLExportPreference;
			/** A collection of XML import maps. */
			public readonly xmlImportMaps: Adobe.Incopy.XMLImportMaps;
			/** XML import preference settings. */
			public readonly xmlImportPreferences: Adobe.Incopy.XMLImportPreference;
			/** A collection of XML instructions. */
			public readonly xmlInstructions: Adobe.Incopy.XMLInstructions;
			/** A collection of XML items. */
			public readonly xmlItems: Adobe.Incopy.XMLItems;
			/** The XML preference settings. */
			public readonly xmlPreferences: Adobe.Incopy.XMLPreference;
			/** A collection of xml stories. */
			public readonly xmlStories: Adobe.Incopy.XmlStories;
			/** A collection of XML tags. */
			public readonly xmlTags: Adobe.Incopy.XMLTags;
			/** XML view preference settings. */
			public readonly xmlViewPreferences: Adobe.Incopy.XMLViewPreference;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerDocument(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/** Change comoser to optyca */
			public changeComposer(): void;
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
			 * Check in to Version Cue.
			 * @param {string} versionCommentsParam - The comment for this 
			 * version (Optional)
			 * @param {boolean} forceSaveParam - Forcibly save a version 
			 * (Optional)
			 */
			public checkIn(versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Close the Document
			 * @param {SaveOptions} savingParam - Whether to save changes 
			 * before closing the Document (Optional)
			 * @param {File} savingInParam - The file in which to save the 
			 * Document (Optional)
			 * @param {string} versionCommentsParam - The comment for this 
			 * version (Optional)
			 * @param {boolean} forceSaveParam - Forcibly save a version 
			 * (Optional)
			 */
			public close(savingParam: SaveOptions, savingInParam: File, versionCommentsParam: string, forceSaveParam: boolean): void;
			/** Deletes unused XML markup tags. */
			public deleteUnusedTags(): void;
			/**
			 * Exports the object(s) to a file.
			 * @param {any} formatParam - The export format, specified as 
			 * an enumeration value or as an extension that appears in the 
			 * Save as type or Format menu in the Export dialog. Can 
			 * accept: ExportFormat enumerator or String.
			 * @param {File} toParam - The path to the export file.
			 * @param {boolean} showingOptionsParam - If true, displays the 
			 * export options dialog. (Optional)
			 * @param {string} versionCommentsParam - The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam - If true, forcibly saves a 
			 * version. (Optional)
			 */
			public exportFile(formatParam: any, toParam: File, showingOptionsParam: boolean, versionCommentsParam: string, forceSaveParam: boolean): void;
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
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Imports a process color swatch from a preloaded Adobe color 
			 * book.
			 * @param {string} nameParam - The process color to load.
			 */
			public importAdobeSwatchbookProcessColor(nameParam: string): Adobe.Incopy.Color;
			/**
			 * Imports a spot color swatch from an Adobe color book.
			 * @param {string} nameParam - The spot color to load.
			 */
			public importAdobeSwatchbookSpotColor(nameParam: string): Adobe.Incopy.Color;
			/**
			 * Imports a DTD to use for validation.
			 * @param {File} fromParam - The path to the DTD file.
			 */
			public importDtd(fromParam: File): void;
			/**
			 * Imports the cross reference formats from specified file.
			 * @param {File} fromParam - The file whose formats to import.
			 */
			public importFormats(fromParam: File): void;
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
			 * Imports the specified XML file into an InDesign document.
			 * @param {File} fromParam - The XML file.
			 */
			public importXML(fromParam: File): void;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam - The key.
			 * @param {string} valueParam - The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Load conditions from the specified file.
			 * @param {File} fromParam - The path to the file that contains 
			 * the conditions.
			 * @param {boolean} loadConditionSetsParam - If true, load the 
			 * condition sets as well. (Optional)
			 */
			public loadConditions(fromParam: File, loadConditionSetsParam: boolean): void;
			/**
			 * Load masterpages from an InDesign file.
			 * @param {File} fromParam - The InDesign file to load the 
			 * masters from.
			 * @param {GlobalClashResolutionStrategyForMasterPage} 
			 * globalStrategyForMasterPageParam - the global clash 
			 * resolution strategy for load master page (Optional)
			 */
			public loadMasters(fromParam: File, globalStrategyForMasterPageParam: GlobalClashResolutionStrategyForMasterPage): void;
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
			/** Auto tag the document based on the style to tag mappings */
			public mapStylesToXMLTags(): void;
			/** Auto style the document based on the tag to style mappings */
			public mapXMLTagsToStyles(): void;
			/**
			 * Place the Buzzword document.
			 * @param {string} fileurlsParam - Url strings to the buzzword 
			 * files seperated by space.
			 * @param {boolean} showingOptionsParam - Whether to display 
			 * the import options dialog. (Optional)
			 * @param {boolean} createLinkParam - Whether to create a link 
			 * for the placed file. (Optional)
			 * @param {boolean} replaceSelectedParam - Whether to replace 
			 * the selected item. (Optional)
			 * @param {boolean} applyGridParam - Whether to apply grid 
			 * format for placed story. (Optional)
			 */
			public placeBuzzword(fileurlsParam: string, showingOptionsParam: boolean, createLinkParam: boolean, replaceSelectedParam: boolean, applyGridParam: boolean): void;
			/**
			 * Prints the Document(s).
			 * @param {boolean} printDialogParam - Whether to invoke the 
			 * print dialog (Optional)
			 */
			public print(printDialogParam: boolean): void;
			/** Recomposes the text in the Document. */
			public recompose(): void;
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
			public removeEventListenerDocument(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Reverts the document to its state at the last save 
			 * operation.
			 */
			public revert(): boolean;
			/**
			 * Reverts to the version of the document in Version Cue.
			 * @param {boolean} forceRevertParam - Forcibly reverts to the 
			 * project version. (Optional)
			 */
			public revertToProject(forceRevertParam: boolean): void;
			/**
			 * Saves the document.
			 * @param {File} toParam - The file path. Note: Required only 
			 * if the document has not been previously saved. If the 
			 * document has previously been saved, specifying a path saves 
			 * a copy and closes the original document. (Optional)
			 * @param {SaveFileType} fileTypeParam - The file type. 
			 * (Optional)
			 */
			public save(toParam: File, fileTypeParam: SaveFileType): Adobe.Incopy.Document;
			/**
			 * Save a copy of the document
			 * @param {File} toParam - The path for the copy. Note: Leaves 
			 * the original document open and does not open the copy. 
			 * (Optional)
			 * @param {SaveFileType} fileTypeParam - The file type. 
			 * (Optional)
			 */
			public saveACopy(toParam: File, fileTypeParam: SaveFileType): void;
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
			 * selection status of the Document in relation to previously 
			 * selected objects. (Optional)
			 */
			public select(selectableItemsParam: any, existingSelectionParam: SelectionOptions): void;
			/**
			 * Synchronizes the file with the Version Cue project.
			 * @param {SyncConflictResolution} syncConflictResolutionParam 
			 * - The conflict resolution method to use during 
			 * synchronization. (Optional)
			 * @param {string} versionCommentsParam - The comments that 
			 * describe the version. (Optional)
			 */
			public synchronizeWithVersionCue(syncConflictResolutionParam: SyncConflictResolution, versionCommentsParam: string): Adobe.Incopy.VersionCueSyncStatus;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/** Undoes the last action. */
			public undo(): void;
			/**
			 * Updates cross references' text source content in the 
			 * document.
			 */
			public updateCrossReferences(): void;
		}
	}
}